import icon from '../images/icon-thank-you.svg'
function ThankYou() {
    return (
        <div className='relative bg-White rounded-2xl mx-5 mt-8 px-5 py-24 -top-100 lg:top-0 flex items-center justify-between flex-col'>  
            <img src={icon} alt="" />
            <h2 className='text-2xl text-Marine-blue font-bold mb-4 mt-8'>Thank You!</h2>
            <p className='font-normal text-Cool-gray text-center'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
            
        </div>
  )
}

export default ThankYou