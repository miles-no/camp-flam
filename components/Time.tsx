const Time = ({ children }: React.HTMLAttributes<HTMLTimeElement>) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-300">
      {children}
    </time>
  )
}

export default Time
