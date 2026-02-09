import './globals.css'

export const metadata = {
  title: 'Exams - Make Examination Seamless',
  description: 'A modern examination platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
