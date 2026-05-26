export default function SideMenu({ title, items }) {
  return (
    <aside className="workspace-left paper-card">
      <h3>{title}</h3>
      <ul>
        {items.map((it) => (
          <li className={it.active ? 'active' : ''} key={it.label}>{it.label}</li>
        ))}
      </ul>
    </aside>
  )
}
