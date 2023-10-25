

const InsightRoll = ({insights}) => {
  return (
      <div className="bg-accent dark:bg-accentDark text-white dark:text-black text-lg py-2 w-full overflow-hidden">
      <div className="flex whitespace-nowrap animate-roll tracking-wide">
        {
          insights.map(insight => (
            <div key={insight}>
              {insight} <span className="px-4">|</span>
            </div>
          ))
        }
          </div>
    </div>
  )
}

export default InsightRoll