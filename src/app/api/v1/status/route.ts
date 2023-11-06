import { NextRequest, NextResponse } from "next/server";

// ? for testing purpose:
// ? curl http://localhost:3000/api/v1/status -v 

// * GET SERVER STATUS
export async function GET(req: NextRequest) {
  return NextResponse.json(
    { success: "sucesso" },
    {
      status: 200,
    },
  );
}
