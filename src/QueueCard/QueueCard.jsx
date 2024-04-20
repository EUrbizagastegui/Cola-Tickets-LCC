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
            if (repetition === 7) {
                setBackgroundColor(prevColor =>
                    prevColor === 'var(--primary)' ? 'var(--tertiary)' : 'var(--primary)'
                );
                clearInterval(timer);
            }
        };

        // Reproducir el archivo WAV
        const playSound = () => {
            const audio = new Audio('/assets/sounds/notification.wav');
            audio.play();
        };

        playSound();
        
        timer = setInterval(() => {
            changeColor();
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

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
