const calculatePercent = (price, discount) => {
  const salePrice = (discount * price) / 100;
  const totalPercent = Math.round(price - salePrice);

  return totalPercent;
};

export default calculatePercent;
