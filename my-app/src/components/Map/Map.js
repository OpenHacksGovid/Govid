import React, { useCallback } from 'react';
import Popup from '../Popup/Popup';
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
            states: {
                ak: {state: "active", gov_twitter:"...", reps:"...", info:"..."},
                al: {state: "inactive", INS:""},
                ar: {state: "inactive", INS:""},
                az: {state: "inactive", INS:""},
                ca: {state: "inactive", INS:""},
                co: {state: "inactive", INS:""},
                ct: {state: "inactive", INS:""},
                dc: {state: "inactive", INS:""},
                de: {state: "inactive", INS:""},
                fl: {state: "inactive", INS:""},
                ga: {state: "inactive", INS:""},
                hi: {state: "inactive", INS:""},
                ia: {state: "inactive", INS:""},
                id: {state: "inactive", INS:""},
                il: {state: "inactive", INS:""},
                in: {state: "inactive", INS:""},
                ks: {state: "inactive", INS:""},
                ky: {state: "inactive", INS:""},
                la: {state: "inactive", INS:""},
                ma: {state: "inactive", INS:""},
                md: {state: "inactive", INS:""},
                me: {state: "inactive", INS:""},
                mi: {state: "inactive", INS:""},
                mn: {state: "inactive", INS:""},
                mo: {state: "inactive", INS:""},
                ms: {state: "active", INS:""},
                mt: {state: "inactive", INS:""},
                nc: {state: "inactive", INS:""},
                nd: {state: "inactive", INS:""},
                ne: {state: "inactive", INS:""},
                nh: {state: "inactive", INS:""},
                nj: {state: "inactive", INS:""},
                nm: {state: "inactive", INS:""},
                nv: {state: "inactive", INS:""},
                ny: {state: "inactive", INS:""},
                oh: {state: "inactive", INS:""},
                ok: {state: "inactive", INS:""},
                or: {state: "inactive", INS:""},
                pa: {state: "inactive", INS:""},
                ri: {state: "inactive", INS:""},
                sc: {state: "inactive", INS:""},
                sd: {state: "inactive", INS:""},
                tn: {state: "inactive", INS:""},
                tx: {state: "inactive", INS:""},
                ut: {state: "inactive", INS:""},
                va: {state: "inactive", INS:""},
                vt: {state: "inactive", INS:""},
                wa: {state: "inactive", INS:""},
                wi: {state: "inactive", INS:""},
                wv: {state: "inactive", INS:""},
                wy: {state: "active", INS:""},

                ak: {state: "republican", data: ""},
                al: {state: "democrat", data: ""},
                ar: {state: "democrat", data: ""},
                az: {state: "democrat", data: ""},
                ca: {state: "democrat", data: ""},
                co: {state: "democrat", data: ""},
                ct: {state: "democrat", data: ""},
                dc: {state: "democrat", data: ""},
                de: {state: "democrat", data: ""},
                fl: {state: "democrat", data: ""},
                ga: {state: "democrat", data: ""},
                hi: {state: "democrat", data: ""},
                ia: {state: "democrat", data: ""},
                id: {state: "democrat", data: ""},
                il: {state: "democrat", data: ""},
                in: {state: "democrat", data: ""},
                ks: {state: "democrat", data: ""},
                ky: {state: "democrat", data: ""},
                la: {state: "democrat", data: ""},
                ma: {state: "democrat", data: ""},
                md: {state: "democrat", data: ""},
                me: {state: "democrat", data: ""},
                mi: {state: "democrat", data: ""},
                mn: {state: "democrat", data: ""},
                mo: {state: "democrat", data: ""},
                ms: {state: "republican", data: ""},
                mt: {state: "democrat", data: ""},
                nc: {state: "democrat", data: ""},
                nd: {state: "democrat", data: ""},
                ne: {state: "democrat", data: ""},
                nh: {state: "democrat", data: ""},
                nj: {state: "democrat", data: ""},
                nm: {state: "democrat", data: ""},
                nv: {state: "democrat", data: ""},
                ny: {state: "democrat", data: ""},
                oh: {state: "democrat", data: ""},
                ok: {state: "democrat", data: ""},
                or: {state: "democrat", data: ""},
                pa: {state: "democrat", data: ""},
                ri: {state: "democrat", data: ""},
                sc: {state: "democrat", data: ""},
                sd: {state: "democrat", data: ""},
                tn: {state: "democrat", data: ""},
                tx: {state: "democrat", data: ""},
                ut: {state: "democrat", data: ""},
                va: {state: "democrat", data: ""},
                vt: {state: "democrat", data: ""},
                wa: {state: "democrat", data: ""},
                wi: {state: "democrat", data: ""},
                wv: {state: "democrat", data: ""},
                wy: {state: "republican", data: ""},
            }
        }
    }
    
    getAPIData(st) { //Get the API data and store it into the global state (states)
        const proxy = "https://cors-forwarder.herokuapp.com/";
        const url_state_1 = "https://whoismyrepresentative.com/getall_reps_bystate.php?state=";
        const url_state_2 = "&output=json";

        fetch(proxy + url_state_1 + st + url_state_2)
            .then(response => response.json())
            .then(contents => {
                let v = this.state.states;
                v[st].data = contents.results;
                console.log("Data for state " + st + ": " + v[st].data);
                this.setState({states: v});
            });
    }

    getCovidAPI() {
        const url = "https://covidtracking.com/api/states";
        fetch(url)
            .then(response => response.json())
            .then(contents => {
                //let v = this.state.states;
                //v[st].coviddata = contents.;
                console.log(contents);
                //this.setState({states: v});
            });
    }

    showPopup(st) {
        this.getAPIData(st);
        this.getCovidAPI(st);
    }

    render() {
        return (
            <svg 
                pretty_print="False"
                viewBox="0 0 1000 589"
            >
                <AK onClick={ ()=> { this.showPopup("ak"); } } className={"state " + this.state.states.ak.state} />
                <AL onClick={ ()=> { this.showPopup("al"); } } className={"state " + this.state.states.al.state} />
                <AR onClick={ ()=> { this.showPopup("ar"); } } className={"state " + this.state.states.ar.state} />
                <AZ onClick={ ()=> { this.showPopup("az"); } } className={"state " + this.state.states.az.state} />
                <CA onClick={ ()=> { this.showPopup("ca"); } } className={"state " + this.state.states.ca.state} />
                <CO onClick={ ()=> { this.showPopup("co"); } } className={"state " + this.state.states.co.state} />
                <CT onClick={ ()=> { this.showPopup("ct"); } } className={"state " + this.state.states.ct.state} />
                <DC onClick={ ()=> { this.showPopup("dc"); } } className={"state " + this.state.states.dc.state} />
                <DE onClick={ ()=> { this.showPopup("de"); } } className={"state " + this.state.states.de.state} />
                <FL onClick={ ()=> { this.showPopup("fl"); } } className={"state " + this.state.states.fl.state} />
                <GA onClick={ ()=> { this.showPopup("ga"); } } className={"state " + this.state.states.ga.state} />
                <HI onClick={ ()=> { this.showPopup("hi"); } } className={"state " + this.state.states.hi.state} />
                <IA onClick={ ()=> { this.showPopup("ia"); } } className={"state " + this.state.states.ia.state} />
                <ID onClick={ ()=> { this.showPopup("id"); } } className={"state " + this.state.states.id.state} />
                <IL onClick={ ()=> { this.showPopup("il"); } } className={"state " + this.state.states.il.state} />
                <IN onClick={ ()=> { this.showPopup("in"); } } className={"state " + this.state.states.in.state} />
                <KS onClick={ ()=> { this.showPopup("ks"); } } className={"state " + this.state.states.ks.state} />
                <KY onClick={ ()=> { this.showPopup("ky"); } } className={"state " + this.state.states.ky.state} />
                <LA onClick={ ()=> { this.showPopup("la"); } } className={"state " + this.state.states.la.state} />
                <MA onClick={ ()=> { this.showPopup("ma"); } } className={"state " + this.state.states.ma.state} />
                <MD onClick={ ()=> { this.showPopup("md"); } } className={"state " + this.state.states.md.state} />
                <ME onClick={ ()=> { this.showPopup("me"); } } className={"state " + this.state.states.me.state} />
                <MI onClick={ ()=> { this.showPopup("mi"); } } className={"state " + this.state.states.mi.state} />
                <MN onClick={ ()=> { this.showPopup("mn"); } } className={"state " + this.state.states.mn.state} />
                <MO onClick={ ()=> { this.showPopup("mo"); } } className={"state " + this.state.states.mo.state} />
                <MS onClick={ ()=> { this.showPopup("ms"); } } className={"state " + this.state.states.ms.state} />
                <MT onClick={ ()=> { this.showPopup("mt"); } } className={"state " + this.state.states.mt.state} />
                <NC onClick={ ()=> { this.showPopup("nc"); } } className={"state " + this.state.states.nc.state} />
                <ND onClick={ ()=> { this.showPopup("nd"); } } className={"state " + this.state.states.nd.state} />
                <NE onClick={ ()=> { this.showPopup("ne"); } } className={"state " + this.state.states.ne.state} />
                <NH onClick={ ()=> { this.showPopup("nh"); } } className={"state " + this.state.states.nh.state} />
                <NJ onClick={ ()=> { this.showPopup("nj"); } } className={"state " + this.state.states.nj.state} />
                <NM onClick={ ()=> { this.showPopup("nm"); } } className={"state " + this.state.states.nm.state} />
                <NV onClick={ ()=> { this.showPopup("nv"); } } className={"state " + this.state.states.nv.state} />
                <NY onClick={ ()=> { this.showPopup("ny"); } } className={"state " + this.state.states.ny.state} />
                <OH onClick={ ()=> { this.showPopup("oh"); } } className={"state " + this.state.states.oh.state} />
                <OK onClick={ ()=> { this.showPopup("ok"); } } className={"state " + this.state.states.ok.state} />
                <OR onClick={ ()=> { this.showPopup("or"); } } className={"state " + this.state.states.or.state} />
                <PA onClick={ ()=> { this.showPopup("pa"); } } className={"state " + this.state.states.pa.state} />
                <RI onClick={ ()=> { this.showPopup("ri"); } } className={"state " + this.state.states.ri.state} />
                <SC onClick={ ()=> { this.showPopup("sc"); } } className={"state " + this.state.states.sc.state} />
                <SD onClick={ ()=> { this.showPopup("sd"); } } className={"state " + this.state.states.sd.state} />
                <TN onClick={ ()=> { this.showPopup("tn"); } } className={"state " + this.state.states.tn.state} />
                <TX onClick={ ()=> { this.showPopup("tx"); } } className={"state " + this.state.states.tx.state} />
                <UT onClick={ ()=> { this.showPopup("ut"); } } className={"state " + this.state.states.ut.state} />
                <VA onClick={ ()=> { this.showPopup("va"); } } className={"state " + this.state.states.va.state} />
                <VT onClick={ ()=> { this.showPopup("vt"); } } className={"state " + this.state.states.vt.state} />
                <WA onClick={ ()=> { this.showPopup("wa"); } } className={"state " + this.state.states.wa.state} />
                <WI onClick={ ()=> { this.showPopup("wi"); } } className={"state " + this.state.states.wi.state} />
                <WV onClick={ ()=> { this.showPopup("wv"); } } className={"state " + this.state.states.wv.state} />
                <WY onClick={ ()=> { this.showPopup("wy"); } } className={"state " + this.state.states.wy.state} />
            </svg>
        );
    }
}

export default States;