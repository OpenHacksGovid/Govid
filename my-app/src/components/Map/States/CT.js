import React from 'react';

class CT extends React.Component {
    render() {
        return (
            <path
            onClick={() => this.props.onClick()}
            className={this.props.className}     
            id="CT"
            data-name="Connecticut"
            data-id="CT"
            d="m 936.99622,143.34454 -13.97709,5.33847 -0.19412,-0.48531 -7.86211,2.32951 -1.74714,0.48532 0.19413,0.97063 3.68839,14.26828 1.16476,1.45595 -2.52364,3.10602 1.74714,1.65007 0,0 5.62966,-5.43554 3.00895,-4.17371 0.58238,1.16476 14.17122,-6.30911 0.29119,-0.29118 -0.0971,-2.32952 -0.58237,-2.03833 -3.00896,-8.44449 -0.38825,-1.06769 -0.0971,-0.19413 z"
            />
        );
    }
}

export default CT;