"use client";

import { useState} from "react";
import TopForm from "@/components/includes/TopForm";
import Thanku from "@/components/includes/Thanku";
import OfferForm from '@/components/includes/OfferForm';

const Container = ({domain, formtype}) => {
const initialValues = {
    emailSend:'',
    successVal:false,
    successValOffer:false
}
const [success, setSuccess] = useState(initialValues);
  if(formtype == 'topForm'){

    return (
      <>
      
      {success.successVal ? <Thanku domain={domain} successEmail={success.emailSend}/>: <TopForm domain={domain} setSuccess={setSuccess}/>}
    
    </>
    )
  }else if(formtype == 'offerForm'){
    return (
      <>
      
      {success.successValOffer ? <Thanku domain={domain} successEmail={success.emailSend} formtype={formtype}/>: <OfferForm domain={domain} setSuccess={setSuccess}/>}
    
    </>
    )
  }
  
}

export default Container