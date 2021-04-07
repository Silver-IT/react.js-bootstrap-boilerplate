import React from 'react';
import { Spinner } from 'react-bootstrap';

export const LoadingSpinner = () => {
    return (<Spinner animation='border' variant='primary' className='fixed-center-m2 w-4rem h-4rem' />);
};

LoadingSpinner.propTypes = {};
LoadingSpinner.defaultProps = {};
