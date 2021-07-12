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
      12: false,
      13: false,
      14: false,
      15: false,
      16: false,
      17: false,
      18: false,
      19: false,
      20: false,
      21: false,
      22: false,
      23: false,
      24: false,
      25: false,
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
    let rowOne = bingoItems.slice(0, 5);
    let rowTwo = bingoItems.slice(5, 10);
    let rowThree = bingoItems.slice(10, 15);
    let rowFour = bingoItems.slice(15, 20);
    let rowFive = bingoItems.slice(20, 25);
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
      case 5:
        renderRow = rowFive;
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
              <Card id={item.id} className="markCompleted cccc cardItem">
                <CardContent className="cardC">
                 
                  {item.id !== 12 ? <div className="strike"> {item.item}</div> :  <div> {item.item}</div>}
                </CardContent>
              </Card>
            </Grid>
            );
          } else {
            return (
              <Grid item xs={2} justifyContent="center" key={item.id}>
                <Card   onClick={this.markComplete} className="cardItem cccc"  id={item.id} >
                  
                     {item.item}
                </Card>
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
    let rowOne = keys
      .slice(0, 5)
      .map((item) => this.state[item] && this.state[item]);
    let rowTwo = keys
      .slice(5, 10)
      .map((item) => this.state[item] && this.state[item]);
    let rowThree = keys.filter(i => i !== "12")
      .slice(10, 14)
      .map((item) => this.state[item] && this.state[item]);
    let rowFour = keys
      .slice(15, 20)
      .map((item) => this.state[item] && this.state[item]);
      let rowFive = keys
      .slice(20, 25)
      .map((item) => this.state[item] && this.state[item]);
    let colOne = [0, 4, 8, 12].map(
      (item) => this.state[item] && this.state[item]
    );
    let colTwo = [1, 6, 11, 16,21].map(
      (item) => this.state[item] && this.state[item]
    );
    let colThree = [2, 7, 17,22].map(
      (item) => this.state[item] && this.state[item]
    );
    let colFour = [3, 8, 13, 18,23].map(
      (item) => this.state[item] && this.state[item]
    );
    let colFive = [4, 9, 14, 19,24].map(
      (item) => this.state[item] && this.state[item]
    );
    let x1 = [0, 6,18, 24].map((item) => this.state[item] && this.state[item]);
    let x2 = [4, 8,16,20].map((item) => this.state[item] && this.state[item]);
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
    if (checker(rowFive)) {
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
    if (checker(colFive)) {
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

        <div className={celebrate ? "bingoContainer stopBingo" : "bingoContainer"}>
          {this.bingoRow(1)}
          {this.bingoRow(2)}
          {this.bingoRow(3)}
          {this.bingoRow(4)}
          {this.bingoRow(5)}
          {celebrate && <p style={{'color': 'red'}}>Refresh to play again!!!!</p> }
        </div>
        <div className={celebrate && "stopBingoG"} />
      
      </div>
    );
  }
}

export default App;
