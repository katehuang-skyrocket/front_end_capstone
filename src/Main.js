import React from "react";
import "./App.css"
import { Link } from "react-router-dom";

function Main(){
    return(
        <>
            <div className="hero-section">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button className="reserve_a_table_button">Reserve a Table</button>
                    </Link>
                </div>
                <img src="/restaurantfood.jpg" alt="chef holding sushi"/>
            </div>

            <div className="special-section">
                <div className="special_header">
                    <h1>This Week Specials</h1>
                    <button>Online Menu</button>
                </div>
                <div className="special_dishes">
                    <div className="item1_salad">
                        <img src="/greek salad.jpg"  alt="Greek salad"/>
                        <div>
                            <p className="dish_name">Greek Salad</p>
                            <p className="dish_price">$12.99</p>
                        </div>
                        <p className="dish_description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <p className="order_dish">Order a delivery</p>
                    </div>
                    <div className="item2_bruchetta">
                        <img src="/bruchetta.svg"  alt="bruchetta"/>
                        <div>
                            <p className="dish_name">Bruchetta</p>
                            <p className="dish_price">$5.99</p>
                        </div>
                        <p className="dish_description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <p className="order_dish">Order a delivery</p>
                    </div>
                    <div className="item3_dessert">
                        <img src="/lemon dessert.jpg"  alt="lemon dessert"/>
                        <div>
                            <p className="dish_name">Lemon Dessert</p>
                            <p className="dish_price">$5.00</p>
                        </div>
                        <p className="dish_description">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <p className="order_dish">Order a delivery</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main