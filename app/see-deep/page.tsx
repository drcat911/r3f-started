'use client'

import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const DynamicSeeDeep = dynamic(() => import('@/modules/see-deep'), {ssr: false})

// import Homepage from '@/modules/homepage';
export default function Page() {
  return (
    <>
      <DynamicSeeDeep/>
    </>
  )
}
