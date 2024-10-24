import {createRoot} from "react-dom/client";
import './section.scss'
import SectionBadgeWithCard from "./section-badge-with-card.tsx";
import SectionImageWithBadge from "./section-image-with-badge.tsx";

const Section = (props: SectionData) => {
    return props.content ? (
        <div dangerouslySetInnerHTML={{__html: props.content.outerHTML}}/>
    ) : null
}

export type SectionData = {
    innerSections?: NodeListOf<Element> | undefined
    content?: Element | null
}

export default function decorate(block: HTMLDivElement) {

    if (block.classList.contains('badge-with-card')) {

        const innerSections = block.firstElementChild?.querySelectorAll('div');
        const sectionData: SectionData = {
            innerSections
        }
        createRoot(block).render(<SectionBadgeWithCard {...sectionData}/>)
        return;
    } else if (block.classList.contains('image-with-badge')) {

        const innerSections = block.firstElementChild?.querySelectorAll('div');
        const sectionData: SectionData = {
            innerSections
        }
        createRoot(block).render(<SectionImageWithBadge {...sectionData}/>)
        return;

    }

    const section = block.firstElementChild?.querySelector('div');
    const sectionData: SectionData = {
        content: section
    }
    createRoot(block).render(<Section {...sectionData}/>)
}