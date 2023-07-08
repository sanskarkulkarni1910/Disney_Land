import React from 'react'

export default function Museum() {
    return (
        <div>
            <section id="Museum" class="Museum section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="section-header">
                        <br />

                        <p><span>Packs and Tickets</span></p>
                        <br />
                        <img src={require('../assets/img/d2.webp')} width="100%" height="630" alt="logo" />
                        <br />
                        <br />
                        <div class="row gy-4">

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div class="chef-member">
                                    <div class="member-img ">
                                        <img src={require('../assets/img/golden.webp')} width="100%" height="250" alt="logo" />
                                    </div>
                                    <br />
                                    <div>
                                        <h3 >2023 Golden Pass</h3>
                                        <h6>Include Soak City</h6>
                                        <br />
                                        <h4><span >$29/Month</span></h4>
                                        <button><a href="https://www.knotts.com/season-passes" className='rounded-pill m-5'>Book Now</a></button>

                                        <br />
                                        <br />
                                        <h6>* For 4 months after initial payment  of $39 due today. Or $155 total. Plus applicable taxes and fees<a href="" >Visit terms and conditions</a></h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div class="chef-member">
                                    <div class="member-img ">
                                        <img src={require('../assets/img/season.jpg')} width="100%" height="250" alt="logo" />
                                    </div>
                                    <br />
                                    <div>
                                        <h3 >2023 Season Pass</h3>
                                        <h6>Include Soak City</h6>
                                        <br />
                                        <h4><span >$35/Month</span></h4>
                                        <button><a href="https://www.knotts.com/season-passes" className='rounded-pill m-5'>Book Now</a></button>

                                        <br />
                                        <br />
                                        <h6>* For 4 months after initial payment  of $50 due today. Or $190 total. Plus applicable taxes and fees<a href="" >Visit terms and conditions</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                                <div class="chef-member">
                                    <div class="member-img ">
                                        <img src={require('../assets/img/platinum.jpg')} width="100%" height="250" alt="logo" />
                                    </div>
                                    <br />
                                    <div>
                                        <h3 >2023 Platinum Pass</h3>
                                        <h6>Include Soak City</h6>
                                        <br />
                                        <h4><span >$53/Month</span></h4>
                                        <button><a href="https://www.knotts.com/season-passes" className='rounded-pill m-5'>Book Now</a></button>
                                        <br />
                                        <br />
                                        <h6>* For 4 months after initial payment  of $68 due today. Or $280 total. Plus applicable taxes and fees<a href="" >Visit terms and conditions</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <h5>Season Pass benefits subject to change without notice. Pricing shown is available online only.</h5>

                        <h5>*Not valid for Knott's Scary Farm, special ticket events, or park buyout admission.</h5>

                        Platinum Passholder benefits may vary by park. Contact the park you are planning to visit for any questions regarding applicable benefits.

                        Season long parking is also valid for Knott's Scary Farm parking. Separate Knott's Scary Farm admission is required for event entry. Season long parking is not valid for parking at the Knott's Berry Farm Hotel, California Marketplace, or Preferred parking lots. All Season Parking and Platinum Pass parking is not valid at Gilroy Gardens.
                    </div>

                </div>
            </section>
        </div>
    )
}

