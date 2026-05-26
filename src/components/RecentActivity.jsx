import PaperCard from './PaperCard'

export default function RecentActivity({ items }) {
  return (
    <PaperCard className="recent-activity archive-paper note-stack">
      <h4>最近动态</h4>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </PaperCard>
  )
}
