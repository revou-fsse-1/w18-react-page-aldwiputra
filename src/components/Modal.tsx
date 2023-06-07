import React, { useEffect, useRef, useState } from 'react';

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal(props: ModalProps) {
  const formWrapper = useRef<HTMLDivElement | null>(null);
  const [formState, setFormState] = useState({
    email: {
      name: '',
      isError: false,
    },
    firstName: {
      name: '',
      isError: false,
    },
    lastName: {
      name: '',
      isError: false,
    },
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formWrapper.current && !formWrapper.current.contains(event.target as Node)) {
        props.setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-zinc-900/80 backdrop-blur-sm'
      onClick={e => {
        console.log(e.currentTarget);
      }}>
      <div
        ref={formWrapper}
        className='bg-zinc-200/50 p-8 text-zinc-900 rounded-md w-2/6 min-w-[25rem] border-gray-100/20 border-2 backdrop-blur-sm'>
        <h2 className='text-3xl font-bold'>Join the Club</h2>
        <div className='h-[1.5px] mt-4 w-full bg-gray-800/20'></div>
        <div className='mt-4'>
          <label htmlFor='email' className='font-medium text-sm'>
            Email
          </label>
          <input
            type='email'
            className='bg-gray-700/20 mt-2 block text-zinc-800 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
            id='email'
            value={formState.email.name}
            placeholder='johndoe@gmail.com'
            onChange={e =>
              setFormState({ ...formState, email: { ...formState.email, name: e.target.value } })
            }
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='firstName' className='font-medium text-sm'>
            Firstname
          </label>
          <input
            type='text'
            className='bg-gray-700/20 mt-2 block text-zinc-800 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
            id='firstName'
            value={formState.firstName.name}
            placeholder='John'
            onChange={e =>
              setFormState({ ...formState, firstName: { ...formState.firstName, name: e.target.value } })
            }
          />
        </div>
        <div className='mt-4'>
          <label htmlFor='lastName' className='font-medium text-sm'>
            Lastname
          </label>
          <input
            type='text'
            className='bg-gray-700/20 mt-2 block text-zinc-800 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
            id='lastName'
            value={formState.lastName.name}
            placeholder='Doe'
            onChange={e =>
              setFormState({ ...formState, lastName: { ...formState.lastName, name: e.target.value } })
            }
          />
        </div>
        <button className='py-3 w-full mt-8 bg-emerald-500 font-medium text-lg text-gray-200 rounded-lg hover:ring-2 hover:ring-emerald-500/20 hover:bg-sky-500'>
          Register
        </button>
      </div>
    </div>
  );
}

export default Modal;
