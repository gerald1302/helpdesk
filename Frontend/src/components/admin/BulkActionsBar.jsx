import React from "react";
import { Edit3, UserMinus, Trash2, X } from "lucide-react";

export default function BulkActionsBar({
  selectedCount = 0,
  onBulkEdit = () => {},
  onDeactivate = () => {},
  onDelete = () => {},
  onClose = () => {},
}) {
  return (
    <div className="fixed left-1/2 -translate-x-1/2 bottom-8 z-50">
      <div className="flex items-center gap-4 bg-gray-100 backdrop-blur-md px-4 py-3 rounded-full shadow-lg border border-slate-500/80">
        {/* Info */}
        <div className="flex items-center gap-3 pr-4 border-r border-slate-100">
          <div className="text-sm font-medium">{selectedCount}</div>
          <div className="text-sm text-slate-500">selected</div>
        </div>

        {/* Actions - visually separated buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBulkEdit}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100 text-sm font-semibold"
            title="Bulk edit selected users"
          >
            <Edit3 className="w-4 h-4 text-slate-700" />
            <span>Bulk Edit</span>
          </button>

          <div className="w-px h-6 bg-slate-100" />

          <button
            onClick={onDeactivate}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-50 border border-amber-100 hover:bg-amber-100 text-sm font-semibold text-amber-700"
            title="Deactivate selected users"
          >
            <UserMinus className="w-4 h-4" />
            <span>Deactivate</span>
          </button>

          <div className="w-px h-6 bg-slate-100" />

          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-rose-50 border border-rose-100 hover:bg-rose-100 text-sm font-semibold text-rose-700"
            title="Delete selected users"
          >
            <Trash2 className="w-4 h-4" />
            <span>Delete</span>
          </button>
        </div>

        {/* Close */}
        <div className="w-px h-6 bg-slate-100" />
        <button
          onClick={onClose}
          aria-label="Close bulk actions"
          className="p-2 rounded-md text-slate-600 hover:bg-slate-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
