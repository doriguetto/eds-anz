import {createRoot} from "react-dom/client";
import './hero.scss';
import {Data} from "./heroComponent.tsx";
import {lazy} from "react";

const Hero = lazy(() => import('./heroComponent'))

export default function decorate(block: HTMLDivElement) {
    const img = block.querySelector('picture');
    const heroData: Data = {
        img
    }
    // debugger
    createRoot(block).render(<Hero {...heroData}/>)
    // debugger
}