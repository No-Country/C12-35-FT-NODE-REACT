const useFormatFund = (showFunds, setShowFunds) => {
  const formatter = (value) => {
    !value ? (value = "****") : ((value = new Intl.NumberFormat().format(value)) > 0 ? value : value = '0')
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
