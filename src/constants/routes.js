export const settings = '/settings';
export const currencies = '/currencies';
export const currency = '/currencies/:id';

export function getCurrencyRoute(id) {
  return currency.replace(':id', id);
}
