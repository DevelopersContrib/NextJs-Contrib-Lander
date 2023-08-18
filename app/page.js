import TabsSection from "@/components/home/TabsSection"
import HeaderWidget from "@/components/includes/HeaderWidget"
import Footer from "@/components/includes/Footer"
import Navigation from "@/components/includes/Navigation"
import { getDomain,getData } from '@/lib/data';

export default async function() {
  const c = await getData();
  const domain = getDomain();

  return (
    <>
      <HeaderWidget piwikId={c.data.piwikId} accountGA={c.data.accountGA} adsenseClientId={c.data.adsenseClientId}  />
      <Navigation  domain={domain} logo={c.data.logo} />
      <section className="tw-py-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1 className="mb-5 text-center">
                Join a vibrant community of developers, influencers, and entrepreneurs on {domain}, all using the versatile CONTRIB token to power their token economies!
              </h1>
            </div>
            <div className="col-xl-12 mb-5">
              <div className="custom-form-signup xl:tw-max-w-[750px] xl:tw-mx-auto">
                <input
                  autoComplete="off"
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email addresss..." />
                <button className="btn btn-dark">
                  Join {domain}
                </button>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row g-3">
                <div className="col-lg-3 mb-3">
                  <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_theo_val">22,671</h3>
                    <div className="text-uppercase">TV</div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_contributors">9</h3>
                    <div className="text-uppercase">contributors</div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_eshares">40</h3>
                    <div className="text-uppercase">eshares</div>
                  </div>
                </div>
                <div className="col-lg-3 mb-3">
                  <div className="bg-white box-widget-shadow px-3 py-5 d-flex w-100 flex-column align-items-center">
                    <h3 className="tw-font-bold" id="c_tasks">0</h3>
                    <div className="text-uppercase">open task</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <TabsSection/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
