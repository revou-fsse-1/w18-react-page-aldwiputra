import { useState } from 'react';
import Logo from './components/Logo';
import { places } from './data/places';
import PhotoCard from './components/PhotoCard';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [placesState, setPlaceState] = useState(places);

  const filteredList = placesState.filter(place =>
    searchInput === '' ? true : place.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  function updatePlace(idx: number, isLiked: boolean) {
    const newArray = [...placesState];
    newArray[idx] = {
      ...newArray[idx],
      isLiked: isLiked,
    };

    setPlaceState(newArray);
  }

  return (
    <main className='px-6 font-inter py-5'>
      <header className='flow flex flex-col items-center'>
        <div className='max-w-sm'>
          <Logo />
        </div>
        <input
          type='text'
          className='bg-gray-700 block text-white-900 px-3 p-2 text-lg rounded-md w-full max-w-[40ch] focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500'
          id='search-filter'
          value={searchInput}
          placeholder='Search'
          onChange={e => setSearchInput(e.target.value)}
        />
      </header>
      {filteredList.map((item, idx) => (
        <PhotoCard
          idx={idx}
          title={item.title}
          imgUrl={item.imgUrl}
          isLiked={item.isLiked}
          updatePlace={updatePlace}
        />
      ))}
    </main>
  );
}

export default App;
