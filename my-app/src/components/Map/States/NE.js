import React from 'react';

class NE extends React.Component {
    render() {
        return (
            <path
            onClick={() => this.props.onClick()}
            className={this.props.className}     
            id="NE"
            data-name="Nebraska"
            data-id="NE"
            d="m 572.33008,204.68843 -3.00895,-3.00895 -10.57988,-3.10602 -3.39721,-0.0971 -5.14435,1.45594 -6.11498,-3.88252 -19.12143,0.19412 -27.85712,-0.29119 -32.90439,-1.06769 -2.9119,-0.0971 -0.0971,2.52364 -0.38825,7.57092 -0.87357,17.76255 -0.48532,10.19163 -0.0971,2.52364 2.32952,0.0971 23.6834,0.87357 4.65903,0.19413 -0.38826,19.02437 -0.0971,1.26182 3.6884,0.0971 13.10352,0.19413 32.61321,0 16.40367,-0.38825 35.81629,-1.35889 3.30014,-0.19412 -0.38825,-0.38826 -2.6207,-4.65903 -2.23246,-1.553 -2.42657,-4.65903 0.0971,-0.58238 0,-0.29119 -3.00896,-12.22996 0.58238,-1.94126 -3.30014,-4.56196 -0.19413,-5.43554 -3.00896,-4.75609 -3.10602,-9.12394 -0.67944,-0.0971 -1.8442,-0.19413 z"
            />
        );
    }
}

export default NE;