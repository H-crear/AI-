import PaperCard from './PaperCard'

export default function ConsistencyCheck({ items }) {
  return (
    <PaperCard className="consistency-check archive-paper" decorative={false}>
      <h4>世界观一致性检查</h4>
      <ul>
        {items.map(([k, v]) => (
          <li key={k}><span>{k}</span><em>{v}</em></li>
        ))}
      </ul>
    </PaperCard>
  )
}
