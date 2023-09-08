const Thanku = ({domain,successEmail}) => {
    
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
}
export default Thanku