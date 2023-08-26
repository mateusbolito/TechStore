const formatCurrency = (value: number, currency: any) => {
  return value.toLocaleString("pt-br", { style: "currency", currency });
};

export default formatCurrency;
