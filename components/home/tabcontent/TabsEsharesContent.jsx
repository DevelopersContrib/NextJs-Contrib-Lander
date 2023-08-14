import { FaSquarePollVertical, FaChartLine } from "react-icons/fa6"
const TabsEsharesContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <span className="m-portlet__head-icon">
                    <FaSquarePollVertical className="tw-w-5 tw-h-5" />
                  </span>
                  <h3 className="m-portlet__head-text">Google Analytics</h3>
                </div>
              </div>
            </div>
            <div className="m-portlet__body">
              <div className="relative preloader-notch" id="brand_analytics_content">
                <ul className="list-group tw-w-full">
                  <li className="list-group-item">
                    <span className="float-end font-800">0</span> Total Visitors
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0</span> Unique Visitors
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0</span> Page Views
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0</span> Ave. Time on Site(secs):
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0</span> Pages/Visit:
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0%</span> Bounce Rate:
                  </li>
                  <li className="list-group-item">
                    <span className="float-end font-800">0%</span> % New Visits:
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <span className="m-portlet__head-icon">
                    <FaChartLine className="tw-w-5 tw-h-5" />
                  </span>
                  <h3 className="m-portlet__head-text"> Current Status</h3>
                </div>
              </div>
            </div>
            <div className="m-portlet__body">
              <div className="relative preloader-notch" id="brand_earnings_content">
                <ul className="list-group tw-w-full tw-min-h-[260px]">
                  <li className="list-group-item">
                    <span className="float-end font-800">11</span> Community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="m-portlet">
            <div className="m-portlet__head">
              <div className="m-portlet__head-caption">
                <div className="m-portlet__head-title">
                  <span className="m-portlet__head-icon">
                    <FaChartLine className="tw-w-5 tw-h-5" />
                  </span>
                  <h3 className="m-portlet__head-text"> Brand Percentage</h3>
                </div>
              </div>
            </div>
            <div className="m-portlet__body">
              <div className="relative preloader-notch">
                insert chart here
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabsEsharesContent