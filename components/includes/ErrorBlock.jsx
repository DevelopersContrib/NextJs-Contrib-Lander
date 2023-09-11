export default function ErrorBlock({msg,errrorForm}) {
    if(errrorForm == 'offerForm'){
        if(msg != ''){
            return(
                <div className="alert alert-danger">
                    {msg}
                    
                </div>
            )
        }
    }else if(errrorForm == 'topForm'){

        if(msg != ''){
            return(
            
                <div class="d-block text-danger small mt-2 text-center">
                    {msg}
                </div>
            )
        }
        
    }
   
}