import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'
import SideMenu from '../components/SideMenu'
import SectionTitle from '../components/SectionTitle'

export default function LibraryPage() {
  return (
    <div className="page workspace-layout">
      <SideMenu title="资料库 / 灵感库" items=[{ label: '灵感碎片', active: true },{ label: '设定卡片', active: false },{ label: '素材摘录', active: false }] />

      <section className="workspace-main">
        <PaperCard className="workspace-head">
          <SectionTitle title="资料库 / 灵感库" subtitle="沉淀你的灵感、设定与素材，随时调用到创作中。" />
        </PaperCard>
        <div className="memo-grid">
          <PaperCard className="memo-card"><h4>时间回溯者</h4><p>如果能回到过去，你最想改变什么？</p></PaperCard>
          <PaperCard className="memo-card"><h4>公开质疑场景</h4><p>灯光、提问、反击、证据公开……</p></PaperCard>
          <PaperCard className="memo-card"><h4>人物台词灵感</h4><p>“真正的反击，不是愤怒，而是证据。”</p></PaperCard>
          <PaperCard className="memo-card"><h4>城市雨夜氛围</h4><p>玻璃幕墙、霓虹倒影、脚步回声。</p></PaperCard>
        </div>
      </section>

      <aside className="workspace-right">
        <NoteCard title="灵感整理建议">可按“人物/冲突/场景/台词”四类建立标签，提高检索效率。</NoteCard>
        <NoteCard title="下一步建议">将“公开质疑场景”与第6章正文绑定，直接生成扩写草稿。</NoteCard>
      </aside>
    </div>
  )
}
