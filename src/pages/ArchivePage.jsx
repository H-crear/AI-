const books = [
  ['《我靠 AI 翻盘人生》', '都市逆袭', '已写 12 章 · 2.3 万字'],
  ['《她在古代做情报局长》', '古代智斗', '已写 26 章 · 6.9 万字'],
  ['《我在平行世界当导演》', '平行世界', '已写 8 章 · 1.8 万字']
]

export default function ArchivePage() {
  return (
    <section className="page-wrap">
      <div className="paper heading-card">
        <h2>我的小说 / 创作档案柜</h2>
        <p>像翻阅卡片式手稿一样管理作品，保留每次创作痕迹。</p>
      </div>
      <div className="archive-grid">
        {books.map(([name, tag, meta]) => (
          <article key={name} className="paper archive-item">
            <div className="bookmark" />
            <h3>{name}</h3>
            <span>{tag}</span>
            <p>{meta}</p>
            <button>继续创作</button>
          </article>
        ))}
      </div>
    </section>
  )
}
