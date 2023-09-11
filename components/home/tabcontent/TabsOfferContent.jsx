
import Form from "@/components/includes/Form"

const TabsOfferContent = ({domain}) => {
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
         
          <Form domain={domain} formtype="offerForm"/>
          
        </div>
      </div>
    </div>
  )
}

export default TabsOfferContent