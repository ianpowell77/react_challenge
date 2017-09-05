import React from 'react';

function ChangeTeamButtons(props) {
  return (
    <button onClick={() => props.changeTeamFunc(props.memberIndex, props.currentTeam, props.destinationTeam)}>{props.value}</button>
  )
}

export default ChangeTeamButtons;