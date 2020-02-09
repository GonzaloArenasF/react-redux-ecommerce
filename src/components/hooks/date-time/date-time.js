import React, { useState } from 'react';
import * as moment from 'moment';

// Style
import './date-time.scss';

export function CurrentDateTime() {
    const momentFormat = 'dddd D MMMM YYYY - hh:mm:ss A';

    const [dateTime, setDateTime] = useState(moment().format(momentFormat));

    setInterval(() => {
        setDateTime(moment().format(momentFormat))
    }, 1000);

    return (
        <h4 className="date-time">{dateTime}</h4>
    )
}