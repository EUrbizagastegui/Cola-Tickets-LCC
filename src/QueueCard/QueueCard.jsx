import './QueueCard.css'

const QueueCard = ({type, ticket, counter, patient, office}) => {
    return (
        <div className='queue-card'>
            {type === "ticket" ?
                <>
                    <h1>{ticket}</h1>
                    <h1>{counter}</h1>
                </>
                :
                <>
                    <h1>{patient}</h1>
                    <h1>{office}</h1>
                </>}
        </div>
    )
}

export default QueueCard
