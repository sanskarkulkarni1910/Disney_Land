import React from 'react'

export default function Contact() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="section-header">           
             <p><span>Contact</span></p>
          </div>   
        <br/>
        <img src={require('../assets/img/tour.jpg')} width="100%" height="600" alt="logo" />
<br/>
<br/>
        <form action="forms/contact.php" method="post" role="form" class="php-email-form p-3 p-md-4">
          <div class="row">
            <div class="col-xl-6 form-group">
              <input type="text" name="name" class="form-control rounded-pill" id="name" placeholder="Your Name" required/>
            </div>

            <div class="col-xl-6 form-group">
              <input type="email" class="form-control rounded-pill " name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <br/>
          <div class="row">
            <div class="col-xl-6 form-group">
              <input type="text" name="Time" class="form-control rounded-pill" id="Time" placeholder="Time" required/>
            </div>

            <div class="col-xl-6 form-group">
              <input type="Date" class="form-control rounded-pill " name="date" id="date" placeholder="date" required/>
            </div>
          </div>
          <br/>
          <div class="form-group ">
            <input type="text" class="form-control rounded-pill" name="messsage" id="message" placeholder="Subject" required/>
          </div>
          <br/>
          <div class="form-group">
            <textarea class="form-control " name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading...</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been ready. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit" className='p-2 bg-warning'>Send Message</button></div>
        </form>
    </div>
  )
}

                            