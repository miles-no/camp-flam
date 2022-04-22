const TimelineDescription = ({
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
      {children}
    </p>
  )
}

export default TimelineDescription
