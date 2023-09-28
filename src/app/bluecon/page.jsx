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
            <div className="relative pb-[56.25%] max-m-[43.75%] h-0">
              <Sketch />
            </div>
          </div>
        </div>
      </div>
    </>);
} 