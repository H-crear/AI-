import { Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import WritingDeskPage from './pages/WritingDeskPage'
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
        </Routes>
      </main>
    </div>
  )
}
