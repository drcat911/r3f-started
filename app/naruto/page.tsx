'use client'

import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const DynamicNaruto = dynamic(() => import('@/modules/naruto'), {ssr: false})

// import Homepage from '@/modules/homepage';
export default function Page() {
  return (
    <>
      <DynamicNaruto/>
    </>
  )
}
