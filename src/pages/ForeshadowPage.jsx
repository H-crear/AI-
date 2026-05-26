import PaperCard from '../components/PaperCard'
import SectionTitle from '../components/SectionTitle'
import SideMenu from '../components/SideMenu'
import ForeshadowCard from '../components/ForeshadowCard'
import ForeshadowTimeline from '../components/ForeshadowTimeline'
import CharacterClueBoard from '../components/CharacterClueBoard'
import ForeshadowRiskNotes from '../components/ForeshadowRiskNotes'
import RecoveryChecklist from '../components/RecoveryChecklist'
import { hint, overview, clues, timeline, board, notes, checklist } from '../data/mockForeshadow'

const menuItems = [
  { label: '伏笔总览', active: true },
  { label: '线索时间轴', active: false },
  { label: '回收检查', active: false }
]

export default function ForeshadowPage() {
  return (
    <div className="page foreshadow-workspace">
      <SideMenu title="伏笔与线索" items={menuItems} />

      <section className="foreshadow-main">
        <PaperCard className="workspace-head archive-paper" decorative={false}>
          <SectionTitle title="伏笔与线索" subtitle="记录已埋伏笔、待回收线索和关键证据，让长篇故事前后呼应。" />
          <p className="top-space-note">{hint}</p>
        </PaperCard>

        <div className="overview-row">
          {overview.map(([k, v]) => (
            <PaperCard className="overview-slip archive-paper" key={k} decorative={false}>
              <span>{k}</span>
              <b>{v}</b>
            </PaperCard>
          ))}
        </div>

        <div className="foreshadow-grid">
          {clues.map((c) => <ForeshadowCard clue={c} key={c.name} />)}
        </div>

        <ForeshadowTimeline items={timeline} />
        <CharacterClueBoard board={board} />
        <RecoveryChecklist items={checklist} />
      </section>

      <ForeshadowRiskNotes notes={notes} />
    </div>
  )
}
