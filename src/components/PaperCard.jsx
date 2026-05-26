export default function PaperCard({ className = '', children }) {
  return <section className={`paper-card ${className}`.trim()}>{children}</section>
}
