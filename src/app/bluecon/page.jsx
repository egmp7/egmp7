import dynamic from 'next/dynamic';

const Sketch = dynamic(
  () => import('./components/Sketch'),
  { ssr: false }
);

export default function GameSketch() {

  return (
    <>
      <div className='flex flex-col min-h-screen '>
        <div className='my-auto'>
          <div className='max-w-screen-lg mx-auto'>
              <Sketch />
          </div>
        </div>
      </div>
    </>);
} 