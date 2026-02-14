//src/components/layout/Navbar.jsx
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"

const Navbar = ({ left, center, right, className = "" }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
      <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${className}`}>

        {/* LEFT */}
        <div className="flex items-center gap-3">
          {left}
        </div>

        {/* CENTER – desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {center}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-4">
            {right}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Menu"
          >
            {open ? (
              <XMarkIcon className="w-6 h-6 text-gray-700" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {center}
          </nav>

          <div className="pt-4 border-t flex flex-col gap-3">
            {right}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
