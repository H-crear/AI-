import PaperCard from '../components/PaperCard'
import SectionTitle from '../components/SectionTitle'
import SideMenu from '../components/SideMenu'
import StoryMap from '../components/StoryMap'
import WorldRuleCard from '../components/WorldRuleCard'
import AbilityBoundary from '../components/AbilityBoundary'
import WorldRiskNotes from '../components/WorldRiskNotes'
import ConsistencyCheck from '../components/ConsistencyCheck'
import { worldHint, mapNodes, worldRules, abilityBoundary, worldNotes, consistencyChecklist } from '../data/mockWorld'

const menuItems = [
  { label: '世界概览', active: true },
  { label: '地图设定', active: false },
  { label: '规则边界', active: false }
]

export default function WorldPage() {
  return (
    <div className="page world-workspace">
      <SideMenu title="世界观设定" items={menuItems} />

      <section className="world-main">
        <PaperCard className="workspace-head archive-paper" decorative={false}>
          <SectionTitle title="世界观设定" subtitle="记录故事发生的时代、地点、规则和能力边界，让长篇世界始终自洽。" />
          <p className="top-space-note">{worldHint}</p>
        </PaperCard>

        <StoryMap nodes={mapNodes} />

        <div className="world-rules-grid">
          {worldRules.map((rule, idx) => <WorldRuleCard key={rule.title} rule={rule} index={idx} />)}
        </div>

        <PaperCard className="boundary-wrap archive-paper" decorative={false}>
          <h4>AI 能力边界</h4>
          <AbilityBoundary boundary={abilityBoundary} />
        </PaperCard>

        <ConsistencyCheck items={consistencyChecklist} />
      </section>

      <WorldRiskNotes notes={worldNotes} />
    </div>
  )
}
