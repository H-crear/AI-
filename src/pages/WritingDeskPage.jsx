import { useEffect, useMemo, useState } from 'react'
import PaperCard from '../components/PaperCard'
import BookCover from '../components/BookCover'
import ChapterList from '../components/ChapterList'
import EditorToolbar from '../components/EditorToolbar'
import AiCopilotPanel from '../components/AiCopilotPanel'
import { novelInfo, chapters } from '../data/mockChapters'
import { writingMeta, paragraphs } from '../data/mockWritingContent'
import { aiQuickActions, aiNotes } from '../data/mockAiNotes'

const storageKey = 'novel-copilot:drafts:v1'
const defaultChapterTitle = chapters.find((chapter) => chapter.active)?.title ?? chapters[0].title
const defaultDrafts = chapters.reduce((drafts, chapter) => {
  drafts[chapter.title] = chapter.title === defaultChapterTitle ? paragraphs.join('\n\n') : ''
  return drafts
}, {})

const countWords = (text) => Array.from(text.replace(/\s/g, '')).length

export default function WritingDeskPage() {
  const [activeTitle, setActiveTitle] = useState(defaultChapterTitle)
  const [drafts, setDrafts] = useState(() => {
    const saved = localStorage.getItem(storageKey)
    return saved ? { ...defaultDrafts, ...JSON.parse(saved) } : defaultDrafts
  })

  const content = drafts[activeTitle] ?? ''
  const wordCount = countWords(content)
  const readTime = `${Math.max(1, Math.ceil(wordCount / 500))}分钟`
  const chapterTitle = useMemo(() => activeTitle.replace(/第(\d+)章 /, '第 $1 章　'), [activeTitle])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(drafts))
  }, [drafts])

  const updateContent = (event) => {
    const nextContent = event.target.value
    setDrafts((current) => ({ ...current, [activeTitle]: nextContent }))
  }

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
        <ChapterList chapters={chapters} activeTitle={activeTitle} onSelect={setActiveTitle} />
      </aside>

      <PaperCard className="writing-paper manuscript-paper" decorative={false}>
        <header className="writing-head">
          <p>{writingMeta.bookTitle}</p>
          <h2>{chapterTitle}</h2>
          <h3>{writingMeta.goal}</h3>
        </header>
        <textarea
          className="writing-content writing-editor"
          value={content}
          onChange={updateContent}
          spellCheck="false"
          aria-label="章节正文"
        />
        <EditorToolbar words={wordCount.toLocaleString()} readTime={readTime} save="已自动保存到本地" />
      </PaperCard>

      <AiCopilotPanel actions={aiQuickActions} notes={aiNotes} />
    </div>
  )
}
