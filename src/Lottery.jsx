import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";

export default function Lottery({ n = 3, wNum = 15, wRule }) {
    const [ticket, setTicket] = useState(genTicket(n));

    const isWinner = wRule(ticket);

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

            <Button action={buyTicket} />
        </section>
    );
}
