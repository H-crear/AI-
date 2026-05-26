import PaperCard from '../components/PaperCard'
import SectionTitle from '../components/SectionTitle'
import SideMenu from '../components/SideMenu'
import VolumeCard from '../components/VolumeCard'
import StoryTimeline from '../components/StoryTimeline'
import OutlineHealthNotes from '../components/OutlineHealthNotes'
import { volumes, chapterGoals, healthNotes, rhythm, outlineHint } from '../data/mockOutline'

const menuItems = [
  { label: '全书大纲', active: true },
  { label: '卷纲规划', active: false },
  { label: '节奏设计', active: false }
]

export default function OutlinePage() {
  return (
    <div className="page outline-workspace">
      <SideMenu title="故事结构" items={menuItems} />

      <section className="outline-main">
        <PaperCard className="workspace-head archive-paper" decorative={false}>
          <SectionTitle title="大纲规划" subtitle="把长篇故事拆成分卷、章节目标、冲突推进和结尾钩子。" />
          <p className="top-space-note">{outlineHint}</p>
        </PaperCard>

        <div className="volume-grid">
          {volumes.map((v) => <VolumeCard key={v.name} volume={v} />)}
        </div>

        <PaperCard className="chapter-map archive-paper" decorative={false}>
          <h4>第一卷 · 破局｜章节目标拆解</h4>
          <div className="chapter-route">
            {chapterGoals.map(([title, goal, conflict, done, hook]) => (
              <article key={title} className={`route-node ${done ? 'done' : 'todo'}`}>
                <div className="route-dot" />
                <div>
                  <h5>{title}</h5>
                  <p><b>本章目标：</b>{goal}</p>
                  <p><b>冲突强度：</b>{conflict}　<b>是否完成：</b>{done ? '已完成' : '进行中'}</p>
                  <p><b>结尾钩子：</b>{hook}</p>
                </div>
              </article>
            ))}
          </div>
        </PaperCard>

        <PaperCard className="rhythm-wrap archive-paper" decorative={false}>
          <h4>故事节奏概览</h4>
          <StoryTimeline items={rhythm} />
        </PaperCard>
      </section>

      <OutlineHealthNotes notes={healthNotes} />
    </div>
  )
}
