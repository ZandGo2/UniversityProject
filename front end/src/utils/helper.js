function splitByFirstSpace(str) {
  const index = str.indexOf(" "); 
  if (index === -1) return [str, ""]; 
  return [str.slice(0, index), str.slice(index + 1)];
}
const shortenTransactionId = (uuid) => {
  const numericId = uuid.replace(/\D/g, "");
  const shortId = numericId.slice(-9);
  return shortId;
};

const p2eFormat = (s) =>
  s.toString().replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
const e2pFormat = (s) => s.toString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
export { splitByFirstSpace, shortenTransactionId, p2eFormat, e2pFormat };
