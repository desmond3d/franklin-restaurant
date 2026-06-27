'use client';
import Image from 'next/image';
import Link from 'next/link';

const AVATARS = [1, 12, 5];

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-neutral-950 text-white min-h-screen'>
      {/* Ambient glow */}
      <div className='pointer-events-none absolute -right-32 top-10 h-[34rem] w-[34rem] rounded-full bg-amber-600/20 blur-[120px]' />
      <div className='pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-emerald-700/10 blur-[120px]' />

      {/* Floating basil leaves */}
      <Leaf className='left-[4%] top-[55%] rotate-[18deg] text-3xl' />
      <Leaf className='right-[44%] top-[30%] -rotate-12 text-4xl' />
      <Leaf className='right-[8%] top-[12%] rotate-[8deg] text-2xl' />

      <div className='relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:pt-20 mt-15'>
        {/* ---- Left: copy ---- */}
        <div className='order-2 lg:order-1'>
          <h1 className='font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl'>
            it&apos;s not just{' '}
            <span className='text-white'>Food, It&apos;s an</span>{' '}
            <span className='text-amber-400'>Experience.</span>
          </h1>

          <p className='mt-6 max-w-md text-sm leading-relaxed text-neutral-400'>
            Seasonal plates crafted from the freshest ingredients, plated to
            delight and served to remember.
          </p>

          {/* CTAs */}
          <div className='mt-8 flex flex-wrap items-center gap-4'>
            <Link
              href='/menu'
              className='rounded-full bg-linear-to-r from-amber-600 to-amber-500 px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-amber-600/30 transition hover:from-amber-500 hover:to-amber-400'>
              View Menu
            </Link>
            <Link
              href='/menu'
              className='rounded-full bg-white px-8 py-3.5 text-sm font-semibold tracking-wide text-neutral-900 transition hover:bg-neutral-200'>
              Order Now
            </Link>
          </div>

          {/* Reviews */}
          <div className='mt-10'>
            <p className='text-xs font-medium uppercase tracking-widest text-neutral-400'>
              Reviews
            </p>
            <div className='mt-3 flex items-center gap-3'>
              <div className='flex items-center'>
                {AVATARS.map((id, i) => (
                  <span
                    key={id}
                    className='relative -ml-2 first:ml-0 h-9 w-9 overflow-hidden rounded-full border-2 border-neutral-950'
                    style={{ zIndex: AVATARS.length - i }}>
                    <Image
                      src={`https://i.pravatar.cc/72?img=${id}`}
                      alt='Diner'
                      fill
                      sizes='36px'
                      className='object-cover'
                    />
                  </span>
                ))}
                <span className='-ml-2 grid h-9 w-9 place-items-center rounded-full border-2 border-neutral-950 bg-neutral-800 text-[10px] font-semibold'>
                  45+
                </span>
              </div>
              <div
                className='flex text-amber-400'
                aria-label='5 out of 5 stars'>
                {'★★★★★'.split('').map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ---- Right: hero dish ---- */}
        <div className='order-1 flex justify-center lg:order-2'>
          <div className='relative aspect-square w-[78vw] max-w-md'>
            {/* Plate backdrop */}
            <div className='absolute inset-0 rounded-full bg-linear-to-br from-neutral-800 to-neutral-900 shadow-2xl shadow-black/60 ring-1 ring-white/5' />
            <div className='absolute inset-4 overflow-hidden rounded-full ring-1 ring-white/10'>
              <Image
                src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80'
                alt='Fresh garden salad bowl'
                fill
                priority
                sizes='(max-width: 1024px) 78vw, 28rem'
                className='object-cover'
              />
            </div>
            
            {/* Floating cherry tomato accent */}
            <span className='absolute -right-2 top-1/3 text-4xl drop-shadow-lg'>
              🍅
            </span>
          </div>
        </div>
      </div>

      {/* ---- Featured dishes strip ---- */}
      
      
    </section>
  );
}

function Leaf({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute select-none opacity-90 drop-shadow-lg ${className}`}>
      🌿
    </span>
  );
}
