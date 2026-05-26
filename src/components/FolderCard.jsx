import PaperCard from './PaperCard'

export default function FolderCard({ folder }) {
  const [name, count, recent, advice] = folder
  return (
    <PaperCard className="folder-card archive-paper" decorative={false}>
      <h5>{name}</h5>
      <p>{count}</p>
      <p>{recent}</p>
      <em>建议：{advice}</em>
    </PaperCard>
  )
}
