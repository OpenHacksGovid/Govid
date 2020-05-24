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
            curr_senate: null,
            curr_house: null,
            states: {
                ak: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                al: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ar: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                az: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ca: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                co: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ct: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                dc: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                de: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                fl: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ga: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                hi: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ia: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                id: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                il: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                in: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ks: {
                    state: "",
                    house: null,
                    senate: null, 
                    cases: 0,
                    governor_url: "https://twitter.com/GovLauraKelly",
                    unemployment_url: "https://www.getkansasbenefits.gov/Home.aspx",
                    voting_url: "https://www.kdor.ks.gov/apps/voterreg/default.aspx"
                },
                ky: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                la: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ma: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                md: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                me: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                mi: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                mn: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                mo: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ms: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                mt: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nc: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nd: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ne: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nh: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nj: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nm: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                nv: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ny: {
                    state: "",
                    house: null,
                    senate: null, 
                    cases: 0,
                    governor_url: "https://twitter.com/NYGovCuomo",
                    unemployment_url: "https://www.ny.gov/services/unemployment-0",
                    voting_url: "https://dmv.ny.gov/more-info/electronic-voter-registration-application"
                },
                oh: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ok: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                or: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                pa: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ri: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                sc: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                sd: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                tn: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                tx: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                ut: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                va: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                vt: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                wa: {
                    state: "",
                    house: null,
                    senate: null, 
                    cases: 0,
                    governor_url: "https://twitter.com/GovInslee",
                    unemployment_url: "https://esd.wa.gov/unemployment",
                    voting_url: "https://www.sos.wa.gov/elections/register.aspx"
                },
                wi: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                wv: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
                wy: {state: "", house: null, senate: null, cases: 0, governor_url: "", unemployment_url: "", voting_url: ""},
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
        const proxy = "https://cors-forwarder.herokuapp.com/";
        const url_state_2 = "&output=json";
        if (this.state.states[st].house === null) {
            const url_state_1 = "https://whoismyrepresentative.com/getall_reps_bystate.php?state=";
            fetch(proxy + url_state_1 + st + url_state_2)
                .then(response => response.json())
                .then(contents => {
                    const states = this.state.states;
                    states[st].house = contents.results;
                    this.setState({ states: states, curr_house: contents.results, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
                    console.log(contents.results);
                });
        } else {
            this.setState({ curr_house: this.state.states[st].house, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
        }
        
        if (this.state.states[st].senate === null) {
            const url_state_3 = "https://whoismyrepresentative.com/getall_sens_bystate.php?state=";
            fetch(proxy + url_state_3 + st + url_state_2)
                .then(response => response.json())
                .then(contents => {
                    const states = this.state.states;
                    states[st].senate = contents.results;
                    this.setState({ states: states, curr_senate: contents.results, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
                    console.log(contents.results);
                });
        } else {
            this.setState({ curr_senate: this.state.states[st].senate, popup_active:st, popup_x: e.pageX+10, popup_y: e.pageY-100 });
        }
    }

    getRepsAsList(data) {
        if (data != null) {
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
                        <p className="text-center">
                            <a href={this.state.states[this.state.popup_active].governor_url}>Governor's Twitter</a><br></br>
                            <a href={this.state.states[this.state.popup_active].unemployment_url}>Unemplyment Information</a><br></br>
                            <a href={this.state.states[this.state.popup_active].voting_url}>Voting Information</a>
                        </p>
                        <p className="pt-2 text-center">Senate</p>
                        { this.renderResultsTable(this.state.curr_senate) }
                        <p className="pt-2 text-center">House of Representatives</p>
                        { this.renderResultsTable(this.state.curr_house) }
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