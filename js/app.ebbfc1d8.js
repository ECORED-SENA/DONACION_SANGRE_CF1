(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-006c2fad":"554b0017","chunk-0a845023":"a8c58b7b","chunk-0c2cdd6f":"84204852","chunk-1f6580f4":"d716a10f","chunk-2d208d90":"94c7f2e5","chunk-2d21d0e2":"4c1e9706","chunk-2e80bb9a":"e42f0d27","chunk-30b0e353":"5071ea21","chunk-55ae8da7":"09c3ae1d","chunk-66b189cb":"ff5a51ca","chunk-a10f0b1c":"e86e7e64","chunk-adbc4b64":"28a9068e","chunk-b77cb95c":"87ea30e3","chunk-ba0f9ef8":"08601b2c","chunk-c796899c":"5ee4f487","chunk-d0d4f690":"0193dd9a","chunk-f3d500be":"0bea2511",comple:"601fd381",creditos:"4aa050ec",glosario:"41997428",intro:"7bd6eb3e",referencias:"0fc68d8d",tema1:"6428bcf4",tema2:"596739c8",tema3:"ad6ef880"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-006c2fad":1,"chunk-0a845023":1,"chunk-0c2cdd6f":1,"chunk-1f6580f4":1,"chunk-30b0e353":1,"chunk-55ae8da7":1,"chunk-66b189cb":1,"chunk-a10f0b1c":1,"chunk-adbc4b64":1,"chunk-b77cb95c":1,"chunk-ba0f9ef8":1,"chunk-d0d4f690":1,"chunk-f3d500be":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{"chunk-006c2fad":"77c731f3","chunk-0a845023":"eafce39a","chunk-0c2cdd6f":"8e6a1544","chunk-1f6580f4":"c1f4912e","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-30b0e353":"912c0549","chunk-55ae8da7":"a4ade0d1","chunk-66b189cb":"a4ade0d1","chunk-a10f0b1c":"a4ade0d1","chunk-adbc4b64":"5dc3a7d0","chunk-b77cb95c":"a4ade0d1","chunk-ba0f9ef8":"a4ade0d1","chunk-c796899c":"31d6cfe0","chunk-d0d4f690":"34252f46","chunk-f3d500be":"9478c91c",comple:"41303f02",creditos:"5dc3a7d0",glosario:"1438a67f",intro:"0e433876",referencias:"509d8b57",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var d=t[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view"),n("footer")],1)],1),n("BarraAvance")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(n("cf25"),n("2877")),d=Object(s["a"])(c,i,r,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),m=n("ae58"),p=n("7e58");o["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad/:index?",name:"actividad"},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}return{x:0,y:0,behavior:"auto"}}}),g=f,b=n("1c2c"),h=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Normatividad en promoción de la donación de sangre",descripcionCurso:"En el presente componente, el aprendiz podrá identificar la normatividad asociada con el área de promoción de la donación voluntaria y habitual de sangre, incluida la revisión de los lineamientos y boletines técnicos publicados a nivel nacional; por otro lado, el aprendiz también podrá comprender, cómo está constituida la red de sangre en Colombia y cuál es la función que cumple cada uno de los actores que la conforman. De esta manera, contarán con lo necesario a nivel normativo, quienes deseen desempeñar funciones en promoción de la donación de sangre.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Introducción al marco normativo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Decreto 1571 de 1993",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Resolución 0901 de 1996",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Circulares",hash:"t_1_3"},{icono:"far fa-play-circle",numero:"1.4",titulo:"Lineamientos",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Boletines técnicos",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Estándares de trabajo para servicios de sangre (OPS, 2020)",hash:"t_1_6"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",regional:"Dirección general"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Instituto Nacional de Salud"},{nombre:"Magda Juliana Rodríguez Rodríguez",cargo:"Experta temática",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Mauricio Hernán Bonilla Contreras",cargo:"Experto temático",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Olga Maritza Berrio Pérez",cargo:"Experta temática",centro:"Red Nacional Bancos de Sangre y Servicios de Transfusión."},{nombre:"Maryuri Agudelo Franco",cargo:"Diseñadora Instruccional",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Evaluador instruccional",centro:"Centro para la Industria y la Comunicación Gráfica",regional:"Regional Distrito Capital"},{nombre:"María Isabel Román Rueda",cargo:"Revisora de estilo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte Organizacional"},{nombre:["Camilo Andrés Villamizar Lizcano","José Jaime Luis Tang Pinzón","Maria Camila Ovalle Ospina","María Natalia Maldonado Delgado","Wilson Andres Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Diseño web y Producción Audiovisual",centro:"Centro Industrial Del Diseño Y La Manufactura",regional:"Regional Santander"},{nombre:"Gustavo Adolfo Marún Suárez",cargo:"Desarrollo Front-End"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Instituto Nacional de Salud. (2015). Circular 003 de 2015. Recomendaciones para afrontar la insuficiencia de glóbulos rojos y plaquetas en la época decembrina y post decembrina: ",link:"https://www.ins.gov.co/BibliotecaDigital/Circular-003-de-2015.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2011). Boletín técnico. Promoción de la donación voluntaria y habitual de sangre como impacto en la seguridad transfusional de 2011.",link:"https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-como-impacto-en-seguridad-transfusional.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2019). Boletín técnico. Mecanismos de respuesta de la Red Nacional de Bancos de Sangre y Servicios de Transfusión ante situaciones de riesgo de desastre, emergencia y desastre en Colombia de 2019",link:"https://www.ins.gov.co/BibliotecaDigital/mecanismos-de-respuesta-red-bancos-de-sangre-y-servicios-de-transfusion-ante-situaciones-de-emergencia.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2019). Boletín técnico. Colecta de sangre en puestos móviles.",link:"https://www.ins.gov.co/BibliotecaDigital/colecta-de-sangre-en-puestos-moviles.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2018). Boletín técnico. Estrategias asociadas a promoción de la donación de sangre de 2018. ",link:"https://www.ins.gov.co/BibliotecaDigital/estrategias-asociadas-a-promocion-de-la-donacion-de-sangre.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2019). Boletín técnico. Notificación de tres casos de infección transmitida por transfusión (ITT) - Virus de Inmunodeficiencia Humana (VIH) de 2019.",link:"https://www.ins.gov.co/BibliotecaDigital/notificacion-casos-infeccion-transmitida-por-transfusion-virus-inmunodeficiencia-humana.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2016). Boletín técnico. Resumen casos de donación coaccionada 2016.",link:"https://www.ins.gov.co/BibliotecaDigital/resumen-casos-donacion-coaccionada-2016.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2006). Circular 001 de 2006. Donación voluntaria y altruista de sangre",link:"https://www.ins.gov.co/BibliotecaDigital/Circular-001-de-2006.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2019). Lineamiento Promoción de la donación de sangre y componentes anatómicos de 2019.",link:"https://www.ins.gov.co/BibliotecaDigital/promocion-donacion-sangre-y-componentes-anatomicos.pdf"},{referencia:"Instituto Nacional de Salud – INS. (2018). Lineamiento Selección de donantes de sangre de 2018. ",link:"https://www.ins.gov.co/BibliotecaDigital/seleccion-donantes-2018.pdf"},{referencia:"Ministerio de Salud (1993). Decreto 1571 de 1993. Por el cual se reglamenta parcialmente el título IX de la Ley 09 de 1979, en cuanto a funcionamiento de establecimientos dedicados a la extracción, procesamiento, conservación y transporte de sangre total o de sus hemoderivados, se crean la red nacional de bancos de sangre y el consejo nacional de bancos de sangre y se dictan otras disposiciones sobre la materia",link:"https://www.ins.gov.co/BibliotecaDigital/Decreto-1571-de-1993.pdf"},{referencia:"Ministerio de Salud. (1996). Resolución 0901 de 1996. Manual de normas técnicas, administrativas y de procedimientos en bancos de sangre.",link:"https://www.ins.gov.co/BibliotecaDigital/Resolucion-0901-de-1996.pdf"},{referencia:"Organización Panamericana de Salud – OPS. (2013). Estándar de trabajo para servicios de sangre. Organización Panamericana de Salud.",link:""}],glosario:[{termino:"Banco de sangre",significado:"establecimiento o dependencia con licencia sanitaria de funcionamiento para adelantar actividades relacionadas con la obtención, procesamiento y almacenamiento de sangre humana destinada a la transfusión de la sangre total o en componentes separados, a procedimientos de aféresis y a otros procedimientos preventivos, terapéuticos y de investigación. Tiene como uno de sus propósitos asegurar la calidad de la sangre y sus derivados."},{termino:"Donante de sangre",significado:"persona que, previo el cumplimiento de los requisitos, da, sin retribución económica y a título gratuito y para fines preventivos, terapéuticos, de diagnóstico o de investigación, una porción de su sangre en forma voluntaria, libre y consciente."},{termino:"Red Nacional de Bancos de Sangre",significado:"sistema de coordinación técnico, administrativo y asistencial que permiten desarrollar, organizar, supervisar y evaluar, con el propósito de garantizar el suministro suficiente, oportuno y seguro de la sangre y sus hemoderivados en el territorio nacional."},{termino:"Hemocomponente",significado:"parte que se obtiene mediante la separación de una unidad de sangre total, utilizando medios físicos o mecánicos, tales como sedimentación, centrifugación, congelación o filtración."},{termino:"Promoción de la donación de sangre",significado:"acciones de información, sensibilización y educación sobre la donación de sangre y conductas de autocuidado ofrecidas por el personal de los bancos de sangre a la población en general, con el objetivo de generar cultura de donación y cuyo mensaje va enfocado a obtener sangre y hemocomponentes provenientes de personas que tienen un bajo riesgo de transmitir infecciones, además de contar con una provisión de sangre disponible para atender las demandas transfusionales de las diferentes instituciones hospitalarias; así mismo, pretende fortalecer la responsabilidad social en los ciudadanos y las acciones en salud pública, que conlleven a que el sistema transfusional sea eficaz y eficiente."},{termino:"Donante voluntario",significado:"persona que dona sangre o componentes por su propia voluntad y no recibe ningún pago, ya sea en forma de dinero en efectivo o en especie que podría ser considerado un sustituto del dinero. Esto incluiría el tiempo fuera del trabajo que no sea razonablemente necesario para la donación y el viaje. Pequeños suvenires, refrigerios y reembolsos de los gastos directos asociados al viaje/transportación son compatibles con este tipo de donación"},{termino:"Donante voluntario habitual, repetitiva / de repetición",significado:"persona que dona sangre o componentes por lo menos 2 veces en los últimos 12 meses, por su propia voluntad y no recibe ningún pago, ya sea en forma de dinero en efectivo o en especie que podría ser considerado un sustituto del dinero."},{termino:"Donante coaccionado o por reposición",significado:"persona que dona sangre o componentes, previo proceso de sensibilización y educación, cuando es requerida por un miembro de su familia o comunidad sin que haya exigencia de por medio para la prestación del servicio."}],complementario:[{texto:"Organización Panamericana de la salud (2002). Curso de gestión de calidad para servicios de sangre. OPS.",tipo:"Guía",link:"downloads/complementario/OPS-Curso-Gestion-Calidad-Sangre-2002.pdf"},{texto:"Organización Panamericana de la Salud. (2005). Manual hagamos la diferencia. OPS.",tipo:"Manual",link:"downloads/complementario/Hagamosdiferencia-spa.pdf"},{texto:"Organización Mundial de la Salud. (2005). Propuesta para el establecimiento del Día Mundial del Donante de Sangre. OPS.",tipo:"Orden",link:"downloads/complementario/WHA58_13-sp.pdf"},{texto:"Organización Panamericana de la Salud. (2006). Guía metodológica para educadores comunitarios. OPS",tipo:"Guía",link:"downloads/complementario/Dadores_de_vida.pdf"}]});o["a"].prototype.$config=h,o["a"].config.productionTip=!1,new o["a"]({router:g,store:b["a"],render:function(e){return e(l)}}).$mount("#app")},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.15dbc9c9.svg"},cf25:function(e,a,n){"use strict";n("fea6")},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.9d81e287.png"},fea6:function(e,a,n){}});
//# sourceMappingURL=app.ebbfc1d8.js.map