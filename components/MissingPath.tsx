"use client"

import { useEffect, useState } from "react"

// The 404 page is one static file for every bad URL, so the path is only known in the browser.
export function MissingPath() {
  const [path, setPath] = useState("<unknown>")
  useEffect(() => setPath(window.location.pathname), [])
  return <>{path}</>
}
