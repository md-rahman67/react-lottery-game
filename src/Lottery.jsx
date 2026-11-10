import { useState } from "react";
import { genTicket } from "./helper";

export default function Lottery() {

    const [ticket, setTicket] = useState(genTicket(3));
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
        </>
    )
}