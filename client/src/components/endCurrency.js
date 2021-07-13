import React from 'react';
import './styles/starting.scss';

function End (props){

        return(
            <section className='starting'>
             <input onChange={props.change} type='number' name='toAmount' />
             <select onChange={props.change} name='toCurrency' >
                        <option value='none'>Please Select</option>
                        {props.rates.map(rate => {
                            return(
                            <option value={rate} onChange={props.change}>{rate}</option>
                        )})}
                    </select>
            </section>
        )

}; export default End;