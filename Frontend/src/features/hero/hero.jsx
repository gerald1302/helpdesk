const Hero = ({ popular = [], onSearch }) => {
  return (
    <section className="relative mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Comment pouvons-nous vous aider ?
        </h1>

        <p className="text-gray-600 mb-10">
          Recherchez dans notre base de connaissances des articles, fonctionnalités ou FAQ
        </p>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            onSearch && onSearch(e)
          }}
          className="flex items-center bg-white rounded-xl shadow-md px-4 py-3 gap-3 max-w-2xl mx-auto"
        >
          <span className="text-gray-400">🔍</span>

          <input
            type="text"
            placeholder="Search for articles, guides, or keywords..."
            className="flex-1 outline-none text-sm"
          />

          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-700">
            Rechercher
          </button>
        </form>

        {/* Popular */}
        <div className="mt-5 text-sm text-gray-500">
          <span className="mr-2">Populaire :</span>
          {popular.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-blue-600 hover:underline mr-3"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
