import timezoner from "timezoner";
import moment from "moment-timezone";

const handleEventFormSubmit = props => event => {
    event.preventDefault()

    // If the city name was approved
    if (props.state.cityResult) {
        props.toastFunction("info", "Event Submitted Successfully!")

        const year = props.state.date.slice(0,4);
        const month = props.state.date.slice(5,7);
        const day = props.state.date.slice(8,10);
        const hours = props.state.time.slice(0,2);
        const minutes = props.state.time.slice(3,5);
        const lat = props.state.cityLat;
        const lng = props.state.cityLng;

        // Determine the timezone from the coordinates
        timezoner.getTimeZone(
            lat,
            lng,
            (err, data) => {
                if (err) {
                    console.log(err);
                } else {                   
                    const timeZoneName = data.timeZoneName;
                    const timeZoneId = data.timeZoneId;

                    // Convert local time to unversal time
                    const localMoment = moment.tz(`${year}-${month}-${day} ${hours}:${minutes}`,
                        timeZoneId)
                    const localTime = moment(localMoment).format("h:mm a, MMM Do YYYY");
                    const utcTime = moment.utc(localMoment).format("h:mm a, MMM Do YYYY");

                    // see offsetConverter.js...

                    const newEvent = {
                        name: props.state.name.trim(),
                        city: props.state.cityResult,
                        lat: lat,
                        lng: lng,
                        key: props.state.events.length + 1,
                        localTime: localTime,
                        utcTime: utcTime,
                        timeZoneName: timeZoneName,
                        weather: props.state.weather.trim(),
                        news: props.state.news.trim(),
                        sun: props.state.sun.trim(),
                        season: props.state.season.trim(),
                        lunarPosition: props.state.lunarPosition.trim(),
                        lunarSector: props.state.lunarSector.trim(),
                        lunarPhase: props.state.lunarPhase.trim(),
                        mercuryPosition: props.state.mercuryPosition.trim(),
                        mercurySector: props.state.mercurySector.trim(),
                        mercuryMotion: props.state.mercuryMotion.trim(),
                        venusPosition: props.state.venusPosition.trim(),
                        venusSector: props.state.venusSector.trim(),
                        venusMotion: props.state.venusMotion.trim(),
                        marsPosition: props.state.marsPosition.trim(),
                        marsSector: props.state.marsSector.trim(),
                        marsMotion: props.state.marsMotion.trim(),
                        jupiterPosition: props.state.jupiterPosition.trim(),
                        jupiterSector: props.state.jupiterSector.trim(),
                        jupiterMotion: props.state.jupiterMotion.trim(),
                        saturnPosition: props.state.saturnPosition.trim(),
                        saturnSector: props.state.saturnSector.trim(),
                        saturnMotion: props.state.saturnMotion.trim(),
                        uranusPosition: props.state.uranusPosition.trim(),
                        uranusSector: props.state.uranusSector.trim(),
                        uranusMotion: props.state.uranusMotion.trim(),
                        neptunePosition: props.state.neptunePosition.trim(),
                        neptuneSector: props.state.neptuneSector.trim(),
                        neptuneMotion: props.state.neptuneMotion.trim(),
                        plutoPosition: props.state.plutoPosition.trim(),
                        plutoSector: props.state.plutoSector.trim(),
                        plutoMotion: props.state.plutoMotion.trim()
                    }
        
                    props.objSetState({
                        events: [...props.state.events, newEvent],
                        name: "",
                        cityInput: "",
                        cityResult: "",
                        cityLat: "",
                        cityLng: "",
                        date: "",
                        time: "",
                        localTime: "",
                        utcTime: "",
                        timeZoneName: "",
                        weather: "",
                        news: "",
                        sun: "",
                        season: "",
                        lunarPosition: "",
                        lunarSector: "",
                        lunarPhase: "",
                        mercuryPosition: "",
                        mercurySector: "",
                        mercuryMotion: "",
                        venusPosition: "",
                        venusSector: "",
                        venusMotion: "",
                        marsPosition: "",
                        marsSector: "",
                        marsMotion: "",
                        jupiterPosition: "",
                        jupiterSector: "",
                        jupiterMotion: "",
                        saturnPosition: "",
                        saturnSector: "",
                        saturnMotion: "",
                        uranusPosition: "",
                        uranusSector: "",
                        uranusMotion: "",
                        neptunePosition: "",
                        neptuneSector: "",
                        neptuneMotion: "",
                        plutoPosition: "",
                        plutoSector: "",
                        plutoMotion: "",
                    })
                };
            }
            // , { language: 'en', key: '' }
        );
    // If the city name was not approved
    } else {
        props.toastFunction("error", "City Name Invalid")
    }
};

export default handleEventFormSubmit;