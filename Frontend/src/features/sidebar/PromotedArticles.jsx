const PromotedArticles = ({ items }) => (
  <div className="bg-white border rounded-xl p-5">
    <h3 className="font-semibold mb-4">⭐ Articles recommandés</h3>
    <ul className="space-y-4">
      {items.map((item, i) => (
        <li key={i}>
          <p className="text-sm font-medium">{item.title}</p>
          <p className="text-xs text-gray-400">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
)

export default PromotedArticles
