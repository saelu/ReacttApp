import React from 'react';
import {connect} from 'react-redux';
import PropsType from 'prop-types'
import ConFirmEmailMessage from '../messages/ConFirmEmailMessage'
 const DashboardPage = ({isConfirmed}) => (

        <div>
            {!isConfirmed && <ConFirmEmailMessage />}
        </div>
    
 );

DashboardPage.prposTypes = {
    isConfirmed: PropsType.bool.isRequired
}

function mapStateProps(state){
    return {
        isConfirmed: state.user.confirmed
    }
}

export default connect(mapStateProps)(DashboardPage);