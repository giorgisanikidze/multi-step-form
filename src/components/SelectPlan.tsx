import React, { useState } from 'react'
import arcade from "../images/icon-arcade.svg"
import advance from '../images/icon-advanced.svg'
import pro from '../images/icon-pro.svg'

type Props = {
    selectedPlan: string
    setSelectedPlan: React.Dispatch<React.SetStateAction<string>>
    planTime: string
    setPlanTime: React.Dispatch<React.SetStateAction<string>>

}


function SelectPlan({selectedPlan, setSelectedPlan, planTime, setPlanTime} : Props) {
    
    return (
        <div className='relative bg-White rounded-2xl mx-5 lg:mx-0 lg:px-0 mt-8 p-8 -top-100 lg:top-0 '>
            <h2 className='text-2xl text-Marine-blue font-bold mb-4'>Select your plan</h2>
            <p className='font-normal text-Cool-gray w-3/4'>You have the option of monthly or yearly billing.</p>
            <div className='flex flex-col gap-4 mt-5 mb-5 lg:flex-row'  >
                <div onClick={() => {
                        setSelectedPlan('Arcade')
                    }} className={`flex lg:flex-col lg:w-32 items-center gap-4 border-2 border-solid ${selectedPlan === 'Arcade' ? 'border-Purplish-blue' : ' border-Light-gray'} ${selectedPlan === 'Arcade' ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <img src={arcade} alt="" />
                    <div className='flex flex-col items-start justify-between'>
                        <h2 className='text-Marine-blue text-16 font-medium'>Arcade</h2>
                        <p className='text-Cool-gray font-normal text-sm'>{planTime === 'Monthly' ? '$9/mo' : '$90/yr'}</p>
                        {planTime === 'Yearly' &&  <p className='text-Marine-blue text-12 font-normal'>2 months free</p>}

                    </div>
                </div>
                <div onClick={() => {
                        setSelectedPlan('Advanced')
                    }} className={`flex lg:flex-col lg:w-32 items-center gap-4 border-2 border-solid ${selectedPlan === 'Advanced' ? 'border-Purplish-blue' : ' border-Light-gray'} ${selectedPlan === 'Advanced' ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <img src={advance} alt="" />
                    <div className='flex flex-col items-start justify-between'>
                        <h2 className='text-Marine-blue text-16 font-medium'>Advanced</h2>
                        <p className='text-Cool-gray font-normal text-sm'>{planTime === 'Monthly' ? '$12/mo' : '$120/yr'}</p>
                        {planTime === 'Yearly' &&  <p className='text-Marine-blue text-12 font-normal'>2 months free</p>}
                    </div>
                </div>
                <div onClick={() => {
                        setSelectedPlan('Pro')
                    }} className={`flex lg:flex-col lg:w-32 items-center gap-4 border-2 border-solid ${selectedPlan === 'Pro' ? 'border-Purplish-blue' : ' border-Light-gray'} ${selectedPlan === 'Pro' ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <img src={pro} alt="" />
                    <div className='flex flex-col items-start justify-between'>
                        <h2 className='text-Marine-blue text-16 font-medium'>Pro</h2>
                        <p className='text-Cool-gray font-normal text-sm'>{planTime === 'Monthly' ? '$15/mo' : '$150/yr'}</p>
                        {planTime === 'Yearly' &&  <p className='text-Marine-blue text-12 font-normal'>2 months free</p>}

                    </div>
                </div>
            </div>
            
            <div className='flex items-center justify-center gap-3 bg-Very-light-gray p-4 rounded-lg'>
                <h2 className={`font-medium ${planTime === 'Monthly' ? 'text-Marine-blue' : 'text-Cool-gray' }`}>Monthly</h2>
                <div onClick={() => {
                    if (planTime === 'Monthly') {
                        setPlanTime('Yearly');
                    } else {
                        setPlanTime('Monthly')
                    }
                    
                    }} className={`h-6 w-12 bg-Marine-blue rounded-full flex items-center cursor-pointer ${planTime === 'Monthly' ? 'justify-start' : 'justify-end' } `}>
                    <div className={`h-4 w-4 mx-1 bg-White rounded-full shadow-md`}></div>
                </div>
                <h2 className={`font-medium ${planTime === 'Yearly' ? 'text-Marine-blue' : 'text-Cool-gray' }`}>Yearly</h2>
            </div>
        </div>
    )
}

export default SelectPlan