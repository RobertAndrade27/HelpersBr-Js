import { formatDateToIso }  from "../helpers/index"


test("A data deverá ter o padrao DD/MM/YYYY", () => {
  const data = "27/10/1995";
  const resultado = formatDateToIso(data);
  expect(resultado).toBe("1995-10-27");
});
