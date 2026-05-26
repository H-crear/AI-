import PaperCard from '../components/PaperCard'
import BookCover from '../components/BookCover'
import ChapterList from '../components/ChapterList'
import EditorToolbar from '../components/EditorToolbar'
import AiCopilotPanel from '../components/AiCopilotPanel'
import { novelInfo, chapters } from '../data/mockChapters'
import { writingMeta, paragraphs } from '../data/mockWritingContent'
import { aiQuickActions, aiNotes } from '../data/mockAiNotes'

export default function WritingDeskPage() {
  return (
    <div className="page desk-workspace">
      <aside className="desk-left paper-card archive-paper">
        <div className="novel-brief">
          <BookCover />
          <div>
            <h4>{novelInfo.title}</h4>
            <p>{novelInfo.genres}</p>
            <p>已写字数：{novelInfo.words}</p>
            <p>当前卷：{novelInfo.volume}</p>
          </div>
        </div>
        <h5 className="chapter-index-title">章节目录</h5>
        <ChapterList chapters={chapters} />
      </aside>

      <PaperCard className="writing-paper manuscript-paper" decorative={false}>
        <header className="writing-head">
          <p>{writingMeta.bookTitle}</p>
          <h2>{writingMeta.chapterTitle}</h2>
          <h3>{writingMeta.goal}</h3>
        </header>
        <article className="writing-content">
          {paragraphs.map((p) => <p key={p}>{p}</p>)}
        </article>
        <EditorToolbar words={writingMeta.words} readTime={writingMeta.readTime} save={writingMeta.save} />
      </PaperCard>

      <AiCopilotPanel actions={aiQuickActions} notes={aiNotes} />
    </div>
  )
}
