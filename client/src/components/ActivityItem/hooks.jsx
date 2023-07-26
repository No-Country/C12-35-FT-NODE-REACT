const useFormatInfo = () => {
  const formatterSign = (value, type) => {
    value = new Intl.NumberFormat().format(value)
    if (type === "transfer") return `-$${value}`
    return `$${value}`
  }

  const formatterDate = (date) => {
    const currentDate = new Date()
    currentDate.setHours(currentDate.getHours() - 3)
    const dateActivity = new Date(date)
    const seconds = Math.floor((currentDate - dateActivity) / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)

    if (seconds < 60) return `hace ${seconds} segundos`
    if (minutes < 60) return `hace ${minutes} minutos`
    if (hours < 24) return `hace ${hours} horas`
    if (days === 1) return `Ayer`
    if (days < 7) return `hace ${days} días`
    if (days < 31)
      return `${dateActivity.getDate()} de ${dateActivity.toLocaleString(
        "es-AR",
        {
          month: "long"
        }
      )}`
    if (days < 365)
      return `${dateActivity.getDate()} de ${dateActivity.toLocaleString(
        "es-AR",
        {
          month: "long"
        }
      )}`
    return `${dateActivity.getDate()} de ${dateActivity.toLocaleString(
      "es-AR",
      {
        month: "long"
      }
    )} de ${dateActivity.getFullYear()}`
  }

  return { formatterSign, formatterDate }
}

export default useFormatInfo
