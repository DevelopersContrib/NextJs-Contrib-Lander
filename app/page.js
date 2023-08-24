import TabsSection from "@/components/home/TabsSection"
import HeaderWidget from "@/components/includes/HeaderWidget"
import Footer from "@/components/includes/Footer"
import Navigation from "@/components/includes/Navigation"
import StatSection from "@/components/home/component/StatSection"
import { getDomain,getData, getStatus, getFeaturedTasks, getPeople } from '@/lib/data';

export default async function() {
  const c = await getData();
  const status = await getStatus();
  const domain = getDomain();
  const featuredTask = await getFeaturedTasks();
  const peopleList = await getPeople();

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
            <StatSection domainStats={status}/>
            
            <div className="col-xl-12">
              <TabsSection 
              domain={domain}
              featuredTask={featuredTask}
              peopleList={peopleList}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
