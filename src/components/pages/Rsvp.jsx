import { useState } from 'react';
import { init, send } from '@emailjs/browser';

export default function Rsvp () { 
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        email: '',
        party: '',
        rsvp: ''
    });

    init('SyDAG4upyEVJH2_Rd');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        send('service_rx4kkue', 'template_9fy5xht', formData)
        .then((res) => {
            console.log('Email success!', res.status, res.text);
        }, (err) => {
            console.error('Email failed', err);
        });

        setFormData({
            fname: '',
            lname: '',
            email: '',
            party: '',
            rsvp: ''
        });
    };

    
    return (
        <div className="content">
            <h2>RSVP</h2>
            <form onSubmit={sendEmail} id="rsvp-form">
                <div className="formInput">
                    <label for="fname">First Name</label>
                    <input value={formData.fname} onChange={handleChange} type="text" id="fname" name="fname"></input>
                </div>
                <div className="formInput">
                    <label for="lname">Last Name</label>
                    <input value={formData.lname} onChange={handleChange} type="text" id="lname" name="lname"></input>
                </div>
                <div className="formInput">
                    <label for="email">Email</label>
                    <input value={formData.email} onChange={handleChange}  type="email" id="email" name="email"></input>
                </div>
                <div className="formInput">
                    <label for="party">Party of...</label>
                    <input value={formData.party} onChange={handleChange}  type="text" id="party" name="party" placeholder="Number of people including yourself and children..."></input>
                </div>
                <div className="formInput">
                    <h4>Check to RSVP!</h4>
                    <div className="rsvpCheck">
                        <div className="check">
                        <input value="ATTENDING" checked={formData.rsvp === 'ATTENDING'} onChange={handleChange} type="radio" id="yes" name="rsvp"></input>
                        <label for="yes">I/We will be there!</label>
                        </div>
                        <div className="check">
                        <input value="NOT ATTENDING" checked={formData.rsvp === 'NOT ATTENDING'} onChange={handleChange} type="radio" id="no" name="rsvp"></input>
                        <label for="no">I/We will <strong>NOT</strong> be there!</label>
                        </div>
                    </div>
                </div>
                <button type="submit">RSVP</button>

            </form>
        </div>
    )
}