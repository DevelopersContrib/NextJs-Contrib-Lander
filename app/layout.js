import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss'


export const metadata = {
  title: 'Welcome to Contrib Lander Frameworks',
  description: 'Welcome to Contrib Lander Frameworks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='tw-antialiased'>{children}</body>
    </html>
  )
}
