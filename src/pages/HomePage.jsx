import PaperCard from '../components/PaperCard'
import { inspirationChips } from '../data/siteData'

export default function HomePage() {
  return (
    <div className="page page-home">
      <div className="watercolor left" />
      <div className="watercolor right" />

      <PaperCard className="hero-paper">
        <p className="meta">小说副驾 · 创作起笔</p>
        <h2>把一个念头，<br />写成一本小说</h2>
        <p className="lead">从一句灵感开始，像一位安静编辑在旁边帮你搭设定、理大纲、稳节奏。</p>
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
    </div>
  )
}
