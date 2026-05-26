import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'

export default function WorldPage() {
  return (
    <div className="page workspace-layout">
      <aside className="workspace-left paper-card">
        <h3>世界观设定</h3>
        <ul>
          <li className="active">世界概览</li>
          <li>势力设定</li>
          <li>规则体系</li>
        </ul>
      </aside>

      <section className="workspace-main">
        <PaperCard className="workspace-head"><h2>世界概览</h2><p>构建故事发生的世界，完善规则、势力与历史。</p></PaperCard>
        <PaperCard className="map-card">
          <div className="fake-map">天衍大陆 · 北境雪原 · 云海帝国 · 东海群岛</div>
        </PaperCard>
      </section>

      <aside className="workspace-right">
        <NoteCard title="世界观完整度">78% · 基础框架已建立，但部分设定可继续完善。</NoteCard>
        <NoteCard title="潜在问题">修真与科技冲突点可更明确，能力体系边界需清晰。</NoteCard>
      </aside>
    </div>
  )
}
