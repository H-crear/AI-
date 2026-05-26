import PaperCard from './PaperCard'

export default function ForeshadowCard({ clue }) {
  const risk = clue.status.includes('高风险')
  return (
    <PaperCard className={`foreshadow-card archive-paper ${risk ? 'risk-card' : ''}`} decorative={false}>
      <div className="clue-head">
        <h5>{clue.name}</h5>
        <span>{clue.status}</span>
      </div>
      <p><b>首次出现：</b>{clue.first}</p>
      <p><b>计划回收：</b>{clue.recover}</p>
      <p><b>相关人物：</b>{clue.people}</p>
      <p><b>作用：</b>{clue.effect}</p>
      <p className="ai-slip"><b>AI 提醒：</b>{clue.ai}</p>
      <div className="foreshadow-actions">
        <button className="outline-btn">查看关联章节</button>
        <button className="outline-btn">标记为已回收</button>
      </div>
    </PaperCard>
  )
}
