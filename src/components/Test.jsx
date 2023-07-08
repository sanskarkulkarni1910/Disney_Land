import React from 'react'

export default function Test() {
  return (
    <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div class="section-header">
            <br/>

            <p>Book Your <span>Test Drive</span> imediately</p>
          </div>       
        <br/>
        <img src={require('../assets/img/test.webp')} width="100%" height="800" alt="logo" />
        <br/>
        <br/>
        <h1>Book Test Drive</h1>
        
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
              <input type="text" name="name" class="form-control rounded-pill" id="name" placeholder="Select Time" required/>
            </div>

            <div class="col-xl-6 form-group">
              <input type="text" class="form-control rounded-pill " name="subject" id="subject" placeholder="Contact" required/>
              
                
                
               
            </div>
          </div>
          <br/>
          <div class="form-group ">
            <input type="text" class="form-control rounded-pill" name="subject" id="subject" placeholder="Models" required/>
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
          <div class="text-center"><button type="submit" className='rounded-pill bg-danger m-1'>Send Message</button></div>
        </form>
    </div>
  )
}
