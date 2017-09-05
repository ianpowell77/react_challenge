import React from 'react';
import ChangeTeamButtons from './ChangeTeamButtons'

function BuildTeam(props) {
  const teamListItems = props.team.map(function(member, index) {
    return (
      <li key={index}>
        {(function() {
          if (props.leftTeam !== "none") {
            return(
              <ChangeTeamButtons
                memberIndex={index}
                currentTeam={props.currentTeam}
                destinationTeam={props.leftTeam}
                changeTeamFunc={props.changeTeamFunc}
                value="<"
              />
            )
          }
        })()}
        <p>
          {member}
        </p>
        {(function() {
          if (props.rightTeam !== "none") {
            return (
              <ChangeTeamButtons
                memberIndex={index}
                currentTeam={props.currentTeam}
                destinationTeam={props.rightTeam}
                changeTeamFunc={props.changeTeamFunc}
                value=">"
              />
            )
          }
        })()}
      </li>
    )
  })

  return (
    <div className={props.currentTeam + " team"}>
      <p>{props.name}</p>
      <ul>
        {teamListItems}
      </ul>
    </div>
  )
}

export default BuildTeam;