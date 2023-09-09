"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/#" },
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "#contact" },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="inset-x-0 top-0 z-50">
      <nav
        className="container mx-auto p-3 md:p-6 xl:px-32 flex items-center justify-between"
        aria-label="Global"
      >
        <div className="lg:flex-1">
          <a href="/">
            <Image
              src="/assets/logo.png"
              width={42}
              height={42}
              alt="Logo of Jeffrey Ram Pineda"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 tracking-wide">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:scale-110 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary-light px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="py-6 space-y-8 tracking-wide">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg py-4 w-full text-center hover:bg-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
