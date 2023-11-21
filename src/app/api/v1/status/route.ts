import { NextRequest, NextResponse } from "next/server";
import database from "infra/database.js";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await database.query("SELECT 1 + 1 as sum;");

  try {
    console.log(
      `Database ${process.env.POSTGRES_DB} está conectado na porta ${process.env.POSTGRES_PORT}`,
    );

    console.log("Resposta da query:", result.rows);

    return NextResponse.json(
      { valor: result },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("Database não está conectado.");
    return NextResponse.json(
      { error: "ERROR" },
      {
        status: 400,
      },
    );
  }
}
