// 10014 - Phone Number Input

import React from 'react';

export function PhoneNumberInput() {
    function handleChange(val) {
        const nums = val.replace(/\D/g, '');
        if (nums.length >= 7) {
            setDigits(`(${nums.slice(0, 3)}) ${nums.slice(3, 6)}-${nums.slice(6)}`);
        } else if (nums.length >= 4) {
            setDigits(`(${nums.slice(0, 3)}) ${nums.slice(3, 6)}`);
        } else if (nums.length >= 1) {
            setDigits(`(${nums}`);
        } else {
            setDigits('');
        }
    }
    const [digits, setDigits] = React.useState('');
    return (
        <input
            maxLength={14}
            placeholder="mobile number"
            value={digits}
            onChange={e => handleChange(e.target.value)}
        />
    );
}
