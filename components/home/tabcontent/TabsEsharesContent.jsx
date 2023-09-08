"use client"
import { FaSquarePollVertical, FaChartLine } from "react-icons/fa6"
import { useEffect, useState } from "react"
import Chart from 'chart.js/auto';
const TabsEsharesContent = ({earnings,analytics, chart}) => {
 
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Assuming 'analytics' contains your API response
    if (chart && chart.success) {
      const data = chart.data[0].eshares_ep;
      const labels = data.map((item) => item.label);
      const values = data.map((item) => item.data);

      setChartData({
        labels: labels,
        datasets: [
          {
            data: values,
           
          },
        ],
      });
    }
  }, [chart]);

  useEffect(() => {
    if (chartData) {
      var ctx = document.getElementById("myChart");
      var myChart = new Chart(ctx, {
        type: "pie",
        data: chartData,
      });
    }
  }, [chartData]);

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
                {analytics.data.map((analytic) => (
                  <ul className="list-group tw-w-full" key={analytic.has_analytics}>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_0}</span> Total Visitors
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_1}</span> Unique Visitors
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_2}</span> Page Views
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_3}</span> Ave. Time on Site(secs):
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_4}</span> Pages/Visit:
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_5}%</span> Bounce Rate:
                    </li>
                    <li className="list-group-item">
                      <span className="float-end font-800">{analytic.result7_6}%</span> % New Visits:
                    </li>
                  </ul>
                ))}
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
                {earnings.data.map((earning) => (
                  <ul className="list-group tw-w-full tw-min-h-[260px]" key={earning.referralearnings}>
                    <li className="list-group-item">
                      <span className="float-end font-800">{earning.leads}</span> Community
                    </li>
                  </ul>
                ))}
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
              <div className="tw-min-h-[80vh]">
              <canvas id='myChart'></canvas>
              </div>
              <div className="relative preloader-notch !tw-hidden">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabsEsharesContent