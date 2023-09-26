"use client";
import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  LogInIcon,
  MenuIcon,
  MisionIcon,
  QuestionIcon,
  VisionIcon
} from './Icons'

import ItemListDropDown from './ItemListDropDown'
import MobileMenu from './MobileMenu'

export default function NavBar (){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false)
  const [isSubMenuMobileOpen, setIsSubMenuMobileOpen] = useState(false)

  const handleMenuOpen = (): void => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuMobileOpen = (): void => {
    setIsMenuMobileOpen(!isMenuMobileOpen)
  }

  const handleSubMenuMobileOpen = (): void => {
    setIsSubMenuMobileOpen(!isSubMenuMobileOpen)
  }

  const handleResetMenus = (): void => {
    setIsMenuOpen(false)
    setIsMenuMobileOpen(false)
    setIsSubMenuMobileOpen(false)
  }

  return (
    <header className="bg-white border border-[#0f172a1a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/home" className="-m-1.5 p-1.5" onClick={handleResetMenus}>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/home"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#79ad34]"
            onClick={handleResetMenus}
          >
            Inicio
          </Link>
          <Link
            href="../contact"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#79ad34]"
            onClick={handleResetMenus}
          >
            Contacto
          </Link>

          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-base font-bold leading-6 text-gray-900 hover:text-[#79ad34]"
              aria-expanded="false"
              onClick={handleMenuOpen}
            >
              Nosotros
              {isMenuOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </button>

            <div
              className={`${
                isMenuOpen
                  ? 'transition ease-out duration-200 opacity-100 translate-y-0'
                  : 'transition ease-in duration-150 opacity-0 translate-y-1'
              }`}
            >
              {isMenuOpen && (
                <div className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    <ItemListDropDown
                      title="¿Quienes somos?"
                      description="Lorem ipsum dolor sit amet consectetur."
                      Icon={QuestionIcon}
                      handleResetMenus={handleResetMenus}
                    />
                    <ItemListDropDown
                      title="Misión"
                      description="Lorem ipsum dolor sit amet consectetur."
                      Icon={MisionIcon}
                      handleResetMenus={handleResetMenus}
                    />
                    <ItemListDropDown
                      title="Visión"
                      description="Lorem ipsum dolor sit amet consectetur."
                      Icon={VisionIcon}
                      handleResetMenus={handleResetMenus}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12">
          <Link
            href="/signup"
            className="text-base font-bold leading-6 text-gray-900 hover:text-[#79ad34]"
            onClick={handleResetMenus}
          >
            Registrarse
          </Link>
          <Link
            href="/signin"
            className="flex justify-center items-center gap-2 text-base font-bold leading-6 text-gray-900 hover:text-[#79ad34]"
            onClick={handleResetMenus}
          >
            Ingresar
            <LogInIcon />
          </Link>
        </div>
        <button
          className="lg:hidden hover:text-[#79ad34]"
          onClick={handleMenuMobileOpen}
        >
          <MenuIcon />
        </button>
      </nav>

      {isMenuMobileOpen && (
        <MobileMenu
          isSubMenuMobileOpen={isSubMenuMobileOpen}
          handleMenuMobileOpen={handleMenuMobileOpen}
          handleSubMenuMobileOpen={handleSubMenuMobileOpen}
          handleResetMenus={handleResetMenus}
        />
      )}
    </header>
  )
}

