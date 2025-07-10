export const SkillCard = ({ title, items }: { title: string, items: string[] }) => {
  return (
    <div className="basis-2/3">
      <h3 className="font-bold text-zinc-500">{title}</h3>
      <ul className="list-disc ml-4 text-md">
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  )
}