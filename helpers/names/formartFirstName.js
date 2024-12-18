function formatFirstName(name) {
    if (!name) {
      return "Nome não disponível";
    }
    
    const firstName = name.split(' ')[0]; 
    const formattedName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(); 
  
    return formattedName;
  }
  
  export default formatFirstName;
  