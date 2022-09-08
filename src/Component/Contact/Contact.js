import React, { useState } from 'react'
import "./Contact.css"
import contact1 from "../pic/image/contact1.png"

const Contact = () => {

    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })
    const InputEvent = (event) => {
        const { name, value } = event.target

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const formSubmit = (event) => {
        event.preventDefault()
        alert(
            `My name is ${data.fullname}.
            My Phone Number is ${data.phone}.
            My email address is ${data.email}.
            My Subject on ${data.subject}.
            Here is my message I want to say: ${data.message}`
        )
    }

    return (
        <>
            <div>
                <section className='Contact' id='contact'>
                    <div className='container top'>
                        <div className='heading text-center'>
                            <h4>CONTACT</h4>
                            <h1>Contact With Me</h1>
                        </div>

                        <div className='content d_flex'>
                            <div className='left'>
                                <div className='box box_shadow'>
                                    <div className='img'>
                                        <img src={contact1} alt='' />
                                    </div>
                                    <div>Nevine Acotanze</div>
                                    <p>I am avaiable for freelance work. Connect with me via and call in to my account.</p>
                                    <br />
                                    <p>Phone: +998 88 570 02 09</p>
                                    <p>Email: InfoAkmaljon.uz@mail.ru</p> <br />
                                    <span>FIND WITH ME</span>
                                    <div className='button f_flex'>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-facebook-f'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-instagram'></i>
                                        </button>
                                        <button className='btn_shadow'>
                                            <i className='fab fa-twitter'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className='right box_shadow'>
                                <form onSubmit={formSubmit}>
                                    <div className='f_flex'>
                                        <div className='input row'>
                                            <span>YOUR NAME</span>
                                            <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                                        </div>
                                        <div className='input row'>
                                            <span>YOUR NUMBER</span>
                                            <input type='phone' name='phone' value={data.phone} onChange={InputEvent} />
                                        </div>
                                    </div>
                                    <div className='input'>
                                        <span>EMAIL</span>
                                        <input type='email' name='email' value={data.email} onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>SUBJECT</span>
                                        <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                                    </div>
                                    <div className='input'>
                                        <span>YOUR MESSAGE</span>
                                        <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent} ></textarea>
                                    </div>
                                    <button className='btn_shadow'>
                                        SEND MESSAGE <i className='fa fa-arrow-down' ></i>
                                    </button>
                                </form>
                            </div>


                        </div>

                    </div>

                </section>
            </div>
        </>
    )
}

export default Contact
