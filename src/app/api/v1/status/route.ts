import { NextRequest, NextResponse } from "next/server";
import database from "infra/database";

export async function GET(req: NextRequest, res: NextResponse) {
  const updatedAt = new Date().toISOString();

  //? query sem parâmetros SHOW: consulta o postgres e obtém dados do servidor
  // obter versão do postgres utilizada no servidor
  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersionValue = dbVersionResult.rows[0].server_version;

  // obter quantidade máxima de conexões no servidor
  const dbMaxConnectionsResult = await database.query("SHOW max_connections;");
  const dbMaxConnectionsValue = dbMaxConnectionsResult.rows[0].max_connections;

  // obter numero de clientes atuais
  //? podemos obter de pg_stat_activity - com mais detalhes, ou de pg_stat_database
  //? SELECT count(*) -> agrega todas as linhas do resultado em um numero (mas em string)
  //? ::int -> transforma em numero
  const dbOpenConnectionsResult = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = 'db_br_adv';",
  );
  const dbOpenConnectionsValue = dbOpenConnectionsResult.rows[0].count;

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: dbVersionValue,
          // recebe uma string e converte para um número inteiro
          max_connections: parseInt(dbMaxConnectionsValue),
          open_connections: parseInt(dbOpenConnectionsValue),
        },
      },
    },
    {
      status: 200,
    },
  );
}
