import React from 'react';
import './DescCard.scss'

const selectedColor = (color) => {
    if (color === 'purple')
        return 'my-card-title-purple'
    else if (color === 'yellow')
        return 'my-card-title-yellow'
    else if (color === 'blue')
        return 'my-card-title-blue'
    else if (color === 'green')
        return 'my-card-title-green'
    else
        return 'my-card-title-purple'
}

const DescCard = (props) => {
    return <div className={"desc-card-main"}>
        <h3 className={selectedColor(props.titleColor)}>{props.title}</h3>
        <p className={"my-card-subtitle"}>{props.subtitle}</p>
    </div>;
};

export default DescCard;
