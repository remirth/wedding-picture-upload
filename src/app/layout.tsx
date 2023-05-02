// eslint-disable-next-line camelcase
import {JetBrains_Mono} from 'next/font/google';

import '../styles/globals.css';
import {type ChildrenProps} from '~/types/generic';
import {Header} from './header';
import {Main} from './main';
import {preloadImages} from '~/actions';
import Head from 'next/head';

export const metadata = {
  title: {
    template: '%s | Mirre Joe Bilder',
    default: 'Ladda upp',
  },
  description: 'Dela bilder i samband med Miriam och Joes bröllop',
  openGraph: {
    images: ['https://wedding-picture-upload.vercel.app/api/image/1'],
  },
};

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
  preloadImages();

  return (
    <html lang='en' className={jetBrains.variable}>
      <Head>
        <title>My page title</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>

      <body className='h-screen w-screen'>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
