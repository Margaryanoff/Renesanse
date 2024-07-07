import React from "react";
import { offeringCards, visionsCards } from ".";

const Offerings = () => {
    return (
        <div>
            <div className="offering_title">
                <h1>What We Offer</h1>
                <p>
                    <strong>
                        At <span> Renaissance Reverie</span>, our mission is to bring the
                        beauty, wisdom, and inspiration of the Renaissance to modern
                        audiences. We believe that the art, ideas, and cultural
                        achievements of the Renaissance have timeless value, offering
                        endless inspiration and insight into the human experience. Our
                        goal is to create an engaging space where people can explore,
                        learn, and share their passion for this extraordinary period in
                        history.
                    </strong>
                </p>
            </div>
            <div className="offering_cards_parent">
                {offeringCards.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <span>
                                <img src={elm.icon} alt="" />
                            </span>
                            <h2>{elm.title}</h2>
                            <p>{elm.body}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Offerings;
