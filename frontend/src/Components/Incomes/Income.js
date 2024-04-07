import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';

function Income() {
    const {addIncome} = useGlobalContext()
    return (
        <div>
            <IncomeStyled>
                <InnerLayout>
                    <h1>Income</h1>
                    <div className="income-content">
                        <div className='form-container'></div>
                        <div className='incomes'>


                            
                            
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