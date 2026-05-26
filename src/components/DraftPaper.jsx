import PaperCard from './PaperCard'

export default function DraftPaper({ draft, tips }) {
  return (
    <PaperCard className="draft-paper manuscript-paper" decorative={false}>
      <h4>灵感草稿</h4>
      <p>{draft}</p>
      <ul>
        {tips.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </PaperCard>
  )
}
