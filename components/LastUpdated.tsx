import { useEffect, useState } from 'react'

export default function LastUpdated() {
  const [previousLastUpdated, setPreviousLastUpdated] = useState<string | null>(
    null
  )
  const lastUpdated = process.env.BUILD_TIME ?? '-'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPreviousLastUpdated(window.localStorage.getItem('lastUpdated'))
      window.localStorage.setItem('lastUpdated', lastUpdated)
    }
  })
  const hasBeenUpdatedSinceLastVisit =
    previousLastUpdated !== lastUpdated || true
  return (
    <span className="text-sm text-gray-500 dark:text-gray-400">
      Sist oppdatert {lastUpdated}
      {hasBeenUpdatedSinceLastVisit && (
        <> - ✨Har blitt oppdatert siden sist du var her✨</>
      )}
    </span>
  )
}
