export function getPlayerMarks() {
  const iconPairs = [
    [ 'logo-xbox', 'logo-playstation' ],
    [ 'logo-snapchat', 'logo-instagram' ],
    [ 'logo-android', 'logo-apple' ],
    [ 'logo-javascript', 'logo-python' ],
    [ 'logo-bitcoin', 'logo-usd' ],
  ];
  const randomIndex = Math.floor(Math.random() * iconPairs.length - 1) + 1;

  return iconPairs[randomIndex];
}
