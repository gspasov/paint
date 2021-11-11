export type Grid = Record<string, string>;

export function createGrid(size: number): Grid {
  return Object.fromEntries(
    [...Array(size * size).keys()].map((key) => {
      return [key.toString(), "#000000"];
    })
  );
}
