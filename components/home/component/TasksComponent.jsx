import { FaPenToSquare } from "react-icons/fa6";

const TasksComponent = ({getCategories, domain}) => {
 
  return (
    <div className="col-lg-12">
      <div className="m-portlet">
        <div className="m-portlet__head">
          <div className="m-portlet__head-caption">
            <div className="m-portlet__head-title">
              <span className="m-portlet__head-icon">
                <FaPenToSquare className="tw-w-5 tw-h-5" />
              </span>
              <h3 className="m-portlet__head-text text-capitalize">{domain} Open Tasks for Contribution</h3>
            </div>
          </div>
        </div>
        <div className="m-portlet__body">
          <div className="row">
              {getCategories.data.map((getCategory, index) => (
                index % 9 === 0 && (
                  <div className="col-lg-6" id="task_content_categories" key={index}>
                    {getCategories.data.slice(index, index + 9).map((category) => (
                      <div className="mb-2" key={category.category_id}>
                        <a
                          href={`https://contrib.com/crypto/dashboard/tasks/` + category.category_id}
                          className="bd-link-task text-decoration-none text-reset"
                          target="_blank"
                        >
                          {category.category_name} ({category.category_counter})
                        </a>
                      </div>
                    ))}
                  </div>
                )
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TasksComponent