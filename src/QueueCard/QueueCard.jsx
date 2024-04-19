import React, { useState, useEffect } from 'react';
import './QueueCard.css';

const QueueCard = ({ type, ticket, counter, patient, office }) => {
    const [backgroundColor, setBackgroundColor] = useState('var(--primary)');

    useEffect(() => {
        let timer = null;
        let counter = 0;

        const changeColor = () => {
            setBackgroundColor(prevColor =>
                prevColor === 'var(--primary)' ? 'var(--tertiary)' : 'var(--primary)'
            );
            counter++;
            if (counter === 11) {
                setBackgroundColor(prevColor =>
                    prevColor === 'var(--primary)' ? 'var(--tertiary)' : 'var(--primary)'
                );
                clearInterval(timer);
            }
        };

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
