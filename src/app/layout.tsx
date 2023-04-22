// eslint-disable-next-line camelcase
import {JetBrains_Mono} from 'next/font/google';

import '../styles/globals.css';
import {type ChildrenProps} from '~/types/generic';
import {Header} from './header';

const jetBrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  display: 'block',
  variable: '--font-jetbrains',
});

/**
 * @param {unknown} param0 - children
 * @param {React.ReactNode} param0.children - children
 * @returns {JSX.Element} JSX.Element
 */
export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: ChildrenProps): JSX.Element {
  return (
    <html lang='en' className={jetBrains.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
