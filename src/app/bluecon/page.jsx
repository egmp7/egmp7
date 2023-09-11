import TouchControl from './components/touchControl';
import KeyboardControl from './components/keyboardControl'
import P5 from './components/P5.jsx'

export default function GameSketch() {

  return (
    <>
      <div className='flex flex-col min-h-screen '>
        <div className='my-auto'>
          <div className='max-w-screen-lg mx-auto'>
            <div className="relative pb-[56.25%] max-m-[43.75%] h-0">
              <P5 />
              <TouchControl name={"left"} />
              <TouchControl name={"right"} />
              <TouchControl name={"jump"} />
              <KeyboardControl />
            </div>
          </div>
        </div>
      </div>
    </>);
} 