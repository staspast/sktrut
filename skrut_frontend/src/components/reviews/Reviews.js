import React, {Component} from 'react';
import Header from  '../header/Header';
import ModalStructure from  '../../containers/modal/Modal';
import {Grid, Row, Col} from  'react-bootstrap';

const Description = {
    review: 'Будемо раді, якщо Ви поділитеся своїми враженнями про свій відпочинок.',
    button: 'Add new review'
};

const HeaderTitle = {
    title: "header.title.reviews",
    name: 'header.name.reviews'
};

class Reviews extends Component {
    render() {
        return (
            <div className="reviews">
                <Header header={ HeaderTitle }/>

                <Grid>
                    <Row>
                        <Col xs={12} sm={6}>
                            <div className="reviews__title">Відгуки наших гостей</div>
                        </Col>
                        <Col xs={12} sm={6}>
                            <ModalStructure description={ Description }/>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <div className="reviews__page">
                                <div className="reviews__data">
                                    <div className="reviews__data--name">Andriy Spas</div>
                                    <div className="reviews__data--city">Lviv</div>
                                    <div className="reviews__data--description">
                                        Lorem Ipsum is simply text of the printing and typesetting industry is simply text
                                        of the printing and typesetting industry. Lorem Ipsum is simply text of the printing and typesetting
                                        industry is simply text of the printing and typesetting industry. Lorem Ipsum is simply text of the
                                        printing and typesetting industry is simply text of
                                        the printing and typesetting industry.
                                    </div>
                                </div>

                                <div className="reviews__date">
                                    <div className="reviews__date--day">12</div>
                                    <div className="reviews__date--month">July</div>
                                    <div className="reviews__date--year">2017</div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className="reviews__page">
                                <div className="reviews__data">
                                    <div className="reviews__data--name">Andriy Spas</div>
                                    <div className="reviews__data--city">Lviv</div>
                                    <div className="reviews__data--description">
                                        Lorem Ipsum is simply text of the printing and typesetting industry is simply text
                                        of
                                        the printing and typesetting industry. Lorem Ipsum is simply text of the printing
                                        and typesetting
                                        industry is simply text of the printing and typesetting industry. Lorem Ipsum is
                                        simply text of the
                                        printing and typesetting industry is simply text of
                                        the printing and typesetting industry.
                                    </div>
                                </div>

                                <div className="reviews__date">
                                    <div className="reviews__date--day">12</div>
                                    <div className="reviews__date--month">July</div>
                                    <div className="reviews__date--year">2017</div>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12}>
                            <div className="reviews__page">
                                <div className="reviews__data">
                                    <div className="reviews__data--name">Andriy Spas</div>
                                    <div className="reviews__data--city">Lviv</div>
                                    <div className="reviews__data--description">
                                        Lorem Ipsum is simply text of the printing and typesetting industry is simply text
                                        of
                                        the printing and typesetting industry. Lorem Ipsum is simply text of the printing
                                        and typesetting
                                        industry is simply text of the printing and typesetting industry. Lorem Ipsum is
                                        simply text of the
                                        printing and typesetting industry is simply text of
                                        the printing and typesetting industry.
                                    </div>
                                </div>

                                <div className="reviews__date">
                                    <div className="reviews__date--day">12</div>
                                    <div className="reviews__date--month">July</div>
                                    <div className="reviews__date--year">2017</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default Reviews;