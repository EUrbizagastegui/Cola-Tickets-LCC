import './TicketsQueue.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import QueueCard from '../QueueCard/QueueCard';


const TicketsQueue = () => {
    const videos = [
        "/assets/videos/video1.mp4",
        "/assets/videos/video2.mp4"
    ];

    return (
        <div className='tickets-queue'>
            <div className='tickets-queue_video'>
                <VideoPlayer videos={videos} />
            </div>
            <div>
                <h1>espacio 2</h1>
            </div>
            <div className='tickets-queue_list'>
                <QueueCard type="ticket" ticket="Ticket 1" counter="COUNTER 1" />
                <QueueCard type="ticket" ticket="TICKET 2" counter="COUNTER 2" />
                <QueueCard type="ticket" ticket="TICKET 3" counter="COUNTER 3" />
                <QueueCard type="ticket" ticket="TICKET 4" counter="COUNTER 4" />
                <QueueCard type="ticket" ticket="TICKET 5" counter="COUNTER 5" />
            </div>
            <div className='tickets-queue_list'>
                <QueueCard type="patient" patient="PATIENT 1" office="OFFICE 1" />
                <QueueCard type="patient" patient="PATIENT 2" office="OFFICE 2" />
                <QueueCard type="patient" patient="PATIENT 3" office="OFFICE 3" />
                <QueueCard type="patient" patient="PATIENT 4" office="OFFICE 4" />
                <QueueCard type="patient" patient="PATIENT 5" office="OFFICE 5" />
            </div>
        </div>
    );
};

export default TicketsQueue;
