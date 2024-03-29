import s from './ButtonGreen.module.scss'

import ButtonGreenArrow from "../../../_icons/buttonGreen/ButtonGreenArrow";
import ButtonArrowLeft from "../../../_icons/buttonGreen/ButtonArrowLeft";

const ButtonGreen = ({onClick, children, isBack, disabled}) => (
        <button onClick={onClick} disabled={disabled}>
            <p>
                {children}
                {isBack
                    ? <ButtonArrowLeft className={s.btnArrowLeft}/>
                    : <ButtonGreenArrow className={s.btnArrowRight}/>}
            </p>
        </button>
);
export default ButtonGreen;