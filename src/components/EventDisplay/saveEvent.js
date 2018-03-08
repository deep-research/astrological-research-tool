import API from "../../utils/API";

const saveEvent = (eventKey, toast, state, removeEvent, displaySavedEvents) => {
    const eventObj = state.events.find(obj => obj.key === eventKey);

    API.saveEvent({
        name: eventObj.name,
        city: eventObj.city,
        lat: eventObj.lat,
        lng: eventObj.lng,
        lunarPosition: eventObj.lunarPosition,
        lunarSector: eventObj.lunarSector,
        lunarPhase: eventObj.lunarPhase,
        mercuryMotion: eventObj.mercuryMotion,
        mercuryPosition: eventObj.mercuryPosition,
        mercurySector: eventObj.mercurySector,
        venusMotion: eventObj.venusMotion,
        venusPosition: eventObj.venusPosition,
        venusSector: eventObj.venusSector,
        marsMotion: eventObj.marsMotion,
        marsPosition: eventObj.marsPosition,
        marsSector: eventObj.marsSector,
        jupiterMotion: eventObj.jupiterMotion,
        jupiterPosition: eventObj.jupiterPosition,
        jupiterSector: eventObj.jupiterSector,
        saturnMotion: eventObj.saturnMotion, 
        saturnPosition: eventObj.saturnPosition,
        saturnSector: eventObj.saturnSector,
        uranusMotion: eventObj.uranusMotion,
        uranusPosition: eventObj.uranusPosition,
        uranusSector: eventObj.uranusSector,
        neptuneMotion: eventObj.neptuneMotion,
        neptunePosition: eventObj.neptunePosition,
        neptuneSector: eventObj.neptuneSector,
        plutoMotion: eventObj.plutoMotion,
        plutoPosition: eventObj.plutoPosition,
        plutoSector: eventObj.plutoSector,
        sun: eventObj.sun,
        season: eventObj.season,  
        timeZoneName: eventObj.timeZoneName,
        utcTime: eventObj.utcTime,
        localTime: eventObj.localTime,
        weather: eventObj.weather,
        news: eventObj.news,
        userId: state.loginUserId
    })
    .then(res => {
        // Remove the event from the state array without a success message
        removeEvent(eventKey, false)

        // Display the users saved events
        displaySavedEvents(state.loginUserId)

        toast("info", "Event Saved Successfully!")        
    })
    .catch(err => {
        console.log(err)
        
        toast("error","The Event Was Not Saved!")
    });
}

export default saveEvent;