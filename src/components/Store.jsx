import React from 'react'

export default function Store() {
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <div class="section-header">


                <p><span>Places To Stay</span></p>
            </div>
            <img src={require('../assets/img/d1.webp')} width="100%" height="630" alt="logo" />
            <br />
            <br />
            <div class="row gy-4">

                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div class="chef-member">
                        <div class="member-img">
                            <img src={require('../assets/img/residence.jpg')} width="100%" height="450" alt="logo" />
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                            <br />
                            <h5>Disney Residence Inn Hotel</h5>
                            <h6>Enjoy special rooms at the hollywood-themed hotel featuring restaurent and a piano-themed outdoor pool and Disney's California Adventure theme parks.</h6>
                            <br />
                            <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                        </div>
                        <br />
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div class="chef-member">
                        <div class="member-img">
                            <img src={require('../assets/img/paris.jpg')} width="100%" height="450" alt="logo" />
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                            <br />
                            <h5>Disney Anaheim Hotel</h5>
                            <h6>The Home2 Suites by Hilton Anaheim Resort, CA is conveniently located across from the entrance to Disneyland. </h6>
                            <br />
                            <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                        </div>
                        <br />
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div class="chef-member">
                        <div class="member-img">
                            <img src={require('../assets/img/paris1.webp')} width="100%" height="450" alt="logo" />
                            <div class="social">
                                <a href=""><i class="bi bi-twitter"></i></a>
                                <a href=""><i class="bi bi-facebook"></i></a>
                                <a href=""><i class="bi bi-instagram"></i></a>
                                <a href=""><i class="bi bi-linkedin"></i></a>
                            </div>
                            <br />
                            <h5>Disney Conrad orlando  Hotel</h5>
                            <h6>Inside the lush 1,100 acres at Evermore Orlando Resort is a captivating retreat. Buffered by a nature preserve, Conrad Orlando offers everything.</h6>
                            <br />
                            <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                        </div>
                        <br />
                    </div>
                </div>



            </div>
        </div>
    )
}
