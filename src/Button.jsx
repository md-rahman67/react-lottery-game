export default function Button({ action }) {
    return (
        <>
            <button className="buy-ticket-btn" onClick={action}>
                Buy Lottery Ticket
            </button>
        </>
    )
}