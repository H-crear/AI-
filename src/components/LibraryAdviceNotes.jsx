import StickyNote from './StickyNote'

export default function LibraryAdviceNotes({ notes }) {
  return (
    <aside className="library-notes">
      <h3>AI 素材整理建议</h3>
      <div className="note-column">
        {notes.map(([title, body]) => <StickyNote key={title} title={title} body={body} />)}
      </div>
    </aside>
  )
}
