export default function randomizeArr(arr) {
  let newArr = [];
  while (arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    newArr.push(arr.slice(arr.slice(randomIndex, randomIndex + 1)));
  }
  return newArr;
}
