export default function WritingDeskPage() {
  return (
    <section className="page-wrap desk-layout">
      <aside className="paper left-notes">
        <h3>章节便签</h3>
        <ul>
          <li>第 6 章目标：公开质疑会，主角反击</li>
          <li>冲突升级：导师立场动摇</li>
          <li>伏笔回收：第三章合同细节</li>
        </ul>
      </aside>

      <article className="paper manuscript">
        <h2>第 6 章：风口前夜</h2>
        <p className="draft">
          林跃站在会议室门口，手里攥着打印好的数据清单。窗外是雨后的城市，玻璃上映着他略显苍白的脸……
        </p>
        <p className="editor-note">AI 批注：本段氛围很好，可在结尾增加“突然的阻力”制造钩子。</p>
      </article>

      <aside className="paper right-tools">
        <h3>编辑助手</h3>
        <button>续写 300 字</button>
        <button>增强冲突</button>
        <button>润色文风</button>
        <button>生成下一章提纲</button>
      </aside>
    </section>
  )
}
