import PaperCard from '../components/PaperCard'
import NovelCard from '../components/NovelCard'
import TodayAdvice from '../components/TodayAdvice'
import RecentActivity from '../components/RecentActivity'
import { novels, recentActivities, todayAdvice } from '../data/mockNovels'

export default function ArchivePage() {
  return (
    <div className="page archive-dashboard">
      <section className="archive-column-main">
        <PaperCard className="archive-header archive-paper" decorative={false}>
          <p className="meta">创作档案柜</p>
          <h2>我的小说</h2>
          <p className="subline">每本小说都记录当前状态、写作卡点和 AI 下一步建议。</p>
        </PaperCard>

        <PaperCard className="new-story-entry archive-paper" decorative={false}>
          <div>
            <h4>＋ 新开一个故事档案</h4>
            <p>从一句灵感开始，建立你的下一本小说卷宗。</p>
          </div>
          <button className="outline-btn">新建小说</button>
        </PaperCard>

        <div className="novel-list">
          {novels.map((novel) => <NovelCard novel={novel} key={novel.id} />)}
        </div>
      </section>

      <aside className="archive-column-side">
        <TodayAdvice text={todayAdvice} />
        <RecentActivity items={recentActivities} />
      </aside>
    </div>
  )
}
