type Props = {
    selectedPlan: string
    planTime: string
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
}



function Finishing({ selectedPlan, planTime, onlineService, largerStorage, customizableProfile }: Props) {
    
    let pay = () => {
        if (selectedPlan === 'Arcade') {
            if (planTime === 'Monthly') {
                return '9'
            } else {
                return '90'
            }
        
        }else if (selectedPlan === 'Advanced' ) {
            if (planTime === 'Monthly') {
                return '12'
            } else {
                return '120'
            }
        } else {
            if (planTime === 'Monthly') {
                return '15'
            } else {
                return '150'
            }
        }
    }
    
    let totalPay = () => {
        let total = Number(pay());
        console.log(total);
        
        if (planTime === 'Monthly') {
            if (onlineService) {
                total += 1;
            }
            if (largerStorage) {
                total += 2;
            }
            if (customizableProfile) {
                total += 2;
            }
        } else {
            if (onlineService) {
                total += 10;
            }
            if (largerStorage) {
                total += 20;
            }
            if (customizableProfile) {
                total += 20;
            }
        }
        return total
    }
    
 
    return (
        <div className='relative bg-White rounded-2xl mx-5 lg:mx-0 lg:px-0 mt-8 p-6 -top-100 lg:top-0 '>
            <h2 className='text-2xl text-Marine-blue font-bold mb-4'>Finishing up</h2>
            <p className='font-normal text-Cool-gray w-3/4'>Double-check everything looks OK before confirming.</p>
            <div className='bg-Very-light-gray p-4 mt-5 rounded-lg flex flex-col gap-3 '>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='text-Marine-blue text-sm font-medium'>{selectedPlan }({planTime})</p>
                        <span className=' text-Cool-gray text-xs font-normal underline hover:text-Purplish-blue cursor-pointer'>Change</span>
                    </div>
                    <p className='text-Marine-blue text-xs font-bold'>{planTime === 'Monthly' ? `$${pay()}/mo` : `$${pay()}/yr`}</p>
                </div>
                <div className='w-full h-1px bg-Cool-gray'></div>
                <div className='flex flex-col gap-3'>
                    {onlineService && <div className='flex items-center justify-between'>
                        <p className='text-Cool-gray text-xs font-normal'>Online services</p>
                        <p className='text-Marine-blue text-xs font-normal'>{planTime === 'Monthly' ? '+$1/mo' : '+$10/yr' }</p>
                    </div>}
                    {largerStorage && <div className='flex items-center justify-between'>
                        <p className='text-Cool-gray text-xs font-normal'> Larger storage</p>
                        <p className='text-Marine-blue text-xs font-normal'>{planTime === 'Monthly' ? '+$2/mo' : '+$20/yr' }</p>
                    </div>}
                    {customizableProfile && <div className='flex items-center justify-between'>
                        <p className='text-Cool-gray text-xs font-normal'>Customizable profile</p>
                        <p className='text-Marine-blue text-xs font-normal'>{planTime === 'Monthly' ? '+$2/mo' : '+$20/yr' }</p>
                    </div>}
                    
                </div>
            </div>
            <div className='flex items-center justify-between mt-4 p-4'>
                <p className='text-Cool-gray text-xs font-normal'>Total (per month)</p>
                <p className='text-Purplish-blue text-16 font-bold'>{planTime === 'Monthly' ? `+$${totalPay()}/mo` : `+$${totalPay()}/yr` }</p>
            </div>
        </div>
    )
}

export default Finishing