import Image from "next/image";
import TasksComponent from "../component/TasksComponent";
const TabsTaskContent = () => {
  return (
    <div className="row">
      <TasksComponent />
      <div className="col-lg-12 mb-3">
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-kanban flex flex-col kanban-min-h-300 open" id="tasks_content_open">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> OPEN </h4>
            <a href="https://www.contrib.com/crypto/tasks/details/virtualcomm-com---create-a-linkedin-company-page-for-this-site/50035" className="bg-white tw-w-full flex flex-col kanban-link">
              <div className="px-2 py-3">
                <Image className="object-cover tw-w-full" sizes="100vw" width={0} height={100} src="https://d2qcctj8epnr7y.cloudfront.net/images/2013/desc-eshares-social-linkedin.jpg" alt="" />
              </div>
              <div className="kanban-header-title px-2 mb-2"> Virtualcomm.com - Create a Linkedin Company Page for this site.</div>
              <p className="small px-2">
                {/* <!-- Note:: Limit to 83characters --> */}
                Create a company page for linkedin using this site.
              </p>
              <div className="kanban-footer px-3 py-2"> Lucille Conde </div>
            </a>
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-in-production" id="tasks_content_in_production">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> In Production </h4>
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-verification" id="tasks_content_for_verification">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> For Verification </h4>
          </div>
          <div className="bg-kanban flex flex-col kanban-min-h-300 kb-completed" id="tasks_content_completed">
            <h4 className="px-2 pt-3 text-center header-kanban mt-0"> Completed </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsTaskContent