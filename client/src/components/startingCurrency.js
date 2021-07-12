import React from 'react';
import './styles/starting.scss';

function Starting (props){

        return(
            <section className='starting'>
             <input type='number' />
             <select >
                        <option value='none'>Please Select</option>
                        {props.rates.map(rate => {
                            return(
                            <option value={rate}>{rate}</option>
                        )})}
                    </select>
            </section>
        )

}; export default Starting;