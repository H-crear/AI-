import { NavLink } from 'react-router-dom'

export default function TopNav({ links }) {
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
        {links.map((link) => (
          link.to === '#'
            ? <a key={link.label} href="#">{link.label}</a>
            : <NavLink key={link.label} to={link.to} end={link.to === '/'}>{link.label}</NavLink>
        ))}
      </nav>
      <button className="ink-btn">开始创作 ✦</button>
    </header>
  )
}
