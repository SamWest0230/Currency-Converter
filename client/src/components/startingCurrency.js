import React from 'react';
import './styles/starting.scss';

function Starting(props) {

    return (
        <section className='starting'>
            {/* Starting Currency and amount */}
            
            <label className='starting__label'>From</label>
            <select className='starting__input' onChange={props.change} name='fromCurrency' >
                <option value='none'>Please Select</option>
                {props.rates.map(rate => {
                    return (
                        <option value={rate} onChange={props.change}>{rate}</option>
                    )
                })}
            </select>
            <label className='starting__label'>Amount</label>
            <input className='starting__input' onChange={props.change} type='number' name='fromAmount' />

            {/* Converted Currency and amount */}

            <label className='starting__label'> To</label>
            <select className='starting__input' onChange={props.change} name='toCurrency' >
                <option value='none'>Please Select</option>
                {props.rates.map(rate => {
                    return (
                        <option value={rate} onChange={props.change}>{rate}</option>
                    )
                })}
            </select>
           <h2 className='starting__result' placeholder='0'>{'$' + props.result}</h2>
        </section>
    )

}; export default Starting;