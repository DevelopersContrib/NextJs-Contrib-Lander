import React from 'react'
import TasksComponent from '../component/TasksComponent'
import { FaLayerGroup } from "react-icons/fa6";

const TabsChallengesContent = ({getCategories, domain}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaLayerGroup className="tw-w-5 tw-h-5" />
                </span>
                <h3 className="m-portlet__head-text text-capitalize">Challenges for Virtualcomm.Com. Showing latest challenges on Contrib</h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body">
            <p>
              Please install this -&gt; https://react-data-table-component.netlify.app/?path=/docs/getting-started-library-integration--page
            </p>
          </div>
        </div>
      </div>
      <TasksComponent getCategories={getCategories} domain={domain}/>
    </>
  )
}

export default TabsChallengesContent