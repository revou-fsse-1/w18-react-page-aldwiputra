import { useState } from 'react';
import { places } from './data/places';
import PhotoCard from './components/PhotoCard';
import Header from './components/Header';
import Like from './components/Like';
import Modal from './components/Modal';
import Snackbar from './components/Snackbar';

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [placesState, setPlaceState] = useState(places);
  const [showModal, setShowModal] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

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
        {filteredList.length ? (
          filteredList.map((item, idx) => (
            <PhotoCard
              key={item.id}
              idx={idx}
              title={item.title}
              imgUrl={item.imgUrl}
              isLiked={item.isLiked}
              updatePlace={updatePlace}
            />
          ))
        ) : (
          <div className='col-span-full text-center'>
            <p className='block font-medium text-3xl'>No Photos found. Try again.</p>
          </div>
        )}
      </section>
      <div className='max-w-5xl mx-auto flex justify-center mb-14'>
        <button
          disabled={isRegistered}
          onClick={() => setShowModal(true)}
          className='px-8 py-3 rounded-md bg-emerald-600 font-medium text-lg hover:bg-emerald-700 ring-4 ring-emerald-600/20'>
          Join Membership
        </button>
      </div>

      <div className='fixed top-5 right-5 flex items-center gap-2 z-50 py-2 px-4 bg-emerald-600 rounded-lg ring-4 ring-emerald-600/20'>
        <Like w={4} h={4} />
        <p className='text-md font-medium whitespace-nowrap'>Likes ({totalLikes})</p>
      </div>

      {isRegistered && <Snackbar />}

      {showModal && <Modal setShowModal={setShowModal} setIsRegistered={setIsRegistered} />}
    </main>
  );
}

export default App;
