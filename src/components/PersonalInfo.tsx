
type Props = {
  name: string
  email: string
  phoneNumber: string
  nextButtonClicked: boolean
  setName: React.Dispatch<React.SetStateAction<string>>
  setEmail: React.Dispatch<React.SetStateAction<string>>
  setPhoneNumber : React.Dispatch<React.SetStateAction<string>>
  setPage: React.Dispatch<React.SetStateAction<number>>
}

function PersonalInfo({ name, email, phoneNumber, nextButtonClicked, setName, setEmail, setPhoneNumber, setPage }: Props) {  
  
  return (
    <div className='relative bg-White rounded-2xl mx-5 lg:mx-0 mt-8 p-8 -top-100 lg:top-0 '>
      <h2 className='text-2xl text-Marine-blue font-bold mb-4'>Personal info</h2>
      <p className='text-grey font-normal'>Please provide your name, email address, and phone number.</p>
      <form className='mt-8 flex flex-col gap-4'>
        <div>
          <div className='flex items-center justify-between'>
            <label className='flex flex-col text-Marine-blue'>Name </label>
            {nextButtonClicked && name.length === 0 && <span className='text-Strawberry-red text-sm font-bold'>This Field Is Require</span>}
          </div>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value)              
          }} className={`border-2 border-solid py-2 px-4 rounded-md text-15 w-full ${nextButtonClicked && name.length === 0 ? 'border-Strawberry-red' : 'border-Cool-gray'}`} type="text" placeholder='e.g. Stephen King' />  
        </div>

        <div>
          <div className='flex items-center justify-between'>
            <label className='flex flex-col text-Marine-blue'>Email Address</label>
            {nextButtonClicked && email.length === 0 && <span className='text-Strawberry-red text-sm font-bold'>This Field Is Require</span>}
          </div>
          <input value={email}
            onChange={(e) => {
              setEmail(e.target.value)              
          }} className={`border-2 border-solid py-2 px-4 rounded-md text-15 w-full ${nextButtonClicked && email.length === 0 ? 'border-Strawberry-red' : 'border-Cool-gray'}`} type="text" placeholder='e.g. stephenking@lorem.com' />  
        </div>
        
        <div>
          <div className='flex items-center justify-between'>
            <label className='flex flex-col text-Marine-blue'>Phone Number</label>
            {nextButtonClicked && phoneNumber.length === 0 && <span className='text-Strawberry-red text-sm font-bold'>This Field Is Require</span>}
          </div>
          <input
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)              
          }} className={`border-2 border-solid py-2 px-4 rounded-md text-15 w-full ${nextButtonClicked && phoneNumber.length === 0 ? 'border-Strawberry-red' : 'border-Cool-gray'}`} type="text" placeholder='e.g. +1 234 567 890' />  
        </div>
        
      </form>
    </div>
  )
}

export default PersonalInfo