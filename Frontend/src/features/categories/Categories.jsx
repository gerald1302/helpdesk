const Categories = ({ items }) => {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Parcourir les catégories</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Voir toutes les catégories
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((cat, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 hover:shadow-sm transition"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${cat.bg}`}>
              {cat.icon}
            </div>

            <h3 className="font-semibold mb-1">{cat.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{cat.description}</p>

            <p className="text-xs text-gray-400">
              {cat.articles} articles • {cat.views} vues
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
