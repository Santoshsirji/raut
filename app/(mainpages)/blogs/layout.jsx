import React from "react"

const BlogLayout = (
  {
  children
}
) => {
  return (
    <div className="pt-24 px-1 md:px-5 max-w-screen-lg mx-auto">
      {children}
    </div>
  )
}

export default BlogLayout
