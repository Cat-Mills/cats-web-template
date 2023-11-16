import { Popover, Transition, Menu } from '@headlessui/react'
import { ChevDown, Calendar, ShopCart, User, MenuButton, Info, Gift } from '../../icons'
import { Fragment } from 'react'
import ShopMenu from './ShopMenu'

const menuItems = [
    {
        name: 'Shop',
        description: 'Check out our products',
        href: null,
        icon: ShopCart,
    },
    {
        name: 'Silver Subs',
        description: "Subscribe to get a candle every month!",
        href: "/SilverSubs",
        icon: Gift,
    },
    {
        name: 'Calendar',
        description: 'See when we are selling near you',
        href: '/Calendar',
        icon: Calendar,
    },
    {
        name: 'About Us',
        description: 'Learn our origin story',
        href: "/AboutUs",
        icon: Info,
    },
    {
        name: 'Profile',
        description: 'Sign in or create an account',
        href: '/Profile',
        icon: User,
    },
]
const links = [
    { href: '/Shop', label: 'Shop All' },
    { href: '/Shop', label: 'Candles' },
    { href: '/Shop', label: 'Lip Balm' },
    { href: '/Shop', label: 'Swag' },
    { href: '/Shop', label: 'Gift Cards' },
]

export default function MainMenu() {
    return (
        <div className="flex justify-center items-center px-4">
            <Popover className="">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? 'text-white' : 'text-white/90'}
                group inline-flex items-center text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                        >
                            <span><MenuButton /></span>

                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-0"
                            enterTo="opacity-100 translate-y-1"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-1"
                            leaveTo="opacity-0 translate-y-0"
                        >
                            <Popover.Panel className="absolute z-10 w-screen max-w-sm transform px-4 sm:px-0 right-0">
                                <div className="overflow-hidden  shadow-lg ">
                                    <div className="relative grid gap-8 bg-slate-800 p-6">
                                        {menuItems.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-slate-600 focus:outline-none focus-visible:ring focus-visible:ring-slate-500/50"
                                            >
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
                                                    <item.icon aria-hidden="true" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-slate-300 flex cursor-pointer w-full">
                                                        {item.name === "Shop" ? null : item.name}
                                                        {(item.name === "Shop") &&
                                                            <Menu as='div' className="relative">
                                                                <Menu.Button className="flex w-60 text-center items-center gap-2"> Shop <div className=' text-lg'>+</div>
                                                                    
                                                                </Menu.Button>
                                                                <Transition
                                                                    enter="transition duration-100 ease-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-100"
                                                                    leave="transition duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Menu.Items className=" flex flex-col w-40 py-2 px-2 bg-inherit text-start text-slate-300">
                                                                        {links.map((link) => (
                                                                            <Menu.Item
                                                                                as="div"
                                                                                key={link.label}
                                                                                href={link.href}
                                                                                className="py-1.5 hover:text-white"
                                                                            >
                                                                                {link.label}
                                                                            </Menu.Item>
                                                                        ))}
                                                                    </Menu.Items>
                                                                </Transition>
                                                            </Menu>}
                                                    </div>
                                                    <p className="text-sm text-slate-500 cursor-default">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                    <div className="bg-slate-800 p-4">
                                        <a
                                            href="##"
                                            className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-slate-600 focus:outline-none focus-visible:ring focus-visible:ring-slate-500/50"
                                        >
                                            <span className="flex items-center text-slate-400">
                                                Social Media Links Go Here
                                            </span>

                                        </a>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    )
}
