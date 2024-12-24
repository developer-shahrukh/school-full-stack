import React from "react";

function Announcements() {
  return( 
  <div className="bg-white p-4 rounded-md">
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-semibold">Announcements</h1>
      <span className="text-xs text-gray-400">View All</span>
    </div>
    <div className="flex flex-col gap-4 mt-4">
    <div className="bg-smSkyLight rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Loren ipsum dolor site</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">Remember that you are not alone as we begin a new school year together.</p>
    </div>

    <div className="bg-smPurpleLight rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Loren ipsum dolor site</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">Remember that you are not alone as we begin a new school year together.</p>
    </div>
    <div className="bg-smYellowLight rounded-md p-4">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">Loren ipsum dolor site</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-01-01</span>
      </div>
      <p className="text-sm text-gray-400 mt-1">Remember that you are not alone as we begin a new school year together.</p>
    </div>

    </div>
  </div>
  )
}

export default Announcements;
