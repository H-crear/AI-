import PaperCard from './PaperCard'

export default function CharacterClueBoard({ board }) {
  return (
    <PaperCard className="character-clue-board archive-paper" decorative={false}>
      <h4>人物与线索关联</h4>
      <div className="clue-board-grid">
        {board.map(([name, clues]) => (
          <div key={name} className="clue-board-item">
            <span>{name}</span>
            <p>{clues}</p>
          </div>
        ))}
      </div>
    </PaperCard>
  )
}
