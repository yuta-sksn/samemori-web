import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"

export const useClassName = (classes: string[]): string => {
  const [isPc, setIsPc] = useState<boolean>(false)
  useEffect(() => {
    setIsPc(!isMobile)
  }, [])

  if (!isPc) {
    return classes.join(' ')
  }

  return ['is-pc', ...classes].join(' ')
}