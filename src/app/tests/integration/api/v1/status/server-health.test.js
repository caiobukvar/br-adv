test("GET /api/v1/status returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // espera receber uma data
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  // caso não venha uma data, dá erro
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
});
