class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' );
  }
  
  static titleize(string) {
    let phrase = string.split(" ");
    let exemptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    
    phrase.map((s) => {
    if (exemptWords.includes(s)) {
      newArray.push(s)
    }
    else
      s.charAt(0).toUpperCase() + s.substring(1).join(' ');
      newArray.push(s);
  })
}