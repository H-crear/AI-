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
        <NavLink to="/" end>首页</NavLink>
        <NavLink to="/archive">我的小说</NavLink>
        <a href="#">模板</a>
        <a href="#">价格</a>
      </nav>
      <button className="ink-btn">开始创作 ✦</button>
    </header>
  )
}
