import StickyNote from './StickyNote'

export default function WorldRiskNotes({ notes }) {
  return (
    <aside className="world-notes">
      <h3>AI 世界观漏洞提醒</h3>
      <div className="note-column">
        {notes.map(([title, body]) => <StickyNote key={title} title={title} body={body} />)}
      </div>
    </aside>
  )
}
