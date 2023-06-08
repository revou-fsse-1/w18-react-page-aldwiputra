import React, { useEffect, useRef, useState } from 'react';

type ModalProps = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
type FormError = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
};

function Modal(props: ModalProps) {
  const formWrapper = useRef<HTMLDivElement | null>(null);
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
  });
  const [formStateError, setFormStateError] = useState<FormError>({
    email: null,
    firstName: null,
    lastName: null,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    setFormStateError({
      email: null,
      firstName: null,
      lastName: null,
    });

    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g.test(formState.email)) {
      setFormStateError(prev => ({ ...prev, email: 'Email is not valid.' }));
    }
    if (!formState.email) {
      setFormStateError(prev => ({ ...prev, email: 'Email cannot be empty.' }));
    }
    if (!formState.firstName) {
      setFormStateError(prev => ({ ...prev, firstName: 'Firstname cannot be empty.' }));
    }
    if (!formState.lastName) {
      setFormStateError(prev => ({ ...prev, lastName: 'Lastname cannot be empty.' }));
    }

    setSubmitted(true);
  }

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

  useEffect(() => {
    if (submitted && !formStateError.email && !formStateError.firstName && !formStateError.lastName) {
      props.setShowModal(false);
    }
  }, [submitted, formStateError, props]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-zinc-900/80 backdrop-blur-sm'>
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
            value={formState.email}
            placeholder='johndoe@gmail.com'
            onChange={e => setFormState({ ...formState, email: e.target.value })}
          />
          <span className='block text-sm mt-1 text-red-600 font-medium'>{formStateError.email}</span>
        </div>
        <div className='mt-4'>
          <label htmlFor='firstName' className='font-medium text-sm'>
            Firstname
          </label>
          <input
            type='text'
            className='bg-gray-700/20 mt-2 block text-zinc-800 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
            id='firstName'
            value={formState.firstName}
            placeholder='John'
            onChange={e => setFormState({ ...formState, firstName: e.target.value })}
          />
          <span className='block text-sm mt-1 text-red-600 font-medium'>{formStateError.firstName}</span>
        </div>
        <div className='mt-4'>
          <label htmlFor='lastName' className='font-medium text-sm'>
            Lastname
          </label>
          <input
            type='text'
            className='bg-gray-700/20 mt-2 block text-zinc-800 px-4 p-3 rounded-md w-full focus:outline-none placeholder:text-gray-600 focus:ring-2 focus:ring-blue-500'
            id='lastName'
            value={formState.lastName}
            placeholder='Doe'
            onChange={e => setFormState({ ...formState, lastName: e.target.value })}
          />
          <span className='block text-sm mt-1 text-red-600 font-medium'>{formStateError.lastName}</span>
        </div>
        <button
          onClick={handleSubmit}
          className='py-3 w-full mt-8 bg-emerald-500 font-medium text-lg text-gray-200 rounded-lg hover:ring-2 hover:ring-emerald-500/20 hover:bg-sky-500'>
          Register
        </button>
      </div>
    </div>
  );
}

export default Modal;
