import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';
class UserList extends Component
{
    render()
    { 
        console.log(this.props.users);
        
        let taskItem = this.props.users.map((user) => {
            return(
                <li onClick = {() => this.props.selectUser(user)} key ={user.id}>{user.name} {user.lastname}</li>
            )
        })
        return (
    
            <ul>
                {taskItem}
            </ul>
        )
    }
}

const mapStateToProps = (state) =>
{
   
    return{
        users : state.users,
      

    }
    
}



 const matchDispatchToProps = (dispatch) =>
 {
    return {
        selectUser(user) {                        
            dispatch(selectUser(user));
        }
    };
     
 }

export default connect(mapStateToProps,matchDispatchToProps)(UserList);