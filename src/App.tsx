import { useEffect, useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan';
import AddOns from './components/AddOns';
import Finishing from './components/Finishing';
import ThankYou from './components/ThankYou';
import Sidebar from './components/Sidebar';
import NavButtons from './components/NavButtons';

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
        <Sidebar screenWidth={screenWidth} page={page} />
        <div className='lg:justify-between lg:relative'>
          
          {page === 1 && <PersonalInfo nextButtonClicked={nextButtonClicked} name={name} email={email} phoneNumber={phoneNumber} setName={setName} setEmail={setEmail} setPhoneNumber={setPhoneNumber} setPage={setPage} />}
          {page === 2 && <SelectPlan selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} planTime={planTime} setPlanTime={setPlanTime} />}
          {page === 3 && <AddOns onlineService={onlineService} setOnlineService={setOnlineService} largerStorage={largerStorage} setLargerStorage={setLargerStorage} customizableProfile={customizableProfile} setCustomizableProfile={setCustomizableProfile} planTime={planTime} />}
          {page === 4 && <Finishing selectedPlan={selectedPlan} planTime={planTime} onlineService={onlineService} largerStorage={largerStorage} customizableProfile={customizableProfile} />}
          {page === 5 && <ThankYou />}
          
          <NavButtons page={page} name={name} email={email} phoneNumber={phoneNumber} setNextButtonClicked={setNextButtonClicked} setPage={setPage} />
        </div>
        
      </div>
    </div>
  );
}

export default App;
