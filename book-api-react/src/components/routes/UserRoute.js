import React from 'react'
import PropType from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const UserRoute = ({isAuthenticated ,component: Component, ...rest}) => (
    
        <Route {...rest} render =  {props => isAuthenticated ? <Component {...props} />: <Redirect to ="/" />} />
) 

UserRoute.prpoTypes = {
    component: PropType.func.isRequired,
    isAuthenticated: PropType.bool.isRequired
}
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps)(UserRoute);