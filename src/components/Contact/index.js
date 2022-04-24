import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid)

            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        }
        else {
            // we're checking the message and name form element values.
            // checks whether the values of these elements are blank
            if (!e.target.value.length) {

                setErrorMessage(`${e.target.name} is required.`);
            
            }
            else {
                setErrorMessage('');
            }
        }


        // so that the state only updates if the form data has passed the quality tests
        if (!errorMessage) {
            // 'name' property of 'target' actually refers to the 'name' attribute of the form element
            //  - this attribute value mathches the property names of 'formState' (name, email, message)
            //      - and allows us the '[]' to create dynamic property names
            setFormState({...formState, [e.target.name]: e.target.value })
        }

        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    console.log(formState);

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onBlur={handleChange}  name="name"  />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email"  defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea rows="5" defaultValue={message} onBlur={handleChange} name="message" />
                </div>
                {errorMessage && (
                    <div>
                        <p className='error-text'>{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;