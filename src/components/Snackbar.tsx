function Snackbar() {
  return (
    <div className='fixed flex items-center gap-2 bottom-6 left-1/2 -translate-x-1/2 bg-slate-200 text-zinc-900 px-8 py-4 rounded-md z-50 ring-4 ring-slate-200/20 min-w-[15rem]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='2'
        stroke='currentColor'
        className='w-8 h-8 stroke-emerald-500 min-w-[1.5rem] aspect-square'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>

      <p className='md:whitespace-nowrap text-sm md:text-base'>
        Your registration has been succesfully submitted.
      </p>
    </div>
  );
}

export default Snackbar;
