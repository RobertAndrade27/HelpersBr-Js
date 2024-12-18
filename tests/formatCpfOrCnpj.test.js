import { formatCpfOrCnpj } from "../helpers/index";

describe("Função formatCpfOrCnpj", () => {
  it("deve formatar corretamente um CPF válido", () => {
    const cpf = "12312312312";
    const resultado = formatCpfOrCnpj(cpf);
    expect(resultado).toBe("123.123.123-12");
  });

  it("deve formatar corretamente um CNPJ válido", () => {
    const cnpj = "12123123000102";
    const resultado = formatCpfOrCnpj(cnpj);
    expect(resultado).toBe("12.123.123/0001-02");
  });


});
