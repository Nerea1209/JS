import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';

import { IMAGES } from "../datos/images.js";

const items = [
    {
        src: IMAGES[0],
        altText: 'Slide 1',
        captionHeader: 'Bienvenido a nuestra plataforma de valoración de propiedades.',
        captionText: '¿Te has preguntado alguna vez cuánto vale realmente tu hogar?',
        key: 1,
    },
    {
        src: IMAGES[1],
        altText: 'Slide 2',
        captionHeader: 'Con nuestra herramienta intuitiva,',
        captionText: 'puedes obtener una estimación precisa del valor de tu propiedad en cuestión de minutos.',
        key: 2,
    },
    {
        src: IMAGES[2],
        altText: 'Slide 3',
        captionHeader: 'Simplemente ingresa algunos detalles sobre tu casa',
        captionText: 'y nuestro algoritmo avanzado hará el resto. ¡Descubre ahora mismo cuánto vale tu inversión!',
        key: 3,
    },
];

function Carrusel(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.captionText}
                    captionHeader={item.captionHeader}
                />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            {...args}
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
            />
            <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
            />
        </Carousel>
    );
}

export default Carrusel;