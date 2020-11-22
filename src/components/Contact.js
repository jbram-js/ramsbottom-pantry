import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Contact.css';
import { init, sendForm } from 'emailjs-com';
init('user_VKy9wYkpvTzoPw85OauWg');

const Contact = () => {
    const [contactNumber, setContactNumber] = useState("000000");
    const [statusMessage, setStatusMessage] = useState("Message");

    const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
    }

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        const statusMessage = document.querySelector('.status-message');
        const form = document.querySelector('#contact-form');
        generateContactNumber();

        sendForm('default_service', 'ramsbottom_pantry', '#contact-form')
         .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           form.reset();
           setStatusMessage("Message sent!");
           statusMessage.className = "status-message success";
           setTimeout(()=> {
             statusMessage.className = 'status-message'
           }, 5000)
         }, function(error) {
           console.log('FAILED...', error);
           setStatusMessage("Failed to send message! Please try again later.");
           statusMessage.className = "status-message failure";
           setTimeout(()=> {
             statusMessage.className = 'status-message'
           }, 5000)
         });
    };

    return (
        <div className='Contact'>
            <h1>Contact</h1>
            <p className='status-message'>{statusMessage}</p>
            <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                {errors.name && errors.name.type === "required" && (
                <div role="alert">Name is required<br/></div>
                )}
                <input 
                 type='text'
                 name='name' 
                 aria-invalid={errors.name ? "true" : "false"} 
                 ref={register({ required: true })} 
                 placeholder='Name'/>
                <br/>
                {errors.phone_number && errors.phone_number.type === "required" && (
                <div role="alert">Phone number is required<br/></div>
                )}
                <input 
                 type='number' 
                 name='phone_number' 
                 aria-invalid={errors.contact_number ? "true" : "false"}
                 ref={register({ required: true })} 
                 placeholder='Phone number'/>
                <br/>
                {errors.number_of_adults && errors.number_of_adults.type === "required" && (
                <div role="alert">Number of adults is required<br/></div>
                )}
                <input 
                 type='number' 
                 name='number_of_adults' 
                 aria-invalid={errors.number_of_adults ? "true" : "false"}
                 ref={register({ required: true })} 
                 placeholder='Number of adults'/>
                <br/>
                {errors.number_of_children && errors.number_of_children.type === "required" && (
                <div role="alert">Number of children is required<br/></div>
                )}
                <input 
                 type='number' 
                 name='number_of_children' 
                 aria-invalid={errors.number_of_children ? "true" : "false"}
                 ref={register({ required: true })}
                 placeholder='Number of children'/>
                <br/>
                {errors.address && errors.address.type === "required" && (
                <div role="alert">Address is required<br/></div>
                )}
                <input 
                 type='text' 
                 name='address' 
                 aria-invalid={errors.address ? "true" : "false"}
                 ref={register({ required: true })}
                 placeholder='Address'/>
                <br/>
                {errors.town && errors.town.type === "required" && (
                <div role="alert">Town is required<br/></div>
                )}
                <input 
                 type='text' 
                 name='town' 
                 aria-invalid={errors.town ? "true" : "false"}
                 ref={register({ required: true })}
                 placeholder='Town'/>
                <br/>
                {errors.postcode && errors.postcode.type === "required" && (
                <div role="alert">Postcode is required<br/></div>
                )}
                <input 
                 type='text' 
                 name='postcode' 
                 aria-invalid={errors.postcode ? "true" : "false"}
                 ref={register({ required: true })} 
                 placeholder='Postcode'/>
                <br/>
                <textarea 
                 name='message' 
                 maxLength='300'
                 ref={register} 
                 placeholder='Allergies, dietary requirements, comments...'/>
                <br/>
                <input type='hidden' name='contact_number' value={contactNumber} />
                <input type='submit' value='Send'/>
            </form>
        </div>
    );
};

export default Contact;