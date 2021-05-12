import React from 'react';
import './Contact.scss'
const Contact = () => {
  return (
    <section className={"column contact"}>
      <div className={"contact-card row"}>
        <div className={"contact-card-content column"} >
          <h2>drop me a line!</h2>
          <p>
            You can contact me through the form or any 
            of the options below.
          </p>

          <div className={'column'}>
             <a href="mailTo:samuelvanrourke@gmail.com">sam@svrourke.com</a>
            <a>LinkedIn</a>
            <a>Twitter</a>
            <a>Github</a>
          </div>
        </div>

        <form className={'column'}>
          <label for="email">email:</label>
          <input type='email' name='email' placeholder="test@example.com" />
          <label for="message">message:</label>
          <textarea type='' name='message' placeholder="probably best to keep is short" />
          <input type='submit' value='send' />
        </form>
      </div>
    </section>
  );
}

export default Contact;
