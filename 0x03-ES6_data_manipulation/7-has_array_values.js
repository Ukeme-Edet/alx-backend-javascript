export default function hasValuesFromArray(set, array) {
  return array.reduce((c, x) => c && set.has(x), true);
}
