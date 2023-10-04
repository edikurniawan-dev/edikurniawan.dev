'use client';

import { NavbarItem } from '@nextui-org/navbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default function NavbarMenu() {
  const pathname = usePathname();

  const menus = [
    {
      title: 'Experience',
      href: '/experience',
    },
    {
      title: 'Project',
      href: '/project',
    },
    {
      title: 'Article',
      href: '/article',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <>
      {menus.map((menu) => (
        <NavbarItem key={menu.href} isActive={pathname.includes(menu.href)}>
          <Link color="foreground" href={menu.href}>
            {menu.title}
          </Link>
        </NavbarItem>
      ))}
    </>
  );
}
