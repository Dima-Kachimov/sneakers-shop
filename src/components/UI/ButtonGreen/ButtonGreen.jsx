import s from './ButtonGreen.module.scss'

import ButtonGreenArrow from "../../../_icons/buttonGreen/ButtonGreenArrow";
import ButtonArrowLeft from "../../../_icons/buttonGreen/ButtonArrowLeft";

const ButtonGreen = ({onClick, children, isBack}) => (
        <button onClick={onClick}>
            <p>
                {children}
                {isBack
                    ? <ButtonArrowLeft className={s.btnArrowLeft}/>
                    : <ButtonGreenArrow className={s.btnArrowRight}/>}
            </p>
        </button>
);
export default ButtonGreen;