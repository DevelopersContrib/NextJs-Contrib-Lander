import Image from 'next/image';
import { FaCheckToSlot, FaUser, FaRankingStar, FaUserPlus } from "react-icons/fa6";

const TabsHomeContent = ({featuredTask,peopleList,getChallenges,contributorList}) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        {/* <!--begin::Portlet--> */}
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaCheckToSlot className='tw-w-5 tw-h-5' />
                </span>
                <h3 className="m-portlet__head-text"> Latest Featured Tasks </h3>
              </div>
            </div>
            <div className="m-portlet__head-tools">
              <ul className="m-portlet__nav">
                <li className="m-portlet__nav-item">
                  <a href="https://contrib.com/crypto/dashboard/tasks" className="m-portlet__nav-link m-portlet__nav-link--icon text-decoration-none" target="_blank"> View All </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="m-portlet__body m-scroller--widget">
            <div className="m-scroller-content" id="featureprojectscontainer">
              {featuredTask.data.map((featuredTasks) => (
                <a href={featuredTasks.link} className="list-items-link" target="_blank" key={featuredTasks.link}>
                  <div className="me-3 flex flex-col content-center items-center w-icon-left">
                    <div className="crypto-currency-num h4 my-0 tw-bg-[transparent_!important] font-600 tw-h-[20px]"> EARN </div>
                    <div>
                      <Image className="img-user-contributor rounded-circle object-contain" width={55} height={55} src={featuredTasks.icon} alt="" />
                    </div>
                    <div className="crypto-currency-num py-1 mt-1 font-600"> {featuredTasks.amount} </div>
                  </div>
                  <div className="flex flex-col content-center">
                    <h4 className="text-capitalize mt-0 mb-1 title-list-item"> {featuredTasks.title} </h4>
                    <p className="mb-3 desc-list-item tw-min-h-[40px]"> {featuredTasks.description} </p>
                    <ul className="list-inline mb-0 list-li-left">
                      <li className="list-inline-item">
                        <div className="px-3 py-1 d-inline text-capitalize b-pill tw-bg-[#F1FAFF] tw-text-[#009EF7] tw-font-normal"> {featuredTasks.category_name} </div>
                      </li>
                      <li className="list-inline-item">
                        <div className="px-3 py-1 d-inline text-capitalize b-pill tw-bg-[#F1FAFF] tw-text-[#009EF7] tw-font-normal"> earn <span className="text-uppercase">{featuredTasks.currency}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </a>
               ))}
            </div>
          </div>
        </div>
        {/* <!--end::Portlet--> */}
      </div>
      <div className="col-lg-6">
        {/* <!--begin::Portlet--> */}
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaUser className='tw-w-5 tw-h-5' />
                </span>
                <h3 className="m-portlet__head-text">Latest Contributors</h3>
              </div>
            </div>
          </div>
          <div className="m-portlet__body m-scroller--widget">
            <div className="m-scroller-content" id="latest_contributor">
              {peopleList.data.map((peopleLists) => (
                <a href={peopleLists.link} className="list-items-link" target="_blank"  key={peopleLists.link}>
                  <div className="me-3 flex content-center">
                    <div>
                      <Image className="img-user-contributor people rounded-circle object-contain" width={55} height={55} src={peopleLists.image} alt={peopleLists.name} />
                    </div>
                  </div>
                  <div className="flex flex-col content-center">
                    <div>
                      <ul className="list-inline mb-0 list-li-left">
                        <li className="mb-2 list-inline-item">
                          <div className="px-3 py-1 bg-primary text-white d-inline text-capitalize b-pill">{peopleLists.industry}</div>
                        </li>
                      </ul>
                    </div>
                    <div className="flex contributor-country">
                      <div className="mr-2">
                        <i className="flaticon-placeholder-1"></i>
                      </div>
                      <div>{peopleLists.country}, {peopleLists.city}</div>
                    </div>
                  </div>
                </a>
               ))}
            </div>
          </div>
        </div>
        {/* <!--end::Portlet--> */}
      </div>
      <div className="col-lg-6">
        {/* <!--begin::Portlet--> */}
        <div className="m-portlet">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaRankingStar className="tw-w-5 tw-h-5" />
                </span>
                <h3 className="m-portlet__head-text">Latest Challenges</h3>
              </div>
            </div>
          </div>
         
            <div className="m-portlet__body m-scroller--widget">
              <div className="m-scroller-content" id="latest_challenges">
                {getChallenges.data.map((getChallenge) => (
                  <a href={getChallenge.link} className="list-items-link flex-col" target="_blank" key={getChallenge.link}>
                    <div className="flex flex-col content-center">
                      <h4 className="text-capitalize mt-0 mb-1 title-list-item">{getChallenge.title}</h4>
                      <p className="mb-3 desc-list-item"> {getChallenge.description} </p>
                      <Image width={0} height={0} className="img-responsive tw-min-w-full img-thumbnail" src={getChallenge.image} alt={getChallenge.title} sizes='100vw' />
                    </div>
                  </a>
                 ))}
              </div>
            </div>
         
        </div>
        {/* <!--end::Portlet--> */}
      </div>
      <div className="col-lg-6">
        <div className="bg-white p-3">
          <div className="tg-number-brand-details text-uppercase">Contributors</div>
          <ul className="list-inline list-contributors-bd" id="brand_top_contributors">
            {contributorList.data.map((contributorLists) => (
            <li className="list-inline-item" key={contributorLists.link}>
              <a href={contributorLists.link} className="d-block" target="_blank" >
                <Image width={40} height={40} className="bd-contributor-img rounded-circle" src={contributorLists.image} alt={contributorLists.name} />
              </a>
            </li>
           ))}
          </ul>
          <a href="https://www.contrib.com/crypto/referral" className="btn btn-primary" target="_blank">
            <FaUserPlus className="tw-w-5 tw-h-5 fa-solid fa-user-plus me-1" /> Invite Contributors </a>
        </div>
      </div>
    </div>
  )
}

export default TabsHomeContent