import { Popover, Transition } from '@headlessui/react'
import { ChevDown,Calendar,ShopCart,User, MenuButton, Info, Gift } from '../../icons'
import { Fragment } from 'react'

const menuItems = [
    {
        name: 'Shop',
        description: 'Check out our products',
        href: '##',
        icon: ShopCart,
    },
    {
        name: 'Silver Subs',
        description: "Subscribe and Get goodies every month!",
        href: "##",
        icon: Gift,
    },
    {
        name: 'Calendar',
        description: 'See when we are selling near you',
        href: '##',
        icon: Calendar,
    },
    {
        name: 'About Us',
        description: 'Learn our origin story',
        href: "##",
        icon: Info,
    },
    {
        name: 'Profile',
        description: 'Sign in or create an account',
        href: '##',
        icon: User,
    },
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
                            <span><MenuButton/></span>
                            {/* <div
                            className={`${open ? 'text-slate-300' : 'text-slate-300/70'}
                            ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-slate-300/80`}
                            aria-hidden="true">
                            <ChevDown/>
                            </div> */}
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
                                                    <p className="text-sm font-medium text-slate-300">
                                                        {item.name}
                                                    </p>
                                                    <p className="text-sm text-slate-500">
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
                                                External Links Go Here
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
