import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import Threedmodel from './threedmodel';
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const ContactForm = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            serviceID,
            templateID,
            {
                from_name: form.name,
                to_Name: 'Dina',
                from_email: form.email,
                to_email: 'dkurtalic1@etf.unsa.ba',
                message: form.message,
            },
            publicKey
        ).then(() => {
            setLoading(false)
            alert("Thank you. I will get back to you as soon as possible.")
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, (error) => {
            setLoading(false)
            console.log(error)
            alert('Something went wrong')
        })
    }

    return (
        <div className="mb-10 lg:flex lg:flex-wrap md:flex md:flex-wrap">
            <div>
                <h1 className="text-2xl font-bold text-white ml-7 mt-10">Contact me!</h1>

                <div
                    className="md:w-96 md:max-w-full mt-3">
                    <div className="p-6 border border-spotifyGreen sm:rounded-md">

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}>
                            <label className="block mb-6">
                                <span className="text-white">Your name</span>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-xl
                    shadow-sm
                    p-2
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                                    placeholder="Example: John Doe"
                                    required
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-white">Email address</span>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-xl
                    shadow-sm
                    p-2
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                                    placeholder="john.doe@example.com"
                                    required
                                />
                            </label>
                            <label className="block mb-6">
                                <span className="text-white">Message</span>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-xl
                    shadow-sm
                    p-2
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                                    rows="3"
                                    placeholder="Leave a message"
                                    required
                                ></textarea>
                            </label>
                            <div className="mb-6">



                                <button
                                    type="submit"
                                    className="
                                        h-10
                                        px-5
                                        text-indigo-100
                                        bg-spotifyGreen
                                        rounded-lg
                                        transition-colors
                                        duration-150
                                        focus:shadow-outline
                                        hover:bg-darkerSpotifyGreen
                  "
                                >
                                    {loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
            <div className='m-auto justify-content items-center'>
                <h1 className="text-2xl font-bold text-white mt-10 ml-10">or spin me around!</h1>
                <Threedmodel />
            </div>

        </div>

    );
};

export default ContactForm;

