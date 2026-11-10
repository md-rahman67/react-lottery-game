import './App.css';
import Lottery from "./Lottery.jsx";
import TicketNum from './TicketNum.jsx';

function App() {

  function wRule(ticket) {
    return ticket[0] === 0;
  }

  return (
    <>
      <Lottery n={3} wNum={15} wRule={wRule} />
    </>
  )
}

export default App
