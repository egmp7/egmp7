'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@/hooks/useTheme';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]
  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex items-center bg-slate-700 border-b-2 border-b-slate-600">
              
              {/* Logo */}
              <Link
              className='flex'
                href={"/"}>
                  <Image
                    className="rounded-full mx-4 my-2"
                    src="/images/egse7.png"
                    width={24}
                    height={24}
                    alt="egse7 logo" />

                  <p className='self-center text-slate-200'>EGSE7</p>
              </Link>

              {/* Space in between */}
              <div className="flex-grow sm:hidden"></div>

               {/* Bar3 Button - Phone View */}
               <DisclosureButton className="relative sm:hidden text-slate-400 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-300">
                <span className="absolute " />
                {open ? (
                  <XMarkIcon className="block h-12 w-12" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-12 w-12" aria-hidden="true" />)}
                <span className="absolute" />
              </DisclosureButton >

              {/* Space in between */}
              <div className="hidden flex-grow sm:block"></div>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className={`mr-4 p-2 rounded-md transition-all duration-200 ${
                  isDark 
                    ? 'text-yellow-400 hover:text-yellow-300 hover:bg-slate-600' 
                    : 'text-blue-400 hover:text-blue-300 hover:bg-slate-600'
                }`}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <SunIcon className="h-6 w-6" />
                ) : (
                  <MoonIcon className="h-6 w-6" />
                )}
              </button>

              {/* Nav Links - Large View */}
              <div className='hidden sm:block'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname == item.href ? 'text-slate-300 bg-slate-800 p-2 rounded-sm' : 'text-slate-400 hover:bg-slate-600 p-2 rounded-sm hover:text-slate-400', 'mr-1'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

            </div>

            {/* Nav Links - Phone View */}
            <DisclosurePanel className="sm:hidden bg-slate-700">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  href={item.href}
                  className={classNames(
                    pathname == item.href ? 'bg-slate-800 text-slate-200' : 'text-slate-400',
                    'block rounded-md px-3 py-2'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </DisclosurePanel >
          </>
        )}
      </Disclosure>
    </>
  )
}