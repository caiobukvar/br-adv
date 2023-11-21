import { NextRequest, NextResponse } from "next/server";
import database from "infra/database.js";

export async function GET(req: NextRequest, res: NextResponse) {
  const createBlogTableQuery = `
  CREATE TABLE IF NOT EXISTS blog (
    id SERIAL PRIMARY KEY,
    post_content JSON,
    comments JSON,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

  const createPostsTableQuery = `
  CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    blog_id INT REFERENCES blog(id),
    post_content JSON,
    created_at TIMESTAMPTZ DEFAULT NOW()
  );
`;

  try {
    await database.query(createBlogTableQuery);
    await database.query(createPostsTableQuery);

    console.log("Tables created successfully");

    return NextResponse.json(
      {
        response: "tables created",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}
