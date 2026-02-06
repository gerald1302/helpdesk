const Navbar = ({
  left,
  center,
  right,
  className = "",
}) => {
  return (
    <header className="w-full bg-white border-b">
      <div className={`max-w-7xl mx-auto px-6 h-16 flex items-center justify-between ${className}`}>
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {left}
        </div>

        {/* CENTER */}
        <nav className="hidden md:flex items-center gap-6">
          {center}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {right}
        </div>

      </div>
    </header>
  )
}

export default Navbar
