import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContexts';

import Form from '../Form/form';
import Form from '../Form/form';


function Income() {
    const {addIncome} = useGlobalContext()
    return (
        <div>
            <IncomeStyled>
                <InnerLayout>
                    <h1>Incomes</h1>
                    <div className="income-content">
                        <div className='form-container'></div>
                       
                        <form />
                        <div className='incomes'>


                            
                            <Form />
                        </div>
                    </div>
                </InnerLayout>
            </IncomeStyled>
        </div>
    )
}

const IncomeStyled = styled.div`

`;

export default Income