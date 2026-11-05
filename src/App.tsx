import { useEffect, useRef, useState } from "react"
import "./assets/css/index.css"

import Button from "./components/button/Button"
import Text from "./components/text/Text"
import { isPuzzleSolved, moveTile, renderTiles, shuffleTiles } from "./js/script.js"

function App() {
  const puzzleContainerRef = useRef<HTMLDivElement>(null)
  const [isSolved, setIsSolved] = useState(false)

  function handleShuffle() {
    const container = puzzleContainerRef.current
    if (!container) {
      throw new Error("Puzzle container was not mounted")
    }

    shuffleTiles()
    renderTiles(container)
    setIsSolved(false)
  }

  useEffect(() => {
    const container = puzzleContainerRef.current
    if (!container) {
      throw new Error("Puzzle container was not mounted")
    }

    const mountedContainer = container
    renderTiles(mountedContainer)

    function handleTileClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) {
        return
      }

      const tile = event.target.closest<HTMLElement>("[data-index]")
      if (!tile || !mountedContainer.contains(tile)) {
        return
      }

      const index = Number(tile.dataset.index)
      if (moveTile(index)) {
        renderTiles(mountedContainer)
        setIsSolved(isPuzzleSolved())
      }
    }

    mountedContainer.addEventListener("click", handleTileClick)
    return () => {
      mountedContainer.removeEventListener("click", handleTileClick)
      mountedContainer.replaceChildren()
    }
  }, [])

  return (
    <div>
      <div className="container">
        <div className="puzzle-container" id="puzzle-container" ref={puzzleContainerRef} />

        <Button onClick={handleShuffle} />
        {isSolved && <Text>Parabéns! Você resolveu o quebra-cabeça!</Text>}
      </div>
    </div>
  )
}

export default App
