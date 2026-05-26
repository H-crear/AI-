import PaperCard from './PaperCard'

export default function CharacterMap({ relations }) {
  return (
    <PaperCard className="character-map archive-paper" decorative={false}>
      <h4>人物关系图</h4>
      <div className="map-links">
        {relations.map(([a, b, t]) => (
          <div key={`${a}-${b}`} className="map-link-row">
            <span className="node">{a}</span>
            <i>{t}</i>
            <span className="node">{b}</span>
          </div>
        ))}
      </div>
    </PaperCard>
  )
}
