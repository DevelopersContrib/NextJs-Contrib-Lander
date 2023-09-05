"use client"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import TabsHomeContent from './tabcontent/TabsHomeContent';
import TabsTaskContent from './tabcontent/TabsTaskContent';
import TabsOfferContent from './tabcontent/TabsOfferContent';
import TabsPartnerContent from './tabcontent/TabsPartnerContent';
import TabsEsharesContent from './tabcontent/TabsEsharesContent';
import TabsTeamContent from './tabcontent/TabsTeamContent';
import dynamic from 'next/dynamic';
const TabsChallengesContent = dynamic(() => import('./tabcontent/TabsChallengesContent'), { ssr: false });

const TabsSection = ({
  domain,
  featuredTask,
  peopleList, 
  getChallenges,
  contributorList, 
  getCategories,
  getOpentTasks,
  getVerificationTasks,
  getProdTasks,
  getCompletedTasks,
  partnerList,
  teamList,
  brandChallenges,
  earnings,
  analytics
}) => {
  
  return (
    <Tab.Container id="tabs-contrib-lander" defaultActiveKey="home">
      <Row>
        <Col xl={12} className='mb-3'>
          <Nav variant="tabs" className='custom-nav-framework'>
            <Nav.Item>
              <Nav.Link eventKey="home">
                <span className='text-capitalize me-2'>{domain}</span>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="tasks">Task</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href={'https://www.contrib.com/to/'+domain} >Contribution</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.contrib.com/crypto/referral" >Invite</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="offers">Offers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="challenges">Challenges</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="partners">Partners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="eshares">eShares</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="team">Team</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='https://realtydao.com/gov'>RealtyDao Gov</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xl={12}>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <TabsHomeContent 
              featuredTask={featuredTask} 
              peopleList={peopleList}
              getChallenges={getChallenges}
              contributorList={contributorList}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="tasks">
              <TabsTaskContent
              domain={domain} 
              getCategories={getCategories}
              getOpentTasks={getOpentTasks}
              getProdTasks={getProdTasks}
              getVerificationTasks={getVerificationTasks}
              getCompletedTasks={getCompletedTasks}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="offers">
              <TabsOfferContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="challenges">
              <TabsChallengesContent domain={domain} getCategories={getCategories} brandChallenges={brandChallenges}/>
            </Tab.Pane>
            <Tab.Pane eventKey="partners">
              <TabsPartnerContent domain={domain} partnerList={partnerList} />
            </Tab.Pane>
            <Tab.Pane eventKey="eshares">
              <TabsEsharesContent 
                earnings={earnings}
                analytics={analytics}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="team" >
              <TabsTeamContent teamList={teamList} domain={domain}/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default TabsSection