import { NossasRedes } from "../../NossasRedes";
import InstagramIcon from '@material-ui/icons/Instagram';
import "./index.css"

const Redes = () => {
    return (
        <div className="BlocoLinks">
            {NossasRedes.map((elt, index) => <a className="Links" key={index} href={elt.instagram}><InstagramIcon/>{elt.conteudo}</a>)}
        </div>

    )
}

export default Redes;
