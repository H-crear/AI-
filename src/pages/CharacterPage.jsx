import PaperCard from '../components/PaperCard'
import NoteCard from '../components/NoteCard'

export default function CharacterPage() {
  return (
    <div className="page workspace-layout">
      <aside className="workspace-left paper-card">
        <h3>人物设定</h3>
        <ul>
          <li className="active">角色档案</li>
          <li>人物关系图</li>
          <li>成长线</li>
        </ul>
      </aside>

      <section className="workspace-main">
        <PaperCard className="workspace-head"><h2>林默（主角）</h2><p>理性内敛，擅长观察与思考，目标是用AI改变行业。</p></PaperCard>
        <PaperCard className="profile-card">
          <p><b>年龄：</b>24岁</p><p><b>身份：</b>AI算法工程师 / 创业者</p><p><b>缺点：</b>不擅长情感表达，容易忽视他人感受</p>
          <div className="tags"><span>天才程序员</span><span>理想主义者</span><span>成长型主角</span></div>
        </PaperCard>
      </section>

      <aside className="workspace-right">
        <NoteCard title="人设完整度">85% · 建议补充童年经历与成长动机细节。</NoteCard>
        <NoteCard title="人设建议">加入感情线与非技术维度，增强角色立体感。</NoteCard>
      </aside>
    </div>
  )
}
