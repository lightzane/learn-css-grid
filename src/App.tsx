import AutoColExample from './components/examples/auto-col-example';
import DenseExample from './components/examples/dense-example';
import MouseTrackExample from './components/examples/mouse-track-example';
import TailwindGrid from './components/examples/tailwind-grid';
import VanillaGrid from './components/examples/vanilla-grid';

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

        {/* Other examples */}
        <div className='py-5'>
          <span className='uppercase font-semibold sm:text-sm'>
            Other examples...
          </span>
        </div>

        {/* dense example */}
        <div className='py-5'>
          <p className='leading-6 p-5'>Dense example</p>
          <DenseExample />
        </div>

        {/* auto column example */}
        <div className='py-5'>
          <p className='leading-6 p-5'>Auto column example</p>
          <AutoColExample />
        </div>

        {/* mouse track example */}
        <div className='py-5'>
          <p className='leading-6 p-5 pb-0'>Mouse Track example</p>
          <p className='px-5 sm:text-sm text-gray-500'>
            Apply a basic 3x3 grid that can be used as a mouse track for 3D tilt
            card
          </p>
          <p className='px-5 pb-5 sm:text-sm text-gray-500'>
            Parent style:{' '}
            <code>grid-template: repeat(3, 1fr) / repeat(3, 1fr)</code>
          </p>
          <MouseTrackExample />
        </div>
      </div>
    </div>
  );
}
