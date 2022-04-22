const Time = ({ children }: React.HTMLAttributes<HTMLTimeElement>) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {children}
    </time>
  )
}

export default Time
