"use client";

import { useState, useEffect } from "react";
import ErrorBlock from '@/components/includes/ErrorBlock';


function TopForm({domain, setSuccess}) {
    const initialValues = {
		isLoading:false,
		domain:domain,
		email: "",
	}

	const initialErrors = {
		validate:false,
		emailError: "",
	};
    
	const [data, setData] = useState(initialValues);
	const [errors, setErrors] = useState(initialErrors);
    const [emailExist, setEmailExist] = useState('');

    useEffect(() => {
		const validateErrors = () => {
			const dataErrors = {
				emailError: (data.email?'':"Email is required") || (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) ? "":"Invalid Email"),
			}
			setErrors(dataErrors);
		}
		validateErrors()
	}, [data]);

    const handleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
		setEmailExist('')
	};

    const handleSubmit = async(event) => { 
        event.preventDefault();

		const isValid = !Object.values(errors).some(v => v);
		setErrors({ ...errors, ['validate']: true })

        if(isValid){
            try {
                console.log('submit')
                const response = await fetch("/api/lead", {
                    method: "POST",
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    
                    const res = await response.json()
                    console.log(res.lead.success);
                    if(res.lead.success == "success"){
                        setSuccess({ ...data, emailSend: data.email, successVal: true });
                       // console.log(data.email)
                      //setSuccess(true);
                      console.log('done....')
                    }else{
                      setEmailExist(res.lead.success);
                    }
                    
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
        <div className="col-xl-12 mb-5">
              <div className="custom-form-signup xl:tw-max-w-[750px] xl:tw-mx-auto">
                <input
                  autoComplete="off"
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email addresss..."  onChange={handleChange}/>
                <button className="btn btn-dark" onClick={handleSubmit}>
                  Join {domain}
                </button>
              </div>
            {errors.validate? (<ErrorBlock msg={errors.emailError} errrorForm="topForm"/>): null}
            {emailExist? (<ErrorBlock msg={emailExist} errrorForm="topForm"/>): null}
        </div>
    )
}


export default TopForm
