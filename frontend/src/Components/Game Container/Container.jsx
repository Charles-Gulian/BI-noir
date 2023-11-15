import React from 'react'
import { ActionButtons } from './ActionButtons'

export const Container = () => {
  return (
      <div className='border-red-600 bg-slate-500 border-8 w-[960px] h-[640px] flex mx-auto mt-36'>

        <ActionButtons label="Action1" />
        <ActionButtons label="Action2" />


      </div>
  )
}
