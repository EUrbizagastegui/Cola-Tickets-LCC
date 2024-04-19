import './TicketsQueue.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import QueueCard from '../QueueCard/QueueCard';
import { useState } from 'react';

const TicketsQueue = () => {
    const [ticketCounter, setTicketCounter] = useState(0);
    const [patientCounter, setPatientCounter] = useState(0);

    const videos = [
        "/assets/videos/video1.mp4",
        "/assets/videos/video2.mp4"
    ];
    const patientsInformation = [
        ["García López, Lucía Isabel", "CONS-101"],
        ["Torres Huamaní, Luis Antonio", "CONS-102"],
        ["Gonzales Pérez, Camila Valentina", "CONS-103"],
        ["Rodríguez Soto, Sebastián José", "CONS-104"],
        ["Castillo Cruz, Valeria Alejandra", "CONS-105"]
    ]
    const ticketInformation = [
        ["B0001", "VEN-01"],
        ["B0002", "VEN-02"],
        ["B0003", "VEN-03"],
        ["B0004", "VEN-04"],
        ["B0005", "VEN-05"]
    ]

    const[tickets, setTickets] = useState([])
    const[patients, setPatients] = useState([])

    const addPatient = () => {
        setPatients(prevPatients => [...prevPatients, patientsInformation[patientCounter]])
        setPatientCounter(prevPatientCounter => prevPatientCounter + 1)
    }

    const addTicket = () => {
        setTickets(prevTickets => [...prevTickets, ticketInformation[ticketCounter]])
        setTicketCounter(prevTicketCounter => prevTicketCounter + 1)
    }

    return (
        <div className='tickets-queue'>
            <div className='tickets-queue-video tickets-queue-box'>
                <VideoPlayer videos={videos} />
            </div>
            <div>
                <button onClick={addTicket}>Agregar Ticket</button>
                <button onClick={addPatient}>Agregar Paciente</button>
            </div>
            <div className='tickets-queue-list tickets-queue-box'>
                {tickets.map((ticket) => (
                    <QueueCard key={ticket} type="ticket" ticket={ticket[0]} counter={ticket[1]} />
                ))}
            </div>
            <div className='tickets-queue-list tickets-queue-box'>
                {patients.map((patient) => (
                    <QueueCard key={patient} type="patient" patient={patient[0].toUpperCase()} office={patient[1]} />
                ))}
            </div>
        </div>
    );
};

export default TicketsQueue;
