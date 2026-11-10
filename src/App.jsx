import './App.css';
import Lottery from "./Lottery.jsx";
import TicketNum from './TicketNum.jsx';

function App() {


  return (
    <>
      <Lottery n={3} wNum={15} />
      <Lottery n={6} wNum={30} />
      {/* <TicketNum tNum={[1, 2, 3]} /> */}
    </>
  )
}

export default App
