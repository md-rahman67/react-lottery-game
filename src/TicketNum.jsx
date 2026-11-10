// import "./TicketNum.css";

export default function TicketNum({ tNum }) {
    return (
        <>
            <p className="ticBox">
                {tNum.map((n, idx) => (
                    <span className="ticNumber" key={idx}>
                        {n}
                    </span>
                ))}
            </p>
        </>
    );
}