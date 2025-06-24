import React from 'react';

const DynamicTable = ({
  columns = [],
  data = [],
  striped = false,
  bordered = false,
  hover = false,
  className = '',
}) => {
  return (
    <div className={`overflow-x-auto rounded-xl shadow  ${className} custom-scroll`}>
      <table className="min-w-full border- border-amber-50 text-left text-sm text-gray-200 bg-gray-800">
        <thead className="uppercase text-xs bg-gray-900 text-gray-300">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="px-6 py-4">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`
                ${striped && i % 2 === 1 ? 'bg-gray-700' : ''}
                ${hover ? 'hover:bg-gray-600 transition duration-300' : ''}
                ${bordered ? 'border-b border-gray-700' : ''}
              `}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-6 py-4 whitespace-nowrap">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;