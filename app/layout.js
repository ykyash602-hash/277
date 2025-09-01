import './globals.css'

export const metadata = {
  title: 'Vercel OpenRouter Chat',
  description: 'Chat AI powered by OpenRouter and deployed on Vercel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
