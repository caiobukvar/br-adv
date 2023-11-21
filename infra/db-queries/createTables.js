const {query} = require('../database')

async function createTables() {
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
    await query(createBlogTableQuery);
    await query(createPostsTableQuery);
    console.log("Tables created successfully");
  } catch (error) {
    console.error("Error creating tables:", error);
  }
}

createTables();

module.exports = createTables
