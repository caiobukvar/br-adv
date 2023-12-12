test("GET /api/v1/status returns 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  // espera receber uma data
  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  // espera que realmente seja uma data
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  // espera que a versão do database seja igual a instalada inicialmente (caso tenha um  update, mudar a versão aqui)
  expect(responseBody.dependencies.database.version).toEqual("16.0");

  // 100 é o default para um db LOCAL, tem que verificar quando em um banco 'real'
  expect(responseBody.dependencies.database.max_connections).toEqual(100);

  // 1 para mostrar se tem alguma conexão 'vazando'
  expect(responseBody.dependencies.database.open_connections).toEqual(1);
});
