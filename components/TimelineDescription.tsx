const TimelineDescription = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <p className="mb-2 text-sm font-normal text-gray-500 dark:text-gray-400 lg:text-base">
      {children}
    </p>
  )
}

export default TimelineDescription
