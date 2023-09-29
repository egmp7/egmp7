import dynamic from 'next/dynamic';

const Sketch = dynamic(
  () => import('./components/Sketch'),
  { ssr: false }
);

export default function GameSketch() {

  return (
    <>
      <div className='select-none' contenteditable="false">
        <div className='absolute aspect-video  h-screen  translate-x-1/2 right-1/2'>
          <div className='absolute bg-blue-400 w-full aspect-video max-w-[100vw] translate-y-1/2 bottom-1/2 translate-x-1/2 right-1/2'>
            <Sketch />
          </div>
        </div>
      </div>
    </>);
} 