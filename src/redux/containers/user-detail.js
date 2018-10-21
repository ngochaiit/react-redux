import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component
{
    render()
    {
        if(!this.props.user)
        {
            return(
                <h4>Select a user....</h4>
            );
        };
        console.log(this.props.user);
        return (
            <div>
                <img src={this.props.user.img}/>
                <h2>{this.props.user.name} {this.props.user.last}</h2>
            </div>
        );
    }


   



}
const mapStateToProps = (state) =>
{
    return {
        user: state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail);