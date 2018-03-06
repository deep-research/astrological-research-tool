// Function to display timezone offsets in a human readable format:

const dstOffset = data.dstOffset;
const rawOffset = data.rawOffset;
const toHHMMSS = (seconds) => {
    var sec_num = parseInt(seconds, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);                        
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
if (rawOffset >= 0) {
    console.log("UTC+" + toHHMMSS(data.rawOffset))
} else {
    console.log("UTC-" + toHHMMSS(data.rawOffset).slice(2))
}
if (dstOffset >= 0) {
    console.log("UTC+" + toHHMMSS(data.dstOffset))
} else {
    console.log("UTC-" + toHHMMSS(data.dstOffset).slice(2))
}