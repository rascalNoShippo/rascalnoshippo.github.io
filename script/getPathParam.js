/**
 * 指定のパラメーターを取得する
 * @param {string} pathName - パラメーター名
 * @returns {string?} - パラメーターの値
 */
export const getPathParam = pathName => {
  const allPaths = location.search;
  if (allPaths.substring(0, 1) != "?") return null;
  const paths = allPaths.substring(1).split("&").map(e => e.split("="));
  for (const path of paths) {
    if (path[0] === pathName) return path[1];
  }
  return null;
};