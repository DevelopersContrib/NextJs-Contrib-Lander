import TabsSection from "@/components/home/TabsSection"
import HeaderWidget from "@/components/includes/HeaderWidget"
import Footer from "@/components/includes/Footer"
import Navigation from "@/components/includes/Navigation"
import StatSection from "@/components/home/component/StatSection"
import { 
  getDomain,
  getData, 
  getStatus, 
  getFeaturedTasks, 
  getPeople, 
  getChallenges, 
  getContributors, 
  getEserviceCats,
  getTaskByStatus,
  getPartners,
  getTeam
} from '@/lib/data';

export default async function() {
  const c = await getData();
  const status = await getStatus();
  const domain = getDomain();
  const featuredTask = await getFeaturedTasks();
  const peopleList = await getPeople();
  const challengeList = await getChallenges();
  const contributorList = await getContributors();
  const getCategories = await getEserviceCats();
  const getOpentTasks = await getTaskByStatus('open');
  const getProdTasks = await getTaskByStatus('in-production');
  const getVerificationTasks = await getTaskByStatus('for-verification');
  const getCompletedTasks = await getTaskByStatus('completed');
  const partnerList = await getPartners();
  const teamList = await getTeam();

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
              getChallenges={challengeList}
              contributorList={contributorList}
              getCategories={getCategories}
              getOpentTasks={getOpentTasks}
              getVerificationTasks={getVerificationTasks}
              getProdTasks={getProdTasks}
              getCompletedTasks={getCompletedTasks}
              partnerList={partnerList}
              teamList={teamList}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
