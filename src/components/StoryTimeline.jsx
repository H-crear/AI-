export default function StoryTimeline({ items }) {
  return (
    <div className="story-rhythm">
      {items.map((item, idx) => (
        <div key={item} className="rhythm-node">
          <i>{idx + 1}</i>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
