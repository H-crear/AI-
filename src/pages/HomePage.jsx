import PaperCard from '../components/PaperCard'
import { inspirationChips } from '../data/siteData'

const starts = [
  '《明天的机会我先知道》：失业青年意外获得未来情报',
  '《我在平行世界当导演》：深夜导演在平行世界拍出经典',
  '《她在古代做情报局长》：古代小人物靠情报系统翻身'
]

export default function HomePage() {
  return (
    <div className="page page-home">
      <div className="watercolor left" />
      <div className="watercolor right" />

      <PaperCard className="hero-paper manuscript-paper" decorative={false}>
        <p className="meta">小说副驾 · 创作起笔</p>
        <h2 className="home-hero-title">把一个念头，<br />写成一本小说</h2>
        <p className="lead">从一句灵感开始，AI 帮你生成设定、大纲、人物与章节。</p>
        <div className="draft-input">
          <p>我想写一个普通人重生后靠 AI 翻盘人生的都市小说……</p>
          <button className="ink-btn">开始生成故事</button>
        </div>
        <div className="chip-row">
          {inspirationChips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </PaperCard>

      <PaperCard className="preview-paper">
        <h3>✨ AI 生成预览</h3>
        <p><b>书名：</b>《我靠AI翻盘人生》</p>
        <p><b>主角：</b>林默，普通职场人，重生后带着未来认知逆袭。</p>
        <p><b>故事钩子：</b>这一次，他不再错过机会，而是一步步反击。</p>
        <p><b>风格：</b>都市逆袭 / 节奏紧凑 / 代入感强</p>
      </PaperCard>

      <div className="home-features">
        <PaperCard><h4>灵感变设定</h4><p>一句话拓展世界、书名、主角与冲突。</p></PaperCard>
        <PaperCard><h4>结构不愁</h4><p>自动生成大纲、章节拆解与人物关系。</p></PaperCard>
        <PaperCard><h4>边写边推进</h4><p>续写、润色、补冲突，像有AI写作搭档。</p></PaperCard>
      </div>

      <div className="home-origin-list">
        {starts.map((s) => <div className="home-origin-item" key={s}>{s}</div>)}
      </div>

      <PaperCard className="continue-writing">
        <div>
          <h4>继续上次创作《我靠AI翻盘人生》</h4>
          <p>已写 12 章 · 2.3 万字 · 建议继续第6章公开质疑冲突</p>
        </div>
        <button className="ink-btn">继续写第6章</button>
      </PaperCard>
    </div>
  )
}
