import { useState } from 'react';
import Logo from './components/Logo';

function App() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <main className='max-w-screen-lg mx-auto font-inter py-5'>
      <header className='flow flex flex-col items-center'>
        <div className='max-w-sm'>
          <Logo />
        </div>
        <input
          type='text'
          className='bg-gray-700 block text-white-900 px-3 p-2 text-lg rounded-md w-[32ch] focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500'
          id='search-filter'
          value={searchInput}
          placeholder='Search'
          onChange={e => setSearchInput(e.target.value)}
        />
      </header>
    </main>
  );
}

export default App;
