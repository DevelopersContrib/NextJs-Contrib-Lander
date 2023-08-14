import { FaUsers } from "react-icons/fa6"
import Image from "next/image"
const TabsTeamContent = () => {
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
                  <span className="mr-2 text-capitalize">Virtualcomm.com</span>&nbsp;Teams
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          <div className="col-lg-3">
            <a href="https://www.contrib.com/people/me/cathysicuya" target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
              <div className="mb-3">
                <Image className="object-cover rounded-circle" height={100} width={100} src="https://www.contrib.com/uploads/profile/1649723779h4Rv8.png" alt="" />
              </div>
              <div className="text-capitalize"> Catherine Hortillosa </div>
              <div className="text-capitalize small tw-font-medium"> Content Manager </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="https://www.contrib.com/people/me/chad" target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
              <div className="mb-3">
                <Image className="object-cover rounded-circle" height={100} width={100} src="https://www.contrib.com/uploads/profile/19.jpg" alt="" />
              </div>
              <div className="text-capitalize"> Asset Manager </div>
              <div className="text-capitalize small tw-font-medium"> Owner </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="https://www.contrib.com/people/me/kareen" target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
              <div className="mb-3">
                <Image className="object-cover rounded-circle" height={100} width={100} src="https://www.contrib.com/uploads/profile/1649726836toGw5.png" alt="" />
              </div>
              <div className="text-capitalize"> Kareen Castanos </div>
              <div className="text-capitalize small tw-font-medium"> Web Developer </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="https://www.contrib.com/people/me/maidabarrientos" target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
              <div className="mb-3">
                <Image className="object-cover rounded-circle" height={100} width={100} src="https://www.contrib.com/uploads/profile/1649647810nrj54.png" alt="" />
              </div>
              <div className="text-capitalize"> Maida Barrientos </div>
              <div className="text-capitalize small tw-font-medium"> Project Manager </div>
            </a>
          </div>
          <div className="col-lg-3">
            <a href="https://www.contrib.com/people/me/marvin" target="_blank" className="bg-white p-3 text-center flex flex-col items-center content-center bd-teams-user-link">
              <div className="mb-3">
                <Image className="object-cover rounded-circle" height={100} width={100} src="https://www.contrib.com/uploads/profile/marvin-who.png" alt="" />
              </div>
              <div className="text-capitalize"> Marvin Martillano </div>
              <div className="text-capitalize small tw-font-medium"> Content Manager </div>
            </a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default TabsTeamContent