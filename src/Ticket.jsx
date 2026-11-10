
import TicketNum from "./TicketNum";

export default function Ticket({ tArr }) {
    return (
        <div className="ticket-wrapper">
            <TicketNum tNum={tArr} />
        </div>
    );
}
