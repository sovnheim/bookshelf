export function selectRandomItem(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

export function selectRandomProperty(obj) {
  var keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
}
