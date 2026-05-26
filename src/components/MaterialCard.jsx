import PaperCard from './PaperCard'

export default function MaterialCard({ item, idx }) {
  const [type, content, usage, tags] = item
  return (
    <PaperCard className="material-card archive-paper" decorative={false}>
      <span className="mat-type">{type}</span>
      <p className="mat-content">{content}</p>
      <p className="mat-usage"><b>用途：</b>{usage}</p>
      <p className="mat-tags"><b>标签：</b>{tags}</p>
      <div className="material-actions">
        <button className="outline-btn">插入到当前章节</button>
        <button className="outline-btn">加入资料夹</button>
      </div>
      <span className="mat-pin">📎</span>
      <span className="mat-angle">{idx % 2 === 0 ? 'a' : 'b'}</span>
    </PaperCard>
  )
}
