'use client';
import Image from 'next/image';
import { useCart } from './cart-context';
import { featuredDishes } from '../data/menu';
import { ShoppingCart } from 'lucide-react';

const DISHES = featuredDishes;

const naira = (n: number) => `₦${n.toLocaleString('en-NG')}`;

export default function PopularMenu() {
  const { addItem } = useCart();

  return (
    <div className='container mx-auto py-8'>
      <h2 className='text-2xl font-bold text-neutral-400 mb-16 text-center'>
          Popular Dishes
        </h2>
      <div className=''>
        <div
          id='menu'
          className='relative mx-auto max-w-7xl px-6 pb-14 sm:px-10 lg:px-12 '>
          <div className='flex items-center  justify-center gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
            {DISHES.map((dish, i) => (
              <article
                key={i}
                className='group relative mt-12 w-56 shrink-0 rounded-3xl bg-neutral-900/80 p-5 pt-16 ring-1 ring-white/5 backdrop-blur transition hover:ring-amber-500/40'>
                {/* Overlapping dish image */}
                <div className='absolute -top-12 left-1/2 h-28 w-28 -translate-x-1/2 overflow-hidden rounded-full ring-4 ring-neutral-950 shadow-xl'>
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes='112px'
                    className='object-cover transition duration-300 group-hover:scale-105'
                  />
                </div>

                <h3 className='text-center text-base font-semibold'>
                  {dish.name}
                </h3>
                <p className='text-center text-xs text-neutral-400'>
                  {dish.desc}
                </p>

                <div className='mt-4 flex items-center justify-between'>
                  <span className='font-semibold text-amber-500'>
                    {naira(dish.price)}
                  </span>
                  <button
                    onClick={() =>
                      addItem({
                        id: dish.id,
                        name: dish.name,
                        price: dish.price,
                        image: '🍽️',
                      })
                    }
                    aria-label={`Add ${dish.name} to order`}
                    className='grid h-9 w-9 place-items-center rounded-full bg-linear-to-r from-amber-600 to-amber-500 text-white shadow-md shadow-amber-600/30 transition hover:scale-105'>
                    <ShoppingCart />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
