import React, { Component } from 'react';

class Sell extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            title:'',
            price:'',
            condition:''
           
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
                            <label htmlFor="price">product price: </label>
                            <input type="text" name="price" id="price" value={this.state.price}   />
                        </div>
                        <div className="items">
                            <label htmlFor="condition">product Condition: </label>
                            <input type="text" name="condition" id="condition" value={this.state.condition}   />
                        </div>
                        <button onClick={this.handleSubmission}>Sell item</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Sell;