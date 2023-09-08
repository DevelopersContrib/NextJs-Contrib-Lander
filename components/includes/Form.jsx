"use client";

import { useState} from "react";
import TopForm from "@/components/includes/TopForm";
import Thanku from "@/components/includes/Thanku";

const Container = ({domain}) => {
const initialValues = {
    emailSend:'',
    successVal:false
}
const [success, setSuccess] = useState(initialValues);
  
  return (
    <>
    
    {success.successVal ? <Thanku domain={domain} successEmail={success.emailSend}/>: <TopForm domain={domain} setSuccess={setSuccess}/>}
  
  </>
  )
}

export default Container