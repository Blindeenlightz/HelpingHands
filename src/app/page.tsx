'use client';
import { NavBar } from '@/components/NavBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CharityList } from '@/components/CharityList';
import { roboto } from '@/lib/fonts';

export default function Home() {
  return (
    <div className={roboto.className}>
      <header>
        <NavBar />
        <Header />
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="py-24">
            <h1
              className="
                text-center text-3xl font-bold tracking-tight sm:text-4xl
                text-primary
              "
            >
              Featured Charities
            </h1>
            <p
              className="
                mt-6 text-lg leading-8 text-primary
                text-center
              "
            >
              These are some of the most important charities in
              the world. They need your help to make a difference.
            </p>
          </div>
          <CharityList />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
