export function getPx(pxStr) {
  const realPx = parseInt(pxStr.slice(0, -2));
  return realPx;
}

export function getPxToRem(px) {
  return px / 100;
}
