export const formatCurrency = (value: number) => {
  return value
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatInterestRate = (value: number) => {
  return value === 0 ? '' : value.toFixed(2);
};

export const formatTerm = (value: number) => {
  return value === 0 ? '' : value.toFixed(0);
};

export const parseCurrency = (value: string) => {
  const numericValue = Number(value.replace(/[^0-9.-]+/g, ''));
  return Number.isNaN(numericValue) ? 0 : numericValue;
};

export const parseInterestRate = (value: string) => {
  const numericValue = Number(value.replace(/[^0-9.]+/g, ''));
  return Number.isNaN(numericValue) ? 0 : numericValue / 100;
};

export const parseTerm = (value: string) => {
  const numericValue = Number(value.replace(/[^0-9]+/g, ''));
  return Number.isNaN(numericValue) ? 0 : numericValue;
};

export const formatMoney = (value: number) => {
  return `$${Intl.NumberFormat().format(value)}`;
};
