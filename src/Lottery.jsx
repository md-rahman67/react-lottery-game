import { useState } from "react";
import { genTicket, sum } from "./helper";

export default function Lottery() {

    const [ticket, setTicket] = useState(genTicket(3));

    let isWinner = sum(ticket) === 15;
    return (
        <>
            <h2>Ticket</h2>

            <p>
                <span>{ticket[0]}</span>
                <span> • </span>
                <span>{ticket[1]}</span>
                <span> • </span>
                <span>{ticket[2]}</span>
            </p>

            {isWinner ? <p>Congrats! you won 5 Lakh ruppes</p> : <p>Better luck next time</p>}
        </>
    )
}