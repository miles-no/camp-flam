const TimelineItem = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute -left-1.5 mt-3 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      {children}
    </li>
  )
}

export default TimelineItem
