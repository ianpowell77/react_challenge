import React, { Component } from 'react';
import './App.css';
import BuildTeam from './BuildTeam';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teams: {
        teamUnassigned: ["Ian Powell", "Angel Lopez", "Mickey Hernandez", "Hunter Newton"],
        team1: [],
        team2: [],
      }
    }
    this.changeState = this.changeState.bind(this);
  }

  changeState(memberIndex, currentTeam, destinationTeam) {
    let stateTeamsCopy = Object.assign(this.state.teams);
    stateTeamsCopy[destinationTeam].push(stateTeamsCopy[currentTeam][memberIndex]);
    stateTeamsCopy[currentTeam].splice(memberIndex, 1);
    this.setState({
      teams: stateTeamsCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <BuildTeam
          team={this.state.teams.team1}
          name="Team 1"
          currentTeam="team1"
          leftTeam="none"
          rightTeam="teamUnassigned"
          changeTeamFunc={this.changeState}
        />
        <BuildTeam
          team={this.state.teams.teamUnassigned}
          name="Unassigned"
          currentTeam="teamUnassigned"
          leftTeam="team1"
          rightTeam="team2"
          changeTeamFunc={this.changeState}
        />
          <BuildTeam
            team={this.state.teams.team2}
            name="Team 2"
            currentTeam="team2"
            leftTeam="teamUnassigned"
            rightTeam="none"
            changeTeamFunc={this.changeState}
          />
      </div>
    );
  }
}

export default App;