
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 
import swal from 'sweetalert'
import '../../App.css'


class DeleteCardUI extends Component {

    onClick = (event) => {
        event.preventDefault();
        this.props.deleteProduct(this.props.productId)
        swal("Ok!", "Your product is removed!", "success");
    }

    render() {
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
                        <button type="button" className="btn  btn-lg btn-block font-weight-bold buttons-color-red" onClick={this.onClick}>Delete</button>
                    </div>
                </div>


            </div>
        )
    }
}

export default withRouter(DeleteCardUI);