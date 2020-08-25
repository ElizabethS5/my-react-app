import React from "react";
import JeopardyService from "../../jeopardyService";
import Display from "../display/Display";
import "./Jeopardy.css";

class Jeopardy extends React.Component {
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: [],
      guesses: ["", "", ""],
      score: 0,
    };
  }
  getNewQuestions() {
    return this.client.getQuestion().then((result) => {
      result.data.forEach((obj) => {
        obj.selected = false;
      });
      this.setState({
        data: result.data,
      });
    });
  }
  componentDidMount() {
    this.getNewQuestions();
  }

  handleSelect = (i) => {
    let data = [...this.state.data];
    data[i].selected = !data[i].selected;
    this.setState({ data });
  };

  handleChange = (guess, i) => {
    let guesses = [...this.state.guesses];
    guesses.splice(i, 1, guess);
    this.setState({ guesses });
  };

  handleSubmit = (i) => {
    this.setState((currentState) => {
      let score = currentState.score;
      let value = currentState.data[i].value;
      let guess = currentState.guesses[i];
      let answer = currentState.data[i].answer;
      if (guess === answer) {
        score += value;
      } else {
        score -= value;
      }
      return { score, guesses: ["", "", ""] };
    });
    return this.getNewQuestions();
  };

  render() {
    if (this.state.data.length === 0) {
      return <div className="Jeopardy">Loading...</div>;
    }
    return (
      <div className="Jeopardy">
        <h2>Score: ${this.state.score}</h2>
        <div className="display-container">
          {this.state.data.map((obj, i) => (
            <Display
              key={i}
              data={obj}
              score={this.state.score}
              guess={this.state.guesses[i]}
              handleSelect={() => this.handleSelect(i)}
              handleChange={(e) => this.handleChange(e.target.value, i)}
              handleSubmit={() => this.handleSubmit(i)}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Jeopardy;
