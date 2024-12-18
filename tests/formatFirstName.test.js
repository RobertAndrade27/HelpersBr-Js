


import { formatFirstName } from "../helpers/index"

test("O nome completo será formatado para o primeiro nome apenas", () => {
  const nome = "robert andrade de souza";
  const resultado = formatFirstName(nome);
  expect(resultado).toBe("Robert");
});
