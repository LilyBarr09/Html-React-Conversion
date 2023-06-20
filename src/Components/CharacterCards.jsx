import { Component } from "react";
import "../CSS/CharacterCards.css";

export class CharacterCards extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <section id="character-cards">
          {data.map((item) => {
            return (
              <div className="card" key={item.name}>
                <div className="card-titles">
                  <h3>{item.name}</h3>
                  <h4>{item.nickName}</h4>
                </div>
                <img src={item.imageUrl} />
                <p>{item.backGround}</p>
              </div>
            );
          })}
        </section>
      </div>
    );
  }
}
