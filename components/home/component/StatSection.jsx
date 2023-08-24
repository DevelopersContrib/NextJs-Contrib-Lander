const StatSection = ({domainStats}) => {
    return (
        <div className="col-xl-12">
            <div className="row g-3">
                <div className="col-lg-3 mb-3">
                    <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_theo_val">{domainStats.data.theo_val}</h3>
                    <div className="text-uppercase">TV</div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_contributors">{domainStats.data.contributors}</h3>
                    <div className="text-uppercase">contributors</div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_eshares">{domainStats.data.eshares}</h3>
                    <div className="text-uppercase">eshares</div>
                    </div>
                </div>
                <div className="col-lg-3 mb-3">
                    <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_tasks">{domainStats.data.open_tasks}</h3>
                    <div className="text-uppercase">open task</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatSection