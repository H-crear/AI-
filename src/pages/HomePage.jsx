export default function HomePage() {
  return (
    <section className="page-wrap home-grid">
      <article className="paper hero">
        <p className="eyebrow">小说副驾 · 创作起笔页</p>
        <h2>把一个念头，<br />写成一本小说</h2>
        <p className="subtext">
          从一句灵感开始，AI 帮你生成设定、大纲、人物与章节，像编辑在旁边批注，不抢你的笔。
        </p>
        <div className="prompt-box">
          <p>我想写一个普通人重生后靠 AI 翻盘人生的都市小说……</p>
          <button>开始生成故事 ✦</button>
        </div>
        <div className="chips">
          {['都市逆袭', '古言权谋', '悬疑反转', '言情虐文', '科幻脑洞'].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </article>

      <aside className="paper preview">
        <h3>✨ AI 生成预览</h3>
        <dl>
          <dt>书名</dt><dd>《我靠 AI 翻盘人生》</dd>
          <dt>主角</dt><dd>林跃，普通职场人，重生后带着对未来的认知逆袭崛起</dd>
          <dt>故事钩子</dt><dd>这一次，他不再错过机会，而是用 AI 和判断力一步步翻盘。</dd>
          <dt>风格</dt><dd>都市逆袭 / 节奏紧凑 / 代入感强</dd>
        </dl>
      </aside>

      <section className="feature-row">
        <div className="paper feature"><h4>灵感变设定</h4><p>一句话拓展世界、书名、主角与冲突。</p></div>
        <div className="paper feature"><h4>结构不愁</h4><p>自动生成大纲、章节拆解与人物关系。</p></div>
        <div className="paper feature"><h4>边写边推进</h4><p>续写、润色、补冲突，像有 AI 写作搭档。</p></div>
      </section>
    </section>
  )
}
