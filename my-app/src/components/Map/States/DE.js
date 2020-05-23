import React from 'react';

class DE extends React.Component {
    render() {
        return (
            <path
            onClick={() => this.props.onClick()}
            className={this.props.className}     
            id="DE"
            data-name="Delaware"
            data-id="DE"
            d="m 893.80314,207.69739 0.38825,1.45595 8.05624,23.00396 9.22099,-2.71777 -0.0971,-0.19413 0.19413,0 0.29119,0.0971 0,0 0.19412,-0.0971 -0.19412,-0.38825 -2.32952,-6.21204 -11.35638,-10.774 0.48531,-7.47386 0,0 -2.32951,0 -1.74714,1.35888 -0.7765,1.94126 0,0 z"
            />
        );
    }
}

export default DE;