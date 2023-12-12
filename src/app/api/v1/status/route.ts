import { NextRequest, NextResponse } from "next/server";
import database from "infra/database";

export async function GET(req: NextRequest, res: NextResponse) {
  const updatedAt = new Date().toISOString();

  // query especifica do postgres (SHOW) para pegar dados do servidor
  const dbVersionResult = await database.query("SHOW server_version;");
  const dbVersionValue = dbVersionResult.rows[0].server_version;

  return NextResponse.json(
    {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: dbVersionValue,
        },
      },
    },
    {
      status: 200,
    },
  );
}
