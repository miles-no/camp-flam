const TimelineHeader = ({
  children,
}: React.HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h3 className="text-md font-semibold text-gray-900 dark:text-white lg:text-lg">
      {children}
    </h3>
  )
}

export default TimelineHeader
