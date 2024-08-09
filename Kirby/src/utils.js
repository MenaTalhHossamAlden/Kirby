export function makeBackground(k) {
  // to create a game object, and pass an array of components
  k.add([
    // use rectangle component from Kaplay,
    // call width and height methods so it takes the full width and height of the canvas
    k.rect(k.width(), k.height()),
    // set color using color component
    k.color(k.Color.fromHex('#d7f2f7')),
  ]);
}
