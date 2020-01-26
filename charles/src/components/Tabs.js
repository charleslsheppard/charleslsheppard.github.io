import React from 'react';
import { Tab,Image,Modal,Container } from 'semantic-ui-react';

import ImageGallery from 'react-image-gallery';
 const Landscapes = [
  {description:'Cancale ', original:'../../images/Landscapes/Plage_Cancale.jpg', thumbnail:'../../images/Landscapes/Plage_Cancale.jpg'},
  {description:'Bretagne ', original:'../../images/Landscapes/Bretagne.JPG', thumbnail:'../../images/Landscapes/Bretagne.JPG'},
  {description:'Road to UIUC ', original:'../../images/Landscapes/Road_to_UIUC.jpg', thumbnail:'../../images/Landscapes/Road_to_UIUC.jpg'},
  {description:'Le Pont des Artistes ', original:'../../images/Landscapes/Le_Pont_des_Artistes.jpg', thumbnail:'../../images/Landscapes/Le_Pont_des_Artistes.jpg'},
  {description:'Eoliennes ', original:'../../images/Landscapes/Eoliennes.JPG', thumbnail:'../../images/Landscapes/Eoliennes.JPG'},
  {description:'Char a Voil ', original:'../../images/Landscapes/Char_a_Voil.JPG', thumbnail:'../../images/Landscapes/Char_a_Voil.JPG'},
  {description:'Illinois Winter ', original:'../../images/Landscapes/Illinois_Winter.JPG', thumbnail:'../../images/Landscapes/Illinois_Winter.JPG'},
  {description:'Tarcento ', original:'../../images/Landscapes/Tarcento.jpg', thumbnail:'../../images/Landscapes/Tarcento.jpg'},
  {description:'Landscapes/North Sea ', original:'../../images/Landscapes/North_Sea.JPG', thumbnail:'../../images/Landscapes/North_Sea.JPG'},
  {description:'Summer and Winter Beach ', original:'../../images/Landscapes/Summer_and_Winter Beach.JPG', thumbnail:'../../images/Landscapes/Summer_and_Winter Beach.JPG'},
  {description:'Farm Wisconsin ', original:'../../images/Landscapes/Farm_Wisconsin.JPG', thumbnail:'../../images/Landscapes/Farm_Wisconsin.JPG'},
  {description:'Oyster Park Cancale ', original:'../../images/Landscapes/Oyster_Park_Cancale.JPG', thumbnail:'../../images/Landscapes/Oyster_Park_Cancale.JPG'},
  {description:'Village Holland ', original:'../../images/Landscapes/Village_Holland.JPG', thumbnail:'../../images/Landscapes/Village_Holland.JPG'},
  {description:'Ocean ', original:'../../images/Landscapes/Ocean.JPG', thumbnail:'../../images/Landscapes/Ocean.JPG'},
  {description:'Hameau Flamand ', original:'../../images/Landscapes/Hameau_Flamand.JPG', thumbnail:'../../images/Landscapes/Hameau_Flamand.JPG'},
  {description:'Machu Picchu.jpeg', original:'../../images/Landscapes/Machu_Picchu.jpeg', thumbnail:'../../images/Landscapes/Machu_Picchu.jpeg'},
  {description:'Beverly 1 ', original:'../../images/Landscapes/Beverly_1.jpg', thumbnail:'../../images/Landscapes/Beverly_1.jpg'},
  {description:'Beverly 2 ', original:'../../images/Landscapes/Beverly_4.jpg', thumbnail:'../../images/Landscapes/Beverly_2.jpg'},
  {description:'Beverly 3 ', original:'../../images/Landscapes/Beverly_3.jpg', thumbnail:'../../images/Landscapes/Beverly_3.jpg'},
  {description:'Beverly 4 ', original:'../../images/Landscapes/Beverly_2.jpg', thumbnail:'../../images/Landscapes/Beverly_4.jpg'}
 ]
const  Collages = [
  {description:'Urban Issues ', original:'../../images/Collages/Urban_Issues.JPG', thumbnail:'../../images/Collages/Urban_Issues.JPG'},
  {description:'US City ', original:'../../images/Collages/US_City.JPG', thumbnail:'../../images/Collages/US_City.JPG'},
  {description:'Sky Rythm ', original:'../../images/Collages/Sky_Rythm.JPG', thumbnail:'../../images/Collages/Sky_Rythm.JPG'},
  {description:'Prisoner ', original:'../../images/Collages/Prisoner.JPG', thumbnail:'../../images/Collages/Prisoner.JPG'},
]

const Sketches = [
  {description:'La Hanche ', original:'../../images/Sketches/La_Hanche.JPG', thumbnail:'../../images/Sketches/La_Hanche.JPG'},
  {description:'Reservee ', original:'../../images/Sketches/Reservee.JPG', thumbnail:'../../images/Sketches/Reservee.JPG'},
  {description:'Penchee ', original:'../../images/Sketches/Penchee.JPG', thumbnail:'../../images/Sketches/Penchee.JPG'},
  {description:'La Pose ', original:'../../images/Sketches/La_Pose.JPG', thumbnail:'../../images/Sketches/La_Pose.JPG'},
  {description:'Les Deux Cannes ', original:'../../images/Sketches/Les_Deux_Cannes.JPG', thumbnail:'../../images/Sketches/Les_Deux_Cannes.JPG'},
  {description:'Frisson ', original:'../../images/Sketches/Frisson.JPG', thumbnail:'../../images/Sketches/Frisson.JPG'},
  {description:'Shower ', original:'../../images/Sketches/Shower.JPG', thumbnail:'../../images/Sketches/Shower.JPG'},
  {description:'Penssante ', original:'../../images/Sketches/Penssante.JPG', thumbnail:'../../images/Sketches/Penssante.JPG'},
  {description:'Penseur ', original:'../../images/Sketches/Penseur.JPG', thumbnail:'../../images/Sketches/Penseur.JPG'},
  {description:'3 Poses Debout ', original:'../../images/Sketches/3_Poses_Debout.JPG', thumbnail:'../../images/Sketches/3_Poses_Debout.JPG'},
  {description:'4 Poses Debout ', original:'../../images/Sketches/4_Poses_Debout.JPG', thumbnail:'../../images/Sketches/4_Poses_Debout.JPG'},
  {description:'The Man ', original:'../../images/Sketches/The_Man.JPG', thumbnail:'../../images/Sketches/The_Man.JPG'},
  {description:'Mort du Rois ', original:'../../images/Sketches/Mort_du_Rois.JPG', thumbnail:'../../images/Sketches/Mort_du_Rois.JPG'},
  {description:'The Woman ', original:'../../images/Sketches/The_Woman.JPG', thumbnail:'../../images/Sketches/The_Woman.JPG'},
  {description:'4 Poses Assise ', original:'../../images/Sketches/4_Poses_Assise.JPG', thumbnail:'../../images/Sketches/4_Poses_Assise.JPG'},
  {description:'Conversation ', original:'../../images/Sketches/Conversation.JPG', thumbnail:'../../images/Sketches/Conversation.JPG'},
  {description:'Homme Assis ', original:'../../images/Sketches/Homme_Assis.JPG', thumbnail:'../../images/Sketches/Homme_Assis.JPG'},
  {description:'5 Poses Debout ', original:'../../images/Sketches/5_Poses_Debout.JPG', thumbnail:'../../images/Sketches/5_Poses_Debout.JPG'},
  {description:'La Serviette ', original:'../../images/Sketches/La_Serviette.JPG', thumbnail:'../../images/Sketches/La_Serviette.JPG'},
  {description:'La canne ', original:'../../images/Sketches/La_canne.JPG', thumbnail:'../../images/Sketches/La_canne.JPG'},
  {description:'Reflexion ', original:'../../images/Sketches/Reflexion.JPG', thumbnail:'../../images/Sketches/Reflexion.JPG'},
  {description:'Demoiselle ', original:'../../images/Sketches/Demoiselle.JPG', thumbnail:'../../images/Sketches/Demoiselle.JPG'},
]

const Variations = [
  {description:'Trenches France 14-18 ', original:'../../images/Variations/Trenches_France_14-18.jpg', thumbnail:'../../images/Variations/Trenches_France_14-18.jpg'},
  {description:'Paris Monuments  ', original:'../../images/Variations/Paris_Monuments .jpg', thumbnail:'../../images/Variations/Paris_Monuments .jpg'},
  {description:'Backhoe ', original:'../../images/Variations/Backhoe.jpg', thumbnail:'../../images/Variations/Backhoe.jpg'},
  {description:'Flamenco ', original:'../../images/Variations/Flamenco.JPG', thumbnail:'../../images/Variations/Flamenco.JPG'},
  {description:'Corrida ', original:'../../images/Variations/Corrida.JPG', thumbnail:'../../images/Variations/Corrida.JPG'},
  {description:'Friulan Flag ', original:'../../images/Variations/Friulan_Flag.jpg', thumbnail:'../../images/Variations/Friulan_Flag.jpg'},
  {description:'Auschwitz February 1945 ', original:'../../images/Variations/Auschwitz_February_1945.jpg', thumbnail:'../../images/Variations/Auschwitz_February_1945.jpg'},
]

const Ball_Point_Pen = [
  {description:'Sheppard 20 ', original:'../../images/Ball_Point_Pen/Sheppard_20.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_20.jpg'},
  {description:'Sheppard 18 ', original:'../../images/Ball_Point_Pen/Sheppard_18.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_18.jpg'},
  {description:'Sheppard 9 ', original:'../../images/Ball_Point_Pen/Sheppard_9.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_9.jpg'},
  {description:'Sheppard 8 ', original:'../../images/Ball_Point_Pen/Sheppard_8.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_8.jpg'},
  {description:'Sheppard 4 ', original:'../../images/Ball_Point_Pen/Sheppard_4.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_4.jpg'},
  {description:'Sheppard 7 ', original:'../../images/Ball_Point_Pen/Sheppard_7.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_7.jpg'},
  {description:'Sheppard 3 ', original:'../../images/Ball_Point_Pen/Sheppard_3.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_3.jpg'},
  {description:'Sheppard 2 ', original:'../../images/Ball_Point_Pen/Sheppard_2.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_2.jpg'},
  {description:'Sheppard 1 ', original:'../../images/Ball_Point_Pen/Sheppard_1.JPG', thumbnail:'../../images/Ball_Point_Pen/Sheppard_1.JPG'},
  {description:'Lion Jaune ', original:'../../images/Ball_Point_Pen/Lion_Jaune.jpg', thumbnail:'../../images/Ball_Point_Pen/Lion_Jaune.jpg'},
  {description:'Sheppard 16 ', original:'../../images/Ball_Point_Pen/Sheppard_16.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_16.jpg'},
  {description:'Sheppard 17 ', original:'../../images/Ball_Point_Pen/Sheppard_17.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_17.jpg'},
  {description:'Sheppard 15 ', original:'../../images/Ball_Point_Pen/Sheppard_15.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_15.jpg'},
  {description:'Sheppard 14 ', original:'../../images/Ball_Point_Pen/Sheppard_14.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_14.jpg'},
  {description:'Sheppard 10 ', original:'../../images/Ball_Point_Pen/Sheppard_10.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_10.jpg'},
  {description:'Sheppard 11 ', original:'../../images/Ball_Point_Pen/Sheppard_11.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_11.jpg'},
  {description:'Sheppard 13 ', original:'../../images/Ball_Point_Pen/Sheppard_13.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_13.jpg'},
  {description:'Sheppard 12 ', original:'../../images/Ball_Point_Pen/Sheppard_12.jpg', thumbnail:'../../images/Ball_Point_Pen/Sheppard_12.jpg'},
]

const Sports = [
  {description:'Rugby Line Out ', original:'../../images/Sports/Rugby_Line_Out.JPG', thumbnail:'../../images/Sports/Rugby_Line_Out.JPG'},
  {description:'Rugby Try ', original:'../../images/Sports/Rugby_Try.JPG', thumbnail:'../../images/Sports/Rugby_Try.JPG'},
  {description:'Rugby Tackle ', original:'../../images/Sports/Rugby_Tackle.JPG', thumbnail:'../../images/Sports/Rugby_Tackle.JPG'},
  {description:'Rugby Run ', original:'../../images/Sports/Rugby_Run.JPG', thumbnail:'../../images/Sports/Rugby_Run.JPG'},
  {description:'Rugby Pass ', original:'../../images/Sports/Rugby_Pass.JPG', thumbnail:'../../images/Sports/Rugby_Pass.JPG'},
  {description:'Golf 2 Stages ', original:'../../images/Sports/Golf_2_Stages.JPG', thumbnail:'../../images/Sports/Golf_2_Stages.JPG'},
  {description:'Golf Swing front ', original:'../../images/Sports/Golf_Swing_front.JPG', thumbnail:'../../images/Sports/Golf_Swing_front.JPG'},
  {description:'Golf Swing side ', original:'../../images/Sports/Golf_Swing_side.JPG', thumbnail:'../../images/Sports/Golf_Swing_side.JPG'},
]

const Portraits = [
  {description:'Kiki ', original:'../../images/Portraits/Kiki.jpg', thumbnail:'../../images/Portraits/Kiki.jpg'},
  {description:'Clara ', original:'../../images/Portraits/Clara.jpg', thumbnail:'../../images/Portraits/Clara.jpg'},
  {description:'Madeleine ', original:'../../images/Portraits/Madeleine.jpg', thumbnail:'../../images/Portraits/Madeleine.jpg'},
  {description:'Jean Jacques ', original:'../../images/Portraits/Jean_Jacques.JPG', thumbnail:'../../images/Portraits/Jean_Jacques.JPG'},
  {description:'Italian Model ', original:'../../images/Portraits/Italian_Model.JPG', thumbnail:'../../images/Portraits/Italian_Model.JPG'},
  {description:'Rose ', original:'../../images/Portraits/Rose.jpg', thumbnail:'../../images/Portraits/Rose.jpg'},
  {description:'Francois ', original:'../../images/Portraits/Francois.jpg', thumbnail:'../../images/Portraits/Francois.jpg'},
  {description:'Enfant ', original:'../../images/Portraits/Enfant.jpg', thumbnail:'../../images/Portraits/Enfant.jpg'},
  {description:'Rico ', original:'../../images/Portraits/Rico.JPG', thumbnail:'../../images/Portraits/Rico.JPG'},
  {description:'Michelle ', original:'../../images/Portraits/Michelle.jpg', thumbnail:'../../images/Portraits/Michelle.jpg'},
  {description:'Kiki and Sue ', original:'../../images/Portraits/Kiki_and_Sue.JPG', thumbnail:'../../images/Portraits/Kiki_and_Sue.JPG'},
  {description:'Homme Pleurant son Chien ', original:'../../images/Portraits/Homme_Pleurant_son Chien.JPG', thumbnail:'../../images/Portraits/Homme_Pleurant_son Chien.JPG'},
  {description:'Heni', original:'../../images/Portraits/Henri.JPG', thumbnail:'../../images/Portraits/Henri.JPG'},
  {description:'Cullen', original:'../../images/Portraits/Cullen.JPG', thumbnail:'../../images/Portraits/Cullen.JPG'},
]

const panes = [
    { menuItem: 'Landscapes', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Landscapes} />
  </Tab.Pane> },
    { menuItem: 'Portraits', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Portraits} />
  </Tab.Pane> },
    { menuItem: 'Collages', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Collages} />
  </Tab.Pane> },
    { menuItem: 'Sketches', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Sketches} />
  </Tab.Pane> },
    { menuItem: 'Ball Point Pen', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Ball_Point_Pen} />
  </Tab.Pane> },
    { menuItem: 'Sports', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Sports} />
  </Tab.Pane> },
    { menuItem: 'Variations', render: () => 
    <Tab.Pane>
              <ImageGallery thumbnailPosition="left" items={Variations} />
  </Tab.Pane> },
]

const TabExampleBasic = () => <Tab panes={panes} />

export default TabExampleBasic