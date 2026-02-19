import './global.css';

import bodyStyles from './body_section.module.css';
import topStyles from './top_section.module.css'

import Title from '@/components/Title';
import { pageTitles } from '@/utils/Maps';
import type { Viewport } from 'next';
import Link from 'next/link';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const routes = Object.keys(pageTitles);

  return (
    <html lang="en">
      <body>
        <div className={topStyles.top_section}>
          <div className={topStyles.top_section_text}>
            <Title />
            <div className={topStyles.nav_bar_div}>
              <ul id="nav_bar">
                {routes.map(route => <li key={routes.indexOf(route)}><Link className={topStyles.nav_bar_a} href={route}>{pageTitles[route]}</Link></li>)}
              </ul>
            </div>
          </div>
        </div>

        <div className={bodyStyles.body_section}>
          <div className={bodyStyles.body_section_text}>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
