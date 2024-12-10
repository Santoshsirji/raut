"use client";

import React from "react";

const SubjectLayout = ({children}) => {
  return (
    <div
    className="
    flex
    flex-col
    "
    >
      <div
      className="
      overflow-x-hidden
      pt-20
      "
      >
      {children}
      </div>
    </div>
  )
}

export default SubjectLayout
