'use client'

import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const ErgoD = dynamic(() => import('@/modules/ergo'), {ssr: false})

// import Homepage from '@/modules/homepage';
export default function Page() {
  return (
    <>
      <ErgoD/>
    </>
  )
}
