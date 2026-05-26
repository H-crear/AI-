import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArchivePage from './pages/ArchivePage'
import WritingDeskPage from './pages/WritingDeskPage'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/archive', label: '我的小说' },
  { to: '/desk', label: '章节写作工作台' }
]

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar page-wrap">
        <div className="brand">
          <span className="brand-icon">🪶</span>
          <div>
            <h1>小说副驾</h1>
            <p>你的灵感，加速成书</p>
          </div>
        </div>
        <nav>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="cta">开始创作 ✦</button>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/desk" element={<WritingDeskPage />} />
        </Routes>
      </main>
    </div>
  )
}
