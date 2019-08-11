/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
type ValidAnagramFn = (s: string, t: string) => boolean;

export const isAnagram: ValidAnagramFn = (s, t) => {
  if (s.length > t.length) {
    return false;
  }
  const map: { [key: string]: number } = {};
  for (let i = 0; i < t.length; i++) {
    if (map[s[i]]) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      map[t[i]] = -1;
    }
  }
  return !Object.values(map).find(n => n < 0);
};
