export const order = [];

export function addOrder({ user, newCart, total, date }) {
  order.push({ user, newCart, total, date });
}
