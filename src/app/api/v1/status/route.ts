import { NextRequest, NextResponse } from "next/server";
import database from "../../../../../infra/database.js";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await database.query("SELECT 1 + 1 as sum;");

  console.log(result);

  try {
    console.log("Servidor está conectado");
    return NextResponse.json(
      { valor: result },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.log("Servidor não está conectado");
    return NextResponse.json(
      { error: "ERROR" },
      {
        status: 400,
      },
    );
  }
}
