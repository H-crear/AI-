import StickyNote from './StickyNote'

export default function CharacterRiskNotes({ notes }) {
  return (
    <aside className="character-notes">
      <h3>AI 人设检查</h3>
      <div className="note-column">
        {notes.map(([title, body]) => <StickyNote key={title} title={title} body={body} />)}
      </div>
    </aside>
  )
}
