import React from "react";
import "./EinzelnerBeitraggrün.css";
import TitleBarHauptseite from '../components/BeiträgeGrün/TitleBarHauptseitegrün';
import MenuIconGrün from "../components/Menü/MenüLogikGrün";
import Kommentare from "../components/Kommentare/KommentareAusgeben";
import ZurueckIcon from "../components/ZurückButton";
import { Link } from "react-router-dom";
import BeitragInhaltRückkehr from "../components/BeiträgeGrün/BeitragInhaltRückkehr";

export default function Rückkehr() {
    const itemsgrün = [
        { text: 'Home', link: '/startgrün' },
        { text: 'Account',  },
        { text: 'Kategorien',  },
        { text: 'Meine Chats', },
    ];
    return (
        <div className="hauptseite">
            <MenuIconGrün items={itemsgrün} />
            <Link to='/startgrün'>
                <ZurueckIcon/>
            </Link>
            <TitleBarHauptseite />
            <BeitragInhaltRückkehr />
            <Kommentare />
        </div>
    );
}