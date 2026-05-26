import StickyNote from './StickyNote'

export default function ForeshadowRiskNotes({ notes }) {
  return (
    <aside className="foreshadow-notes">
      <h3>AI 伏笔风险提醒</h3>
      <div className="note-column">
        {notes.map(([title, body]) => <StickyNote key={title} title={title} body={body} />)}
      </div>
    </aside>
  )
}
