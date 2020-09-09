import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 
import UpdateModal from './UpdateModal';
import '../../App.css'


class UpdateCardUI extends Component {

    state = {
        visible: false
    }

    onClick = (event) => {
        this.setState({ visible: true }, () => {
            event.preventDefault();
            this.props.updateProduct()
        })
    }

    render() {
        const modalId = `modal-${this.props.productId}`
        return (

            <div className="col-sm-4 py-2 px-2" >
                <div className="card card-body h-100 mt-4">
                    <img src={this.props.image} className="card-img-top" alt="169824162" />     {/* Image */}
                    <div className="card-body ">
                        <h5 className="card-title text-dark ">{this.props.name} {}                 {/* Name */}
                            <span className="badge badge-warning">New</span>
                        </h5>
                        <h5 className="card-title text-info">${this.props.price}</h5>              {/* Price */}
                        <p className="card-text">{this.props.description}</p>                      {/* Descr */}
                    </div>
                    <div>
                        <UpdateModal whatever={this.props} titleId={modalId} />
                        <button type="button" className="btn  btn-lg btn-block font-weight-bold buttons-color-green" data-toggle="modal" data-target={`#${modalId}`} >Update</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(UpdateCardUI);