import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'
import SideMenu from '../components/SideMenu'
import SectionTitle from '../components/SectionTitle'

export default function ForeshadowPage() {
  return (
    <div className="page workspace-layout">
      <SideMenu title="伏笔与线索" items=[{ label: '伏笔总览', active: true },{ label: '线索时间轴', active: false },{ label: '回收检查', active: false }] />

      <section className="workspace-main">
        <PaperCard className="workspace-head">
          <SectionTitle title="伏笔与线索" subtitle="管理埋点、推进节奏，避免遗忘关键线索。" />
        </PaperCard>
        <PaperCard className="clue-board">
          <div className="clue-row"><b>第3章 合同条款异常</b><span>埋设：第3章</span><span>回收：第6章</span><em>进行中</em></div>
          <div className="clue-row"><b>导师立场摇摆</b><span>埋设：第4章</span><span>回收：第7章</span><em>待回收</em></div>
          <div className="clue-row"><b>竞争对手数据漏洞</b><span>埋设：第5章</span><span>回收：第8章</span><em>已标记</em></div>
        </PaperCard>
      </section>

      <aside className="workspace-right">
        <NoteCard title="漏洞提醒">当前关键线索有 2 条尚未安排回收节点，建议在 7-8 章补齐。</NoteCard>
        <NoteCard title="AI建议">把“合同条款异常”升级为公开质疑证据，增强高潮反转。</NoteCard>
      </aside>
    </div>
  )
}
