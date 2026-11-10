
import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, wNum = 15 }) {
    const [ticket, setTicket] = useState(genTicket(n));

    let isWinner = sum(ticket) === wNum;

    function buyTicket() {
        setTicket(genTicket(n));
    }

    return (
        <section className="lottery-container">
            <div className="lottery-heading">
                <h1>LUCKY LOTTERY</h1>
                <p>Your chance to win big!</p>
            </div>

            <Ticket tArr={ticket} />

            <p className={isWinner ? "winner-message" : "try-message"}>
                {isWinner
                    ? "Congratulations! You won 5 Lakh Rupees!"
                    : "Better luck next time!"}
            </p>

            <button className="buy-ticket-btn" onClick={buyTicket}>
                Buy Lottery Ticket
            </button>
        </section>
    );
}
