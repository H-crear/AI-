import StickyNote from './StickyNote'

export default function AiCopilotPanel({ actions, notes }) {
  return (
    <aside className="ai-copilot">
      <h3>AI 副驾</h3>
      <p className="copilot-sub">像一位安静的编辑，在旁边帮你打磨每一章。</p>
      <div className="quick-actions">
        {actions.map((a) => <button key={a} className="outline-btn">{a}</button>)}
      </div>
      <div className="note-column">
        {notes.map((n) => <StickyNote key={n.title} title={n.title} body={n.body} />)}
      </div>
    </aside>
  )
}
