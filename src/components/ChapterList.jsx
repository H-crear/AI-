export default function ChapterList({ chapters }) {
  return (
    <ul className="chapter-list">
      {chapters.map((ch) => (
        <li key={ch.title} className={ch.active ? 'active' : ch.done ? 'done' : 'todo'}>
          <span>{ch.title}</span>
          <i>{ch.done ? '●' : '○'}</i>
        </li>
      ))}
    </ul>
  )
}
