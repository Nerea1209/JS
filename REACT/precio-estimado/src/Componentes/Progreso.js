import React from 'react';
import {
    Progress
} from 'reactstrap';

export default function Progreso(props) {
    const MAX = 4;
    return (
        <>
            <Progress
                animated
                className="my-3"
                max={MAX}
                value={props.value}
                defaultValue={0}
                style={{
                    height: '12px'
                }}
            >
                {(props.value / MAX) * 100} %
            </Progress>
        </>
    )
}