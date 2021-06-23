const SumEntries = array => {
  let result = array.reduce((sum, entry) => {
    return entry.type === "income" ? sum += (entry.value / 100) : sum -= (entry.value / 100);
  }, 0);

  if (result < 0) {
    return {
      type: "outgo",
      value: `R$ ${String(result.toFixed(2)).replace("-", "")}`
    };
  } else {
    return {
      type: "income",
      value: `R$ ${String(result.toFixed(2))}`
    };
  }
}

export default SumEntries;