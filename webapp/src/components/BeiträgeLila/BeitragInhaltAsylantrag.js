import React from "react";
import asylbeantragen from "./BeiträgeBilderLila/asylbeantragen.svg";
//import { MdAccountCircle } from "react-icons/md";



export default function BeitragInhaltAsylantrag() {

    return (
        <div className="abstand">
            <img src={asylbeantragen} className="formular" alt="formular" />
            <button className="downloadbutton">Download Formulare</button>
            <h1 className="überschrift1">Asylverfahren</h1>
            <p className="text">Sie sind in Deutschland, um Asyl zu beantragen.</p>
            <div className="infotextasyl">Grundsätzlich haben Sie das Recht auf ein Asylverfahren. Sie haben aber auch die Pflicht, während des gesamten Verfah­rens aktiv mitzuwirken und immer die Wahrheit zu sagen. Das ist wichtig für Sie, denn sonst gefährden Sie Ihr Asylverfahren.</div>

            <details>
                <summary className="zwischenüberschrift">1. Registrierung</summary>
                <p className="text">Bei Ihrer Ankunft in Deutschland werden Sie zunächst regis­triert <br /> <br />
                    Wir fragen Sie nach Ihrem Namen, Herkunftsland, Geburtsdatum, Ihrer Religion, Sprache und Volkszugehörig­keit. Wir fotografieren Sie und nehmen Ihre Fingerab- drücke ab. Nach der Registrierung erhalten Sie einen An­kunftsnachweis und stellen direkt im Ankunftszentrum Ihren Asylantrag.<br /><br />
                    Es kann aber sein, dass Sie erst in einer Aufnahme­einrichtung untergebracht werden. Dort erhalten Sie Ihren Ankunftsnachweis und erfahren, wann Sie Ihren Asylantrag persönlich stellen können.
                </p>
            </details>

            <details>
                <summary className="zwischenüberschrift">2. Persönliche Antragsstellung</summary>
                <p className="text">Zu der persönlichen Antragstellung bringen Sie bitte Ihren Ankunftsnachweis und alle wichtigen Dokumente und Unter­lagen mit, die Sie besitzen. <br /> <br />
                    Das können Ihre Geburtsurkunde oder Ihr Pass sein; aber auch Reiseunterlagen oder Beweise für Ihre Fluchtgründe, wie zum Beispiel Fotos. <br /> <br />
                    Wir fragen Sie nach Ihren Personalien sowie nach Wohnort, Schul­ und Ausbildung, Sprachkenntnissen und Reiseweg.<br /> <br />
                    Teilen Sie uns auch mit, ob sich bereits Familienangehörigein Deutschland aufhalten, wo diese wohnen und ob sie sich auch im Asylverfahren befinden oder befanden. Wenn Sie Ihren Asylantrag gestellt haben, erhalten Sie für die Dauer Ihres Asylverfahrens eine Aufenthaltsgestattung. Tragen Sie diese immer bei sich.
                </p>
            </details>

            <details>
                <summary className="zwischenüberschrift">3. Dublin-Verfahren</summary>
                <p className="text">Doch bevor Ihr Verfahren startet, müssen wir feststellen, ob Deutschland oder ein anderer europäischer Staat für die Prüfung Ihres Asylantrags zuständig ist.<br /> <br />
                    Das nennt sich das Dublin­-Verfahren. Sie können nicht selbst entscheiden, welcher Staat Ihren Asylantrag prüft. Darum klären wir unter anderem, wann und wo Sie in die EU eingereist sind, ob Sie Familien­ angehörige in anderen Mitgliedsstaaten haben oder ob Sie in einem anderen Mitgliedsstaat bereits einen Asylantrag gestellt haben. <br /> <br />
                    Sie haben das Recht, Gründe zu nennen, warum Sie nicht in diesen Staat zurückkehren können.<br /> <br />
                    Wenn das Bundesamt entscheidet, dass ein anderer Staat für Sie zuständig ist, müssen Sie in diesen Staat zurückkehren, damit Ihr Antrag dort geprüft werden kann. <br /> <br />
                    Sie können gegen diese Entscheidung klagen. Achten Sie dabei auf die genannten Fristen im Schreiben. Sie sollten dazu eine Anwältin oder einen Anwalt hinzuziehen.</p>
            </details>

            <details>
                <summary className="zwischenüberschrift">4. Persönliche Anhörung</summary>
                <p className="text">Wenn Deutschland für Ihren Asylantrag zuständig ist, findet eine Anhörung beim Bundesamt statt.<br /> <br />
                    Sie werden dann direkt im Ankunftszentrum nach der Antrag­ stellung zu Ihren Fluchtgründen angehört. Oder Sie erhalten später schriftlich einen Termin zu Ihrer persönlichen Anhörung. Diesen Termin müssen Sie unbedingt persönlich wahrnehmen.<br /> <br />
                    Sollten Sie an dem Tag krank sein oder sich verspäten, teilen Sie uns das am gleichen Tag mit – bei Krankheit reichen Sie uns bitte das Attest per Post nach.<br /> <br />
                    Sonst kann Ihr Antrag abgelehnt oder Ihr Verfahren eingestellt werden.<br /> <br />
                    Bei der Anhörung befragen wir Sie zu Ihren Fluchtgründen. Unsere Mitarbeitenden sind mit den Verhältnissen in Ihrem Herkunftsland vertraut.<br /> <br />
                    Und eine Dolmetscherin oder ein Dolmetscher übersetzt alles, was Sie sagen. Sie dürfen auch eine Vertrauensperson als Beistand mitbringen. <br /> <br />
                    Sie brauchen keine Angst zu haben und erhalten ausreichend Zeit zu schildern, warum Sie aus Ihrem Herkunftsland ausgereist sind und warum Sie nicht dorthin zurückkehren können. <br /> <br />
                    Wichtig ist, dass Sie uns immer die Wahrheit sagen und nur das berichten, was Sie selbst erlebt haben. Hören Sie nicht auf den Rat von Anderen, falls die Ihnen vorschlagen, nicht selbst erlebte Dinge zu berichten. Das kann Ihren Antrag gefährden.<br /> <br />
                    Und denken Sie daran, alle Unterlagen, die Sie mitgebracht haben, zu zeigen.<br /> <br />
                </p>

                <div className="infotextasyl">Alles, was Sie während der Anhörung nicht sagen oder zeigen, kann vielleicht später beim Bundesamt oder vor Gericht nicht mehr berücksichtigt werden.</div>
                <p className="text">Ihre gesamte Anhörung wird in einem Protokoll aufgenommen und Ihnen mündlich rückübersetzt. Sie können korrigieren oder ergänzen.<br /> <br />
                    Sie erhalten das Protokoll direkt im Anschluss oder später per Post.<br /> <br />
                    Wenn Sie den Dolmetscher nicht verstehen oder krank sind, dann sagen Sie das zu Beginn der Anhörung.<br /> <br />
                    Wenn es für Sie aus persönlichen Gründen erforderlich ist, kann die Anhörung durch eine Person gleichen Geschlechts durchgeführt werden. Das Gleiche gilt für die Dolmetscherin oder den Dolmetscher.<br /> <br />
                    Für die Anhörung bestimmter Personengruppen gibt es speziell geschulte Mitarbeitende. <br /> <br />
                    Sie stehen Opfern geschlechtsspezifi­scher Gewalt, Opfern von Folter oder Menschenhandel, trauma­ tisierten Menschen und unbegleiteten Minderjährigen zur Seite.<br /> <br />
                    Falls Sie betroffen sind, teilen Sie uns das am besten direkt bei Ihrer Antragstellung mit.</p>
                <div className="infotextasyl">Zu Beginn des Asylverfahrens wohnen Sie in einer Aufnahmeeinrichtung. <br />
                    Es kann sein, dass Sie bis zur Entscheidung über Ihren Antrag dort bleiben oder in eine andere Unterkunft um- ziehen. Sollten Sie umziehen, müssen Sie dem Bundesamt, der Ausländerbehörde und eventuell dem Gericht Ihre neue Anschrift mitteilen. Das ist enorm wichtig, weil die Briefe immer an die letzte Anschrift gesendet werden, die den Behörden mitgeteilt wurde.</div>
            </details>
            <details>
                <summary className="zwischenüberschrift">5. Ausgang Asylverfahren</summary>
                <p className="text">Die Entscheidung des Bundesamtes teilen wir Ihnen schriftlich mit. Falls Sie einen Rechtsbeistand haben, erhält Ihre Anwältin oder Ihr Anwalt den Brief.<br /> <br />
                    Wenn Sie mit der Entscheidung des Bundesamtes nicht einver­standen sind, haben Sie das Recht zu klagen. Achten Sie auf die genannten Fristen im Schreiben. Nur innerhalb dieser Fristen können Sie klagen. Sie sollten dazu unbedingt eine Anwältin oder einen Anwalt hinzuziehen.
                </p>
            </details>
            <p className="quellen">Quellen</p>
            <p className="beitrag-kommentar-überschrift">Kommentare</p>
            <br />
        </div>
    );
}