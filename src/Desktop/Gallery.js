import React from 'react';
import axios from 'axios';
import './Gallery.css';

export default class Gallery extends React.Component {
    state = {
        images: []
    }

    componentDidMount() {
        axios.get(`https://boiling-refuge-66454.herokuapp.com/images`)
            .then(res => {
                const images = res.data;

                this.setState({ images });
            }
        )
    }

    render() {
        return (

            <section className="Desktop-row_1">
                { this.state.images.map(img => <img src={img.url} id={img.id} className="Desktop-img" alt="Rectangle 1" />)}
            </section>
        )
    }
}