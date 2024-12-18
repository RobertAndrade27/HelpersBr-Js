
import { removeSpecialChars }  from "../helpers/index"



describe("Função remover caracteres especiais", () => {
  it("Caso seja passado apenas o texto como parametro ele não removerá os espaços", () => {
    const texto = "A1!@#$%¨&*()*/+.B2 C4";
    const resultado = removeSpecialChars(texto);
    expect(resultado).toBe("A1B2C4");    
  });

  it("Caso seja passado true como parametro ele removerá os espaços", () => {
    const texto = "A1!@#$%¨&*()*/+.B2 C4";
    const resultado = removeSpecialChars(texto, {ignore: " /"}); 
    expect(resultado).toBe("A1/B2 C4");    
  });


});
