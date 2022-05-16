import { ReactComponent as SVGSearch } from '../../Assets/img/search.svg'

function Search() {
  return (
    <form className='flex justify-center'>
      <div className='flex border-b-2 border-ligthGray w-full mx-6 justify-between'>
        <input type="text" className='text-sm px-1 focus-visible:outline-none' name="search" id="search" placeholder="¿Qué estás buscando?" />
        <button type="submit" title='Search'><SVGSearch /></button>
      </div>
    </form>
  )
}

export default Search