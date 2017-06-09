import React, { Component } from 'react';
import axios from 'axios';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData( event.target );

        axios.post('http://127.0.0.1:8000/mailsender', {
                firstName   : formData.get('firstname'),
                lastName    : formData.get('lastname'),
                emailAddress: formData.get('emailaddress'),
                phone       : formData.get('phone'),
                message     : formData.get('message'),
            })
            .then(function (response) {
                // console.log(response);
                document.getElementById("cont").reset();

                var dialog = document.querySelector('dialog');
                dialog.showModal();
                dialog.querySelector('.close').addEventListener('click', function() {
                    dialog.close();
                });

            })
            .catch(function (error) {
                console.log(error);
            });

        this.setState({value: null});
    }

    render() {
        return (
            <div className="mdl-grid main-div">
                <img className="hide-temp shapes rotate ellipse" src="./img/shapes/ellipse.png"/>
                <img className="hide-temp shapes rotate polygon1" src="./img/shapes/polygon-1.png"/>
                <img className="hide-temp shapes rotate rectangle" src="./img/shapes/rectangle.png"/>
                <img className="hide-temp shapes rotate rectangle3" src="./img/shapes/rectangle-3.png"/>
                <img className="hide-temp shapes rotate ellipse2" src="./img/shapes/ellipse-2.png"/>
                <img className="hide-temp shapes rotate polygon3" src="./img/shapes/polygon-3.png"/>
                <img className="hide-temp shapes rectangle05" src="./img/shapes/rectangle-5.png"/>
                <img className="hide-temp shapes rotate polygon2" src="./img/shapes/polygon-2.png"/>
                {/*<img className="hide-temp shapes rectangle6" src="./img/shapes/rectangle-6.png"/>*/}
                <img className="hide-temp shapes rotate rectangle4" src="./img/shapes/rectangle-4.png"/>
                <img className="hide-temp shapes rotate ellipse3" src="./img/shapes/ellipse3.png"/>
                <img className="hide-temp shapes rotate rectangle10" src="./img/shapes/rectangle-2.png"/>

                <div className="mdl-grid webcover" id="home">
                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone web">
                        <h4 className="nxtpro" style={{fontFamily: 'Lato-Medium'}}>OUR NEXT PROJECT:</h4>
                        <h1 className="newweb" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>YOUR NEW WEBSITE</h1>
                        <img className="shape6 mdl-fw" src="./img/shapes/rectangle-6.png"/>
                        <p className="newwebcaption" style={{fontFamily: 'Lato-Regular'}}>Let's create something  that will convert  visitors to instant customers.<br/>With clean and clear UI/UX and branded aesthestics, create valuable<br/> qualified leads.</p>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored get-estimate btn-custom-hover">
                            GET ESTIMATE
                        </button>
                     </div>

                    <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
                        <img className="laptop mdl-fw" src="./img/laptop/laptop.png"/>
                    </div>
                </div>

                <div className="mdl-grid aboutpage" id="about">
                    <div className="mdl-cell mdl-cell--6-col">
                        <p className="caption">Expand your brand's reach today, take <br/> it to the clouds! We'll be happy to do<br/>the heavy lifting(Coding) for you! </p>

                        <hr className="rectangle5"/>
                    </div>

                    <div className="mdl-cell mdl-cell--6-col ">
                        <img className="logo mdl-fw" src="./img/logo/cloudwalk-logo.png"/>
                        <p className="caption1"> We are a digital (obviously) solutions company that create products to<br/> improve and innovata companies across the globe. We create unparalleled <br/> systematic business solutions to make operations more officients.</p>
                    </div>
                </div>

                <div className="mdl-grid">
                    <div className="mdl-cell mdl-cell--4-col text-center">
                        <img className="features1 mdl-fw" src="./img/features/feature-1.png"/> <br/>
                        <label className="oms" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Online Management System</label>
                        <p className="omsfeatures1">Learning is cool, but knowing is better, and I know the key to success. Find peace, life is like a water fall, yuo've gotta flow. celebrate success right, The only way, apple.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col  text-center">
                        <img className="features2 mdl-fw" src="./img/features/feature-2.png"/> <br/>
                        <label className="wd" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Web Development</label>
                        <p className="wdfeatures2">I'm up to something. The first of the month is comming, we have to get money, we have no choice. It cost money to eat and they don't want you to eat. You smart, you loyal.</p>

                    </div>
                    <div className="mdl-cell mdl-cell--4-col text-center">
                        <img className="features3 mdl-fw" src="./img/features/feature-3.png"/> <br/>
                        <label className="dg" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Digital Marketing</label>
                        <p className="dgfeatures3">It's Important to use cocoa butter. It's the key to more success, why not live smooth? Why live rough? The other day the grass was brown. now it's green because I ain't give up.</p>
                    </div>
                </div>

                <div className="mdl-grid" id="product">
                    <ul className="bxslider">
                        <li>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col">
                                    <img className="photolivelogo mdl-fw" src="./img/products/photolive.jpg"/>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col product-description">
                                    <img className="product-logos" src="./img/logo/photolive-logo.png"/>
                                    <p className="photoliveinfo">
                                        <font style={{ color: '#63d6ef', fontWeight: 'bold' }}>PhotoLive </font>
                                        is a social media tool and the first digital photo
                                        booth in the country that allows brands to gain valuable
                                        presence in top social networking sites like Facebook,
                                        Instagram, Twitter and email in real time.
                                    </p>
                                    <div className="row text-center">
                                        <a href="http://photolive.com.ph" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn btn-custom-hover">
                                            VISIT SITE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col">
                                    <img className="photolivelogo mdl-fw" src="./img/products/medix.jpg"/>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col product-description">
                                    <img className="product-logos" src="./img/products/medix-logo.png" alt=""/>
                                    <p className="photoliveinfo medix">
                                        <font style={{ color: '#3fa9f5', fontWeight: 'bold' }}>Medix </font>
                                        is a cloud-based clinic management software that helps
                                        healthcare practitioners improve their clinic operations using
                                        just one quick and easy service. It is a 24/7 accessible manager
                                        that efficiently organizes appointments and clinic records.
                                    </p>
                                    <div className="row text-center">
                                        <a href="http://medix.ph" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn btn-custom-hover">
                                            VISIT SITE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col">
                                    <img className="photolivelogo mdl-fw" src="./img/products/soovy.jpg"/>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col product-description">
                                    <img className="product-logos" src="./img/products/soovy-logo.png" alt=""/>
                                    <p className="photoliveinfo soovy">
                                        <font style={{ color: '#f47f20', fontWeight: 'bold' }}>Soovy </font>
                                        is a geolocation mobile app that lets users access
                                        exclusive frame souvenirs for their travels, concerts, restos,
                                        special events or advocacy.
                                    </p>
                                    <div className="row text-center">
                                        <a href="http://soovy.me" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn btn-custom-hover">
                                            VISIT SITE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col">
                                    <img className="photolivelogo mdl-fw" src="./img/products/bolooka.jpg"/>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col product-description">
                                    <img className="product-logos" src="./img/products/bolooka-logo.png" alt=""/>
                                    <p className="photoliveinfo bolooka">
                                        <font style={{ color: 'black', fontWeight: 'bold' }}>Bolooka </font>
                                        is an e-commerce platform that provides an
                                        exclusive marketplace for local merchants and artists
                                        who create only the best products in the country.
                                    </p>
                                    <div className="row text-center">
                                        <a href="http://bolooka.com" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn btn-custom-hover">
                                            VISIT SITE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="mdl-grid">
                                <div className="mdl-cell mdl-cell--6-col">
                                    <img className="photolivelogo mdl-fw" src="./img/products/verify.jpg"/>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col product-description">
                                    <img className="product-logos" src="./img/products/verify-logo.png" alt=""/>
                                    <p className="photoliveinfo verify">
                                        <font style={{ color: 'orange', fontWeight: 'bold' }}>Verify </font>
                                        is a real-time solution to monitor product
                                        samplings and events using gps technology, live
                                        streaming and a mobile app that can collects data.
                                    </p>
                                    <div className="row text-center">
                                        <a href="http://project-verify.medix.ph/" target="_blank" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn btn-custom-hover">
                                            VISIT SITE
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="mdl-grid feedbackgrid">
                    <div className="mdl-cell mdl-cell--6-col feedback">
                        <label className="cfeedback" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Customer Feedback</label>
                        <br/>
                        <img className="shape06 mdl-fw"  src="./img/shapes/rectangle-6.png"/>
                        <br/>
                        <p className="comments">We’ve worked with some of the world’s best customers.<br className="mdl-layout--large-screen-only"/>
                        Helping these guys succeed with a little help from us was<br className="mdl-layout--large-screen-only"/>
                        a pretty fulfilling experience for us. We hope to add you here!
                        </p>
                    </div>

                    <div className="mdl-cell mdl-cell--6-col feedback1">
                        <label className="titleqoute" style={{fontFamily: 'Lato-Bold'}}> <sup className="qoute" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>“</sup>The best Digital Agency since sliced bread!</label>
                        <p className="clientqoute" style={{fontFamily: 'Lato-Regular'}}>How’s business? Boomin. I’m giving you cloth talk, cloth. Special cloth alert,<br/>
                        cut from a special cloth. Surround yourself with angels. </p>
                        <div  className="mdl-grid" >
                            <div  className="mdl-cell mdl-cell--6-col photo" >
                                <img className="jonathan mdl-fw"  src="./img/features/photo.png"/>
                            </div>
                            <div className="mdl-cell mdl-cell--6-col name">
                                <label className="namej" style={{fontFamily: 'Lato-Regular'}}>Jonathan L. Simmons<br/></label>
                                <label className="company" style={{fontFamily: 'MerriweatherSans-Bold'}}>Blade and Babe Inc.</label>
                             </div>
                         </div>
                    </div>
                </div>

                <div className="mdl-grid consult" id="contacts">

                    <img className="hide-temp shapes rotate polygon22" src="./img/shapes/polygon-2.png"/>
                    <img className="hide-temp shapes rotate polygon33" src="./img/shapes/polygon-3.png"/>
                    <img className="hide-temp shapes rotate ellipse22" src="./img/shapes/ellipse-2.png"/>
                    <img className="hide-temp shapes rotate polygon44" src="./img/shapes/polygon-4.png"/>
                    <img className="hide-temp shapes rotate rectangle1" src="./img/shapes/rectangle.png"/>
                    <img className="hide-temp shapes rotate rectangle2" src="./img/shapes/rectangle-2.png"/>

                    <div className="mdl-cell mdl-cell--6-col consultation">
                        <label className="constitle" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Get a Free Consultation</label>
                        <img className="shape6666 mdl-fw"  src="./img/shapes/rectangle-6.png"/>
                        <p className="conscomments">Get in touch with us today! Fill out this form and<br/>
                            let’s get things done.</p>
                     </div>

                    <div className="mdl-cell mdl-cell--6-col mdl-data-table--selectable mdl-shadow--2dp consultation1">

                        <form id="cont" onSubmit={ this.handleSubmit } type="post">
                            <div  className="mdl-grid" >
                                <div  className="mdl-cell mdl-cell--6-col" >
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input input" type="text" id="first_name" name="firstname"></input>
                                        <br/>
                                        <label style={{fontFamily: 'Lato-Regular'}} htmlFor="first_name">FIRST NAME <sup style={{ color: '' }}>*</sup></label>
                                    </div>
                                </div>

                                <div className="mdl-cell mdl-cell--6-col">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input input" type="text" id="last_name" name="lastname"></input>
                                        <br/>
                                        <label style={{fontFamily: 'Lato-Regular'}} htmlFor="last_name">LAST NAME <sup style={{ color: '' }}>*</sup></label>
                                    </div>
                                </div>
                            </div>

                            <div  className="mdl-grid" >
                                <div  className="mdl-cell mdl-cell--6-col" >
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input input" type="text" id="email_address" name="emailaddress"></input>
                                        <br/>
                                        <label style={{fontFamily: 'Lato-Regular'}} htmlFor="">EMAIL ADDRESS <sup style={{ color: '' }}>*</sup></label>
                                    </div>
                                </div>
                                <div className="mdl-cell mdl-cell--6-col">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input className="mdl-textfield__input input" type="text" id="phone_number" name="phone"></input>
                                        <br/>
                                        <label style={{fontFamily: 'Lato-Regular'}}>PHONE</label>
                                    </div>
                                </div>
                            </div>

                            <div  className="mdl-grid" >
                                <div  className="mdl-cell mdl-cell--12-col" >
                                        <div className="mdl-textfield mdl-js-textfield message">
                                            <textarea className="mdl-textfield__input" type="text" rows= "3" id="message" name="message"></textarea>
                                            <br/>
                                            <label style={{fontFamily: 'Lato-Regular'}}>MESSAGE <sup style={{ color: '' }}>*</sup></label>
                                        </div>
                                </div>
                            </div>

                            <div  className="mdl-grid checkbtn" >
                                <div  className="mdl-cell mdl-cell--12-col" >
                                    <div className="g-recaptcha" data-sitekey="6LfDICIUAAAAAFwFqdEch1dpOoowgXLdGukO7bAJ"></div>
                                 </div>
                            </div>

                            <div  className="mdl-grid" >
                                <div  className="mdl-cell mdl-cell--12-col" >
                                    <button type="submit" style={{fontFamily: 'Lato-Regular'}} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored submitbtn">
                                        SUBMIT
                                    </button>
                                </div>
                             </div>
                        </form>
                     </div>
                </div>

                <div className="mdl-grid--no-spacing blue-parent-div">
                    <div className="mdl-cell mdl-cell--12-col bluediv">
                        <img className="bluebg" src="./img/shapes/accent-2.png"/>
                    </div>
                </div>

                <div className="mdl-grid">
                    <div className="map" id="map"></div>
                    <div className="mdl-cell mdl-cell--12-col cwdmap">
                        <label className="drop" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>DROP BY OUR OFFICE!</label>
                        <hr className="hr-drop"/>
                        <p className="cwdadd"> #79 3BB Building Kamuning Street Corner,<br/>
                        11th Jamboree, Quezon City, 1100 Metro Manila</p>
                    </div>
                </div>

                <div className="mdl-grid footer">
                    <div className="mdl-cell mdl-cell--6-col footerlabel">
                        <label className="worklabel" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>WORK WITH US TODAY!</label>
                        <p className=""> whatsup@cloudwalkdigital.com</p>
                        <p className="">(02) 962 41 92</p>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored start btn-custom-hover">
                            START YOUR PROJECT
                        </button>
                        <p className="footercopyright"> COPYRIGHT © 2017 CLOUDWALK DIGITAL ALL RIGHTS RESERVED</p>
                    </div>

                     <div  className="mdl-cell mdl-cell--6-col socialmedia" >
                        <div  className="mdl-grid" >
                            <div  className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone" >
                                <a href="https://www.facebook.com/CloudwalkDigital"><img className="fbicon"  src="./img/sm/fb.png"/></a>
                            </div>
                        </div>

                        <div  className="mdl-grid twitter" >
                            <div  className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone" >
                                <a href="https://twitter.com/cwdph"><img className="twittericon"  src="./img/sm/twitter.png"/></a>
                            </div>
                        </div>

                        <div  className="mdl-grid youtube" >
                            <div  className="mdl-cell mdl-cell--12-col mdl-cell--4-col-phone" >
                                <a href="https://www.youtube.com/channel/UCtNG3LyQc_ShGwSWn-8DDhQ"><img className="youtubeicon"  src="./img/sm/youtube.png"/></a>
                            </div>
                        </div>
                    </div>
                </div>

                <dialog className="mdl-dialog">
                    <h4 className="mdl-dialog__title">Cloudwalk Digital</h4>
                    <div className="mdl-dialog__content">
                        <p>
                            Thank you for submitting your inquiry.
                        </p>
                    </div>
                    <div className="mdl-dialog__actions">
                        <button type="button" className="mdl-button close">Close</button>
                    </div>
                </dialog>

            </div>
        );
    }
}

export default Main;