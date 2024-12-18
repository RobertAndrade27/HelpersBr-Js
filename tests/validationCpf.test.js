import { validationCpf } from "../helpers/index";

describe("Função validar o CPF", () => {
  it("deve retornar false para cpf inválido removendo o pontos e traços", () => {
    const cpfInvalido = "123.123-123.12";
    const resultado = validationCpf(cpfInvalido);
    expect(resultado).toBe(false);
  });

  it("deve retornar false para cpf inválido removendo o pontos e traços", () => {
    const cpfValido = "183.186.44018"; // CPF GERADO PELO 4DEVS EM 2024-12-18 10:43
    const resultado = validationCpf(cpfValido);
    expect(resultado).toBe(true);
  });
});
