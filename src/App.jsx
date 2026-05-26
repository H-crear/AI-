import { Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import WritingDeskPage from './pages/WritingDeskPage'
import OutlinePage from './pages/OutlinePage'
import CharacterPage from './pages/CharacterPage'
import WorldPage from './pages/WorldPage'
import ForeshadowPage from './pages/ForeshadowPage'
import LibraryPage from './pages/LibraryPage'
import { topNav } from './data/siteData'

export default function App() {
  return (
    <div className="app">
      <TopNav links={topNav} />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/desk" element={<WritingDeskPage />} />
          <Route path="/outline" element={<OutlinePage />} />
          <Route path="/character" element={<CharacterPage />} />
          <Route path="/world" element={<WorldPage />} />
          <Route path="/foreshadow" element={<ForeshadowPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>
      </main>
    </div>
  )
}
