export function openOtherGoat(userInput, carPosition) {
  const door = [0, 1, 2];
  const openPosition = door.filter(
    (d) => d != userInput && d != carPosition
  )[0];
  return openPosition;
}
