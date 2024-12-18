function formatPhone(phone, includeNine = false) {
  if (phone === null || phone === "") {
    return "";
  }

  const cleanPhone = phone?.replace(/\D/g, "");

  if (cleanPhone?.length < 10 || cleanPhone?.length > 11) {
    return phone;
  }

  let formattedPhone;

  if (includeNine) {
    if (cleanPhone.length === 10) {
      const ddd = cleanPhone.substr(0, 2);
      const number = cleanPhone.substr(2);
      formattedPhone = `(${ddd}) 9 ${number.substr(0, 4)}-${number.substr(4)}`;
    } else {
      formattedPhone = `(${cleanPhone.substr(0, 2)}) ${cleanPhone.substr(2, 1)} ${cleanPhone.substr(3, 4)}-${cleanPhone.substr(7)}`;
    }
  } else {
    if (cleanPhone.length === 11) {
      formattedPhone = `(${cleanPhone.substr(0, 2)}) ${cleanPhone.substr(2, 1)} ${cleanPhone.substr(3, 4)}-${cleanPhone.substr(7)}`;
    } else {
      formattedPhone = `(${cleanPhone.substr(0, 2)}) ${cleanPhone.substr(2, 4)}-${cleanPhone.substr(6)}`;
    }
  }

  return formattedPhone;
}

export default formatPhone;
