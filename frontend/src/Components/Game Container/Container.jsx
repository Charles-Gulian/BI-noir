import React from 'react'
import { ActionButtons } from './ActionButtons'

export const Container = () => {
  return (
      <div className='border-red-600 bg-slate-500 border-8 w-[960px] h-[640px] flex mx-auto mt-36'>

        <ActionButtons label="Action1" action='start_game' />
        <ActionButtons label="Action2" action='time' />
      <ActionButtons label="Action3" action='ask_question' method='POST' body = {{character_id: 1, question: "What's your name?",
      }} />


      </div>
  )
}
