(window.webpackJsonpcharles=window.webpackJsonpcharles||[]).push([[0],{230:function(e,a,t){e.exports=t(404)},235:function(e,a,t){},236:function(e,a,t){},404:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(26),l=t.n(i),m=(t(235),t(236),t(31)),o=t(32),c=t(33),s=t(34),d=t(35),u=t(410),g=t(417),p=function(e){var a=e.mobile;return r.a.createElement(u.a,{text:!0},r.a.createElement(g.a,{as:"h1",content:"Charles Sheppard",inverted:!0,style:{fontSize:a?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:a?"1.5em":"3em",fontFamily:"Frank Ruhl Libre",color:"#192244"}}),r.a.createElement(g.a,{as:"h2",content:"Artist",inverted:!0,style:{fontSize:a?"1.5em":"1.7em",fontWeight:"normal",fontFamily:"Frank Ruhl Libre",marginTop:a?"0.5em":"1.5em",color:"#192244"}}))},h=t(20),E=t(420),y=t(418),b=t(220),f=t(137),v=t(36),w=function(){return"undefined"===typeof window?E.a.onlyTablet.minWidth:window.innerWidth},j=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).handleSidebarHide=function(){return t.setState({sidebarOpened:!1})},t.handleToggle=function(){return t.setState({sidebarOpened:!0})},t.handleItemClick=function(e,a){var n=a.name;t.setState({sidebarOpened:!t.state.sidebarOpened},t.setState({activeItem:n}))},t.state={activeItem:null},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children,a=this.state,t=a.sidebarOpened,n=a.activeItem;return r.a.createElement(E.a,{as:y.a.Pushable,getWidth:w,maxWidth:E.a.onlyMobile.maxWidth},r.a.createElement(y.a,{as:b.a,animation:"push",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:t},r.a.createElement(h.Link,{to:"About",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{name:"About",as:"a",active:"About"===n,onClick:this.handleItemClick},"About")),r.a.createElement(h.Link,{to:"Gallery",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{name:"Gallery",as:"a",active:"Gallery"===n,onClick:this.handleItemClick},"Gallery")),r.a.createElement(h.Link,{to:"Commission",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{name:"Commission",as:"a",active:"Commission"===n,onClick:this.handleItemClick},"Commission"))),r.a.createElement(y.a.Pusher,{dimmed:t},r.a.createElement(f.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em",background:"url(../images/landscape/parisPontDesArtsBackground.jpg) no-repeat center center scroll",backgroundSize:"cover",backgroundAttachment:"fixed"},vertical:!0},r.a.createElement(u.a,null,r.a.createElement(b.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(b.a.Item,{onClick:this.handleToggle},r.a.createElement(v.a,{name:"sidebar"})))),r.a.createElement(p,{mobile:!0})),e))}}]),a}(n.Component),C=t(413),k=function(){return"undefined"===typeof window?E.a.onlyTablet.minWidth:window.innerWidth},I=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(c.a)(this,Object(s.a)(a).call(this,e))).hideFixedMenu=function(){return t.setState({fixed:!1})},t.showFixedMenu=function(){return t.setState({fixed:!0})},t.handleItemClick=function(e,a){var n=a.name;return t.setState({activeItem:n})},t.state={activeItem:null},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.children,a=this.state,t=a.fixed,n=a.activeItem;return r.a.createElement(E.a,{getWidth:k,minWidth:E.a.onlyTablet.minWidth},r.a.createElement(C.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement(f.a,{inverted:!0,textAlign:"center",style:{minHeight:"100vh",padding:"1em 0em"},vertical:!0,className:"colheading"},r.a.createElement(b.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large",className:"colborder"},r.a.createElement(u.a,{className:"colmainheader"},r.a.createElement(h.Link,{to:"About",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{className:"coltext",name:"About",as:"a",active:"About"===n,onClick:this.handleItemClick},"About")),r.a.createElement(h.Link,{to:"Gallery",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{className:"coltext",name:"Gallery",as:"a",active:"Gallery"===n,onClick:this.handleItemClick},"Gallery")),r.a.createElement(h.Link,{to:"Commission",spy:!0,smooth:!0,duration:500},r.a.createElement(b.a.Item,{className:"coltext",name:"Commission",as:"a",active:"Commission"===n,onClick:this.handleItemClick},"Commission")))),r.a.createElement(p,null))),e)}}]),a}(n.Component),S=t(415),x=t(219),z=t(421),A=function(e,a){return r.a.createElement(S.a,{trigger:r.a.createElement(x.a,{style:{cursor:"grab"},src:e,rounded:!0}),closeIcon:!0},r.a.createElement(x.a,{size:"fullscren",fluid:!0,src:e,rounded:!0}),r.a.createElement(u.a,{style:{margin:"3em 0em 3em 0em",textTransform:"uppercase",cursor:"grab"},textAlign:"center"},a))},P=[{menuItem:"Portraits",render:function(){return r.a.createElement(z.a.Pane,null,r.a.createElement(x.a.Group,{size:"medium"},A("../../images/portrait/child.jpg","child"),A("../../images/portrait/couple.jpg","couple"),A("../../images//portrait/man1.jpg","man 1"),A("../../images/portrait/woman1.jpg","woman 1"),A("../../images/portrait/woman2.jpg","woman 2"),A("../../images/portrait/woman3.jpg","woman 3"),A("../../images/portrait/flemishServant.jpg","flemish servant"),A("../../images/portrait/modelItalien.jpg","italian model"),A("../../images/portrait/ricePortrait.jpg","italian model 2"),A("../../images//portrait/womanAndChild.jpg","woman and child")))}},{menuItem:"Landscapes",render:function(){return r.a.createElement(z.a.Pane,null,r.a.createElement(x.a.Group,{size:"big"},A("../../images/landscape/fourByTwo/chicago.jpg","chicago bridge"),A("../../images/landscape/fourByTwo/parisPontDesArts.jpg","paris Pont Des Arts")),r.a.createElement(x.a.Group,{size:"medium"},A("../../images/landscape/beach2.jpg","beach"),A("../../images/landscape/bridge.jpg","bridge"),A("../../images/landscape/rooftop.jpg","rooftop"),A("../../images/landscape/paysage.jpg","paysage"),A("../../images/landscape/brittany.jpg","Brittany"),A("../../images/landscape/brittany2.jpg","Brittany 2"),A("../../images/landscape/brittany3.jpg","Brittany 3"),A("../../images/landscape/greatfulDead.jpg","greatful Dead"),A("../../images/landscape/machuPicchu.jpg","machuPicchu"),A("../../images/landscape/turbines.jpeg","turbines")))}},{menuItem:"Rugby",render:function(){return r.a.createElement(z.a.Pane,null,r.a.createElement(x.a.Group,{size:"medium"},A("../../images/rugby/rugby1.jpg","rugby 1"),A("../../images/rugby/rugby2.jpg","rugby 2"),A("../../images/rugby/rugby3.jpg","rugby 3"),A("../../images/rugby/rugby4.jpg","rugby 4"),A("../../images/rugby/rugby5.jpg","rugby 5"),A("../../images/rugby/rugby6.jpg","rugby 6"),A("../../images/rugby/rugby7.jpg","rugby 7")))}},{menuItem:"Other",render:function(){return r.a.createElement(z.a.Pane,null,r.a.createElement(x.a.Group,{size:"big"},A("../../images/other/fourByTwo/auschwitz.jpg","auschwitz"),A("../../images/other/fourByTwo/trenches.jpg","trenches")),r.a.createElement(x.a.Group,{size:"medium"},A("../../images/other/parisMonCullen.jpg","paris monuments"),A("../../images/other/metroStation.jpg","metro Station"),A("../../images/other/SixPMTrain.jpg","Six PM Train")))}}],W=function(){return r.a.createElement(z.a,{panes:P})},G=t(221),O=t(414),T=t(416),B=function(e){var a=e.children;return r.a.createElement("div",null,r.a.createElement(I,null,a),r.a.createElement(j,null,a))},N=function(){return r.a.createElement(B,null,r.a.createElement("br",null),r.a.createElement(h.Element,{name:"About"},r.a.createElement(f.a,{style:{padding:"4em 0em"},vertical:!0},r.a.createElement(G.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(G.a.Row,null,r.a.createElement(G.a.Column,{width:8},r.a.createElement(g.a,{as:"h3",style:{fontSize:"2em"}},"Who am I?"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"Jean Valjean... oh no Charles Sheppard. I am an artist born in 1951 in Paris, France where I attended the \xc9cole Nationale Sup\xe9rieure des Beaux-arts. I work primarily in acrylic and pastel."),r.a.createElement(g.a,{as:"h3",style:{fontSize:"2em"}},"Besides painting"),r.a.createElement("p",{style:{fontSize:"1.33em"}},"My great passions are: my family and rugby. If not painting, you may find me wandering the streets pondering the great questions of life; Please approach cautiously and gently point me in the direction of the 99th and Winchester.")),r.a.createElement(G.a.Column,{floated:"right",width:6},r.a.createElement(x.a,{bordered:!0,rounded:!0,size:"large",src:"../../images/other/charles.jpg"})))))),r.a.createElement(h.Element,{name:"Gallery"},r.a.createElement(u.a,{text:!0},r.a.createElement(O.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"3em 0em 3em 0em",textTransform:"uppercase"}},r.a.createElement("a",null,"Gallery"))),r.a.createElement(f.a,{style:{padding:"0em 5em"},vertical:!0},r.a.createElement(G.a,{columns:"equal"},r.a.createElement(G.a.Row,{centered:!0},r.a.createElement(W,null))))),r.a.createElement(h.Element,{name:"Commission"},r.a.createElement(f.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(u.a,{text:!0},r.a.createElement(O.a,{as:"h4",className:"header",horizontal:!0,style:{margin:"1em 0em 3em 0em",textTransform:"uppercase"}},r.a.createElement("a",null,"Commision a Painting")),r.a.createElement(G.a,{container:!0,stackable:!0,verticalAlign:"middle"},r.a.createElement(G.a.Row,{textAlign:"center"},r.a.createElement(G.a.Column,{width:5},r.a.createElement(g.a,{as:"h3",style:{fontSize:"1.5em"}},"Step 1. ",r.a.createElement("br",null),"Share Your Vision"),r.a.createElement("p",{style:{fontSize:"1.00em"}},"Contact Charles at clcssheppard@yahoo.com and describe your vision.")),r.a.createElement(G.a.Column,{width:5},r.a.createElement(g.a,{as:"h3",style:{fontSize:"1.5em"}},"Step 2. ",r.a.createElement("br",null),"Collaborate"),r.a.createElement("p",{style:{fontSize:"1.00em"}},"Meet with Charles to discuss the details of the piece.")),r.a.createElement(G.a.Column,{width:5},r.a.createElement(g.a,{as:"h3",style:{fontSize:"1.5em"}},"Step 3. ",r.a.createElement("br",null),"Creation"),r.a.createElement("p",{style:{fontSize:"1.00em"}},"Work begins on your piece and will typically take 6 to 8 weeks to complete."))))))),r.a.createElement(f.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"}},r.a.createElement(u.a,null,r.a.createElement(G.a,{divided:!0,inverted:!0,stackable:!0},r.a.createElement(G.a.Row,null,r.a.createElement(G.a.Column,{width:3},r.a.createElement(g.a,{inverted:!0,as:"h4",content:"Contact"}),r.a.createElement(T.a,{link:!0,inverted:!0},r.a.createElement(T.a.Item,{as:"a"},"clcssheppard@yahoo.com"))),r.a.createElement(G.a.Column,{width:7},r.a.createElement(g.a,{as:"h4",inverted:!0},"Need a site?"),r.a.createElement("p",null,"contact colinsheppard10@gmail.com")))))))};var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[230,1,2]]]);
//# sourceMappingURL=main.b3e213fa.chunk.js.map