export default function PaperCard({ className = '', children, decorative = true }) {
  return (
    <section className={`paper-card ${decorative ? 'paper-decorative' : ''} ${className}`.trim()}>
      {children}
    </section>
  )
}
