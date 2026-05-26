import PaperCard from '../components/PaperCard'
import SectionTitle from '../components/SectionTitle'
import SideMenu from '../components/SideMenu'
import CharacterCard from '../components/CharacterCard'
import CharacterMap from '../components/CharacterMap'
import CharacterArc from '../components/CharacterArc'
import CharacterRiskNotes from '../components/CharacterRiskNotes'
import { characterHint, characters, relations, arcTimeline, riskNotes } from '../data/mockCharacters'

const menuItems = [
  { label: '角色档案', active: true },
  { label: '人物关系图', active: false },
  { label: '成长线', active: false }
]

export default function CharacterPage() {
  return (
    <div className="page character-workspace">
      <SideMenu title="人物设定" items={menuItems} />

      <section className="character-main">
        <PaperCard className="workspace-head archive-paper" decorative={false}>
          <SectionTitle title="人物设定" subtitle="记录人物欲望、关系、成长线和人设风险，避免长篇写着写着人物崩坏。" />
          <p className="top-space-note">{characterHint}</p>
        </PaperCard>

        <div className="character-grid">
          {characters.map((c) => <CharacterCard key={c.name} c={c} />)}
        </div>

        <div className="character-lower">
          <CharacterMap relations={relations} />
          <CharacterArc timeline={arcTimeline} />
        </div>
      </section>

      <CharacterRiskNotes notes={riskNotes} />
    </div>
  )
}
