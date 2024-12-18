### Helpersbr-js

**Helpersbr-js** é uma biblioteca simples e prática desenvolvida para facilitar o desenvolvimento em JavaScript. Ela fornece diversos métodos de formatação e manipulação de dados, otimizando tarefas comuns do dia a dia de programadores. 

Com **Helpersbr-js**, você pode formatar textos, números, datas e muito mais de forma rápida e eficiente.

---

### Instalação

Instale a biblioteca usando npm ou yarn:

```bash
npm install helpersbr-js
```

ou 

```bash
yarn add helpersbr-js
```

---

### Como usar

Importe o helper desejado e utilize-o no seu código:

```javascript
const { helperName } = require('helpersbr-js');

// Exemplo de uso
const resultado = helperName(parametros);
console.log(resultado);
```

---

### Helpers disponíveis

Abaixo, você encontrará a documentação completa de cada helper, incluindo o que ele faz, quais parâmetros ele espera receber, o tipo de dados necessário e exemplos práticos de uso. 

Aqui está o helper documentado de forma resumida em uma tabela:

---
Ótimo, aqui está o formato inicial da tabela para documentar os helpers. Vou começar com o `formatZipCode` e incrementarei conforme você enviar os próximos:

---

Aqui está o helper `toCurrency` adicionado à tabela:

---

### Helpers disponíveis

| Nome                    | Descrição                                          | Tipo de Entrada | Exemplo de Uso                                                                                   |
|-------------------------|--------------------------------------------------|-----------------|--------------------------------------------------------------------------------------------------|
| `formatZipCode`          | Formata um CEP no padrão `XX.XXX-XXX`.            | `string`        | `formatZipCode("12345678") // "12.345-678"`                                                      |
| `getAddressViaCep`       | Consulta informações de endereço usando a API ViaCEP com um CEP válido de 8 dígitos. Retorna uma `Promise`. | `string`        | `await getAddressViaCep("12345678") // { erro: false, logradouro: "...", bairro: "...", ... }` |
| `formatDateToIso`        | Converte uma data no formato `DD/MM/YYYY` para o formato ISO `YYYY-MM-DD`. | `string`        | `formatDateToIso("25/12/2024") // "2024-12-25"`                                                 |
| `formatCpfOrCnpj`        | Formata um CPF no padrão `000.000.000-00` ou um CNPJ no padrão `00.000.000/0000-00`. | `string`        | `formatCpfOrCnpj("12345678909") // "123.456.789-09"`<br>`formatCpfOrCnpj("12345678000195") // "12.345.678/0001-95"` |
| `validationCpf`          | Valida se um CPF é válido, verificando os dígitos verificadores. | `string`        | `validationCpf("12345678909") // true`<br>`validationCpf("12345678900") // false`               |
| `firstAndLastName`       | Retorna o primeiro e o último nome de uma string de nome completo. Formata ambos os nomes com a inicial maiúscula. | `string`        | `firstAndLastName("robert andrade de souza") // "Robert Souza"`                                 |
| `formatFirstName`        | Formata o primeiro nome, colocando a primeira letra em maiúscula e o restante em minúscula. Se o nome não for fornecido, retorna "Nome não disponível". | `string`        | `formatFirstName("robert andrade de souza") // "Robert"`                                        |
| `formatFullName`         | Formata o nome completo com a primeira letra de cada parte em maiúscula, exceto para as palavras "da" e "de". Se o nome não for fornecido, retorna "Nome não disponível". | `string`        | `formatFullName("robert andrade de souza") // "Robert Andrade de Souza"`                        |
| `customQueryStringify`   | Converte um objeto em uma string de consulta (query string) personalizada. | `object`        | `customQueryStringify({ name: "robert", interests: ["coding", "music"] }) // "name=robert&interests[0]=coding&interests[1]=music"` |
| `formatPhone`            | Formata um número de telefone, permitindo incluir o dígito 9 ou não, de acordo com o padrão brasileiro. | `string`, `boolean` | `formatPhone("1234567890") // "(12) 3456-7890"`<br>`formatPhone("1234567890", true) // "(12) 9 3456-7890"` |
| `removeSpecialChars`     | Remove caracteres especiais de uma string, com a opção de ignorar certos caracteres. | `string`, `object` | `removeSpecialChars("A1!@#$%¨&*()*/+.B2 C4", { ignore: "@ *" }) // "A1/B2 C4"`<br>`removeSpecialChars("A1!@#$%¨&*()*/+.B2 C4") // "A1B2C4"` |
| `toCurrency`             | Converte um número para o formato de moeda brasileira (`R$`), removendo caracteres especiais. | `number`        | `toCurrency(1234.56) // "R$ 1.234,56"`<br>`toCurrency("1234.56") // false`                      |


--- 
## Contribuidores

Agradecemos a todos os contribuidores que ajudaram no desenvolvimento:

[![Contributors](https://contrib.rocks/image?repo=RobertAndrade27/HelpersBr-Js)](https://github.com/RobertAndrade27/HelpersBr-Js/graphs/contributors)

