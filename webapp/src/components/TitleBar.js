import header from  "./images/welle_header.png" // anderer Speicherort
import logo from  "./images/helpinghandslogo.png" // anderer Speicherort

export default function TitleBar() {
    return (
        <div className="titlebar">
            <img src={header} className="headerWelle" alt="welle" />
            <br/><br/>
            <img src={logo} className="logo" alt="schrift" />
            <br/><br/>
            <h4>Das kann dir Helping Hands alles bieten:</h4>
        </div>
    )
}            

//<link href='https://css.gg/add-r.css' rel='stylesheet'></link>
//            <i class="gg-add-r"></i>