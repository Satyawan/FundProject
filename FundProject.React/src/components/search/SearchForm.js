import React from 'react';

const SearchForm = ({zip, onSearch, onChange}) => {
    return (
        <div>
            <div className="row">
                <h4> Search & Filters </h4>
                <div>
                    <input type="text" placeholder="Fund, Ticket or Cusip" value={zip}
                        onChange={onChange} onSearch={onSearch} />
                </div>
                <table>
                    <tr><td><h4>Group</h4></td></tr>
                    <tr><td>Funds in My Plan</td></tr>
                    <tr><td>All Available Funds</td></tr>
                    <tr><td>Deselected</td></tr>
                </table>

                <table>
                    <tr><td><h4>Category Sets</h4></td></tr>
                    <tr><td>Morning Star</td></tr>

                </table>
            </div>
        </div>

    );
};

SearchForm.propTypes = {
    zip: React.PropTypes.string.isRequired,
    onSearch: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired

};

export default SearchForm;