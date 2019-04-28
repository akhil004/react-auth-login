import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent){
    class RequireAuth extends Component {
        constructor(props){
            super(props)
            if(!props.user){
                props.history.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.user){
                nextProps.history.push('/')
            }
        }

        render(){
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state){
        return { user: state.userStore.user }
    }
   return connect(mapStateToProps)(RequireAuth)
}