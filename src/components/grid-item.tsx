import { ReactNode } from 'react';

type Props = {
  id: number;
  children: ReactNode;
  className?: string;
};

export default ({ id, children, className = '' }: Props) => {
  return (
    <div className={className}>
      {/* Content */}
      <div className='shadow-md p-5 bg-slate-50 rounded-lg flex flex-col gap-5'>
        <div className='flex'>
          <div className='rounded-full w-7 h-7 flex items-center justify-center text-lg p-5 font-mono bg-teal-200'>
            {id}
          </div>
        </div>
        <h1 className='text-lg leading-6 font-bold text-gray-600'>
          Lorem ipsum dolor sit amet.
        </h1>
        {children}
      </div>
    </div>
  );
};
