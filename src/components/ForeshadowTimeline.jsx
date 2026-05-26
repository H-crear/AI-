import PaperCard from './PaperCard'

export default function ForeshadowTimeline({ items }) {
  return (
    <PaperCard className="foreshadow-timeline archive-paper" decorative={false}>
      <h4>线索时间线</h4>
      <div className="timeline-line">
        {items.map((item, i) => (
          <div className="timeline-item" key={item}>
            <i>{i + 1}</i>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </PaperCard>
  )
}
