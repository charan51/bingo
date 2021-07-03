import React, { Component } from "react";
import "./App.css";
import Reward from "react-rewards";
import Clap from "./assets/reward.mp3";
import {
  Typography,
  Card,
  Grid,
  CardContent,
} from "@material-ui/core";
import bingoItems from "./assets/cards.json";
import { styled } from "@material-ui/core/styles";
const BingoItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  paddingRight: "10px",
  marginBottom: "10px",
  height: "100px",
});

const CompletedItem = styled(Card)({
  textAlign: "center",
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      10: false,
      11: false,
      completed: 0,
    };
  }
  playAudio() {
    const audioPromise = this.audio.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          // autoplay started
        })
        .catch((err) => {
          // catch dom exception
          console.info(err);
        });
    }
  }
  markComplete = (e) => {
    const id = e.target.id;
    let completed = 0;
    this.setState({ [id]: true });
  };

  savePerson = (e) => {
    const buttonId = e.currentTarget.id.slice(-1);
    const nameId = "name" + buttonId;
    const emailId = "email" + buttonId;
    const nameInput = document.getElementById(nameId).value;
    const emailInput = document.getElementById(emailId).value;
    this.setState({ [nameId]: nameInput, [emailId]: emailInput });
  };

  bingoRow(row) {
    let rowOne = bingoItems.slice(0, 4);
    let rowTwo = bingoItems.slice(4, 8);
    let rowThree = bingoItems.slice(8, 12);
    let rowFour = bingoItems.slice(12, 16);
    let renderRow;
    switch (row) {
      case 1:
        renderRow = rowOne;
        break;
      case 2:
        renderRow = rowTwo;
        break;
      case 3:
        renderRow = rowThree;
        break;
      case 4:
        renderRow = rowFour;
        break;
      default:
        renderRow = rowOne;
    }
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        alignContent="center"
        spacing={3}
      >
        {renderRow.map((item) => {
          const id = item.id;
          if (this.state[id] === true) {
            return (
              <Grid item xs={2} justifyContent="center" key={item.id}>
              <BingoItem id={item.id} className="markCompleted cardItem">
                <CardContent className="cardC">
                 
                  <div className="strike"> {item.item}</div>
                </CardContent>
              </BingoItem>
            </Grid>
            );
          } else {
            return (
              <Grid item xs={2} justifyContent="center" key={item.id}>
                <BingoItem className="cardItem"  id={item.id} onClick={this.markComplete}>
                  <CardContent className="cardC">
                  
                    <div> {item.item}</div>
                  </CardContent>
                </BingoItem>
              </Grid>
            );
          }
        })}
      </Grid>
    );
  }
bingoReward = () => {
  this.reward.rewardMe();
      this.reward1.rewardMe();
      this.sound = new Audio(Clap);
      this.sound
        .play()
        .then(() => {
          // Audio is playing.
        })
        .catch((error) => {
          console.log(error);
        });
}
  render() {
    const keys = Object.keys(this.state);
    keys.forEach((rows) => {});
    let rowOne = keys
      .slice(0, 4)
      .map((item) => this.state[item] && this.state[item]);
    let rowTwo = keys
      .slice(4, 8)
      .map((item) => this.state[item] && this.state[item]);
    let rowThree = keys
      .slice(8, 12)
      .map((item) => this.state[item] && this.state[item]);
    let rowFour = keys
      .slice(12, 16)
      .map((item) => this.state[item] && this.state[item]);
    let colOne = [0, 4, 8, 12].map(
      (item) => this.state[item] && this.state[item]
    );
    let colTwo = [1, 5, 9, 13].map(
      (item) => this.state[item] && this.state[item]
    );
    let colThree = [2, 6, 10, 14].map(
      (item) => this.state[item] && this.state[item]
    );
    let colFour = [3, 7, 11, 15].map(
      (item) => this.state[item] && this.state[item]
    );
    let x1 = [0, 5, 10, 15].map((item) => this.state[item] && this.state[item]);
    let x2 = [3, 6, 9, 12].map((item) => this.state[item] && this.state[item]);
    let checker = (arr) => arr.every((v) => v === true);
    let celebrate = false;
    if (checker(rowOne)) {
      
      celebrate = true;
      this.bingoReward();
    }
    if (checker(rowTwo)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(rowThree)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(rowFour)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(colOne)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(colTwo)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(colThree)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(colFour)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(x1)) {
      celebrate = true;
      this.bingoReward();
    }
    if (checker(x2)) {
      celebrate = true;
      this.bingoReward();
    }
    return (
      <div className={celebrate && "rewardBg"}>
        <div className={celebrate && "rewardContein"}>
          <Reward
            ref={(ref) => {
              this.reward = ref;
            }}
            type="emoji"
            config={{
              angle: 90,
              decay: 0.91,
              spread: 900,
              startVelocity: 50,
              elementCount: 200,
              elementSize: 16,
              lifetime: 100,
            }}
          ></Reward>
          <Reward
            ref={(ref) => {
              this.reward1 = ref;
            }}
            type="memphis"
          ></Reward>
        </div>
        <Grid container justify="center" alignItems="center">
        <Typography variant='h3' gutterBottom>
          {celebrate ? <h1>BINGO!!!!</h1> : <h3>Lets play Bingo</h3>}
      </Typography>
      </Grid>

        <div className="bingoContainer">
          {this.bingoRow(1)}
          {this.bingoRow(2)}
          {this.bingoRow(3)}
          {this.bingoRow(4)}
        </div>
      </div>
    );
  }
}

export default App;
