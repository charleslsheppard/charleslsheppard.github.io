import React from 'react';
import { Tab,Image,Modal,Container } from 'semantic-ui-react';

import ImageGallery from 'react-image-gallery';

const getModel = (title, source) => {
  return(
    <Modal trigger={
      <Image style={{cursor: 'grab', maxHeight:'300px', maxWidth:'300px',overflow:'hidden'}} rounded>
          <Image src={source}/>
      </Image>
    } closeIcon>
      <Image size='fullscren'fluid src={source} rounded/>
      <Container style={{ margin: '3em 0em 3em 0em', textTransform: 'uppercase', cursor: 'grab' }} textAlign='center'>{title}</Container>
    </Modal>
  )
}

const panes = [
    { menuItem: 'Portraits', render: () => 
    <Tab.Pane>
            <Image.Group size='medium'>
            {getModel('Kiki ', '../../images/Portraits/Kiki.jpg')}
            {getModel('Clara ','../../images/Portraits/Clara.jpg')}
            {getModel('Madeleine ', '../../images/Portraits/Madeleine.jpg')}
            {getModel('Jean Jacques ', '../../images/Portraits/Jean_Jacques.JPG')}
            {getModel('Italian Model ','../../images/Portraits/Italian_Model.JPG')}
            {getModel('Rose ', '../../images/Portraits/Rose.jpg')}
            {getModel('Francois ', '../../images/Portraits/Francois.jpg')}
            {getModel('Enfant ', '../../images/Portraits/Enfant.jpg')}
            {getModel('Rico ', '../../images/Portraits/Rico.JPG')}
            {getModel('Michelle ', '../../images/Portraits/Michelle.jpg')}
            {getModel('Kiki and Sue ', '../../images/Portraits/Kiki_and_Sue.JPG')}
            {getModel('Homme Pleurant son Chien ', '../../images/Portraits/Homme_Pleurant_son Chien.JPG')}
            {getModel('Heni', '../../images/Portraits/Henri.JPG')}
            {getModel('Cullen', '../../images/Portraits/Cullen.JPG')}
            </Image.Group>
    </Tab.Pane> },  
    { menuItem: 'Landscapes', render: () => 
          <Tab.Pane>
            <Image.Group size='medium'>
              {getModel('Cancale ','../../images/Landscapes/Plage_Cancale.jpg')}
              {getModel('Bretagne ','../../images/Landscapes/Bretagne.JPG')}
              {getModel('Road to UIUC ','../../images/Landscapes/Road_to_UIUC.jpg')}
              {getModel('Le Pont des Artistes ','../../images/Landscapes/Le_Pont_des_Artistes.jpg')}
              {getModel('Eoliennes ','../../images/Landscapes/Eoliennes.JPG')}
              {getModel('Char a Voil ','../../images/Landscapes/Char_a_Voil.JPG')}
              {getModel('Illinois Winter ','../../images/Landscapes/Illinois_Winter.JPG')}
              {getModel('Tarcento ','../../images/Landscapes/Tarcento.jpg')}
              {getModel('Landscapes/North Sea ','../../images/Landscapes/North_Sea.JPG')}
              {getModel('Summer and Winter Beach ','../../images/Landscapes/Summer_and_Winter Beach.JPG')}
              {getModel('Farm Wisconsin ','../../images/Landscapes/Farm_Wisconsin.JPG')}
              {getModel('Oyster Park Cancale ','../../images/Landscapes/Oyster_Park_Cancale.JPG')}
              {getModel('Village Holland ','../../images/Landscapes/Village_Holland.JPG')}
              {getModel('Ocean ','../../images/Landscapes/Ocean.JPG')}
              {getModel('Hameau Flamand ','../../images/Landscapes/Hameau_Flamand.JPG')}
              {getModel('Machu Picchu.jpeg','../../images/Landscapes/Machu_Picchu.jpeg')}
              {getModel('Beverly 1 ','../../images/Landscapes/Beverly_1.jpg')}
              {getModel('Beverly 2 ','../../images/Landscapes/Beverly_4.jpg')}
              {getModel('Beverly 3 ','../../images/Landscapes/Beverly_3.jpg')}
              {getModel('Beverly 4 ','../../images/Landscapes/Beverly_2.jpg')}
            </Image.Group>
        </Tab.Pane> },
        { menuItem: 'Sketches', render: () => 
        <Tab.Pane>
            <Image.Group size='medium'>
            {getModel('La Hanche ','../../images/Sketches/La_Hanche.JPG')}
            {getModel('Reservee ','../../images/Sketches/Reservee.JPG')}
            {getModel('Penchee ','../../images/Sketches/Penchee.JPG')}
            {getModel('La Pose ','../../images/Sketches/La_Pose.JPG')}
            {getModel('Les Deux Cannes ','../../images/Sketches/Les_Deux_Cannes.JPG')}
            {getModel('Frisson ','../../images/Sketches/Frisson.JPG')}
            {getModel('Shower ','../../images/Sketches/Shower.JPG')}
            {getModel('Penssante ','../../images/Sketches/Penssante.JPG')}
            {getModel('Penseur ','../../images/Sketches/Penseur.JPG')}
            {getModel('3 Poses Debout ','../../images/Sketches/3_Poses_Debout.JPG')}
            {getModel('4 Poses Debout ','../../images/Sketches/4_Poses_Debout.JPG')}
            {getModel('The Man ','../../images/Sketches/The_Man.JPG')}
            {getModel('Mort du Rois ','../../images/Sketches/Mort_du_Rois.JPG')}
            {getModel('The Woman ','../../images/Sketches/The_Woman.JPG')}
            {getModel('4 Poses Assise ','../../images/Sketches/4_Poses_Assise.JPG')}
            {getModel('Conversation ','../../images/Sketches/Conversation.JPG')}
            {getModel('Homme Assis ','../../images/Sketches/Homme_Assis.JPG')}
            {getModel('5 Poses Debout ','../../images/Sketches/5_Poses_Debout.JPG')}
            {getModel('La Serviette ','../../images/Sketches/La_Serviette.JPG')}
            {getModel('La canne ','../../images/Sketches/La_canne.JPG')}
            {getModel('Reflexion ','../../images/Sketches/Reflexion.JPG')}
            {getModel('Demoiselle ','../../images/Sketches/Demoiselle.JPG')}
            </Image.Group>
        </Tab.Pane> },
        { menuItem: 'Ball Point Pen', render: () => 
        <Tab.Pane>
            <Image.Group size='medium'>
            {getModel('Sheppard 20 ','../../images/Ball_Point_Pen/Sheppard_20.jpg')}
            {getModel('Sheppard 18 ','../../images/Ball_Point_Pen/Sheppard_18.jpg')}
            {getModel('Sheppard 9 ','../../images/Ball_Point_Pen/Sheppard_9.jpg')}
            {getModel('Sheppard 8 ','../../images/Ball_Point_Pen/Sheppard_8.jpg')}
            {getModel('Sheppard 4 ','../../images/Ball_Point_Pen/Sheppard_4.jpg')}
            {getModel('Sheppard 7 ','../../images/Ball_Point_Pen/Sheppard_7.jpg')}
            {getModel('Sheppard 3 ','../../images/Ball_Point_Pen/Sheppard_3.jpg')}
            {getModel('Sheppard 2 ','../../images/Ball_Point_Pen/Sheppard_2.jpg')}
            {getModel('Sheppard 1 ','../../images/Ball_Point_Pen/Sheppard_1.JPG')}
            {getModel('Lion Jaune ','../../images/Ball_Point_Pen/Lion_Jaune.jpg')}
            {getModel('Sheppard 16 ','../../images/Ball_Point_Pen/Sheppard_16.jpg')}
            {getModel('Sheppard 17 ','../../images/Ball_Point_Pen/Sheppard_17.jpg')}
            {getModel('Sheppard 15 ','../../images/Ball_Point_Pen/Sheppard_15.jpg')}
            {getModel('Sheppard 14 ','../../images/Ball_Point_Pen/Sheppard_14.jpg')}
            {getModel('Sheppard 10 ','../../images/Ball_Point_Pen/Sheppard_10.jpg')}
            {getModel('Sheppard 11 ','../../images/Ball_Point_Pen/Sheppard_11.jpg')}
            {getModel('Sheppard 13 ','../../images/Ball_Point_Pen/Sheppard_13.jpg')}
            {getModel('Sheppard 12 ','../../images/Ball_Point_Pen/Sheppard_12.jpg')}
            </Image.Group>
        </Tab.Pane> },
        { menuItem: 'Sport', render: () => 
        <Tab.Pane>
            <Image.Group size='medium'>
            {getModel('Rugby Line Out ','../../images/Sports/Rugby_Line_Out.JPG')}
            {getModel('Rugby Try ','../../images/Sports/Rugby_Try.JPG')}
            {getModel('Rugby Tackle ','../../images/Sports/Rugby_Tackle.JPG')}
            {getModel('Rugby Run ','../../images/Sports/Rugby_Run.JPG')}
            {getModel('Rugby Pass ','../../images/Sports/Rugby_Pass.JPG')}
            {getModel('Golf 2 Stages ','../../images/Sports/Golf_2_Stages.JPG')}
            {getModel('Golf Swing front ','../../images/Sports/Golf_Swing_front.JPG')}
            </Image.Group>
        </Tab.Pane> },
        { menuItem: 'Collages', render: () => 
        <Tab.Pane>
            <Image.Group size='medium'>
              {getModel('Urban Issues ','../../images/Collages/Urban_Issues.JPG')}
              {getModel('US City ','../../images/Collages/US_City.JPG')}
              {getModel('Sky Rythm ','../../images/Collages/Sky_Rythm.JPG')}
              {getModel('Prisoner ','../../images/Collages/Prisoner.JPG')}
            </Image.Group>
        </Tab.Pane> },
        { menuItem: 'Variations', render: () => 
        <Tab.Pane>
            <Image.Group size='medium'>
            {getModel('Trenches France 14-18 ','../../images/Variations/Trenches_France_14-18.jpg')}
            {getModel('Paris Monuments  ','../../images/Variations/Paris_Monuments .jpg')}
            {getModel('Backhoe ','../../images/Variations/Backhoe.jpg')}
            {getModel('Flamenco ','../../images/Variations/Flamenco.JPG')}
            {getModel('Corrida ','../../images/Variations/Corrida.JPG')}
            {getModel('Friulan Flag ','../../images/Variations/Friulan_Flag.jpg')}
            {getModel('Auschwitz February 1945 ','../../images/Variations/Auschwitz_February_1945.jpg')}
            </Image.Group>
        </Tab.Pane> }
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic