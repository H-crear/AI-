import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'
import { chapterNotes } from '../data/siteData'

const chapters = ['第1章 破局', '第2章 新机会', '第3章 第一个项目', '第4章 初见成效', '第5章 暗流涌动', '第6章 竞争对手', '第7章 公开质疑']

export default function WritingDeskPage() {
  return (
    <div className="page writing-layout">
      <aside className="left-rail paper-card">
        <h3>章节目录</h3>
        <ul>
          {chapters.map((item) => <li className={item.includes('第6章') ? 'active' : ''} key={item}>{item}</li>)}
        </ul>
      </aside>

      <PaperCard className="manuscript">
        <h2>第6章 竞争对手</h2>
        <p className="chapter-goal">本章目标：让主角第一次面对公开质疑</p>
        <div className="content">
          会议室里，投影幕布上是林默团队熬了三天三夜做出的项目方案。林默站在台上，指尖轻轻按着遥控器，声音平稳地讲解着每一个细节。台下坐着行业大佬、投资人、合作方，还有张昊。<br /><br />
          “这个方案听起来很完整，”张昊突然开口，打断了林默的讲解，“但现实是，医院不是真实验室。你们的AI模型在真实数据下，准确率能达到百分之多少？”<br /><br />
          会议室瞬间安静下来，所有人的目光都投向林默。
        </div>
      </PaperCard>

      <aside className="right-notes">
        <div className="assistant-title">AI 副驾 · 创作助手</div>
        {chapterNotes.map((note) => (
          <NoteCard key={note.title} title={note.title}>{note.body}</NoteCard>
        ))}
      </aside>
    </div>
  )
}
