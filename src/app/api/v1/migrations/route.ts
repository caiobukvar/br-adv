import { NextRequest, NextResponse } from "next/server";
import database from "infra/database.js";

// ! acessar /api/v1/migrations para criar a tabela (provisório)
export async function GET(req: NextRequest, res: NextResponse) {
  const createBlogTableQuery = `
  CREATE TABLE IF NOT EXISTS blog (
    id SERIAL PRIMARY KEY,
    post_content JSON,
    comments JSON,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

  try {
    await database.query(createBlogTableQuery);

    console.log("Blog table created successfully");

    return NextResponse.json(
      {
        response: "table created",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error creating tables:", error);
    return NextResponse.json(
      { error: "ERROR" },
      {
        status: 400,
      },
    );
  }
}
