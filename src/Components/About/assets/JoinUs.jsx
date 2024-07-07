import React from "react";
import { joinUsCards } from ".";

const JoinUs = () => {
    return (
        <div className="joinus_main">
            <div className="joinUs_title">
                <h1>Join us</h1>
                <p>
                    Become a part of <span>Renaissance Reverie</span> and immerse yourself
                    in the art and culture that changed the world. Follow us on our social
                    media channels, join our mailing list, and start engaging with our
                    content today. Together, we can keep the spirit of the Renaissance
                    alive and thriving.
                </p>
            </div>
            <div className="joinus_cards_main">
                {joinUsCards.map((elm) => {
                    return (
                        <div key={elm.id}>
                            <h2>{elm.title}</h2>
                            <p>{elm.body}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default JoinUs;
