import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({title,heading,description}:{title:string,heading:string,description:string}){
  return (
     <div className="text-center space-y-4 mb-12">
        <SmallTitle title={title}/>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
            {heading}
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg">
           {description}
          </p>
        </div>
  )
}
