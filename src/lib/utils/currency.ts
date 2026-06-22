export const formatCurrency = (
  amount: number,
  currency = 'GBP',
  compact = false
): string => {
  if (compact && Math.abs(amount) >= 1000) {
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency,
      notation: 'compact',
      maximumFractionDigits: 1,
    });
    return formatter.format(amount);
  }

  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export const maskBalance = (amount: number, visible: boolean): string => {
  if (!visible) return '••••••';
  return formatCurrency(amount);
};

export const formatCardNumber = (cardNumber: string): string => {
  return cardNumber.replace(/(\d{4})/g, '$1 ').trim();
};
