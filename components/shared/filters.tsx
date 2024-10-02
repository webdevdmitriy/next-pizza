import React from 'react'
import { FilterCheckbox } from './'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersGroup } from './checkbox-filters-group'
interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      {/* <Title text="Фильтрация" size="sm" className="mb-5 font-bold pb-4 border-b border-b-neutral-100" /> */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" min={100} max={30000} placeholder={'1000'} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингридиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
        ]}
        items={[
          {
            text: 'Сырный соус',
            value: '1',
          },
          {
            text: 'Моццарелла',
            value: '2',
          },
          {
            text: 'Чеснок',
            value: '3',
          },
          {
            text: 'Чеснок4',
            value: '4',
          },
          {
            text: 'Чесно5',
            value: '5',
          },
          {
            text: 'Чеснок5',
            value: '5',
          },
          {
            text: 'Чеснок6',
            value: '6',
          },
          {
            text: 'Чеснок7',
            value: '7',
          },
          {
            text: 'Чеснок8',
            value: '8',
          },
        ]}
      />
    </div>
  )
}
