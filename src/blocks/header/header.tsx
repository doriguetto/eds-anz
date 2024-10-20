import {createRoot} from "react-dom/client";
import './header.scss';
import { lazy } from "react";
import {Data} from "./headerComponent.tsx";

const Header = lazy(() => import('./headerComponent'))

export default function decorate(block: HTMLDivElement) {

    const data: Data = {
        menus: [
            {
                href: '/personal/',
                title: 'Personal',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]

            },
            {
                href: '/business/',
                title: 'Business',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]

            },
            {
                href: '/institutional/',
                title: 'Institutional',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]
            },
            {
                href: '/learn/',
                title: 'Learn',
                description: '',
                submenus: [
                    {
                        href: '/personal/bank_accounts',
                        title: 'Bank accounts',
                        description: 'Everyday/savings & term deposits',
                        icon: 'bank-accounts'
                    },
                    {
                        href: '/personal/credit-cards',
                        title: 'Credit cards',
                        description: 'Low interest rate, rewards frequent flyer & platinum',
                        icon: 'card'
                    },
                    {
                        href: '/personal/home-loans',
                        title: 'Home loans',
                        description: 'Buying, refinancing & investing in property',
                        icon: 'home-loans'
                    },
                    {
                        href: '/personal/personal-loans',
                        title: 'Personal loans',
                        description: 'Debt consolidation, buying a new or used car, renovations and more',
                        icon: 'personal-loans'
                    },
                    {
                        href: '/personal/insurance',
                        title: 'Insurance',
                        description: 'Get on top of your home, life, income and car insurance',
                        icon: 'insurance'
                    },
                    {
                        href: '/personal/superannuation',
                        title: 'Superannuation and retirement',
                        description: 'Superannuation and retirement options',
                        icon: 'investing-super'
                    },
                    {
                        href: '/personal/international-travel',
                        title: 'International travel',
                        description: 'Foreign exchange, travel insurance, travel money card & international payments',
                        icon: 'foreignfx'
                    },
                ]
            }
        ]
    }
    createRoot(block).render(<Header {...data} />)
}