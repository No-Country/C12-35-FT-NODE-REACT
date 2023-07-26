const useFormatFund = (showFunds, setShowFunds) => {
  const formatter = (value) => {
    value === false || undefined
      ? (value = "****")
      : (value = new Intl.NumberFormat({
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(value))
    return `$ ${value}`
  }

  const handleShowValue = (value) => {
    if (showFunds) {
      return formatter(value)
    } else {
      return formatter(false)
    }
  }

  const handleShowFunds = () => {
    setShowFunds(!showFunds)
    localStorage.setItem("hfiad", JSON.stringify(!showFunds))
  }

  return { handleShowValue, handleShowFunds }
}

export default useFormatFund
