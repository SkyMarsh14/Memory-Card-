const genPokemonData = (length, startIndex, endIndex) => {
  const uniqueSet = new Set();
  while (uniqueSet.size < length) {
    const randomIndex = Math.floor(Math.random() * endIndex) + startIndex;
    uniqueSet.add(randomIndex);
  }
  return Array.from(uniqueSet).map((index) => ({
    index,
    id: crypto.randomUUID(),
  }));
};

export default genPokemonData;
