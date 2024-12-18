import { toCurrency } from "../helpers/index";

describe("Função de converter numerico em monetário", () => {
  it("O valor deverá ser numérico inteiro ou decimal", () => {
    const valor = 150.15;
    const resultado = toCurrency(valor);
    expect(resultado).toBe("R$150,15");
  });

  it("Caso seja string retornará falso", () => {
    const valor = "150.00";
    const resultado = toCurrency(valor); 
    expect(resultado).toBe(false);    
  });
});
