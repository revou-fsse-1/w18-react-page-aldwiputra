import Logo from './Logo';

type HeaderProps = {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

function Header({ searchInput, setSearchInput }: HeaderProps) {
  return (
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
  );
}

export default Header;
