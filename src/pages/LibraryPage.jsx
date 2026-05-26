import PaperCard from '../components/PaperCard'
import SectionTitle from '../components/SectionTitle'
import SideMenu from '../components/SideMenu'
import MaterialCategoryCard from '../components/MaterialCategoryCard'
import MaterialCard from '../components/MaterialCard'
import DraftPaper from '../components/DraftPaper'
import FolderCard from '../components/FolderCard'
import LibraryAdviceNotes from '../components/LibraryAdviceNotes'
import MaterialUseList from '../components/MaterialUseList'
import { libraryHint, categories, materials, draft, draftTips, folders, notes, useNext } from '../data/mockLibrary'

const menuItems = [
  { label: '灵感碎片', active: true },
  { label: '素材档案', active: false },
  { label: '资料夹', active: false }
]

export default function LibraryPage() {
  return (
    <div className="page library-workspace">
      <SideMenu title="资料库 / 灵感库" items={menuItems} />

      <section className="library-main">
        <PaperCard className="workspace-head archive-paper" decorative={false}>
          <SectionTitle title="资料库 / 灵感库" subtitle="收藏金句、场景、人物原型和参考资料，让每一次灵感都能被重新调用。" />
          <p className="top-space-note">{libraryHint}</p>
        </PaperCard>

        <div className="category-row">
          {categories.map((item, idx) => <MaterialCategoryCard key={item[0]} item={item} idx={idx} />)}
        </div>

        <div className="materials-grid">
          {materials.map((m, idx) => <MaterialCard key={m[1]} item={m} idx={idx} />)}
        </div>

        <DraftPaper draft={draft} tips={draftTips} />

        <PaperCard className="folder-wrap archive-paper" decorative={false}>
          <h4>资料夹 / 收藏夹</h4>
          <div className="folder-grid">
            {folders.map((f) => <FolderCard key={f[0]} folder={f} />)}
          </div>
        </PaperCard>

        <MaterialUseList items={useNext} />
      </section>

      <LibraryAdviceNotes notes={notes} />
    </div>
  )
}
