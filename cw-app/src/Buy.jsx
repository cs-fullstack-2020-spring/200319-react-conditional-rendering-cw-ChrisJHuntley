import React, { Component } from 'react';

class Buy extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title:'',
            offerPrice:'',
             
           }
    }
    handleSubmission = (event) => {
        event.preventDefault();  
        console.log(this.state);  
        this.setState({ hasBeenSubmitted: true })
    }
     
    render() {
         
        return (
            <div>
                <form action="">
                    <fieldset>
                        <legend>Product information input</legend>

                        <div className="items">
                            <label htmlFor="title">product title : </label>
                            <input type="text" name="title" id="title" value={this.state.title}   />
                        </div>

                        <div className="items">
                            <label htmlFor="price">Offer price: </label>
                            <input type="text" name="price" id="price" value={this.state.price}   />
                        </div>
                         
                        <button onClick={this.handleSubmission}>Buy item</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Buy;