import { Container, Filters, SortPopup, Title } from '@/components/shared'
import { Categories } from '@/components/shared/categories'
import { ProductCard } from '@/components/shared/product-card'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { TopBar } from '@/components/shared/top-bar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Container className="mt-8">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductCard
                id={0}
                name="Чизбургер-пицца"
                price={300}
                imageUrl={'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif'}
              /> */}
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 0,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={0}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 0,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Чизбургер-пицца',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
              />

              {/* <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} />  */}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
