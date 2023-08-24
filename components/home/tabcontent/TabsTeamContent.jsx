import { FaUsers } from "react-icons/fa6"
import Image from "next/image"
const TabsTeamContent = ({teamList, domain}) => {
  return (
    <>
      <div className="row">
      <div className="col-lg-12 mb-3">
        <div className="m-portlet mb-3">
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <span className="m-portlet__head-icon">
                  <FaUsers className="tw-w-5 tw-h-5" />
                </span>
                <h3 className="m-portlet__head-text">
                  <span className="mr-2 text-capitalize">{domain}</span>&nbsp;Teams
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {teamList.data.team.map((teamLists) => (
            <div className="col-lg-3" key={teamLists.Username}>
              <a href={`https://www.contrib.com/people/me/`+teamLists.Username} target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
                <div className="mb-3">
                  <Image className="object-cover rounded-circle" height={100} width={100} src={`https://www.contrib.com/uploads/profile/`+teamLists.profile_image} alt="" />
                </div>
                <div className="text-capitalize"> {teamLists.FirstName} {teamLists.LastName} </div>
                <div className="text-capitalize small tw-font-medium"> {teamList.data.role[teamLists.EmailAddress]} </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default TabsTeamContent