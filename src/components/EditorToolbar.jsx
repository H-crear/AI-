export default function EditorToolbar({ words, readTime, save }) {
  return (
    <footer className="editor-toolbar">
      <div>字数：{words}</div>
      <div>预计阅读：{readTime}</div>
      <div>{save}</div>
      <div className="tool-icons">↶  B  I  ≡  ☰  🖼</div>
    </footer>
  )
}
