import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'
import { chapterNotes } from '../data/siteData'

export default function WritingDeskPage() {
  return (
    <div className="page writing-layout">
      <aside className="left-rail paper-card">
        <h3>章节目录</h3>
        <ul>
          <li>第1章 破局</li><li>第2章 新机会</li><li>第3章 第一个项目</li>
          <li className="active">第6章 竞争对手</li><li>第7章 公开质疑</li>
        </ul>
      </aside>

      <PaperCard className="manuscript">
        <h2>第6章 竞争对手</h2>
        <p className="chapter-goal">本章目标：让主角第一次面对公开质疑</p>
        <div className="content">
          会议室里，投影幕布上是林默团队熬了三天三夜做出的项目方案。林默站在台上，指尖轻轻按着遥控器，声音平稳地讲解着每一个细节……
        </div>
      </PaperCard>

      <aside className="right-notes">
        {chapterNotes.map((note) => (
          <NoteCard key={note} title="AI 编辑批注">{note}</NoteCard>
        ))}
      </aside>
    </div>
  )
}
