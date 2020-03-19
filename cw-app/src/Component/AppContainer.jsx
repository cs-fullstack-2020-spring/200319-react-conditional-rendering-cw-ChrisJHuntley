import React, { Component } from 'react'
import ListOfItems from './ListOfItems'
import Sell from './Sell'
// for some reason i could not import my Buy component
// import Buy from './Buy'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toSelItems: '',
            toBuyitems: ''
        }
    }
    render() {
        // need review on linking arrays
        let ItemsforSale=[]
        let ItemOffer=[]
        return (
            <div>
                <h1>Buy sell app</h1>
                <ListOfItems />
                <Sell/>
                {/* <Buy/> */}
            </div>

        )
    }


}
export default AppContainer