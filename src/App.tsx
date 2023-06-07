import { useState } from 'react';
import { places } from './data/places';
import PhotoCard from './components/PhotoCard';
import Header from './components/Header';
import Like from './components/Like';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [placesState, setPlaceState] = useState(places);

  const filteredList = placesState.filter(place =>
    searchInput === '' ? true : place.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const totalLikes = placesState.filter(place => place.isLiked).length;

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
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <section className='max-w-5xl mx-auto grid gap-6 auto-fit mt-10 mb-10'>
        {filteredList.map((item, idx) => (
          <PhotoCard
            key={item.id}
            idx={idx}
            title={item.title}
            imgUrl={item.imgUrl}
            isLiked={item.isLiked}
            updatePlace={updatePlace}
          />
        ))}
      </section>
      <div className='fixed top-5 right-5 flex items-center gap-2 z-50 p-4 bg-gray-800 rounded-lg ring-2 ring-gray-800/40'>
        <Like w={4} h={4} />
        <p className='text-md font-medium whitespace-nowrap'>Likes ({totalLikes})</p>
      </div>
    </main>
  );
}

export default App;
