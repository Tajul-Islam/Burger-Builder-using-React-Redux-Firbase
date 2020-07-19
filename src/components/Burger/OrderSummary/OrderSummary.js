import React ,{Component} from "react";
import AUX from "../../../hoc/hoc";
import Button from "../../UI/Button/Button";
class OrderSummary extends Component {
    render() {
        const ingredietntSummary = Object.keys(this.props.ingredients)
            .map(igkey=>{
                return <li key={igkey}>
                    <span style={{textTransform:'capitalize'}}>{igkey}</span>:{this.props.ingredients[igkey]}
                </li>
            });
        return(
            <AUX>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredietntSummary}
                </ul>
                <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>Continue Checkout ?</p>
                <Button btnType="Success" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Danger" clicked={this.props.purchanseContinued}>Continue</Button>
            </AUX>
        );
    }
}

export default OrderSummary;
