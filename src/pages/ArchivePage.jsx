import PaperCard from '../components/PaperCard'

const works = [
  { title: '《我靠AI翻盘人生》', tag: '都市逆袭', progress: '已写 12 章 · 2.3 万字', time: '今天 10:24' },
  { title: '《我在平行世界当导演》', tag: '都市娱乐', progress: '已写 18 章 · 3.6 万字', time: '昨天 22:18' },
  { title: '《她在古代做情报局长》', tag: '古言权谋', progress: '已写 15 章 · 2.8 万字', time: '05-18' },
  { title: '《明天的机会我先知道》', tag: '都市异能', progress: '已写 10 章 · 1.9 万字', time: '05-17' },
  { title: '《废土中的第七实验室》', tag: '科幻悬疑', progress: '已写 8 章 · 1.2 万字', time: '05-15' }
]

export default function ArchivePage() {
  return (
    <div className="page page-archive archive-layout">
      <section className="archive-main">
        <PaperCard className="archive-head">
          <h2>我的小说</h2>
          <p>继续你的创作，把灵感慢慢写成故事</p>
        </PaperCard>

        <PaperCard className="continue-card">
          <div>
            <h3>继续上次创作</h3>
            <h4>《我靠AI翻盘人生》</h4>
            <p>当前进度：第 6 章 · 逆风翻盘的第一步（80%）</p>
          </div>
          <button className="ink-btn">继续写第6章</button>
        </PaperCard>

        <div className="works-grid">
          {works.map((w) => (
            <PaperCard className="work-item" key={w.title}>
              <div className="bookmark" />
              <h4>{w.title}</h4>
              <p>{w.tag}</p>
              <p>{w.progress}</p>
              <small>更新于 {w.time}</small>
            </PaperCard>
          ))}
        </div>
      </section>

      <aside className="archive-side">
        <PaperCard className="side-panel">
          <h3>创作提醒</h3>
          <ul>
            <li>《我在平行世界当导演》：第9章待完善大纲</li>
            <li>《她在古代做情报局长》：人物关系图尚未补充</li>
            <li>《废土中的第七实验室》：世界观设定待补完</li>
          </ul>
        </PaperCard>

        <PaperCard className="side-panel">
          <h3>本周进度</h3>
          <div className="week-words">8,742 字</div>
          <div className="week-bar"><span /></div>
          <p>较上周 +36% · 目标 15,000 字</p>
        </PaperCard>
      </aside>
    </div>
  )
}
