import { Menu } from '@headlessui/react'
import { MenuButton } from '../../icons'

const links = [
    { href: '/', label: 'Account settings' },
    { href: '/', label: 'Support' },
    { href: '/', label: 'License' },
    { href: '/', label: 'Sign out' },
]

export default function ShopMenu() {
    return (
        <Menu>
            <Menu.Button><MenuButton/></Menu.Button>
            <Menu.Items>
                {links.map((link) => (
                    <Menu.Item
                        as="a"
                        key={link.href}
                        href={link.href}
                        className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                    >
                        {link.label}
                    </Menu.Item>
                ))}
            </Menu.Items>
        </Menu>
    )
}