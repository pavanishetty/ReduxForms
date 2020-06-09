import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class UserDetails extends Component {
    render() {
        return (
            <form className="form" >
                <div className="field">
                    <div className="control">
                        <label className="label">First Name</label>
                        <Field className="input" name="firstName" component="input" type="text" placeholder="First Name" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Last Name</label>
                        <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Age</label>
                        <Field className="input" name="age" component="input" type="number" placeholder="Age" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <Link to='/contacts' className="button is-link">Next</Link>
                    </div>
                </div>
            </form >
           
        )
    }
}

UserDetails = reduxForm({
    form: 'UserDetails',
    destroyOnUnmount: false
  })(UserDetails);

const selector = formValueSelector('UserDetails') 
UserDetails = connect(state => {

  const { firstName, lastName, age } = selector(state, 'firstName', 'lastName', 'age')
  return {
    fullName: `${firstName || ''} ${lastName || ''}`,
    age
  }
})(UserDetails)

export default UserDetails
