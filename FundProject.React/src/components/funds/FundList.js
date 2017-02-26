import React, {PropTypes} from 'react';
import FundListRow from './FundListRow';

const FundList = ({funds}) => {
    return (
       <div className="table-responsive">
        <table className="table">
            <thead>
                <tr>
                    <th>Fund Name</th>
                    <th>Ticker</th>
                    <th>Morning Star</th>
                    <th>1 Mo</th>
                    <th>3 Mo</th>
                    <th>1 Yr</th>
                    <th>5 Yr</th>
                    <th>Inception to Date</th>
                    
                </tr>
            </thead>
            <tbody>
                {funds.map(fund =>
                    <FundListRow fund={fund}/>
                )}
            </tbody>
        </table>
        </div>
    );
};

FundList.propTypes = {
    funds: PropTypes.array.isRequired
};

export default FundList;