import { redirect } from "next/navigation"

export default function Home() {
  // This page will automatically redirect to the API route
  redirect("/api/redirect")

  // This won't be shown, but is required for the component
  return null
}

