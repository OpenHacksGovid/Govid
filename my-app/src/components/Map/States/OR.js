import React from 'react';

class OR extends React.Component {
    render() {
        return (
            <path
            onClick={() => this.props.onClick()}
            className={this.props.className}     
            id="OR"
            data-name="Oregon"
            data-id="OR"
            d="m 162.2384,162.75717 15.43304,4.65903 41.54301,11.45344 3.78546,0.97064 2.71777,0.67944 24.55697,5.82379 13.6859,3.00895 2.71777,0.58238 0.38825,-2.03832 9.221,-38.24287 -2.62071,-6.21204 0.29119,-2.42658 10.09457,-13.20059 4.75609,-11.93876 -3.30015,-3.59134 -0.0971,-1.84419 0,-0.0971 -1.8442,-0.38825 -27.27474,-6.21204 -1.45594,0.67944 -5.33848,-0.87357 -10.774,1.16476 -6.60029,-0.87357 -6.98855,-0.0971 -0.58238,-1.74714 -14.75359,-1.35888 -5.24141,-2.81483 -0.67944,-1.8442 0.58238,-7.279734 -3.49428,-3.785461 -0.29118,0.09706 -0.67945,0.485315 -4.85315,-2.523641 -2.9119,0.873568 -1.94126,-0.970631 -2.03832,8.347429 -1.35889,2.329514 -6.01791,14.656531 -1.74714,8.05624 -1.06769,0.0971 -5.62966,13.39471 -3.78546,5.72672 -1.35889,0.97063 -3.49427,6.79442 -0.67944,7.18267 -2.13539,6.40617 1.26182,5.82378 0,0.0971 z m 35.5251,-79.688825 -0.29119,-0.873568 -0.0971,0.679442 0.38825,0.194126 z"
            />
        );
    }
}

export default OR;