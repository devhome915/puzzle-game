const tiles = [...Array.from({ length: 15 }, (_, index) => index + 1), 0]

export function renderTiles(container) {
  container.replaceChildren()

  tiles.forEach((value, index) => {
    const tile = document.createElement("div")
    tile.className = value === 0 ? "tile empty" : "tile"
    tile.textContent = value || ""
    tile.dataset.index = index.toString()
    container.appendChild(tile)
  })
}

export function moveTile(index) {
  const emptyIndex = tiles.indexOf(0)
  const isSameRow = Math.floor(index / 4) === Math.floor(emptyIndex / 4)
  const isAdjacent = (isSameRow && Math.abs(index - emptyIndex) === 1)
    || Math.abs(index - emptyIndex) === 4

  if (!Number.isInteger(index) || index < 0 || index >= tiles.length || !isAdjacent) {
    return false
  }

  tiles[emptyIndex] = tiles[index]
  tiles[index] = 0
  return true
}

export function isPuzzleSolved() {
  return tiles.every((value, index) => value === (index === tiles.length - 1 ? 0 : index + 1))
}

export function shuffleTiles() {
  let previousEmpty = -1

  for (let move = 0; move < 1000; move++) {
    const emptyIndex = tiles.indexOf(0)
    const row = Math.floor(emptyIndex / 4)
    const col = emptyIndex % 4
    const possibleMoves = []

    if (row > 0) possibleMoves.push(emptyIndex - 4)
    if (row < 3) possibleMoves.push(emptyIndex + 4)
    if (col > 0) possibleMoves.push(emptyIndex - 1)
    if (col < 3) possibleMoves.push(emptyIndex + 1)

    const candidates = possibleMoves.filter((index) => index !== previousEmpty)
    const nextIndex = candidates[Math.floor(Math.random() * candidates.length)]
    tiles[emptyIndex] = tiles[nextIndex]
    tiles[nextIndex] = 0
    previousEmpty = emptyIndex
  }

}