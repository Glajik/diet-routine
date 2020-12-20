export const getColor = (percent) => {
  if (percent > 120) {
    return '#ff4d4f';
  }
  if (percent > 90) {
    return '#ffcc00'
  }
  return '#389E0D'
}
