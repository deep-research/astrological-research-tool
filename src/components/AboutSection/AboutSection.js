import React, {Component} from "react";
import "./AboutSection.css";

class AboutSection extends Component {
    render() {
        return (
        <div id="AboutSection" className="collapse">
            <br />
            <h3>About</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis maximus nisl vel molestie. Etiam mauris tortor, elementum sed fringilla maximus, tincidunt quis turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sagittis pellentesque lorem ac sollicitudin. Nulla suscipit tellus ante, eu congue ipsum commodo mollis. Quisque sit amet tortor hendrerit, porta elit quis, tincidunt elit.
            </p>
            <p>
                Curabitur ultrices in odio id hendrerit. Etiam non nisl vitae ante rhoncus malesuada. Fusce tincidunt suscipit lorem, id volutpat enim placerat sit amet. Ut ullamcorper, tellus vitae sagittis suscipit, tortor augue faucibus diam, in commodo est ligula vitae tellus. Donec egestas turpis pretium nulla lacinia, vel fringilla diam faucibus. Mauris eu nulla et mauris ultrices posuere a eget massa. In pharetra iaculis mauris, et dictum ex pellentesque et.
            </p>
        </div>
        );
    }
}

export default AboutSection;