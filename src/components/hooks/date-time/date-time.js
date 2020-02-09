import React, { useState, useEffect } from 'react';
import * as moment from 'moment';

// Style
import './date-time.scss';

export function CurrentDateTime() {
    const momentFormat = 'dddd D MMMM YYYY - hh:mm:ss A';

    const [dateTime, setDateTime] = useState(moment().format(momentFormat));

    // eslint-disable-next-line
    useEffect(() => {
        setDateTime(moment().format(momentFormat))
    });

    return (
        <h4 className="date-time">{dateTime}</h4>
    )
}