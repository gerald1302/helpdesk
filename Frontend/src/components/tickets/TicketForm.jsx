import { useState, useRef } from "react"

const TicketForm = () => {
  const [form, setForm] = useState({
    subject: "",
    category: "",
    priority: "medium",
    description: "",
    attachments: [],
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    setForm({
      ...form,
      attachments: Array.from(e.target.files),
    })
  }

  const fileInputRef = useRef(null)

  const handleDrop = (e) => {
    e.preventDefault()
    const files = Array.from(e.dataTransfer.files || [])
    if (files.length) {
      setForm({ ...form, attachments: files })
    }
  }

  const handleAttachClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form data:", form)
    // TODO: appel API create ticket
  }

  return (
    <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-8 border-b">
        <h1 className="text-2xl font-bold text-gray-900">
          Create New Ticket
        </h1>
        <p className="text-gray-500 mt-1">
          Submit a request to our support team.
        </p>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Subject */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              placeholder="A brief summary of your issue"
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 p-3 text-sm"
            />
          </div>

          {/* Category + Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Category */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Support</option>
                <option value="billing">Billing & Payments</option>
                <option value="account">Account Access</option>
                <option value="feature">Feature Request</option>
              </select>
            </div>

            {/* Priority */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold">
                Priority <span className="text-red-500">*</span>
              </label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              rows="5"
              required
              value={form.description}
              onChange={handleChange}
              placeholder="Describe your problem in detail..."
              className="w-full rounded-lg border-gray-300 p-3 text-sm"
            />
          </div>

          {/* Attachments */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold">Attachments</label>

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={handleAttachClick}
              className="relative rounded-lg border-2 border-dashed border-gray-200 p-6 text-center cursor-pointer hover:border-gray-300"
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />

              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16v4h10v-4M7 8l5-5 5 5M12 3v13" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400">PDF, PNG, JPG or ZIP (max. 10MB)</p>
                </div>
              </div>
            </div>

            {form.attachments.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                {form.attachments.length} file(s) selected
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <button
              type="button"
              className="px-6 py-2.5 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold"
            >
              Submit Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TicketForm
