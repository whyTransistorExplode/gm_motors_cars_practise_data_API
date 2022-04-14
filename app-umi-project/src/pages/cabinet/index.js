import React, {Component} from 'react';
import {connect} from "dva";
@connect(({globalModel})=>({globalModel}))
class Cabinet extends Component {
    render() {
        const {currentUser}=this.props.globalModel;
        console.log(currentUser);
        return (
            <div>
                <h1>Cabinet page {currentUser.firstName}</h1>
            </div>
        );
    }
}

Cabinet.propTypes = {};

export default Cabinet;
