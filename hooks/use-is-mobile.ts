import * as React from "react"
import { Platform, Dimensions } from "react-native"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const isNative = Platform.OS === "ios" || Platform.OS === "android"

  // 1. Native fallback (using Dimensions)
  const getNativeValue = () =>
    Dimensions.get("window").width < MOBILE_BREAKPOINT

  // 2. Web logic (matchMedia)
  const getWebValue = () =>
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false

  const getValue = () => (isNative ? getNativeValue() : getWebValue())

  const [isMobile, setIsMobile] = React.useState(getValue)

  React.useEffect(() => {
    if (isNative) {
      const subscription = Dimensions.addEventListener("change", () => {
        setIsMobile(getNativeValue())
      })
      return () => subscription?.remove()
    }

    // --- Web: matchMedia listener ---
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const onChange = () => setIsMobile(getWebValue())

    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return isMobile
}
