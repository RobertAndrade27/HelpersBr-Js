function formatFullName(name) {
  if (!name) {
    return "Nome não disponível";
  }
  
  const nameParts = name.toLowerCase().split(' ');
  const formattedName = nameParts.map(part => {
    if (part === 'da' || part === 'de') {
      return part;
    }
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join(' ');

  return formattedName;
}

export default formatFullName
