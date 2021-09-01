import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  // setup states
  const [links] = useState(sublinks)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  // return
  return (
    <GatsbyContext.Provider value={{ links, isSidebarOpen }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
