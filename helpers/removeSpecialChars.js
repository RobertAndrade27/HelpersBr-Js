function removeSpecialChars(chars, options = {}) {
  const ignore = options.ignore || "";

  const escapedIgnore = ignore.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  const regex = new RegExp(`[^a-zA-Z0-9${escapedIgnore}]`, "g");

  return chars && chars.replace(regex, "");
}

export default removeSpecialChars;

// Exemplos de uso
// const texto = "A1!@#$%¨&*()*/+.B2 C4";
// console.log(removeSpecialChars(texto, { ignore: "@ *" })); // Output: "A1/B2 C4"
// console.log(removeSpecialChars(texto, { ignore: "./" })); // Output: "A1.B2 C4"
// console.log(removeSpecialChars(texto)); // Output: "A1B2C4"
