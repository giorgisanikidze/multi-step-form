type Props = {
    page: number
    name: string
    email: string
    phoneNumber: string
    setNextButtonClicked: React.Dispatch<React.SetStateAction<boolean>>
    setPage: React.Dispatch<React.SetStateAction<number>>
    
}
function NavButtons({page, name, email, phoneNumber, setNextButtonClicked, setPage}: Props) {
    
    const errorCheck = () => {
        if (name.length === 0 || email.length === 0 || phoneNumber.length === 0) {
        return true
        } else {
        return false
        }
    }
    
    return (
        <>
            {page !== 5 && <div className={`fixed lg:absolute bottom-0 w-full flex  bg-White p-3 lg:px-0 items-center ${page === 1 ? 'justify-end' : 'justify-between' } `}>
                {page !== 1 && <button onClick={() => setPage(page - 1)} className='text-Cool-gray text-sm ml-5 hover:text-Marine-blue'>Go Back</button>}               
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
        </>
  
  )
}

export default NavButtons