export function generateRandomCVU() {
  // Generar el código del banco (CCCC)
  const bancoCodes = ["00000", "00001", "00002" /* Agrega aquí más códigos de bancos */];
  const randomBancoCode = bancoCodes[Math.floor(Math.random() * bancoCodes.length)];

  // Generar el número de cuenta (NNNNNNNNNNNNNNNNNNN)
  let cuentaNumber = "";
  for (let i = 0; i < 16; i++) {
    cuentaNumber += Math.floor(Math.random() * 10);
  }

  // Calcular el dígito verificador (D) utilizando el módulo 10
  let suma = 0;
  const multiplicadores = [7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 9];
  for (let i = 0; i < 16; i++) {
    suma += parseInt(cuentaNumber[i]) * multiplicadores[i];
  }
  const verificador = (10 - (suma % 10)) % 10;

  // Combinar las partes para formar el CBU completo
  const cbu = randomBancoCode + cuentaNumber + verificador;
  return cbu;
}
