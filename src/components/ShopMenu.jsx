import { Menu, Transition } from '@headlessui/react'
import { ChevDown, MenuButton } from '../../icons'

const links = [
    { href: '/Shop', label: 'Shop All'},
    { href: '/Shop', label: 'Candles' },
    { href: '/Shop', label: 'Lip Balm' },
    { href: '/Shop', label: 'Swag' },
    { href: '/Shop', label: 'Gift Cards' },
]

export default function ShopMenu() {
    return (
        <Menu as='div' className="relative">
            <Menu.Button>Shop +</Menu.Button>
            <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
        >
            <Menu.Items className="absolute -left-full top-0  flex flex-col w-40 py-2 px-2 bg-slate-700 text-center text-slate-300">
                {links.map((link) => (
                    <Menu.Item
                        as="a"
                        key={link.href}
                        href={link.href}
                        className="py-1 hover:text-white"
                    >
                        {link.label}
                    </Menu.Item>
                ))}
            </Menu.Items>
            </Transition>
        </Menu>
    )
}