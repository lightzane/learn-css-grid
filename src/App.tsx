import DenseExample from './components/dense-example';
import TailwindGrid from './components/tailwind-grid';
import VanillaGrid from './components/vanilla-grid';

export default function App() {
  return (
    <div className='h-full overflow-y-auto'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
        <div className='py-5'>
          <p className='leading-6 p-5 text-lg tracking-wide'>Vanilla</p>
          <VanillaGrid />
        </div>
        <div className='py-5'>
          <p className='leading-6 p-5 text-lg tracking-wide'>Tailwind</p>
          <TailwindGrid />
        </div>
        <hr />
        <div className='py-5'>
          <span className='uppercase font-semibold sm:text-sm'>
            Other examples...
          </span>
          <p className='leading-6 p-5'>Dense example</p>
          <DenseExample />
        </div>
      </div>
    </div>
  );
}
