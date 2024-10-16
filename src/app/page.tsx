import { Example } from './components/example/Example';
import { Header } from './components/Header';
import { Start } from './components/home/Start';

import { Creepster, Denk_One } from 'next/font/google';

const creepster = Creepster({
  weight: '400',
  subsets: ['latin'],
})

const denk = Denk_One({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={ `${denk.className}`}>
      <Header />
      <Start creepster={ creepster } />
      <Example creepster={ creepster } />
    </main>
  );
}
