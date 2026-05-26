import PaperCard from '../components/PaperCard'

export default function HomePage() {
  return (
    <div className="page page-home">
      <div className="watercolor left" />
      <div className="watercolor right" />

      <PaperCard className="hero-paper">
        <p className="meta">小说副驾 · 创作起笔</p>
        <h2>把一个念头，写成一本小说</h2>
        <p className="lead">从一句灵感开始，像一位安静编辑在旁边帮你搭设定、理大纲、稳节奏。</p>
        <div className="draft-input">
          <p>我想写一个普通人重生后靠 AI 翻盘人生的都市小说……</p>
          <button className="ink-btn">开始生成故事</button>
        </div>
      </PaperCard>

      <PaperCard className="preview-paper">
        <h3>✨ AI 生成预览</h3>
        <p><b>书名：</b>《我靠AI翻盘人生》</p>
        <p><b>主角：</b>林默，普通职场人，重生后带着未来认知逆袭。</p>
        <p><b>钩子：</b>这一次，他不再错过机会，而是一步步反击。</p>
      </PaperCard>
    </div>
  )
}
