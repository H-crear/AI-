import PaperCard from './PaperCard'

export default function CharacterArc({ timeline }) {
  return (
    <PaperCard className="character-arc archive-paper" decorative={false}>
      <h4>林墨成长线</h4>
      <div className="arc-line">
        {timeline.map((item, idx) => (
          <div className="arc-item" key={item}>
            <span>{idx + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </PaperCard>
  )
}
