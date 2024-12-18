

import { firstAndLastName } from "../helpers/index"

test("A função deverá retornar somente o primeiro e o ultimo nome", () => {
  const nome = "ROBERT SOUZA";
  const resultado = firstAndLastName(nome);
  expect(resultado).toBe("Robert Souza");
});
