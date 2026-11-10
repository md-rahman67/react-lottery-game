import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, wNum = 15 }) {

    const [ticket, setTicket] = useState(genTicket(n));

    let isWinner = sum(ticket) === wNum;
    return (
        <>

            <Ticket tArr={ticket} />
            {/* <h2>Ticket</h2>

            <p>
                <span>{ticket[0]}</span>
                <span> • </span>
                <span>{ticket[1]}</span>
                <span> • </span>
                <span>{ticket[2]}</span>
            </p> */}

            {isWinner ? <p>Congrats! you won 5 Lakh ruppes</p> : <p>Better luck next time</p>}
        </>
    )
}