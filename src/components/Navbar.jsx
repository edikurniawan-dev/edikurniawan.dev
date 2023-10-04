import { Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
// eslint-disable-next-line camelcase
import { Shantell_Sans } from 'next/font/google';

import ThemeSwitcher from './ThemeSwitcher';
import NavbarMenu from './NavbarMenu';

const shantellSans = Shantell_Sans({ subsets: ['latin'] });

export default function Navbar() {
  return (
    <Nav maxWidth="md">
      <NavbarBrand>
        <span className={`${shantellSans.className} text-3xl font-medium text-primary-500`}>Ed</span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarMenu />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
