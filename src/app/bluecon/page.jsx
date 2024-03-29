import dynamic from 'next/dynamic';

const Sketch = dynamic(
  () => import('./components/Sketch'),
  { ssr: false }
);

export default function GameSketch() {

  return (
    <>
      <div className='relative select-none' contentEditable={false}>
        <div className='absolute w-screen h-screen overflow-hidden'>
          <div className='absolute aspect-video  h-screen  translate-x-1/2 right-1/2'>
            <div className='absolute bg-blue-400 w-full aspect-video max-w-[100vw] lg:max-w-screen-lg translate-y-1/2 bottom-1/2 translate-x-1/2 right-1/2'>
              <Sketch />
            </div>
          </div>
        </div>
      </div>
    </>);
} 