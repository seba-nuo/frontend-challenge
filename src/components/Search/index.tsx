import search from '../../Assets/img/search.svg'

function Search() {
  return (
    <form className='flex justify-center'>
      <div className='flex border-b-2'>
        <input type="text" name="search" id="search" placeholder="¿Qué estás buscando?" />
        <button type="submit"><img src={search} alt="search" /></button>
      </div>
    </form>
  )
}

export default Search