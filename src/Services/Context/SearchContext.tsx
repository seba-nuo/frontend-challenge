import { createContext, useState } from 'react'
import { ChildrenProps, productsProps } from '../../../types';

export const SearchContext = createContext<productsProps[]>([])
export const UpdateSearchContext = createContext<(products: productsProps[]) => void>(() => { })

export function SearchProvider({ children }: ChildrenProps) {

  const [search, setSearch] = useState<productsProps[]>([])

  const udpateSearch = (products: productsProps[]) => setSearch(products)

  return (
    <SearchContext.Provider value={search}>
      <UpdateSearchContext.Provider value={udpateSearch}>
        {children}
      </UpdateSearchContext.Provider>
    </SearchContext.Provider>
  )
}
