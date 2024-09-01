import React from 'react'
import NewsMainAndSkeleton from '../../Hooks/NewsMainAndSkeleton.jsx'

const C_home = () => {
  return (
    <>
      <NewsMainAndSkeleton paramURL={`https://reactnews24x7backend.onrender.com/api/key/${import.meta.env.VITE_BACKEND_API_KEY}/publisher/allNews`} />
    </>
  )
}

export default C_home
