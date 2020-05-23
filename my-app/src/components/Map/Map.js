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
            states: {
                ak: {state: "active", gov_twitter:"...", reps:"...", info:"..."},
                al: {state: "inactive", INS:""},
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
            }
        }
    }

    render() {
        return (
            <svg
                enable_background="new 0 0 1000 589"
                height="589px"
                pretty_print="False"
                styles="stroke-linejoin: round; stroke:#000; fill: red;"
                viewBox="0 0 1000 589"
                width="1000px"
            >
                <AK className={"state " + this.state.states.ak.state} />
                <AL className={"state " + this.state.states.al.state} />
                <AR className={"state " + this.state.states.ar.state} />
                <AZ className={"state " + this.state.states.az.state} />
                <CA className={"state " + this.state.states.ca.state} />
                <CO className={"state " + this.state.states.co.state} />
                <CT className={"state " + this.state.states.ct.state} />
                <DC className={"state " + this.state.states.dc.state} />
                <DE className={"state " + this.state.states.de.state} />
                <FL className={"state " + this.state.states.fl.state} />
                <GA className={"state " + this.state.states.ga.state} />
                <HI className={"state " + this.state.states.hi.state} />
                <IA className={"state " + this.state.states.ia.state} />
                <ID className={"state " + this.state.states.id.state} />
                <IL className={"state " + this.state.states.il.state} />
                <IN className={"state " + this.state.states.in.state} />
                <KS className={"state " + this.state.states.ks.state} />
                <KY className={"state " + this.state.states.ky.state} />
                <LA className={"state " + this.state.states.la.state} />
                <MA className={"state " + this.state.states.ma.state} />
                <MD className={"state " + this.state.states.md.state} />
                <ME className={"state " + this.state.states.me.state} />
                <MI className={"state " + this.state.states.mi.state} />
                <MN className={"state " + this.state.states.mn.state} />
                <MO className={"state " + this.state.states.mo.state} />
                <MS className={"state " + this.state.states.ms.state} />
                <MT className={"state " + this.state.states.mt.state} />
                <NC className={"state " + this.state.states.nc.state} />
                <ND className={"state " + this.state.states.nd.state} />
                <NE className={"state " + this.state.states.ne.state} />
                <NH className={"state " + this.state.states.nh.state} />
                <NJ className={"state " + this.state.states.nj.state} />
                <NM className={"state " + this.state.states.nm.state} />
                <NV className={"state " + this.state.states.nv.state} />
                <NY className={"state " + this.state.states.ny.state} />
                <OH className={"state " + this.state.states.oh.state} />
                <OK className={"state " + this.state.states.ok.state} />
                <OR className={"state " + this.state.states.or.state} />
                <PA className={"state " + this.state.states.pa.state} />
                <RI className={"state " + this.state.states.ri.state} />
                <SC className={"state " + this.state.states.sc.state} />
                <SD className={"state " + this.state.states.sd.state} />
                <TN className={"state " + this.state.states.tn.state} />
                <TX className={"state " + this.state.states.tx.state} />
                <UT className={"state " + this.state.states.ut.state} />
                <VA className={"state " + this.state.states.va.state} />
                <VT className={"state " + this.state.states.vt.state} />
                <WA className={"state " + this.state.states.wa.state} />
                <WI className={"state " + this.state.states.wi.state} />
                <WV className={"state " + this.state.states.wv.state} />
                <WY className={"state " + this.state.states.wy.state} />
            </svg>
        );
    }
}

export default States;