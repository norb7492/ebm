import { SearchIcon } from '@heroicons/react/outline'
export default function SearchBar() {
  return (
    <div className='mt-1 flex rounded-md shadow-sm'>
      <input
        className='block 
                            ml-3
                        max-w-sm 
                        h-8
                        flex-1            
                        rounded-l-md 
                        border-gray-300 
                        focus:border-indigo-500 
                        focus:ring-indigo-500 '
        type='text'
        name='search'
        id='search'
        placeholder='Busque por termos ou código'
      />
      <span className='sm:ml-3'>
        <button
          type='button'
          className='
                            inline-flex 
                            items-center 
                            rounded-r-md 
                            rounded-l-0
                            border 
                            border-transparent 
                            bg-indigo-600 
                            px-4 
                            py-2 
                            text-sm 
                            font-medium 
                            text-white 
                            shadow-sm 
                            hover:bg-indigo-700 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-indigo-500 
                            focus:ring-offset-2'
        >
          <SearchIcon className='-ml-1 mr-0 h-5 w-5' aria-hidden='true' />
        </button>
      </span>
    </div>
  )
}
