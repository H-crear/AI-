import PaperCard from './PaperCard'

export default function CharacterCard({ c }) {
  return (
    <PaperCard className="character-card archive-paper" decorative={false}>
      <div className="character-head">
        <div className="avatar-placeholder" aria-hidden />
        <div>
          <h4>{c.name}</h4>
          <span>{c.identity}</span>
        </div>
      </div>
      <p><b>核心欲望：</b>{c.desire}</p>
      <p><b>性格关键词：</b>{c.keywords}</p>
      <p><b>成长线：</b>{c.arc}</p>
      <p className="risk-line"><b>风险提醒：</b>{c.risk}</p>
      <div className="character-foot">
        <em>相关章节：{c.chapters}</em>
        <button className="outline-btn">AI 检查</button>
      </div>
    </PaperCard>
  )
}
