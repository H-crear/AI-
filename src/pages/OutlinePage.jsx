import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'
import SideMenu from '../components/SideMenu'
import SectionTitle from '../components/SectionTitle'

const volumes = [
  ['卷一', '重启人生（1-30章）', '约 60,000 字'],
  ['卷二', '初露锋芒（31-60章）', '约 65,000 字'],
  ['卷三', '风云突起（61-90章）', '约 70,000 字'],
  ['卷四', '巅峰对决（91-120章）', '约 75,000 字']
]

export default function OutlinePage() {
  return (
    <div className="page workspace-layout">
      <SideMenu title="故事结构" items=[{ label: '全书大纲', active: true },{ label: '卷纲规划', active: false },{ label: '节奏设计', active: false }] />

      <section className="workspace-main">
        <PaperCard className="workspace-head">
          <SectionTitle title="大纲规划" subtitle="梳理故事脉络，搭建完整剧情框架" />
        </PaperCard>
        <PaperCard className="volume-list">
          {volumes.map((v) => (
            <div className={`volume-row ${v[0] === '卷二' ? 'focus' : ''}`} key={v[0]}>
              <b>{v[0]}</b><span>{v[1]}</span><em>{v[2]}</em>
            </div>
          ))}
        </PaperCard>
      </section>

      <aside className="workspace-right">
        <NoteCard title="结构分析">五卷递进清晰，冲突层层升级，建议卷二增加公众质疑事件。</NoteCard>
        <NoteCard title="AI建议">在第45章设置小高潮，让主角直面更大规模公开质疑。</NoteCard>
      </aside>
    </div>
  )
}
