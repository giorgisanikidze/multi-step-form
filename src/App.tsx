import { useEffect, useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import Finishing from './components/Finishing';
import ThankYou from './components/ThankYou';

function App() {
  
  const [page, setPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [nextButtonClicked, setNextButtonClicked] = useState(false);

  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [planTime, setPlanTime] = useState('Monthly');
  
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customizableProfile, setCustomizableProfile] = useState(false);
    
  
  const errorCheck = () => {
    if (name.length === 0 || email.length === 0 || phoneNumber.length === 0) {
      return true
    } else {
      return false
    }
  }
  
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  
  return (
    <div className='lg:flex lg:items-center lg:justify-center lg:bg-Magnolia lg:min-h-screen'>

      <div className="bg-Magnolia h-screen font-ubuntu lg:flex lg:bg-white lg:p-4 lg:h-600px lg:w-940px lg:rounded-xl">
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
        
        <div className='lg:justify-between lg:relative'>
          
          {page === 1 && <PersonalInfo nextButtonClicked={nextButtonClicked} name={name} email={email} phoneNumber={phoneNumber} setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} setPage={setPage} />}
          {page === 2 && <SelectPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planTime={planTime} setPlanTime={setPlanTime} />}
          {page === 3 && <AddOns onlineService={onlineService} setOnlineService={setOnlineService} largerStorage={largerStorage} setLargerStorage={setLargerStorage} customizableProfile={customizableProfile} setCustomizableProfile={setCustomizableProfile} planTime={planTime} />}
          {page === 4 && <Finishing selectedPlan={selectedPlan} planTime={planTime} onlineService={onlineService} largerStorage={largerStorage} customizableProfile={customizableProfile} />}
          {page === 5 && <ThankYou />}
          
          {page !== 5 && <div className={`fixed lg:absolute bottom-0 w-full flex  bg-White p-3 lg:px-0 items-center ${page === 1 ? 'justify-end' : 'justify-between' } `}>
            {page !== 1 && <button onClick={() => setPage(page - 1)} className='text-Cool-gray text-sm hover:text-Marine-blue'>Go Back</button>}  
            {page === 4 ? <button onClick={() => {
              setNextButtonClicked(true)
              setPage(page+1)
            }} className='py-2 px-4 mr-5 bg-Purplish-blue text-White text-sm rounded-sm hover:bg-Pink'>Confirm</button>
              : <button onClick={() => {
                setNextButtonClicked(true)
                if (!errorCheck()) {
                  setPage(page + 1)
                }
              }
              } className='py-2 px-4 mr-5 bg-Marine-blue text-White text-sm rounded-sm hover:bg-Purple-hover'>next Step</button>

            }  
          </div>}
        </div>
        
      </div>
    </div>
  );
}

export default App;
