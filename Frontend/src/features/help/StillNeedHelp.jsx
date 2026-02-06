const StillNeedHelp = () => {
  return (
    <section className="mt-20 border rounded-2xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-lg font-semibold">Besoin d’aide supplémentaire ?</h3>
        <p className="text-sm text-gray-500">
          Si vous n’avez pas trouvé de réponse, notre équipe est disponible 24h/24 et 7j/7.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="px-5 py-2 border rounded-lg text-sm">
          Contact Chat
        </button>
        <button className="px-5 py-2 bg-blue-600 text-white rounded-lg text-sm">
          Ouvrir un ticket
        </button>
      </div>
    </section>
  )
}

export default StillNeedHelp
