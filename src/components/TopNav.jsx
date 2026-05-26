import { NavLink } from 'react-router-dom'

export default function TopNav({ links }) {
  const primary = links.slice(0, 4)

  return (
    <header className="top-nav">
      <div className="brand-mark">
        <span className="logo">🪶</span>
        <div>
          <h1>小说副驾</h1>
          <p>你的灵感，加速成书</p>
        </div>
      </div>

      <nav className="main-links">
        {primary.map((link) => (
          <NavLink key={link.label} to={link.to} end={link.to === '/'}>{link.label}</NavLink>
        ))}
      </nav>

      <div className="top-actions">
        <button className="login-btn">登录</button>
        <button className="ink-btn">开始创作 ✦</button>
      </div>
    </header>
  )
}
