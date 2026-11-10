import './App.css';
import Lottery from "./Lottery.jsx";
import TicketNum from './TicketNum.jsx';

function App() {


  return (
    <>
      <Lottery n={3} wNum={15} />
      <br />
      <Lottery n={6} wNum={15} />
    </>
  )
}

export default App
