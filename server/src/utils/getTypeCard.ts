export function getCardType(cardNumber: string) {
  // Eliminar espacios en blanco y guiones del número de tarjeta
  const cleanedNumber = cardNumber.replace(/\s+|-/g, "");

  // Comprobar si el número de tarjeta tiene una longitud válida
  if (cleanedNumber.length < 6 || cleanedNumber.length > 19) {
    throw new Error("Tarjeta inválida");
  }

  // Obtener los primeros dígitos de la tarjeta
  const firstSixDigits = parseInt(cleanedNumber.slice(0, 6));

  // Verificar los dígitos de identificación de la red (IIN) para determinar el tipo de tarjeta
  if (firstSixDigits >= 400000 && firstSixDigits <= 499999) {
    return "VISA";
  } else if (
    (firstSixDigits >= 510000 && firstSixDigits <= 559999) ||
    (firstSixDigits >= 222100 && firstSixDigits <= 272099)
  ) {
    return "MASTERCARD";
  } else if (firstSixDigits >= 340000 && firstSixDigits <= 349999) {
    return "AMERICAN EXPRESS";
  } else if (firstSixDigits >= 300000 && firstSixDigits <= 305999) {
    return "DINERS CLUB";
  } else if (firstSixDigits >= 360000 && firstSixDigits <= 369999) {
    return "DINERS CLUB";
  } else if (firstSixDigits >= 380000 && firstSixDigits <= 399999) {
    return "DINERS CLUB";
  } else {
    throw new Error("Tipo de tarjeta desconocido");
  }
}
