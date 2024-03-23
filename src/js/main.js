
// Добавление класса hidden когда корзина открыта
import axios from "axios";

export const bodyHidden = (isDrawerOpen) => {
    const body = document.querySelector('body')
    if(isDrawerOpen) {
        body.classList.add('hidden')
    } else {
        body.classList.remove('hidden')
    }
}

