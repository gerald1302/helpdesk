import React from "react";

/**
 * props:
 *  - columns: [{ key, header, render? }]
 *  - data: array of row objects
 *  - className: optional wrapper classes
 */
export default function Table({
  columns = [],
  data = [],
  className = "",
}) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
            {columns.map((col) => (
              <th key={col.key} className="pb-4">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-50">
          {data.map((row, idx) => (
            <tr key={idx} className="bg-transparent">
              {columns.map((col) => (
                <td key={col.key} className="py-4 align-top">
                  {col.render ? col.render(row) : (row[col.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
