import React from "react"

function OnOffSwitch(props) {
    return (
        <h3>{props.isOn ? 'on' : 'off'}</h3>
    )
}

export default OnOffSwitch