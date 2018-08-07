import React, {Component} from "react";

class AboutSection extends Component {
    render() {
        return (
        <div id="AboutSection" className="collapse">
            <br />
            <h3>About</h3>
            <p>
                The purpose of this project was to propose a system of <a
                    target="_blank" rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Metaphysics"
                    >metaphysical</a> research that studies time in more
                    practical manner when compared to the <a
                    href="https://en.wikipedia.org/wiki/Mythology"
                    target="_blank" rel="noopener noreferrer"
                    >mythologically</a> based methods of <a
                    rel="noopener noreferrer" target="_blank"
                    href="https://en.wikipedia.org/wiki/Horoscopic_astrology"
                    >horoscopic astrology</a>.
                Once the basic facts about events are established,
                various methods of interpretation could then be tested.
                The current design of this website was a valuable exercise
                in reimagining the study of time. Some of the changes that
                were implemented are as follows:
            </p>
            <ul>
                <li>
                    The <a target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/House_system"
                        >house system</a> was removed in favor of
                    classifications for <a target="_blank"
                        rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Diurnal_motion"
                    >diurnal motion</a>. These catagories describe whether
                    an object is above or below the horizon, and whether an
                    object is ascending or descending in terms of <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Horizontal_coordinate_system"
                        >altitude</a>.
                </li>
                <li>
                    The <a target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Zodiac"
                    >zodiac</a> system was removed in favor of four
                    seasonally based <a target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Circular_sector"
                    >sectors</a>, although planets could still be seen as
                    passing through these sectors on the <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Ecliptic"
                        >ecliptic</a>.
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Lunar_phase"
                    >Lunar phases</a> are used, and <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Lunar_mansion"
                    >lunar mansions</a> are not included.
                </li>
                <li>
                    There are no <a target="_blank" rel="noopener noreferrer"
                        href="http://www.chrisbrennanastrologer.com/Brennan-Theoretical-Rationale.pdf"
                    >hypothetical points</a> such as the <a target="_blank"
                        rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Arabic_parts"
                    >arabic parts</a>, and <a
                        target="_blank" rel="noopener noreferrer"
                        href="https://en.wikipedia.org/wiki/Astrological_aspect"
                    >planetary aspects</a>  are not included.
                </li>
            </ul>           
            <p>
                The conclusion I came to towards the end of this project was that the
                changes were insufficient. Some problems that are still being inherited
                from traditional astrology are the focus on exact moments in time and
                astronomical correlations instead of the events themselves. I actually
                think studying time as a symbolic landscape may be a far better approach.
                We already do this with our history when we talk about mythic periods
                such as the <a target="_blank" rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Roaring_Twenties"
                >Roaring Twenties</a> and the <a target="_blank" rel="noopener noreferrer"
                    href="https://en.wikipedia.org/wiki/Cold_War"
                >Cold War</a>. Instead of removing the myth altogether,
                we may need to learn how to discover the myth for ourselves.
            </p>
            <p>
                For more information: <a
                    href="https://github.com/deep-research/astronomical-research-tool"
                    target="_blank" rel="noopener noreferrer">Github Repository</a>
            </p>
        </div>
        );
    }
}

export default AboutSection;