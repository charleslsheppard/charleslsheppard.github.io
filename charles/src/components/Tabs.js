import React from 'react'
import { Tab,Image,Modal,Container } from 'semantic-ui-react'
const getModel = (source, title) => {
  return(
    <Modal trigger={<Image style={{ cursor: 'grab' }} src={source} rounded/>} closeIcon>
      <Image size='fullscren'fluid src={source} rounded/>
      <Container style={{ margin: '3em 0em 3em 0em', textTransform: 'uppercase', cursor: 'grab' }} textAlign='center'>{title}</Container>
    </Modal>
  )
}

const panes = [
    { menuItem: 'Portraits', render: () => 
    <Tab.Pane>
            <Image.Group size='medium'>
              {getModel('../../images/portrait/child.jpg','child')}
              {getModel('../../images/portrait/couple.jpg','couple')}
              {getModel('../../images//portrait/man1.jpg','man 1')}
              {getModel('../../images/portrait/woman1.jpg','woman 1')}
              {getModel('../../images/portrait/woman2.jpg','woman 2')}
              {getModel('../../images/portrait/woman3.jpg','woman 3')}
              {getModel('../../images/portrait/flemishServant.jpg','flemish servant')}
              {getModel('../../images/portrait/modelItalien.jpg','italian model')}
              {getModel('../../images/portrait/ricePortrait.jpg','italian model 2')}
              {getModel('../../images//portrait/womanAndChild.jpg','woman and child')}
            </Image.Group>
    </Tab.Pane> },
  { menuItem: 'Landscapes', render: () => 
  <Tab.Pane>
            <Image.Group size='big'>
              {getModel('../../images/landscape/fourByTwo/chicago.jpg','chicago bridge')}
              {getModel('../../images/landscape/fourByTwo/parisPontDesArts.jpg','paris Pont Des Arts')}
            </Image.Group>
            <Image.Group size='medium'>
              {getModel('../../images/landscape/brittany.jpg','Brittany')}
              {getModel('../../images/landscape/brittany2.jpg','Brittany 2')}
              {getModel('../../images/landscape/brittany3.jpg','Brittany 3')}
              {getModel('../../images/landscape/greatfulDead.jpg','greatful Dead')}
              {getModel('../../images/landscape/machuPicchu.jpg','machuPicchu')}
              {getModel('../../images/landscape/turbines.jpeg','turbines')}
            </Image.Group>
  </Tab.Pane> },
    { menuItem: 'Rugby', render: () => 
    <Tab.Pane>
                <Image.Group size='medium'>
                  {getModel('../../images/rugby/rugby1.jpg','rugby 1')}
                  {getModel('../../images/rugby/rugby2.jpg','rugby 2')}
                  {getModel('../../images/rugby/rugby3.jpg','rugby 3')}
                  {getModel('../../images/rugby/rugby4.jpg','rugby 4')}
                  {getModel('../../images/rugby/rugby5.jpg','rugby 5')}
                  {getModel('../../images/rugby/rugby6.jpg','rugby 6')}
                  {getModel('../../images/rugby/rugby7.jpg','rugby 7')}
                </Image.Group>
  </Tab.Pane> },
  { menuItem: 'Other', render: () => 
  <Tab.Pane>
            <Image.Group size='big'>
              {getModel('../../images/other/fourByTwo/auschwitz.jpg','auschwitz')}
              {getModel('../../images/other/fourByTwo/trenches.jpg','trenches')}
            </Image.Group>
            <Image.Group size='medium'>
              {getModel('../../images/other/parisMonCullen.jpg','paris monuments')}
              {getModel('../../images/other/metroStation.jpg','metro Station')}
              {getModel('../../images/other/SixPMTrain.jpg','Six PM Train')}
            </Image.Group>
  </Tab.Pane> }
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic