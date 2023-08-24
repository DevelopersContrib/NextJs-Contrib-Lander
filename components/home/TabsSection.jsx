"use client"
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import TabsHomeContent from './tabcontent/TabsHomeContent';
import TabsTaskContent from './tabcontent/TabsTaskContent';
import TabsOfferContent from './tabcontent/TabsOfferContent';
import TabsChallengesContent from './tabcontent/TabsChallengesContent';
import TabsPartnerContent from './tabcontent/TabsPartnerContent';
import TabsEsharesContent from './tabcontent/TabsEsharesContent';
import TabsTeamContent from './tabcontent/TabsTeamContent';

const TabsSection = ({domain,featuredTask,peopleList}) => {
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
              <TabsHomeContent featuredTask={featuredTask} peopleList={peopleList}/>
            </Tab.Pane>
            <Tab.Pane eventKey="tasks">
              <TabsTaskContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="offers">
              <TabsOfferContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="challenges">
              <TabsChallengesContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="partners">
              <TabsPartnerContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="eshares">
              <TabsEsharesContent />
            </Tab.Pane>
            <Tab.Pane eventKey="team">
              <TabsTeamContent />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default TabsSection