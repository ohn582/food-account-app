import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 
import swal from 'sweetalert';


class UpdateModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.whatever.name,
            description: props.whatever.description,
            price: props.whatever.price,
            image: props.whatever.image,
            id: props.whatever.productId
        }
    }

    handleChange = (event) => this.setState({ [event.target.name]: event.target.value })

    handleUpdate = () => {
        this.props.whatever.updateProduct(this.state);
        this.props.history.push('/home')
        swal("Ok!", "Your product is updated successfully !", "success");

    }
    render() {

        return (

            <div>

                <div className="modal fade" id={this.props.titleId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Name:</label>
                                        <input type="text" onChange={this.handleChange} name='name' className="form-control" id="recipient-name" value={this.state.name} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Description:</label>
                                        <textarea onChange={this.handleChange} name="description" className="form-control" id="message-text" value={this.state.description}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2" className="col-form-label">Price:</label>
                                        <input type="text" onChange={this.handleChange} name="price" className="form-control" id="message-text" value={this.state.price}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Image:</label>
                                        <input type="text" onChange={this.handleChange} name="image" className="form-control" id="message-text" value={this.state.image}></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={this.handleUpdate} data-dismiss="modal">Submit Changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(UpdateModal)