"use client";

import { useState, useEffect } from "react";
import ErrorBlock from '@/components/includes/ErrorBlock';


function OfferForm({domain, setSuccess}) {

    const initialErrors = {
		validate:false,
		emailError: "",
        nameError: "",
        offerError: "",
        messageError: ""
	};

    const initialValues = {
		isLoading:false,
		domain:domain,
		email: "",
        offer: "",
        name: "",
        message: ""
	}

    const [errors, setErrors] = useState(initialErrors);
    const [data, setData] = useState(initialValues);
    const [emailExist, setEmailExist] = useState('');

    const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		
	};

    useEffect(() => {
        const validateErrors = () => {
          const dataErrors = {
            emailError: (data.email ? '' : 'Email is required') || (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? '' : 'Invalid Email'),
            nameError: data.name ? '' : 'Name is required',
            messageError: data.message ? '' : 'Message is required',
            offerError: (data.offer >= 10000 ? '' : 'Offer must be at least 10,000.') || (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g.test(data.offer) ? '' : 'Invalid Amount.'),
          };
          setErrors(dataErrors);
        };
        validateErrors();
    }, [data]);

    const handleSubmit = async(event) => { 
        event.preventDefault();
        console.log(data.offer)
		const isValid = !Object.values(errors).some(v => v);
		setErrors({ ...errors, ['validate']: true })
        console.log(errors)
        if(isValid){
            try {
                console.log('submit')
                const response = await fetch("/api/offers", {
                    method: "POST",
                    body: JSON.stringify(data),
                });
                
                if (response.ok) {
                    
                    const res = await response.json()
                    console.log(res);
                   /* console.log(res.lead.success);
                    if(res.lead.success == "success"){
                        setSuccess({ ...data, emailSend: data.email, successVal: true });
                       // console.log(data.email)
                      //setSuccess(true);
                      console.log('done....')
                    }else{
                      setEmailExist(res.lead.success);
                    }*/
                    
                }else{
                    alert('An error occurred')
                }

            } catch (error) {
                console.log(error);
            } finally {
                //set
            }
           
        }
    }



    return (
        <div className="m-portlet__body " id="offerForm">
            <div className="row">
              <div className="col-lg-12">
               
                {emailExist? (<ErrorBlock msg={emailExist} errrorForm="offerForm"/>): null}
                <div className="mb-3">
                  <label> Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" name="name" onChange={handleChange} />
                  {errors.validate? (<ErrorBlock msg={errors.nameError} errrorForm="offerForm" />): null}
                </div>
                <div className="mb-3">
                  <label> Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" name="email" onChange={handleChange} />
                  {errors.validate? (<ErrorBlock msg={errors.emailError} errrorForm="offerForm" />): null}
                </div>
                <div className="mb-3">
                  <label> Your Offer <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" name="offer" onChange={handleChange}/>
                    <small>Offer amount should not be lower than $10,000</small>
                    {errors.validate? (<ErrorBlock msg={errors.offerError} errrorForm="offerForm" />): null}
                </div>
                <div className="mb-3">
                  <label> Your message <span className="text-danger">*</span>
                  </label>
                  <textarea className="form-control" rows="5" placeholder="Please enter your message..." name="message" onChange={handleChange}></textarea>
                  {errors.validate? (<ErrorBlock msg={errors.messageError} errrorForm="offerForm" />): null}
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary"  onClick={handleSubmit}>
                    <i className="la la-check mr-2"></i> Submit </button>
                </div>
              </div>
            </div>
          </div>
    )
}


export default OfferForm
