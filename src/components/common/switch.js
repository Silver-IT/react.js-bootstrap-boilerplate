import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const CustomSwitch = ({ size, label, color, value, onChange, className }) => {
    const [id, setId] = useState('dark-theme');
    useEffect(() => {
        setId(String(Date.now()).toLowerCase());
    }, []);

    return (
        <div className={classNames('custom-control custom-switch', className, {
            'custom-switch-sm': size === 'sm',
            'custom-switch-md': size === 'md',
            'custom-switch-lg': size === 'lg',
            'custom-switch-xl': size === 'xl'
        })}>
            <input type='checkbox' className='custom-control-input' id={`switch-${id}`} value={value} onChange={onChange}/>
            <label className={classNames('custom-control-label', `custom-control-label-${color}`)} htmlFor={`switch-${id}`}>{}</label>
            <label>{label}</label>
        </div>
    );
};

CustomSwitch.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    color: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'danger']),
    label: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string
};
CustomSwitch.defaultProps = {
    size: 'md',
    color: 'primary',
    label: '',
    value: false,
    onChange: () => {},
    className: ''
};
