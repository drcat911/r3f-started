'use client'

import React, {Suspense} from "react";
import dynamic from "next/dynamic";

const HonTranDynamic = dynamic(() => import('@/modules/homepage'), {ssr: false})

// import Homepage from '@/modules/homepage';
export default function Page() {
  return (
    <>
      <HonTranDynamic/>
    </>
  )
}
