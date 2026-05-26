import PaperCard from './PaperCard'

export default function StoryMap({ nodes }) {
  return (
    <PaperCard className="story-map archive-paper" decorative={false}>
      <h4>故事地图</h4>
      <div className="map-canvas">
        <div className="map-path" />
        {nodes.map((n, idx) => (
          <article className={`map-node node-${idx + 1}`} key={n.name}>
            <h5>{n.name}</h5>
            <p><b>用途：</b>{n.usage}</p>
            <p><b>相关章节：</b>{n.chapters}</p>
            <p><b>情绪色彩：</b>{n.mood}</p>
          </article>
        ))}
      </div>
    </PaperCard>
  )
}
