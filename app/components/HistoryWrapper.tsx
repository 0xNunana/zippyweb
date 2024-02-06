import React from 'react'

const HistoryWrapper = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <p className='text-[24px] font-[700]'>History</p>
            <p className='text-zippygreen text-[20px]'>View all</p>

        </div>
        <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="text-start p-2">Tracking number</th>
          <th className="text-start p-2">Route</th>
          <th className="text-start  p-2">Status</th>
          <th className="text-start  p-2"></th>
        </tr>
      </thead>
      <tbody>
        {[1, 2].map((row) => (
          <tr key={row}>
            {[1, 2, 3, 4].map((col) => (
              <td key={col} className=" p-2">
                Row {row}, Col {col}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default HistoryWrapper