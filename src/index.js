module.exports = function getLoveTrianglesCount(preferences = []) {
  const preferencesLength = preferences.length;
  let count = 0;
  if (preferencesLength > 2) {
    for (let i = 0; i < preferencesLength; i++){
      if ( preferences[preferences[preferences[i] - 1] - 1] === i + 1) {
        count++;
      }
    };
  } else {
    return 0;
  }
  return ((count - count % 3) / 3);
};
