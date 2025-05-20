
import React from 'react'

export default function SmallTitle({title}:{title:String}) {
  return (
            <div className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-700 shadow-sm mb-6">
          <span className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </span> &nbsp; {title}
        </div>
  )
}
