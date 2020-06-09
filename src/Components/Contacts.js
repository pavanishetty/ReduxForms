import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'


class ContactDetails extends Component {
    handleSubmit = values => {
        console.log(values)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form" >
                <div className="field">
                    <div className="control">
                        <label className="label">Mobile Number</label>
                        <Field className="input" name="mobileNumber" component="input" type="number" placeholder="Mobile Number" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <label className="label">Email</label>
                        <Field className="input" name="email" component="input" type="email" placeholder="Email Address" />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <Link to='/' className="button is-link">Previous</Link>
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <Link to='/review' className="button is-link">Next</Link>
                    </div>
                </div>

            </form >
        )
    }
}

ContactDetails = reduxForm({
    form: 'ContactDetails',
    destroyOnUnmount: false
  })(ContactDetails);

export default ContactDetails
