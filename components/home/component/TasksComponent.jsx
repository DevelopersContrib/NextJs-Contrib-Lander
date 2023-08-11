import { FaPenToSquare } from "react-icons/fa6";

const TasksComponent = () => {
  return (
    <div className="col-lg-12">
      <div className="m-portlet">
        <div className="m-portlet__head">
          <div className="m-portlet__head-caption">
            <div className="m-portlet__head-title">
              <span className="m-portlet__head-icon">
                <FaPenToSquare className="tw-w-5 tw-h-5" />
              </span>
              <h3 className="m-portlet__head-text text-capitalize">virtualcomm.com Open Tasks for Contribution</h3>
            </div>
          </div>
        </div>
        <div className="m-portlet__body">
          <div className="row">
            <div className="col-lg-6" id="task_content_categories">
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/1" className="bd-link-task text-decoration-none text-reset" target="_blank">Social Signup (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/2" className="bd-link-task text-decoration-none text-reset" target="_blank">Admin Assistant (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/4" className="bd-link-task text-decoration-none text-reset" target="_blank">Social Activities (-1)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/5" className="bd-link-task text-decoration-none text-reset" target="_blank">Content Management (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/6" className="bd-link-task text-decoration-none text-reset" target="_blank">PR Media (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/7" className="bd-link-task text-decoration-none text-reset" target="_blank">SEO (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/16" className="bd-link-task text-decoration-none text-reset" target="_blank">Programming (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/17" className="bd-link-task text-decoration-none text-reset" target="_blank">System Testing and Documentation (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/26" className="bd-link-task text-decoration-none text-reset" target="_blank">Sign Up (0)</a>
              </div>
            </div>
            <div className="col-lg-6" id="task_content_categories2">
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/28" className="bd-link-task text-decoration-none text-reset" target="_blank">Write Up (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/29" className="bd-link-task text-decoration-none text-reset" target="_blank">Link Campaigns (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/30" className="bd-link-task text-decoration-none text-reset" target="_blank">Bookmarks (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/32" className="bd-link-task text-decoration-none text-reset" target="_blank">Graphics (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/33" className="bd-link-task text-decoration-none text-reset" target="_blank">Research (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/34" className="bd-link-task text-decoration-none text-reset" target="_blank">Sales (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/36" className="bd-link-task text-decoration-none text-reset" target="_blank">ServiceChain (0)</a>
              </div>
              <div className="mb-2">
                <a href="https://contrib.com/crypto/dashboard/tasks/40" className="bd-link-task text-decoration-none text-reset" target="_blank">Automated (0)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TasksComponent