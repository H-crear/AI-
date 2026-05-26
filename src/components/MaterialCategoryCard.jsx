import PaperCard from './PaperCard'

export default function MaterialCategoryCard({ item, idx }) {
  const [name, count, desc] = item
  return (
    <PaperCard className="material-category archive-paper" decorative={false}>
      <div className="cat-top">
        <h5>{name}</h5>
        <em>{count}</em>
      </div>
      <p>{desc}</p>
      <span className="cat-index">0{idx + 1}</span>
    </PaperCard>
  )
}
