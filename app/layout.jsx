import { Layout } from '@/components/dom'
import '@/global.css'
// import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Joshua Lee',
  description: 'A Fullstack Developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='antialiased'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* To avoid FOUT with styled-components wrap Layout with StyledComponentsRegistry https://beta.nextjs.org/docs/styling/css-in-js#styled-components */}
        <Layout>{children}</Layout>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
