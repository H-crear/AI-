export default function ChapterList({ chapters, activeTitle, onSelect }) {
  return (
    <ul className="chapter-list">
      {chapters.map((ch) => {
        const active = ch.title === activeTitle

        return (
          <li key={ch.title} className={active ? 'active' : ch.done ? 'done' : 'todo'}>
            <button type="button" onClick={() => onSelect(ch.title)}>
              <span>{ch.title}</span>
              <i>{ch.done ? '●' : '○'}</i>
            </button>
          </li>
        )
      })}
    </ul>
  )
}
