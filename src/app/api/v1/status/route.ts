import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const teste = 1;

  try {
    return NextResponse.json(
      { valor: teste },
      {
        status: 200,
      },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "ERROR" },
      {
        status: 400,
      },
    );
  }
}
