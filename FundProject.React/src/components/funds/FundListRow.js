import React, {PropTypes} from 'react';


const FundListRow = ({fund}) => {
    
    return(
        <tr>
            <td>{fund.fundname}</td>
            <td>{fund.ticket}</td>
            <td>{fund.morningstar}</td>
            <td>{fund.monthly}</td>
            <td>{fund.trimontly}</td>
            <td>{fund.yearly}</td>
            <td>{fund.fiveyearly}</td>
            <td>{fund.inception}</td>
        </tr>
    );

};

FundListRow.propTypes = {
    fund: PropTypes.object.isRequired
};

export default FundListRow;