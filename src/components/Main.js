import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <div className="mdl-grid ">
                <div className="mdl-grid ">
                    <div className="mdl-cell mdl-cell--6-col web">
                        <h4 className="nxtpro" style={{fontFamily: 'Lato-Medium'}}>OUR NEXT PROJECT:</h4>
                        <h1 className="newweb" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>YOUR NEW WEBSITE</h1>
                        <img className="shape6" src="./img/Shapes/Rectangle 6.png"/>
                        <p className="newwebcaption" style={{fontFamily: 'Lato-Regular'}}>Let's create something  that will convert  visitors to instant customers.<br/>With clean and clear UI/UX and branded aesthestics, create valuable<br/> qualified leads.</p>
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent primary getsbutton">
                            GET ESTIMATE
                        </button>
                        <img className="shape5" src="./img/Shapes/Rectangle 5.png"/>
                        <p className="caption">Expand your brand's reach today, take <br/> it to the clouds! We'll be happy to do<br/>the heavy lifting(Coding) for you! </p>
                    </div>

                    <div className="mdl-cell mdl-cell--6-col ">
                        <img className="laptop" src="./img/laptop/Laptop.png"/>
                        <img className="logo" src="./img/Logo/Cloudwalk Logo.png"/>
                        <p className="caption1"> We are a digital (obviously) solutions company that create products to<br/> improve and innovata companies across the globe. We create unparalleled <br/> systematic business solutions to make operations more officients.</p>
                    </div>
                </div>

                <div className="mdl-grid ">
                    <div className="mdl-cell mdl-cell--4-col">
                        <img className="features1" src="./img/Features/Feature 1.png"/>
                        <label className="oms" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Online Management System</label>
                        <p className="omsfeatures1">Learning is cool, but knowing is better, and<br/> I know the key to success. Find peace, life is<br/> like a water fall, yuo've gotta flow. celebrate<br/> success right, The only way, apple.</p>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col ">
                        <img className="features2" src="./img/Features/Feature 2.png"/>
                        <label className="wd" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Web Deveopment</label>
                        <p className="wdfeatures2">I'm up to something. The first of the month is<br/> comming, we have to get money, we have no<br/> choice. It cost money to eat and they don't<br/> want you to eat. You smart, you loyal.</p>

                    </div>
                    <div className="mdl-cell mdl-cell--4-col">
                        <img className="features3" src="./img/Features/Feature 3.png"/>
                        <label className="dg" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Digital Marketing</label>
                        <p className="dgfeatures3">It's Important to use cocoa butter. It's the key<br/> to more success, why not live smooth? Why<br/> live rough? The other day the grass was brown.<br/> now it's green because I ain't give up.</p>
                    </div>
            </div>

            <div className="mdl-grid ">
                <div className="mdl-cell mdl-cell--6-col web">
                    <img className="photolivelogo" src="./img/logo/photolive-logo.png"/>
                </div>

                <div className="mdl-cell mdl-cell--6-col products">
                    <label className="products1" style={{fontFamily: 'MerriweatherSans-ExtraBold'}}>Products</label>
                    <p className="photoliveinfo">Photolive is a social media tool and the first digital photo<br/> booth in the country that allow's brands to gain valuable<br/>presence in top social networking sites like Facebook, Instagram, Twitter and Email in real time. </p>

                    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored productbtn">
                        VISIT SITE
                    </button>

            </div>
            </div>

        </div>


        );
    }
}

export default Main;