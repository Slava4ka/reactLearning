import React from 'react';

export const requiredField = value => {
    if (value) {
        return undefined
    } else {
        return 'Field is required'
    }
};

export const maxLengthCreator = maxLenght => value => {
    if (value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
    else return undefined;
};
