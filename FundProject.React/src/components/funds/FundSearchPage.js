import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as fundActions from '../../actions/fundActions';
import TextInput from '../common/TextInput';
import FundList from './FundList';
import SearchForm from '../search/SearchForm';

class FundSearchPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            zip: '',
            errors: {}
        };

        this.onZipChange = this.onZipChange.bind(this);
        this.searchFund = this.searchFund.bind(this);
    }

    onZipChange(event) {

        // this.setState({zip:event.target.value});
    }

    searchFund(event) {
        event.preventDefault;
        this.props.actions.loadFund(this.state.zip);
    }

    render() {
        const {funds} = this.props;
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    Funds
                </div>
                <div className="panel-body">
                    <div className="col-md-4">
                        <SearchForm
                            onChange={this.onZipChange}
                            onSearch={this.searchRestaruant}
                        />

                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4">
                                <span>Fund dates of Last Quarter End </span>
                            </div>
                            <div className="btn-group">
                                <button type="button" className="btn btn-primary">Rate of Return</button>
                                <button type="button" className="btn btn-primary">Expense Rations & compensation</button>

                            </div>
                        </div>
                        <FundList funds={funds} />
                    </div>

                </div>
            </div>
        );
    }
}

FundSearchPage.propTypes = {
    funds: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

FundSearchPage.contextTypes = {
    router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
    return {
        funds: state.funds
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(fundActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FundSearchPage);