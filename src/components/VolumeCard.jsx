import PaperCard from './PaperCard'

export default function VolumeCard({ volume }) {
  return (
    <PaperCard className="volume-card archive-paper" decorative={false}>
      <div className="volume-head">
        <h4>{volume.name}</h4>
        <span>{volume.status}</span>
      </div>
      <p><b>分卷目标：</b>{volume.goal}</p>
      <p><b>核心冲突：</b>{volume.conflict}</p>
      <div className="volume-meta">
        <em>章节数量：{volume.chapterCount}</em>
        <em>完成度：{volume.progress}%</em>
      </div>
      <div className="volume-progress"><span style={{ width: `${volume.progress}%` }} /></div>
      <button className="outline-btn">继续完善</button>
    </PaperCard>
  )
}
