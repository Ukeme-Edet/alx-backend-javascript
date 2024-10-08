export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  return [...set]
    .filter((x) => x && x.startsWith(startString))
    .map((x) => x.slice(startString.length))
    .join('-');
}
