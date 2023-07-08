import React from 'react'

export default function Chefs() {
  return (
    <div>
      <section id="chefs" class="chefs section-bg">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <br />

            <p><span>Things to Do</span></p>
          </div>
          <img src={require('../assets/img/thq.png')} width="100%" height="600" alt="logo" />
          <br />
          <br />

          <div class="row gy-4">

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
              <div class="chef-member">
                <div class="member-img">
                  <img src={require('../assets/img/t.webp')} width="100%" height="300" alt="logo" />
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Roller Coster</h4>
                  <span>Wonderful</span>
                  <p>ncredicoaster is both quite long (more than 6,000 feet and a 2 minute, 36-second ride time) and arguably the biggest thrill at the entire resort, being its only inverted coaster, a 55 miles-per-hour launch and a 108-foot drop.</p>
                </div>
                <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                <br />
                <br />
                <a href="https://youtu.be/n3K9vGWuIOo" class="glightbox btn-watch-video align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                <br />
                <br />
              </div>
            </div>


            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
              <div class="chef-member">
                <div class="member-img">
                  <img src={require('../assets/img/saorin.jpg')} width="100%" height="300" alt="logo" />
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Saorin</h4>
                  <span>Dengerous but Wonderfull</span>
                  <p>Soarin' Around the World is in the Grizzly Peak Airfield section of Disney California Adventure at the Disneyland Resort One of the resort's most popular attractions, it utilizes the park's FastPass system.</p>
                </div>
                <br />
                <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                <br />
                <br />
                <a href="https://youtu.be/Zh4V0vfN5QE" class="glightbox btn-watch-video align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                <br />
                <br />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
              <div class="chef-member">
                <div class="member-img">
                  <img src={require('../assets/img/fun.webp')} width="100%" height="300" alt="logo" />
                  <div class="social">
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                    <a href=""><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div class="member-info">
                  <h4>Fun Park</h4>
                  <span>Funny Park</span>
                  <p>Disneyland is a theme park in Anaheim, California. Opened in 1955, it was the first theme park opened by The Walt Disney Company and the only one designed and constructed under the direct supervision of Walt Disney. </p>
                </div>
                <button><a href="" className='rounded-pill m-5'>Book Now</a></button>
                <br />
                <br />
                <a href="https://youtu.be/2Cb7s2U93pg" class="glightbox btn-watch-video align-items-center"><i class="bi bi-play-circle"></i><span>Watch Video</span></a>
                <br />
                <br />
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
