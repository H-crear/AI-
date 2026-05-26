import PaperCard from './PaperCard'

export default function WorldRuleCard({ rule, index }) {
  return (
    <PaperCard className="world-rule-card archive-paper" decorative={false}>
      <div className="rule-index">0{index + 1}</div>
      <h5>{rule.title}</h5>
      <p>{rule.content}</p>
      <em>{rule.key}</em>
    </PaperCard>
  )
}
