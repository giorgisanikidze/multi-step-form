import React, { useState } from 'react'


type Props = {
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
    setOnlineService: React.Dispatch<React.SetStateAction<boolean>>
    setLargerStorage: React.Dispatch<React.SetStateAction<boolean>>
    setCustomizableProfile: React.Dispatch<React.SetStateAction<boolean>>
    planTime: string
}

function AddOns({onlineService, setOnlineService, largerStorage, setLargerStorage, customizableProfile, setCustomizableProfile, planTime} : Props) {
    

  
    return (
        <div className='relative bg-White rounded-2xl mx-5 lg:mx-0 lg:px-0 mt-8 p-6 -top-100 lg:top-0 '>
            <h2 className='text-2xl text-Marine-blue font-bold mb-4'>Pick add-ons</h2>
            <p className='font-normal text-Cool-gray w-3/4'>Add-ons help enhance your gaming experience.</p>
            <div className='flex flex-col gap-4 mt-5 mb-5'  >
                <div onClick={() => {
                    setOnlineService(!onlineService);
                }} className={`flex items-center justify-between border-2 border-solid ${onlineService ? 'border-Purplish-blue' : ' border-Light-gray'} ${onlineService ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <div className='flex items-center gap-2'>
                        <input className='cursor-pointer'
                            type="checkbox"
                            checked={onlineService}
                        />
                        <div className='flex flex-col items-start justify-between'>
                            <h3 className='text-Marine-blue text-sm font-medium'>Online service</h3>
                            <p className='text-Cool-gray font-normal text-xs'>Access to multiplayer games</p>
                        </div>
                    </div>
                    <span className='text-Purplish-blue font-normal text-xs'>{planTime === 'Monthly' ? '+$1/mo' : '$10/yr'}</span>
                </div>
                <div onClick={() => {
                    setLargerStorage(!largerStorage);
                }} className={`flex items-center justify-between border-2 border-solid ${largerStorage ? 'border-Purplish-blue' : ' border-Light-gray'} ${largerStorage ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <div className='flex gap-2'>
                        <input className='cursor-pointer'
                            type="checkbox"
                            checked={largerStorage}
                        />
                        <div className='flex flex-col items-start justify-between'>
                            <h2 className='text-Marine-blue text-sm font-medium'>Larger storage</h2>
                            <p className='text-Cool-gray font-normal text-xs'>Extra 1TB of cloud save</p>
                        </div>
                    </div>
                    <span className='text-Purplish-blue font-normal text-xs'>{planTime === 'Monthly' ? '+$2/mo' : '+$20/yr'}</span>
                </div>
                <div onClick={() => {
                    setCustomizableProfile(!customizableProfile);
                }} className={`flex items-center justify-between border-2 border-solid ${customizableProfile ? 'border-Purplish-blue' : ' border-Light-gray'} ${customizableProfile ? 'bg-Magnolia' : ''} p-4 rounded-lg cursor-pointer hover:border-Purplish-blue`}>
                    <div className='flex gap-2'>
                        <input className='cursor-pointer'
                            type="checkbox"
                            checked={customizableProfile}
                        />
                        <div className='flex flex-col items-start justify-between'>
                            <h2 className='text-Marine-blue text-sm font-medium'>Customizable profile</h2>
                            <p className='text-Cool-gray text-xs font-normal'>Custom theme on your profile</p>
                        </div>
                    </div>                   
                    <span className='text-Purplish-blue font-normal text-xs'>{planTime === 'Monthly' ? '+$2/mo' : '+$20/yr'}</span>
                </div>
            </div>
        </div>
    )
}

export default AddOns