import {createRoot} from "react-dom/client";
import CardsWithTitle from "./cards-with-title.tsx";
import './cards.scss'

export default function decorate(block: HTMLDivElement) {
    if (block.classList.contains('with-title')) {

        const title = block?.children[0]?.children[0]
        const cards = Array.from(block?.children).filter((_, index) => index !== 0)
        const cardsWithTitleData = {
            title,
            cards
        }

        createRoot(block).render(<CardsWithTitle {...cardsWithTitleData}/>)
        return
    }
}