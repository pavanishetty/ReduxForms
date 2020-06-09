import React, { Component } from 'react';
import { getFormValues } from 'redux-form';
import { connect } from 'react-redux'


class Review extends Component {
    render() {
        const { UserDetails, ContactDetails } = this.props
        return (
            <div>
                {
                    UserDetails && Object.keys(UserDetails).map((key, i) => (
                        <p key={i}>
                            <span>{key}: {UserDetails[key]}</span>
                        </p>
                    ))
                }
                {
                    ContactDetails && Object.keys(ContactDetails).map((key, i) => (
                        <p key={i}>
                            <span>{key}: {ContactDetails[key]}</span>
                        </p>
                    ))
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        UserDetails: getFormValues('UserDetails')(state),
        ContactDetails: getFormValues('ContactDetails')(state)
    }
}

export default connect(mapStateToProps)(Review)