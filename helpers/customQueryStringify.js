function customQueryStringify(obj) {


  if (typeof(obj) !== typeof({})){
    return false
  }

  const keyValuePairs = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          keyValuePairs.push(`${key}[${index}]=${encodeURIComponent(item)}`);
        });
      } else {
        keyValuePairs.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
  }

  return keyValuePairs.join('&');
}

export default customQueryStringify

