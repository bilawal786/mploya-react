import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ClientSayCard from "./ClientSayCard";


export default class ClientSays extends Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <>
                <div className="container my-container">

                    <div className='sub-section'>
                        <h4>What Our Client
                            <span style={{ color: "#067d1f" }}> Say's</span>
                        </h4>

                        <div className="row">
                            <div className="col-sm-8">
                                <p>These are the reviews of the clients who have used our services</p>
                            </div>
                            <div className="col-sm-4">
                                <div className="group">
                                    {/* carousal arrows left and right */}
                                    <button className="btn btn-success rounded-circle mx-2" onClick={this.previous}>
                                        <i className="fa fa-arrow-left"></i>
                                    </button>
                                    <button className="btn btn-success rounded-circle" onClick={this.next}>
                                        <i className="fa fa-arrow-right"></i>
                                    </button>


                                </div>
                            </div>
                        </div>

                    </div>
                    <br /><br />
                    {/* card-carousal */}
                    <div>

                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <ClientSayCard
                                imgSource='https://i.imgur.com/IRsUTtE.jpg'
                                detail='1Every one working in the office is very knowledgeable about all types of dental work and options for your individual needs'
                                name='Emilia Tadashi'
                                rank='Highschool Girl'
                                rating='5'
                            />
                            <ClientSayCard
                                imgSource='https://i.imgur.com/IRsUTtE.jpg'
                                detail='1Every one working in the office is very knowledgeable about all types of dental work and options for your individual needs'
                                name='Emilia Tadashi'
                                rank='Highschool Girl'
                                rating='5'
                            />
                            <ClientSayCard
                                imgSource='https://i.imgur.com/IRsUTtE.jpg'
                                detail='1Every one working in the office is very knowledgeable about all types of dental work and options for your individual needs'
                                name='Emilia Tadashi'
                                rank='Highschool Girl'
                                rating='5'
                            />
                            <ClientSayCard
                                imgSource='https://i.imgur.com/IRsUTtE.jpg'
                                detail='1Every one working in the office is very knowledgeable about all types of dental work and options for your individual needs'
                                name='Emilia Tadashi'
                                rank='Highschool Girl'
                                rating='5'
                            />
                            <ClientSayCard
                                imgSource='https://i.imgur.com/IRsUTtE.jpg'
                                detail='1Every one working in the office is very knowledgeable about all types of dental work and options for your individual needs'
                                name='Emilia Tadashi'
                                rank='Highschool Girl'
                                rating='5'
                            />
                        </Slider>

                    </div>

                </div>

            </>
        );
    }
}
