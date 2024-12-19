declare module "helpersbr-js" {
  // Funções para formatação de telefones
  export function formatPhone(phone: string): string;

  // Funções para manipulação de nomes
  export function firstAndLastName(name: string): string;
  export function formatFirstName(name: string): string;
  export function formatFullName(name: string): string;

  // Funções para endereços
  export function formatZipCode(zipCode: string): string;
  export function getAddressViaCep(value: string): Promise<
    | { erro: true }
    | {
        erro: false;
        cep: string;
        logradouro: string;
        complemento: string;
        unidade: string;
        bairro: string;
        localidade: string;
        uf: string;
        estado: string;
        regiao: string;
        ibge: string;
        gia: string;
        ddd: string;
        siafi: string;
      }
  >;

  // Funções para datas
  export function formatDateToIso(date: string | Date): string;

  // Funções para documentos
  export function formatCpfOrCnpj(document: string): string;
  export function validationCpf(cpf: string): boolean;

  // Funções de utilidade
  export function customQueryStringify(obj: Record<string, any>): string | false;

  export function removeSpecialChars(
    chars: string,
    options?: { ignore?: string }
  ): string;
  export function toCurrency(value: number): string;
}
