import Confetti from 'react-dom-confetti';

const config = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: "181",
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "12px",
    height: "12px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

return <Confetti active={someProp} config={config} />