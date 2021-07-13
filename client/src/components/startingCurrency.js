import React from 'react';
import './styles/starting.scss';

function Starting (props){

        return(
            <section className='starting'>
             <input onChange={props.change} type='number' name='fromAmount' />
             <select onChange={props.change} name='fromCurrency' >
                        <option value='none'>Please Select</option>
                        {props.rates.map(rate => {
                            return(
                            <option value={rate} onChange={props.change}>{rate}</option>
                        )})}
                    </select>
            </section>
        )

}; export default Starting;