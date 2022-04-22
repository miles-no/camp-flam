const TimelineItem = ({ children }: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="mb-6 ml-4 lg:mb-10">
      <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-300 dark:border-gray-900 dark:bg-gray-700"></div>
      {children}
    </li>
  )
}

export default TimelineItem
