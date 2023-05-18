import React, { useContext } from "react";
import Scorebar from "../components/Scorebar";
import GameLogic from "../context/GameLogic";
import Pad from "./Pad";

const Main = () => {
  const { gameFeed, handleRuleClick, gameSectionOperation, padDataClick } =
    useContext(GameLogic);
  console.log(Math.floor(Math.random() * padDataClick.length));
  console.log(
    padDataClick.map((item) => {
      Math.random() * item.id;
    })
  );

  return (
    <div
      onClick={() => gameFeed.rulesButton && handleRuleClick()}
      className="wrap flex"
    >
      <Scorebar />

      {gameFeed.gameSection ? (
        <div className="game-section flex">
          <div className="label flex">
            <p>YOU PICKED</p>
            <p>THE HOUSE PICKED</p>
          </div>
          <div className="game-holes flex">
            {gameFeed.gameSection && (
              <Pad {...() => gameSectionOperation(id)} />
            )}
            <div className="stat">
              <h1 className="lose txt">YOU LOSE</h1>
              <h1 className="win txt">YOU WIN</h1>
              <button className="play">PLAY AGAIN</button>
            </div>
            <div className="hole-2 hl"></div>
          </div>
        </div>
      ) : (
        <div className="play-section grid">
          {padDataClick.map((item) => (
            <Pad
              classOf={item.className}
              key={item.id}
              nameOf={item.name}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
