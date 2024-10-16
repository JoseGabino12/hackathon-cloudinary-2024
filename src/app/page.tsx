import { Example } from './components/example/Example';
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
      <Start creepster={ creepster } />
      <div className='flex justify-center'>
        <a href='#example' className='flex flex-col items-center'>
          <h2>Ejemplos 🎃</h2>
          <p className='animate-bounce'>↓</p>
        </a>
      </div>
      <Example creepster={ creepster } />
    </main>
  );
}
