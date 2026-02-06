const Footer = ({
  brand = "Enterprise Knowledge Base",
  links = [],
  copyright,
}) => {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <span>📘</span>
          <span>{brand}</span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-blue-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

      </div>

      {/* Bottom */}
      <div className="text-center text-xs text-gray-400 pb-6">
        {copyright}
      </div>
    </footer>
  )
}

export default Footer
