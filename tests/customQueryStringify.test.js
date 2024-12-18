


import { customQueryStringify } from "../helpers/index";

describe("Função para transformar objeto em query string", () => {
  it("Deverá ser um objeto válido", () => {
    const obj = {
      nome: "robert",
      idade: 28
    };
    const resultado = customQueryStringify(obj);
    expect(resultado).toBe("nome=robert&idade=28");
  });

  it("Caso não seja um objeto", () => {
    const nome = "Robert";
    const resultado = customQueryStringify(nome);
    expect(resultado).toBe(false);
  });


});
