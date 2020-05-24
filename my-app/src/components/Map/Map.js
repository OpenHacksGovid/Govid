import React from 'react';
import AK from './States/AK';
import AL from './States/AL';
import AR from './States/AR';
import AZ from './States/AZ';
import CA from './States/CA';
import CO from './States/CO';
import CT from './States/CT';
import DC from './States/DC';
import DE from './States/DE';
import FL from './States/FL';
import GA from './States/GA';
import HI from './States/HI';
import IA from './States/IA';
import ID from './States/ID';
import IL from './States/IL';
import IN from './States/IN';
import KS from './States/KS';
import KY from './States/KY';
import LA from './States/LA';
import MA from './States/MA';
import MD from './States/MD';
import ME from './States/ME';
import MI from './States/MI';
import MN from './States/MN';
import MO from './States/MO';
import MS from './States/MS';
import MT from './States/MT';
import NC from './States/NC';
import ND from './States/ND';
import NE from './States/NE';
import NH from './States/NH';
import NJ from './States/NJ';
import NM from './States/NM';
import NV from './States/NV';
import NY from './States/NY';
import OH from './States/OH';
import OK from './States/OK';
import OR from './States/OR';
import PA from './States/PA';
import RI from './States/RI';
import SC from './States/SC';
import SD from './States/SD';
import TN from './States/TN';
import TX from './States/TX';
import UT from './States/UT';
import VA from './States/VA';
import VT from './States/VT';
import WA from './States/WA';
import WI from './States/WI';
import WV from './States/WV';
import WY from './States/WY';



import "./Map.css";

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popup_active: null,
            popup_data: null,
            popup_x: -1,
            popup_y: -1,
            curr_data: null,
            states: {
                ak: {state: "", data: null, cases: 0},
                al: {state: "", data: null, cases: 0},
                ar: {state: "", data: null, cases: 0},
                az: {state: "", data: null, cases: 0},
                ca: {state: "", data: null, cases: 0},
                co: {state: "", data: null, cases: 0},
                ct: {state: "", data: null, cases: 0},
                dc: {state: "", data: null, cases: 0},
                de: {state: "", data: null, cases: 0},
                fl: {state: "", data: null, cases: 0},
                ga: {state: "", data: null, cases: 0},
                hi: {state: "", data: null, cases: 0},
                ia: {state: "", data: null, cases: 0},
                id: {state: "", data: null, cases: 0},
                il: {state: "", data: null, cases: 0},
                in: {state: "", data: null, cases: 0},
                ks: {state: "", data: null, cases: 0},
                ky: {state: "", data: null, cases: 0},
                la: {state: "", data: null, cases: 0},
                ma: {state: "", data: null, cases: 0},
                md: {state: "", data: null, cases: 0},
                me: {state: "", data: null, cases: 0},
                mi: {state: "", data: null, cases: 0},
                mn: {state: "", data: null, cases: 0},
                mo: {state: "", data: null, cases: 0},
                ms: {state: "", data: null, cases: 0},
                mt: {state: "", data: null, cases: 0},
                nc: {state: "", data: null, cases: 0},
                nd: {state: "", data: null, cases: 0},
                ne: {state: "", data: null, cases: 0},
                nh: {state: "", data: null, cases: 0},
                nj: {state: "", data: null, cases: 0},
                nm: {state: "", data: null, cases: 0},
                nv: {state: "", data: null, cases: 0},
                ny: {state: "", data: null, cases: 0},
                oh: {state: "", data: null, cases: 0},
                ok: {state: "", data: null, cases: 0},
                or: {state: "", data: null, cases: 0},
                pa: {state: "", data: null, cases: 0},
                ri: {state: "", data: null, cases: 0},
                sc: {state: "", data: null, cases: 0},
                sd: {state: "", data: null, cases: 0},
                tn: {state: "", data: null, cases: 0},
                tx: {state: "", data: null, cases: 0},
                ut: {state: "", data: null, cases: 0},
                va: {state: "", data: null, cases: 0},
                vt: {state: "", data: null, cases: 0},
                wa: {state: "", data: null, cases: 0},
                wi: {state: "", data: null, cases: 0},
                wv: {state: "", data: null, cases: 0},
                wy: {state: "", data: null, cases: 0},
            }
        }

        document.addEventListener("mousedown", (e) => {
            if (this.state.popup_active !== null) {
                if (!this.node.contains(e.target)) { //If outside of the box, close
                    this.setState({popup_active: null});
                }
            }
        });

        this.getCovidAPI();
    }

    getCovidAPI() { //Get the COVID data
        const url = "https://covidtracking.com/api/states";
        fetch(url)
            .then(response => response.json())
            .then(contents => {
                for (let k in contents) {
                    const v = contents[k].positive;
                    let stat = "low";
                    if (v > 10000 && v < 40000) {
                        stat = "medium";
                    } else if (v > 40000) {
                        stat = "high";
                    }
                   const states = this.state.states;
                   if (states[contents[k].state.toLowerCase()] !== undefined) {
                       states[contents[k].state.toLowerCase()].state = stat;
                       states[contents[k].state.toLowerCase()].cases = v; 
                       this.setState({ states: states });
                   }
                }
            });
    }

    showPopup(e, st) { //Display the popup near the mouse
        e = e || window.event;
        //TODO: add popup info
        //Get sens.
        //State no. of cases at top
        //WA, KS, NY: governor Twitter, unemployment bureau, voting information (online)
 
       if (this.state.states[st].data === null) {
           const proxy = "https://cors-forwarder.herokuapp.com/";
            const url_state_1 = "https://whoismyrepresentative.com/getall_reps_bystate.php?state=";
            const url_state_2 = "&output=json";
            fetch(proxy + url_state_1 + st + url_state_2)
                .then(response => response.json())
                .then(contents => {
                    const states = this.state.states;
                    states[st].data = contents.results;
                    this.setState({ states: states, curr_data: contents.results, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
                });
        } else {
            this.setState({ curr_data: this.state.states[st].data, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
        }
    }

    getRepsAsList(data) {
        return (
            data.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>
                            <a href={ item.link }>{ item.name + " (" + item.party.charAt(0) + ")"}</a>
                        </td>
                        <td>
                            { item.phone }
                        </td>
                    </tr>
                );
            })
        )
    }

    renderResultsTable(data) {
        return (
            <table className="reps-table">
                <thead className="text-center">
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    { this.getRepsAsList(data) }
                </tbody>
            </table>
        );
    }

    renderPopup() {
        if (this.state.popup_active !== null) {
            return (
                    <div ref={(n) => this.node = n} className="popup" style={{left: this.state.popup_x, top: this.state.popup_y}}>
                        <h5 className="text-center">{ this.state.popup_active.toUpperCase() }</h5>
                        <h6 className="text-center">Cases: { this.state.states[this.state.popup_active].cases }</h6>
                        <p className="pt-2 text-center">House of Representatives</p>
                        { this.renderResultsTable(this.state.curr_data) }
                    </div>
                );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                { this.renderPopup() }
                <svg
                    className="map"
                    pretty_print="False"
                    viewBox="0 0 1000 589"
                >
                    <AK onClick={ (e)=> { this.showPopup(e,"ak"); } } className={"state " + this.state.states.ak.state} />
                    <AL onClick={ (e)=> { this.showPopup(e,"al"); } } className={"state " + this.state.states.al.state} />
                    <AR onClick={ (e)=> { this.showPopup(e,"ar"); } } className={"state " + this.state.states.ar.state} />
                    <AZ onClick={ (e)=> { this.showPopup(e,"az"); } } className={"state " + this.state.states.az.state} />
                    <CA onClick={ (e)=> { this.showPopup(e,"ca"); } } className={"state " + this.state.states.ca.state} />
                    <CO onClick={ (e)=> { this.showPopup(e,"co"); } } className={"state " + this.state.states.co.state} />
                    <CT onClick={ (e)=> { this.showPopup(e,"ct"); } } className={"state " + this.state.states.ct.state} />
                    <DC onClick={ (e)=> { this.showPopup(e,"dc"); } } className={"state " + this.state.states.dc.state} />
                    <DE onClick={ (e)=> { this.showPopup(e,"de"); } } className={"state " + this.state.states.de.state} />
                    <FL onClick={ (e)=> { this.showPopup(e,"fl"); } } className={"state " + this.state.states.fl.state} />
                    <GA onClick={ (e)=> { this.showPopup(e,"ga"); } } className={"state " + this.state.states.ga.state} />
                    <HI onClick={ (e)=> { this.showPopup(e,"hi"); } } className={"state " + this.state.states.hi.state} />
                    <IA onClick={ (e)=> { this.showPopup(e,"ia"); } } className={"state " + this.state.states.ia.state} />
                    <ID onClick={ (e)=> { this.showPopup(e,"id"); } } className={"state " + this.state.states.id.state} />
                    <IL onClick={ (e)=> { this.showPopup(e,"il"); } } className={"state " + this.state.states.il.state} />
                    <IN onClick={ (e)=> { this.showPopup(e,"in"); } } className={"state " + this.state.states.in.state} />
                    <KS onClick={ (e)=> { this.showPopup(e,"ks"); } } className={"state " + this.state.states.ks.state} />
                    <KY onClick={ (e)=> { this.showPopup(e,"ky"); } } className={"state " + this.state.states.ky.state} />
                    <LA onClick={ (e)=> { this.showPopup(e,"la"); } } className={"state " + this.state.states.la.state} />
                    <MA onClick={ (e)=> { this.showPopup(e,"ma"); } } className={"state " + this.state.states.ma.state} />
                    <MD onClick={ (e)=> { this.showPopup(e,"md"); } } className={"state " + this.state.states.md.state} />
                    <ME onClick={ (e)=> { this.showPopup(e,"me"); } } className={"state " + this.state.states.me.state} />
                    <MI onClick={ (e)=> { this.showPopup(e,"mi"); } } className={"state " + this.state.states.mi.state} />
                    <MN onClick={ (e)=> { this.showPopup(e,"mn"); } } className={"state " + this.state.states.mn.state} />
                    <MO onClick={ (e)=> { this.showPopup(e,"mo"); } } className={"state " + this.state.states.mo.state} />
                    <MS onClick={ (e)=> { this.showPopup(e,"ms"); } } className={"state " + this.state.states.ms.state} />
                    <MT onClick={ (e)=> { this.showPopup(e,"mt"); } } className={"state " + this.state.states.mt.state} />
                    <NC onClick={ (e)=> { this.showPopup(e,"nc"); } } className={"state " + this.state.states.nc.state} />
                    <ND onClick={ (e)=> { this.showPopup(e,"nd"); } } className={"state " + this.state.states.nd.state} />
                    <NE onClick={ (e)=> { this.showPopup(e,"ne"); } } className={"state " + this.state.states.ne.state} />
                    <NH onClick={ (e)=> { this.showPopup(e,"nh"); } } className={"state " + this.state.states.nh.state} />
                    <NJ onClick={ (e)=> { this.showPopup(e,"nj"); } } className={"state " + this.state.states.nj.state} />
                    <NM onClick={ (e)=> { this.showPopup(e,"nm"); } } className={"state " + this.state.states.nm.state} />
                    <NV onClick={ (e)=> { this.showPopup(e,"nv"); } } className={"state " + this.state.states.nv.state} />
                    <NY onClick={ (e)=> { this.showPopup(e,"ny"); } } className={"state " + this.state.states.ny.state} />
                    <OH onClick={ (e)=> { this.showPopup(e,"oh"); } } className={"state " + this.state.states.oh.state} />
                    <OK onClick={ (e)=> { this.showPopup(e,"ok"); } } className={"state " + this.state.states.ok.state} />
                    <OR onClick={ (e)=> { this.showPopup(e,"or"); } } className={"state " + this.state.states.or.state} />
                    <PA onClick={ (e)=> { this.showPopup(e,"pa"); } } className={"state " + this.state.states.pa.state} />
                    <RI onClick={ (e)=> { this.showPopup(e,"ri"); } } className={"state " + this.state.states.ri.state} />
                    <SC onClick={ (e)=> { this.showPopup(e,"sc"); } } className={"state " + this.state.states.sc.state} />
                    <SD onClick={ (e)=> { this.showPopup(e,"sd"); } } className={"state " + this.state.states.sd.state} />
                    <TN onClick={ (e)=> { this.showPopup(e,"tn"); } } className={"state " + this.state.states.tn.state} />
                    <TX onClick={ (e)=> { this.showPopup(e,"tx"); } } className={"state " + this.state.states.tx.state} />
                    <UT onClick={ (e)=> { this.showPopup(e,"ut"); } } className={"state " + this.state.states.ut.state} />
                    <VA onClick={ (e)=> { this.showPopup(e,"va"); } } className={"state " + this.state.states.va.state} />
                    <VT onClick={ (e)=> { this.showPopup(e,"vt"); } } className={"state " + this.state.states.vt.state} />
                    <WA onClick={ (e)=> { this.showPopup(e,"wa"); } } className={"state " + this.state.states.wa.state} />
                    <WI onClick={ (e)=> { this.showPopup(e,"wi"); } } className={"state " + this.state.states.wi.state} />
                    <WV onClick={ (e)=> { this.showPopup(e,"wv"); } } className={"state " + this.state.states.wv.state} />
                    <WY onClick={ (e)=> { this.showPopup(e,"wy"); } } className={"state " + this.state.states.wy.state} />
                </svg>
            </div>
        );
    }
}

export default States;