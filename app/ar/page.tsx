'use client'

import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const ARDynamic = dynamic(() => import('@/modules/ar'), {ssr: false})

// import Homepage from '@/modules/homepage';
export default function Page() {
  return (
    <>
      <ARDynamic/>
    </>
  )
}
