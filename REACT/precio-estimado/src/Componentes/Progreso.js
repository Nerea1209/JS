import React from 'react';
import {
    Progress
} from 'reactstrap';

export default function Progreso() {
    return (
        <>
            <Progress
                animated
                className="my-3"
                max="5"
                value="0"
                style={{
                    height: '5px'
                }}
            />
        </>
    )
}