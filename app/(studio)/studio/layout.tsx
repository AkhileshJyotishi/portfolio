export const metadata = {
  title: "Akhilesh Jyotishi | Studio",
  description: "Update the details of Akhilesh Jyotishi here",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
