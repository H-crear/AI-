import PaperCard from '../components/PaperCard'
import { archiveBooks } from '../data/siteData'

export default function ArchivePage() {
  return (
    <div className="page page-archive">
      <PaperCard className="archive-head">
        <h2>我的小说</h2>
        <p>继续你的创作，把灵感慢慢写成故事。</p>
      </PaperCard>

      <div className="archive-grid">
        {archiveBooks.map((book) => (
          <PaperCard className="book-card" key={book.title}>
            <div className="bookmark" />
            <h3>{book.title}</h3>
            <p>{book.genre}</p>
            <p>{book.words}</p>
            <small>{book.update}</small>
          </PaperCard>
        ))}
      </div>
    </div>
  )
}
