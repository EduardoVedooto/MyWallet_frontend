const SumEntries = (array) => {
  const result = array.reduce((sum, entry) => (entry.type === 'income' ? (sum += (entry.value / 100)) : (sum -= (entry.value / 100))), 0);

  if (result < 0) {
    return {
      type: 'outgo',
      value: `R$ ${String(result.toFixed(2)).replace('-', '')}`,
    };
  }
  return {
    type: 'income',
    value: `R$ ${String(result.toFixed(2))}`,
  };
};

export default SumEntries;
