import Image from "next/image";
import TasksComponent from "../component/TasksComponent";
const TabsTaskContent = ({
  getCategories,
  getOpentTasks,
  getVerificationTasks,
  getProdTasks,
  getCompletedTasks,
  domain
}) => {
  return (
    <div className="row">
      <TasksComponent getCategories={getCategories} domain={domain}/>
      <div className="col-lg-12 mb-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-kanban flex flex-col kanban-min-h-300 open" id="tasks_content_open">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> OPEN </h4>
            {getOpentTasks.data.map((getOpentTask) => (
              <a href={getOpentTask.link} className="bg-white tw-w-full flex flex-col kanban-link" key={getOpentTask.link}>
                <div className="px-2 py-3">
                  <Image className="object-cover tw-w-full" sizes="100vw" width={0} height={100} src={getOpentTask.image} alt="" />
                </div>
                <div className="kanban-header-title px-2 mb-2"> {getOpentTask.title} </div>
                <p className="small px-2">
                  {/* <!-- Note:: Limit to 83characters --> */}
                  {getOpentTask.description}
                </p>
                <div className="kanban-footer px-3 py-2">  {getOpentTask.firstname} {getOpentTask.lastname}</div>
              </a>
             ))}
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-in-production" id="tasks_content_in_production">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> In Production </h4>
            {getProdTasks.data.map((getProdTask) => (
              <a href={getProdTask.link} className="bg-white tw-w-full flex flex-col kanban-link" key={getProdTask.link}>
                <div className="px-2 py-3">
                  <Image className="object-cover tw-w-full" sizes="100vw" width={0} height={100} src={getProdTask.image} alt="" />
                </div>
                <div className="kanban-header-title px-2 mb-2"> {getProdTask.title} </div>
                <p className="small px-2">
                  {/* <!-- Note:: Limit to 83characters --> */}
                  {getProdTask.description}
                </p>
                <div className="kanban-footer px-3 py-2">  {getProdTask.firstname} {getProdTask.lastname}</div>
              </a>
             ))}
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-verification" id="tasks_content_for_verification">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> For Verification </h4>
            {getVerificationTasks.data.map((getVerificationTask) => (
              <a href={getVerificationTask.link} className="bg-white tw-w-full flex flex-col kanban-link" key={getVerificationTask.link}>
                <div className="px-2 py-3">
                  <Image className="object-cover tw-w-full" sizes="100vw" width={0} height={100} src={getVerificationTask.image} alt="" />
                </div>
                <div className="kanban-header-title px-2 mb-2"> {getVerificationTask.title} </div>
                <p className="small px-2">
                  {/* <!-- Note:: Limit to 83characters --> */}
                  {getVerificationTask.description}
                </p>
                <div className="kanban-footer px-3 py-2">  {getVerificationTask.firstname} {getVerificationTask.lastname}</div>
              </a>
             ))}
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-completed" id="tasks_content_completed">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> Completed </h4>
            {getCompletedTasks.data.map((getCompletedTask) => (
              <a href={getCompletedTask.link} className="bg-white tw-w-full flex flex-col kanban-link" key={getCompletedTask.link}>
                <div className="px-2 py-3">
                  <Image className="object-cover tw-w-full" sizes="100vw" width={0} height={100} src={getCompletedTask.image} alt="" />
                </div>
                <div className="kanban-header-title px-2 mb-2"> {getCompletedTask.title} </div>
                <p className="small px-2">
                  {/* <!-- Note:: Limit to 83characters --> */}
                  {getCompletedTask.description}
                </p>
                <div className="kanban-footer px-3 py-2">  {getCompletedTask.firstname} {getCompletedTask.lastname}</div>
              </a>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsTaskContent