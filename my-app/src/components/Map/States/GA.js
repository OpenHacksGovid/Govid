import React from 'react';

class GA extends React.Component {
    render() {
        return (
            <path
            onClick={() => this.props.onClick()}
            className={this.props.className}     
            id="GA"
            data-name="Georgia"
            data-id="GA"
            d="m 845.85395,396.09691 -0.0971,-2.9119 -0.67944,2.52364 0.7765,0.38826 z m 1.0677,-4.46491 -0.38825,-2.23245 -0.29119,1.35889 0.67944,0.87356 z m -45.42554,-61.14976 -1.26182,0.29119 -3.6884,0.7765 -13.58884,2.81483 -1.26182,0.29119 -1.35888,0.19413 -7.57093,1.45595 -2.03832,0.38825 -8.25037,1.55301 -1.74713,0.19412 0.0971,0.19413 13.00646,39.60175 7.18267,12.81234 -1.74714,1.94126 -1.06769,7.57092 2.13539,3.88253 0.19412,7.0856 2.62071,4.95022 0,0.0971 -0.0971,0.0971 3.30014,5.14434 45.81379,-5.72672 1.35889,3.49427 1.45594,-7.47386 2.62071,-2.03832 6.69735,0.38825 0,0 -0.58237,-10.48282 1.26182,-2.23245 -0.67945,-4.17371 1.35889,-3.97959 2.03832,-2.23245 -1.45594,-1.35889 3.39721,-4.17371 -0.0971,0 -5.82378,-5.43554 -7.95918,-11.35638 -4.36784,-2.03833 -18.73318,-15.72422 -4.56197,-5.82379 -8.83274,-3.6884 -0.48532,-1.94126 2.71777,-5.33847 0,0 z"
            />
        );
    }
}

export default GA;