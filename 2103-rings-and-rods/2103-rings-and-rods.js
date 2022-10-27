/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
  let map = new Map();

  for (let i = 0; i < rings.length; i += 2) {
    let color = rings[i];
    let position = rings[i + 1];

    if (map.has(position)) {
      let current = map.get(position);
      current.add(color);
    } else {
      map.set(position, new Set(color));
    }
  }

  return Array.from(map.values()).reduce((acc, item) => {
    return item.size === 3 ? acc + 1 : acc;
  }, 0);  
};
