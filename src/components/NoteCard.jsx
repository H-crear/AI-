export default function NoteCard({ title, children }) {
  return (
    <article className="note-card">
      <h4>{title}</h4>
      <div>{children}</div>
    </article>
  )
}
