import PaperCard from './PaperCard'

export default function TodayAdvice({ text }) {
  return (
    <PaperCard className="today-advice archive-paper note-stack">
      <h4>今日写作建议</h4>
      <p>{text}</p>
    </PaperCard>
  )
}
