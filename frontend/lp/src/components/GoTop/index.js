import React, {useState, useEffect} from 'react';
import IconBtn from '../IconBtn';


const GoTop = () =>{

    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 300 ?  setShowGoTop(true) : setShowGoTop(false);
        }

        window.addEventListener('scroll', handleScrollButtonVisibility);

        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        }
    },[])

    function handleScrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return(
        <>
        {
            showGoTop ? (
                <IconBtn 
                    callback={handleScrollToTop}
                    iconName={"bi:arrow-up-short"}
                    iconStyle={"top"}
                />
                )
            :null
        }
        </>
    )
}
export default GoTop





