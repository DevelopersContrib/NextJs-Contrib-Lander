const Thanku = ({domain,successEmail,formtype}) => {
    if(formtype == 'topForm'){
        return (
            <>
            <h3 className="mb-3 text-center" id="thank-you">
                Thanks, your spot is reserved! 
                Share {domain} with your friends to move up in line and reserve your username.

                <form id="indexSignup" method="post" action="https://www.contrib.com/signup/firststep">
                    <input type="hidden" name="email" id="email-bot" value={successEmail} />
                    <button type="submit" className="btn btn-dark" id="btn-email-submit-contrib">
                        Continue Signing up to Contrib          
                    </button>
                </form>
            </h3>
            </>
        )
    }else if(formtype == 'offerForm'){
        return (
            <div className="m-portlet__body" id="offerSuccessDiv">
                <div className="row text-center tw-w-1/2 tw-mx-auto">
                <div className="col-lg-12">
                    <h1> Offer Application Sent! </h1>
                    <h4> We appreciate your inquiry. </h4>
                </div>
                <div className="col-lg-12 mt-3">
                    <p> Momentarily, you will receive an email from <b>admin@vnoc.com</b> . Enclosed is a link which will confirm your email address. Your inquiry is safe, and will be held until we hear from you. </p>
                    <p> If you haven&apos;t received the message, check your spam folder, If your email address isn&apos;t , please use your browser&apos;s back button and resubmit the contact form. </p>
                </div>
                </div>
            </div>
        )
    }
}
export default Thanku