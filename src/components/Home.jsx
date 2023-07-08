import React from 'react'

export default function Home() {
    return (
        <div>
            <section id="hero" class="hero d-flex align-items-center section-bg">
                <div class="container">
                    <div class="row justify-content-between gy-5">
                        <div class="col-lg-4 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                            <h2 data-aos="fade-up"><span>The most Spectacular<br />Summer vacation</span></h2>
                            <p data-aos="fade-up" data-aos-delay="100">Find the Latest Magical Surprises Magical Offers and Benefits
                            </p>
                            <div class="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="https://www.tickets-paris.fr/en/disneyland-paris/?psafe_param=1&gclid=Cj0KCQjwkqSlBhDaARIsAFJANkiN-JJ7J4lNLgakbVKBFV1duiXP7WuKwCm2hrCL15Hi4XAd8sEVmeAaAvYSEALw_wcB" class="btn-book-a-table">Book a Ticket</a>
                                <a href="https://youtu.be/2Cb7s2U93pg" class="glightbox btn-watch-video d-flex align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div class="col-lg-8 order-1 order-lg-2 text-center text-lg-start">
                            <img src={require('../assets/img/d3.webp')} width="100%" height="400" alt="logo" />
                        </div>
                    </div>
                </div>
            </section>
            
            <div>
            <img src={require('../assets/img/d4.jpg')} width="100%" height="800" alt="logo" />
            </div>
            <br/>
        </div>
    )
}
