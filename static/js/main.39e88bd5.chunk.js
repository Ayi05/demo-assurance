(this.webpackJsonpassurance=this.webpackJsonpassurance||[]).push([[0],{59:function(e,a,t){e.exports=t(77)},64:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),s=t.n(r),m=(t(64),t(49)),c=t(20),o=t(103),i=function(e){return l.a.createElement("div",{className:"container mt-5 d-flex justify-content-center"},l.a.createElement("div",{className:"col-6 border rounded p-5"},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("h3",null,"Conditions d'Utilisation"),l.a.createElement("p",{className:"text-justify"},"Plusieurs variations de Lorem Ipsum peuvent \xeatre trouv\xe9es ici ou l\xe0, mais la majeure partie d'entre elles a \xe9t\xe9 alt\xe9r\xe9e par l'addition d 'humour ou de mots al\xe9atoires qui ne ressemblent...")),l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("a",{href:"/Soumission"},l.a.createElement(o.a,{variant:"contained",color:"primary",type:"submit"},"Continuer")))))},d=t(45),u=t(46),h=t(51),E=t(47),v=t(52),p=function(e,a,t){var n=function(e,a){var t=900;return"M."===a&&"16 \xe0 20"===e?1*t:"Mme"===a&&"16 \xe0 20"===e?.8*t:"M."===a&&"21 \xe0 24"===e?.75*t:"Mme"===a&&"21 \xe0 24"===e?.6*t:"M."===a&&"25 \xe0 29"===e?.57*t:"Mme"===a&&"25 \xe0 29"===e?.45*t:"M."===a&&"30 \xe0 44"===e?.4*t:"Mme"===a&&"30 \xe0 44"===e?.36*t:"M."===a&&"45 \xe0 64"===e?.29*t:"Mme"===a&&"45 \xe0 64"===e?.28*t:"M."===a&&"65 \xe0 74"===e?.27*t:"Mme"===a&&"65 \xe0 74"===e?.29*t:"M."===a&&"75 et plus"===e?.36*t:"Mme"===a&&"75 et plus"===e?.35*t:void 0},l=t;return"0"===l?n(e,a):"1"===l?1.5*n(e,a):"2"===l?2.1*n(e,a):"3 et +"===l?2.9*n(e,a):void 0},g=function(e){var a=(p(e.age,e.genre,e.experience)/12).toFixed(2),t=(12*a).toFixed(2);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"border rounded px-4 my-4"},l.a.createElement("div",{className:"my-3"},l.a.createElement("h4",{className:"text-uppercase. d-flex justify-content-center"},l.a.createElement("span",{className:"align-self-center."},"Votre Soumission"))),l.a.createElement("div",{class:"card bg-light"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h6",{className:""},e.genre+" "+e.prenom+" "+e.nom))),l.a.createElement("div",{className:"card. bg-light border-light my-3"},l.a.createElement("div",{class:"card-header"},l.a.createElement("h5",null,l.a.createElement("ins",null,e.marque+" "+e.modele+" "+e.annee))),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("span",{className:"h3"},l.a.createElement("strong",null,a," $"),l.a.createElement("span",{className:"text-muted small"},"/mois")),l.a.createElement("span",{className:"text-muted"},"  (ou ",t," $/an)."))))),l.a.createElement("div",{className:"card. bg-light border-light my-3"},l.a.createElement("div",{class:"card-header"},l.a.createElement("h4",null,"Couverture")),l.a.createElement("div",{class:"card-body row."},l.a.createElement("div",{className:"col"},l.a.createElement("p",null,l.a.createElement("span",null,"Responsablit\xe9 Civile :"),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("strong",null,"1 Million")))),l.a.createElement("div",{className:"col"},l.a.createElement("p",null,l.a.createElement("span",null,"Risques de Collision et de Renversement : "),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("strong",null,"Franchise 500 $")))),l.a.createElement("div",{className:"col"},l.a.createElement("p",null,l.a.createElement("span",null,"Tous Risques sauf Collision et Renversement : "),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("strong",null,"Franchise 250 $"))))))),l.a.createElement("div",{className:"row justify-content-center mt-4"},l.a.createElement(o.a,{variant:"outlined",color:"primary",type:"reset",onClick:e.handleReset},"RECOMMENCER")))},N=t(12),f=t(107),y=["16 \xe0 20","21 \xe0 24","25 \xe0 29","30 \xe0 44","45 \xe0 64","65 \xe0 74","75 et plus"],b=["0","1","2","3 et +"],x=function(e){return l.a.createElement("div",{className:"border rounded px-4 my-4"},l.a.createElement("div",{className:"my-3"},l.a.createElement("h4",{className:"text-uppercase d-flex"},l.a.createElement("i",{className:"fas fa-user-circle fa-2x my-2 m-0 text-info mr-2"}),l.a.createElement("span",{className:"align-self-center"},"Conducteur"))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col-3"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Genre",name:"genre",variant:"outlined",value:e.genre,onChange:e.handleGenre,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:""},l.a.createElement("em",null,"Choisir")),l.a.createElement(f.a,{value:"M."},"Homme"),l.a.createElement(f.a,{value:"Mme"},"Femme")))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col"},l.a.createElement(N.TextValidator,{className:"col",size:"small",label:"Pr\xe9nom",placeholder:"Pr\xe9nom",name:"prenom",variant:"outlined",value:e.prenom,onChange:e.handlePrenom,validators:["required"],errorMessages:["Champ Obligatoire!"]})),l.a.createElement("div",{className:"col"},l.a.createElement(N.TextValidator,{className:"col",size:"small",label:"Nom",name:"nom",variant:"outlined",value:e.nom,onChange:e.handleNom,validators:["required"],errorMessages:["Champ Obligatoire!"]}))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Tranche d'\xe2ge",name:"age",variant:"outlined",value:e.age,onChange:e.handleAge,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Tranche d'\xe2ge"),y.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)})))),l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Sinistres en 3 ans",name:"experience",variant:"outlined",value:e.experience,onChange:e.handleExperience,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Sinistres des 3 derni\xe8res ann\xe9es"),b.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)}))))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col"},l.a.createElement(N.TextValidator,{className:"col",size:"small",name:"codeP",label:"Code Postal",variant:"outlined",value:e.codeP,placeholder:"A1B 2C3",onChange:e.handleCodePostal,validators:["required","matchRegexp:^(?!.*[DFIOQU])[A-VXY][0-9][A-Z] ?[0-9][A-Z][0-9]$"],errorMessages:["Champ Obligatoire!","Format Valide: A1B 2C3"]})),l.a.createElement("div",{className:"col"})))},M=function(e){return l.a.createElement("div",{className:"border rounded px-4 my-4"},l.a.createElement("div",{className:"my-3"},l.a.createElement("h4",{className:"text-uppercase d-flex"},l.a.createElement("i",{className:"fas fa-user-circle fa-2x my-2 m-0 text-info mr-2"}),l.a.createElement("span",{className:"align-self-center"},"V\xe9hicule"))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Marque",name:"marque",variant:"outlined",value:e.marque,onChange:e.handleMarque,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Marque"),e.marques.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)})))),l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Modele",name:"modele",variant:"outlined",value:e.modele,onChange:e.handleModele,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Modele"),e.modeles.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)}))))),l.a.createElement("div",{className:"row form-group justify-content-start"},l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Ann\xe9e",name:"annee",variant:"outlined",value:e.annee,onChange:e.handleAnnee,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Ann\xe9e"),e.annees.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)})))),l.a.createElement("div",{className:"col"},l.a.createElement(N.SelectValidator,{className:"col",size:"small",label:"Km/Ann\xe9e",name:"kma",variant:"outlined",value:e.kma,onChange:e.handleKma,validators:["required"],errorMessages:["Champ Obligatoire!"]},l.a.createElement(f.a,{value:"",className:"text-primary"},"Km/Ann\xe9e"),e.kmas.map((function(e){return l.a.createElement(f.a,{key:e,value:e},e)}))))))},C=function(e){return l.a.createElement("div",{className:"container mt-2 d-flex justify-content-center"},l.a.createElement(N.ValidatorForm,{onSubmit:e.handleSubmit,onError:function(e){return console.log(e)}},l.a.createElement(x,{genre:e.genre,prenom:e.prenom,nom:e.nom,age:e.age,codeP:e.codeP,experience:e.experience,handleGenre:e.handleGenre,handlePrenom:e.handlePrenom,handleNom:e.handleNom,handleAge:e.handleAge,handleExperience:e.handleExperience,handleCodePostal:e.handleCodePostal}),l.a.createElement(M,{marques:e.marques,marque:e.marque,modeles:e.modeles,modele:e.modele,annees:e.annees,annee:e.annee,kmas:e.kmas,kma:e.kma,handleMarque:e.handleMarque,handleModele:e.handleModele,handleAnnee:e.handleAnnee,handleKma:e.handleKma}),l.a.createElement("div",{className:"row justify-content-center mt-4"},l.a.createElement(o.a,{variant:"outlined",color:"primary",type:"submit"},"SOUMETTRE"))))},S=["Chevrolet","Ford","Honda","Hyundai","Mazda","Nissan"],q=["Blazer","Camaro","Cruze","Equinox","Silverado","Spark"],k=["EcoSport","Escape","Explorer","F-150","Fiesta","Focus","Fusion","Mustang"],P=["Accord","Civic","Civic Coupe","CR-V","HR-V"],A=["Elantra","Elantra GT","Kona","Kona Electric","Palisade","Santa Fe","Sonata","Tucson"],j=["CX-3","CX-5","CX-9","Mazda3","Mazda6"],w=["Altima","Kicks","Micra","Murano","Quashqai","Rogue","Versa"],F=["2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010"],R=["moins de 10 000 km","10 001 \xe0 20 000 km","20 001 \xe0 35 000 km","plus de 35 000 km"],O=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(h.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={genre:"",prenom:"",nom:"",age:"",experience:"",codeP:"",marque:"",modeles:[],modele:"",annee:"",kma:"",classForm:"py-3",classResult:"py-3 d-none"},t.handleSubmit=function(){t.setState({classResult:"py-3",classForm:"py-3 d-none"})},t.handleReset=function(){t.setState({genre:"",prenom:"",nom:"",age:"",experience:"",codeP:"",marque:"",modeles:[],modele:"",annee:"",kma:"",classResult:"py-3 d-none",classForm:"py-3"})},t.handleGenre=function(e){t.setState({genre:e.target.value})},t.handlePrenom=function(e){var a=e.target.value;t.setState({prenom:a})},t.handleNom=function(e){t.setState({nom:e.target.value})},t.handleAge=function(e){t.setState({age:e.target.value})},t.handleExperience=function(e){t.setState({experience:e.target.value})},t.handleCodePostal=function(e){t.setState({codeP:e.target.value})},t.handleMarque=function(e){switch(e.target.value){case"Chevrolet":t.setState({modeles:q});break;case"Ford":t.setState({modeles:k});break;case"Honda":t.setState({modeles:P});break;case"Hyundai":t.setState({modeles:A});break;case"Mazda":t.setState({modeles:j});break;case"Nissan":t.setState({modeles:w})}t.setState({marque:e.target.value})},t.handleModele=function(e){t.setState({modele:e.target.value})},t.handleAnnee=function(e){t.setState({annee:e.target.value})},t.handleKma=function(e){t.setState({kma:e.target.value})},t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},l.a.createElement("div",{className:this.state.classForm},l.a.createElement(C,{ref:"form",handleSubmit:this.handleSubmit,genre:this.state.genre,prenom:this.state.prenom,nom:this.state.nom,age:this.state.age,codeP:this.state.codeP,experience:this.state.experience,handleGenre:this.handleGenre,handlePrenom:this.handlePrenom,handleNom:this.handleNom,handleAge:this.handleAge,handleExperience:this.handleExperience,handleCodePostal:this.handleCodePostal,marques:S,annees:F,kmas:R,marque:this.state.marque,modeles:this.state.modeles,modele:this.state.modele,annee:this.state.annee,kma:this.state.kma,handleMarque:this.handleMarque,handleModele:this.handleModele,handleAnnee:this.handleAnnee,handleKma:this.handleKma})),l.a.createElement("div",{className:this.state.classResult},l.a.createElement(g,{genre:this.state.genre,prenom:this.state.prenom,nom:this.state.nom,age:this.state.age,experience:this.state.experience,marque:this.state.marque,modele:this.state.modele,annee:this.state.annee,handleReset:this.handleReset}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement((function(){return l.a.createElement(m.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/",component:i}),l.a.createElement(c.a,{path:"/Soumission",component:O})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.39e88bd5.chunk.js.map