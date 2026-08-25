import { useCallback, useEffect, useState } from 'react'

const read = () => document.documentElement.dataset.theme || 'light'

/** Light/dark theme, persisted to localStorage. The initial value is set by
 *  the inline script in index.html so there is no flash on first paint. */
export default function useTheme() {
  const [theme, setTheme] = useState(read)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage blocked — the in-memory value still works for this session */
    }
  }, [theme])

  const toggle = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    [],
  )

  return [theme, toggle]
}
