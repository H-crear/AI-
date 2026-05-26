import PaperCard from './PaperCard'

export default function MaterialUseList({ items }) {
  return (
    <PaperCard className="material-use-list archive-paper" decorative={false}>
      <h4>下一步最该使用的素材</h4>
      <ol>
        {items.map((i) => <li key={i}>{i}</li>)}
      </ol>
    </PaperCard>
  )
}
