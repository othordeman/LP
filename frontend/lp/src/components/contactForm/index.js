import React, {useState} from "react";
import { Form, FormLabel, FormInput, FormDiv, FormTextArea } from "./ContactForm.styles";
import Button from "../Button";



const ContactForm = () => {
    
    const [formData, setFormData] = useState({name: "", email: "", msg: ""});


    
    const handleInput = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (

        <Form>
            <FormDiv>
                
                <FormLabel htmlFor="name">Namn</FormLabel>
                <FormInput 
                    type="text" 
                    name="name" 
                    onChange={handleInput} >
                </FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                    type="email" 
                    name="email" 
                    onChange={handleInput} >
                </FormInput>
            </FormDiv>
            <FormDiv>
                <FormLabel htmlFor="msg">Meddelande</FormLabel>
                <FormTextArea 
                    name="msg" 
                    onChange={handleInput} 
                    cols="0" rows="7">
                </FormTextArea>
            </FormDiv>
            <FormDiv>
                <Button text="Skicka meddelande" callback={handleSubmit} />
            </FormDiv>
        </Form>

    )
}

            
{/* 
<div class="email__container">

<div class="title__email">
    <h1>Email Us <i class="uil uil-envelope contact__icon"></i></h1>
    <div class="contact__information">
        <span>VPD.contact@contact.se </span>
    </div>
</div>
<div class="email">
    <form action="" class="contact__form grid">
        <div class="contact__inputs grid">
            <div class="contact__content">
                <label for="" class="contact__label">Name</label>
                <input type="text" class="contact__input">
            </div>
            <div class="contact__content">
                <label for="" class="contact__label">Email</label>
                <input type="email" class="contact__input">
            </div>
        </div>
        <div class="contact__content">
            <label for="" class="contact__label">Message</label>
            <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
        </div>
        <div>
            <a href="" class="button button--flex">
                Send message
                <i class="uil uil-message button__icon"></i>
            </a>
        </div>
    </form>
</div>
</div>

        </Wrapper>
 */}

export default ContactForm