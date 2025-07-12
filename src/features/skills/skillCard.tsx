export const SkillCard = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <div className="lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-4 md:mt-2 sm:col-start-1 sm:col-end-1 sm:mt-2">
      <h3 className="font-bold text-zinc-500">{title}</h3>
      <ul className="list-disc ml-4 text-md">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  )
}