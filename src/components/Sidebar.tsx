type Props = {
    screenWidth: number
    page: number
}


function Sidebar({screenWidth, page} : Props) {
    return (
        <div className='app flex pt-8 lg:justify-normal lg:w-1/2 lg:pl-6 lg:pt-12 justify-center w-full gap-5 lg:gap-10 lg:flex-col '>
            <div className='lg:flex lg:gap-3 lg:items-center'>
                <span className={`flex text-sm items-center justify-center w-8 h-8 border-2 border-solid rounded-full ${page === 1 ? 'border-none text-Marine-blue bg-Light-blue' : 'border-White text-White bg-transparent' } `} >1</span>
                <div style={{display: screenWidth > 1024 ? 'block' : 'none'}}>
                <p className='text-Light-gray text-xs'>STEP 1</p>
                <h3 className='text-white text-sm font-bold tracking-wide'>YOUR INFO</h3>
                </div>
            </div>
            <div className='lg:flex lg:gap-3 lg:items-center'>
                <span className={`flex text-sm items-center justify-center w-8 h-8 border-2 border-solid rounded-full ${page === 2 ? 'border-none text-Marine-blue bg-Light-blue' : 'border-White text-White bg-transparent' } `} >2</span>
                <div style={{display: screenWidth > 1024 ? 'block' : 'none'}}>
                <p className='text-Light-gray text-xs'>STEP 2</p>
                <h3 className='text-white text-sm font-bold tracking-wide'>SELECT PLAN</h3>
                </div>
            </div>
            <div className='lg:flex lg:gap-3 lg:items-center'>
                <span className={`flex text-sm items-center justify-center w-8 h-8 border-2 border-solid rounded-full ${page === 3 ? 'border-none text-Marine-blue bg-Light-blue' : 'border-White text-White bg-transparent' } `} >3</span>
                <div style={{display: screenWidth > 1024 ? 'block' : 'none'}}>
                <p className='text-Light-gray text-xs'>STEP 3</p>
                <h3 className='text-white text-sm font-bold tracking-wide'>ADD-ONS</h3>
                </div>
            </div>
            <div className='lg:flex lg:gap-3 lg:items-center'>
                <span className={`flex text-sm items-center justify-center w-8 h-8 border-2 border-solid rounded-full ${page === 4 || page === 5 ? 'border-none text-Marine-blue bg-Light-blue' : 'border-White text-White bg-transparent' } `} >4</span>
                <div style={{display: screenWidth > 1024 ? 'block' : 'none'}}>
                <p className='text-Light-gray text-xs'>STEP 4</p>
                <h3 className='text-white text-sm font-bold tracking-wide'>SUMMARY</h3>
                </div>
            </div>
        </div>
  )
}

export default Sidebar