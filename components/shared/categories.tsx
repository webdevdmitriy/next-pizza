'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React from 'react'

interface Props {
  className?: string
}

/*************  ✨ Codeium Command 🌟  *************/
const cats = [
  { id: 0, name: 'Пиццы' },
  { id: 1, name: 'Комбо' },
  { id: 2, name: 'Закуски' },
  { id: 3, name: 'Коктейли' },
  { id: 4, name: 'Напитки' },
]
// const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Напитки']
// /******  3631540d-c7a2-475c-96d2-1917b1b7796c  *******/

export const Categories: React.FC<Props> = ({ className }) => {
  const categoryActiveId = useCategoryStore(state => state.activeId)
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  )
}

// onClick={() => (activeIndex = index)}
