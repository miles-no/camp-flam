const TimelineHeader = ({
  children,
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
      {children}
    </h3>
  )
}

export default TimelineHeader
