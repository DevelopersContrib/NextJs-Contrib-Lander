

const TabsOfferContent = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <h3 className="m-portlet__head-text">Submit an offer</h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body d-none" id="offerSuccessDiv">
            <div className="row text-center tw-w-1/2 tw-mx-auto">
              <div className="col-lg-12">
                <h1> Offer Application Sent! </h1>
                <h4> We appreciate your inquiry. </h4>
              </div>
              <div className="col-lg-12 mt-3">
                <p> Momentarily, you will receive an email from <b>admin@vnoc.com</b> . Enclosed is a link which will confirm your email address. Your inquiry is safe, and will be held until we hear from you. </p>
                <p> If you haven&apos;t received the message, check your spam folder, If your email address isn&apos;t , please use your browser&apos;s back button and resubmit the contact form. </p>
              </div>
              <div className="col-lg-12" id="contriblogin"></div>
            </div>
          </div>
          <div className="m-portlet__body " id="offerForm">
            <div className="row">
              <div className="col-lg-12">
                <div className="alert alert-danger">
                  <strong>Error!</strong>
                  Lorem ipsum dolor sit amet!
                </div>
                <div className="mb-3">
                  <label> Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label> Email <span className="text-danger">*</span>
                  </label>
                  <input type="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label> Your Offer <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                    <small>Offer amount should not be lower than $10,000</small>
                </div>
                <div className="mb-3">
                  <label> Your message <span className="text-danger">*</span>
                  </label>
                  <textarea className="form-control" rows="5" placeholder="Please enter your message..."></textarea>
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary">
                    <i className="la la-check mr-2"></i> Submit </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsOfferContent