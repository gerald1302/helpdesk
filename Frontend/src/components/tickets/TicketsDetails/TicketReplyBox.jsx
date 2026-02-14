const TicketReplyBox = () => {
  return (
    <div className="border-t p-4 bg-white">
      <textarea
        placeholder="Type your response here..."
        className="w-full border rounded-xl p-3 text-sm focus:outline-none"
        rows={4}
      />
      <div className="flex justify-end mt-3">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold">
          Send Reply →
        </button>
      </div>
    </div>
  )
}

export default TicketReplyBox
