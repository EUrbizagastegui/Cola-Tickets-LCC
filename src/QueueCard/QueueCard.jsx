import React, { useState, useEffect } from 'react';
import './QueueCard.css';

const QueueCard = ({ type, ticket, counter, patient, office }) => {

    const [backgroundColor, setBackgroundColor] = useState('var(--primary)');

    useEffect(() => {
        let timer = null;
        let repetition = 0;

        const changeColor = () => {
            setBackgroundColor(prevColor =>
                prevColor === 'var(--primary)' ? 'var(--tertiary)' : 'var(--primary)'
            );
            repetition++;
            if (repetition === 11) {
                setBackgroundColor(prevColor =>
                    prevColor === 'var(--primary)' ? 'var(--tertiary)' : 'var(--primary)'
                );
                clearInterval(timer);
            }
        };

        let number = "";

        let voice = new SpeechSynthesisUtterance();

            let voices = speechSynthesis.getVoices()

            if (voices.length!==0) {
                voice.voice = voices[31]
                voice.voiceURI=voices[31].voiceURI
            }

        if (ticket !== "" && counter !== "" && type==="ticket") {
            number = counter.split('-')[1].split('0')[1];

            voice.text = `Ticket ${ticket}, por favor acercarse a la ventanilla ${number}.`;

            window.speechSynthesis.speak(voice);

        } else if (patient !== "" && office !== "" && type==="patient") {
            number = office.split('-')[1];

            voice.text = `Paciente ${patient}, por favor acercarse al consultorio ${number}.`;

            window.speechSynthesis.speak(voice);

        } else {
            console.log("Error al reproducir el audio");
        }

        timer = setInterval(changeColor, 1000); // Cambio de color cada segundo

        return () => {
            clearInterval(timer);
        };
    }, []); // Se ejecuta solo una vez al renderizar el componente

    return (
        <div className='queue-card' style={{ backgroundColor }}>
            {type === 'ticket' ? (
                <>
                    <h1>{ticket}</h1>
                    <h1>{counter}</h1>
                </>
            ) : (
                <>
                    <h1>{patient}</h1>
                    <h1>{office}</h1>
                </>
            )}
        </div>
    );
};

export default QueueCard;
