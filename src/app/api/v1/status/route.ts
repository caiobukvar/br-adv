import { NextRequest, NextResponse } from "next/server";

// * GET SERVER STATUS
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { success: "sucesso" },
    {
      status: 200,
    },
  );
}
