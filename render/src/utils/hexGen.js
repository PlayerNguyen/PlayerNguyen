export function generateRandomHex() {
  const seeds = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = "";
  for (let i = 0; i < 6; i++) {
    const pick = seeds[Number.parseInt(Math.random() * seeds.length)];
    hex += pick;
  }

  return hex;
}
