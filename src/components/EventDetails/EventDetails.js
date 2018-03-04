import React from "react";
import PlanetDisplay from "../PlanetDisplay";

const EventDetails = (props) =>
    <div>
        <p><b>Local Time & Date:</b> {props.event.localTime} ({props.event.timeZoneName})</p>
        <p><b>UTC Time & Date:</b> {props.event.utcTime} (Greenwich Mean Time)</p>

        {(props.event.weather)
            ? <div><p><b>Weather:</b> {props.event.weather}</p></div>
            : <div></div>}
        {(props.event.news)
            ? <div><p><b>News:</b> {props.event.news}</p></div>
            : <div></div>}

        {(props.event.sun)
            ? <div><p><b>Solar Position:</b> {props.event.sun}</p></div>
            : <div></div>}
        {(props.event.season)
            ? <div><p><b>Solar Season:</b> {props.event.season}</p></div>
            : <div></div>}

        {(props.event.lunarPosition)
            ? <div><p><b>Lunar Position:</b> {props.event.lunarPosition}</p></div>
            : <div></div>}
        {(props.event.lunarSector)
            ? <div><p><b>Lunar Sector:</b> {props.event.lunarSector}</p></div>
            : <div></div>}
        {(props.event.lunarPhase)
            ? <div><p><b>Lunar Phase:</b> {props.event.lunarPhase}</p></div>
            : <div></div>}

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="mercury"
            adjective="Mercurial"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="venus"
            adjective="Venusian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="mars"
            adjective="Martian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="jupiter"
            adjective="Jovian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="saturn"
            adjective="Saturnian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="uranus"
            adjective="Uranian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="neptune"
            adjective="Neptunian"
        />

        <PlanetDisplay
            state={props.state}
            event={props.event}
            planet="pluto"
            adjective="Plutonian"
        />
    </div>

export default EventDetails;