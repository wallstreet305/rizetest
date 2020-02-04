import React, { Component } from 'react'
import './register.css'
import {Link} from 'react-router-dom'
import { Field,reduxForm} from 'redux-form'
import {signUpUser} from '../../../redux/actions/index'
import {connect} from 'react-redux'
import DateTimePicker from 'react-datetime-picker'
import moment from 'moment'
import {isEmail} from 'validator';
class register extends Component {
    state = {
        submissionErrors: {},
        registrationFormIsSubmitting: false,
    }
    renderField= (field) => {
        const {meta: {error, submitFailed},submissionErrors } = field;
        if (field.input.name === 'dob') {
            return (
                <div>
                <label >{field.label}</label>
                <DateTimePicker
             onChange={date => field.input.onChange(moment(date).format('YYYY-MM-DD'))}
             format="yyyy MMM dd"
             showTime = {field.showTime}
             value={!field.input.value ? null : new Date(field.input.value)}
             
                />
                 {field.meta.touched && error && <span>{error}</span>}
                </div>
            )
        } if (field.input.name === 'gender') {
            return (
                <div className='field-container'>
                <label >{field.label}</label>
                    <input
                        className='form-control'
                        type={field.type}
                        placeholder={field.placeholder}
                        {...field.input}
                        autoComplete='false'
                        autoCorrect='false'
                        spellCheck='off' 
                    />
                    {
                            (error && submitFailed) || submissionErrors[field.input.name] ?
                            <div className='registration-error-message'>
                                {error || submissionErrors[field.input.name] }
                            </div> :
                            null
                        }
                
            </div>
            )
        }
        return (
            <div className='field-container'>
                <label >{field.label}</label>
                    <input
                        className='form-control'
                        type={field.type}
                        placeholder={field.placeholder}
                        {...field.input}
                        autoComplete='false'
                        autoCorrect='false'
                        spellCheck='off' 
                    />
                    {
                            (error && submitFailed) || submissionErrors[field.input.name] ?
                            <div className='registration-error-message'>
                                {error || submissionErrors[field.input.name] }
                            </div> :
                            null
                        }
                
            </div>
        )
    }
    onSubmit(values) {
        
        this.props.signUpUser(values).then(data =>{
            if(data) {
             setTimeout(() => {
                return this.props.history.push('/get_question');
             }, 2000);
            }
        })
    }
    render() {
        const {handleSubmit, pristine,submitting} = this.props
        return (
            <div className="container">
            <div className='header-container'>
            <div>
             <header className='register-header'>
                 <div>
                 <h2 className='header-title'>Start your online visit</h2>
                 <span className='sub-header'>This information will help us get you set up with a doctor and make sure you're eligible for treatment</span>
                 </div>
             </header>
            </div>
            <div className='link-to-login-container'>
                Already have a account ? <Link to='/login' className='link-to-login'>Login</Link>
                
            </div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} autoComplete="off">
            <div >
                                <Field
                                    label='Email Address'
                                    name='username'
                                    type='email'
                                    placeholder='example@example.com'
                                    component={this.renderField}
                                    submissionErrors={this.state.submissionErrors}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck="off"
                                />
                            </div>
                            <div className="bio-outer">
                            <label>Biological Sex</label>
                                <div className="radio-outer">
                                <Field name="gender" label="MALE"  submissionErrors={this.state.submissionErrors} component={this.renderField} type="radio" parse={value=> Number(1)}/>
                                <Field name="gender" label="FEMALE"  submissionErrors={this.state.submissionErrors} component={this.renderField} type="radio"  parse={value=> Number(2)}/> 
                                </div>
                            </div>
                            <div className="select-field">
                                <Field label='Datebirth' name="dob" component={this.renderField} showTime={false}/>
                            </div>
                            <div className="zip-codeOuter">
                                <Field
                                    label='ZIP Code'
                                    name='zip'
                                    component={this.renderField}
                                    submissionErrors={this.state.submissionErrors}
                                    autoComplete="off"
                                    autoCorrect="off"
                                    spellCheck="off"
                                />
                            </div>
                            <button type='submit' className="submit-btn" disabled ={pristine || submitting}>NEXT</button>
            </form>
            </div>
            </div>
        )
    }
}
// Validation
function registrationValidator (values) {
   console.log('showValuesss', values);
   let errors = {};
   if (!values.username || !isEmail(values.username)){
    errors.username = 'Please enter a valid email';
}
if (!values.gender) {
    errors.gender = 'required';
}
if (!values.zip) {
    errors.zip = 'required';
}
if (!values.dob) {
    errors.dob = 'required';
}
return errors
}
export default reduxForm({
    validate: registrationValidator,
    form: 'RegistrationForm'
})(
    connect(null, {signUpUser})(register)
);
