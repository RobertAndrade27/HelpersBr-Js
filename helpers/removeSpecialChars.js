function removeSpecialChars(chars, options = {}) {
  const ignore = options.ignore || "";

  const escapedIgnore = ignore.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");

  const regex = new RegExp(`[^a-zA-Z0-9${escapedIgnore}]`, "g");

  return chars && chars.replace(regex, "");
}

export default removeSpecialChars;
