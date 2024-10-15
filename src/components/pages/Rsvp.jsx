export default function Rsvp () { 
    emailjs.sendForm('service_rx4kkue', 'template_9fy5xht', '#rsvp-form').then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
    return (
        <div className="content">
            <h2>RSVP</h2>
            <form id="rsvp-form">
                <div className="formInput">
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname"></input>
                </div>
                <div className="formInput">
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname"></input>
                </div>
                <div className="formInput">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"></input>
                </div>
                <div className="formInput">
                    <label for="party">Party of...</label>
                    <input type="text" id="party" name="party" placeholder="Number of people including children..."></input>
                </div>
                <div className="formInput">
                    <h4>Check to RSVP!</h4>
                    <div className="rsvpCheck">
                        <div className="check">
                        <input type="radio" id="yes" name="check" value="yes"></input>
                        <label for="yes">I/We will be there!</label>
                        </div>
                        <div className="check">
                        <input type="radio" id="no" name="check" value="no"></input>
                        <label for="no">I/We will <strong>NOT</strong> be there!</label>
                        </div>
                    </div>
                </div>
                <button type="submit">RSVP</button>

            </form>
        </div>
    )
}