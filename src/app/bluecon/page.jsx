import TouchControl from './components/TouchControl.jsx';
import KeyboardControl from './components/KeyboardControl.jsx'
import P5 from './components/P5.jsx'

export default function GameSketch() {

  return (
    <>
      <div className="relative pb-[56.25%] max-m-[43.75%] h-0">
        <P5 />
        <TouchControl name={"left"} />
        <TouchControl name={"right"} />
        <TouchControl name={"jump"} />
        <KeyboardControl />
      </div>
    </>);
}