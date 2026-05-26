import PaperCard from './PaperCard'

function BoundaryColumn({ title, items, tone }) {
  return (
    <PaperCard className={`boundary-col ${tone}`} decorative={false}>
      <h5>{title}</h5>
      <ul>{items.map((i) => <li key={i}>{i}</li>)}</ul>
    </PaperCard>
  )
}

export default function AbilityBoundary({ boundary }) {
  return (
    <section className="ability-boundary">
      <BoundaryColumn title="AI 可以帮忙" items={boundary.canHelp} tone="good" />
      <BoundaryColumn title="主角必须自己完成" items={boundary.mustDo} tone="must" />
      <BoundaryColumn title="禁止写成" items={boundary.forbidden} tone="warn" />
    </section>
  )
}
