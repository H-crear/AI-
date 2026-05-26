export default function StickyNote({ title, body }) {
  return (
    <article className="sticky-note note-stack">
      <h5>{title}</h5>
      <p>{body}</p>
      <span className="tape" />
    </article>
  )
}
