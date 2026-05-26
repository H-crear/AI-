import { Link } from 'react-router-dom'
import PaperCard from './PaperCard'

export default function NovelCard({ novel }) {
  return (
    <PaperCard className="novel-card archive-paper">
      <div className="cover-art" aria-hidden />
      <div className="novel-main">
        <h3 className="novel-title">{novel.title}</h3>
        <span className="genre-tag">{novel.genre}</span>
        <p><b>当前进度：</b>{novel.progress}</p>
        <p><b>已写字数：</b>{novel.words}</p>
        <p><b>最近修改：</b>{novel.updatedAt}</p>
        <p className="status-line"><b>当前状态：</b>{novel.status}</p>
        <div className="ai-slip">{novel.advice}</div>
        <div className="novel-actions">
          <Link className="ink-btn link-btn" to="/desk">继续创作</Link>
          <button className="outline-btn">查看大纲</button>
        </div>
      </div>
    </PaperCard>
  )
}
