import PaperCard from './PaperCard'

export default function RecoveryChecklist({ items }) {
  return (
    <PaperCard className="recovery-checklist archive-paper" decorative={false}>
      <h4>回收检查清单</h4>
      <ul>
        {items.map((i) => <li key={i}>✓ {i}</li>)}
      </ul>
    </PaperCard>
  )
}
