import StickyNote from './StickyNote'

export default function OutlineHealthNotes({ notes }) {
  return (
    <aside className="outline-notes">
      <h3>AI 大纲健康度建议</h3>
      <div className="note-column">
        {notes.map(([title, body]) => <StickyNote key={title} title={title} body={body} />)}
      </div>
    </aside>
  )
}
