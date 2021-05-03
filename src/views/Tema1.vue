<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
        .titulo-principal__numero
          .h3 1
        .h3 Introducción al marco normativo
            
    .cajon.cajon--gris.p-4.mb-5.mb-lg-0
      .row.justify-content-center.align-items-center
        .col-auto
          img(src="@/assets/curso/images/pages/ilustraciones/ico_1.svg", alt="", style="width:100px; display:left; margin:auto 0;")
        .col
          p.mb-0 Es importante recordar que el desconocimiento de la norma <b>no exime a las personas de las responsabilidades que tienen con respecto a las labores que les han sido encomendadas, </b>según el rol desempeñado. 
    

    p.mt-5 El compromiso técnico que tienen los promotores de la donación con respecto a la seguridad transfusional no es inferior al que tienen los responsables de otras áreas del banco de sangre; de hecho, <b>su rol es determinante para la obtención de hemocomponentes con un bajo riesgo para la transmisión de infecciones a través de la transfusión.</b> Por ello, quienes desempeñan esta labor deben conocer perfectamente los criterios establecidos para su buen desempeño, evitando consecuencias legales, éticas, económicas, pero, sobre todo, para cumplir con la finalidad de la transfusión:<b> brindar esperanza de vida.</b>
    
    .row.mt-5
      .col-md-6
        .col-lg-6
        .bloque-texto-c.p-4
      
          .h5.mb-2.mt-3 La promoción de la donación de sangre ha sido catalogada internacionalmente como el pilar fundamental de la seguridad transfusional
          span 
      .col-md-5.text-jumbotron-padding
        p El conocimiento normativo permite a quienes laboran, o desean laborar en los bancos de sangre, conocer las acciones que determinan la ruta a seguir al momento de llevar a cabo cada una de las actividades enmarcadas en los diferentes procesos. 
        br
        p Teniendo en cuenta que la promoción de la donación de sangre ha sido catalogada internacionalmente como el pilar fundamental de la seguridad transfusional, <b>quienes desempeñen esta labor deben conocer los aspectos normativos y así contribuir con el fortalecimiento de la salud pública del país.</b>

    p.mt-5 En Colombia, los criterios normativos en promoción de la donación de sangre, van desde decretos hasta boletines técnicos, los cuales se tratarán en el presente componente. 
    
    .crd_A.crd_A--azul.p-4.p-md-5.mb-5.mt-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/componentes/actividad.svg")
        .col-md.col-lg-6
          .h2 ¿Cómo está conformada la estructura de la Red Nacional de Bancos de Sangre y Servicios de Transfusión?
          p.mb-4 A continuación haga clic en el botón descargar para visualizar la inforgrafia
          
          a.boton.boton--b(:href="obtenerLink('/downloads/infografia/infografia_01.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    #t_1_1.h4.mt-3 1.1 Decreto 1571 de 1993
    .titulo-segundo
    
    p.mb-5 El Decreto 1571 de 1993 es la norma que rige a los bancos de sangre y servicios de transfusión en Colombia, y ha definido al donante de sangre como:


    .row.mb-5.justify-content-center.align-items-center
      .col-12.col-md-8.col-xl-6
        .bloque-texto-b.p-4 
          .bloque-texto-b__texto.h5.mb-0 Persona que, previo cumplimiento de los requisitos señalados en este Decreto, da, sin retribución económica y a título gratuito y para fines preventivos, terapéuticos, de diagnóstico o de investigación, una porción de su sangre en forma voluntaria, libre y consciente.
          p.z-index Ministerio de Salud, 
            br
            |2020, p.2

    p.mt-5 En concordancia, si una persona manifiesta su intención de donar sangre, solo cumple con esta definición cuando lo hace sin ningún tipo de presión o coacción, siendo consciente de que sus conductas de vida permitirán salvar o mejorar la calidad de vida de quienes requieren de una transfusión. Es por esto que #[strong el promotor de la donación de sangre es el directamente responsable de la calidad de la información que les brinda a los ciudadanos para que dicha definición se cumpla], de lo contrario estaría en contra de lo establecido en la normatividad, vulnerando la seguridad de los pacientes, entre los cuales se encuentran niños que apenas están comenzando a vivir. 
    
    
    .row.mt-4
      .col-lg
        p.mb-4 Así mismo, este Decreto define a un #[strong banco de sangre] como:
        p.mb-4 #[strong "Todo establecimiento o dependencia con Licencia Sanitaria de Funcionamiento para adelantar actividades relacionadas con la obtención, procesamiento y almacenamiento de sangre humana destinada a la transfusión de la sangre total o en componentes separados, a procedimientos de aféresis y a otros procedimientos preventivos, terapéuticos y de investigación. Tiene como uno de sus propósitos asegurar la calidad de la sangre y sus derivados.]
        p Ministerio de Salud, 2020, p. 1
      .col-lg-4
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_2.png", alt="alt", style="width: 200px; display:block; margin:0 auto;")       

    p.mt-4 De acuerdo con lo anterior, las acciones realizadas por los bancos de sangre <b>deben estar centradas en reducir el riesgo de transmitir </b>infecciones a través de la transfusión, aunque día a día se requieren fortalecer las pruebas de tamizaje utilizadas para la detección de agentes infecciosos en los bancos de sangre (VIH, hepatitis B, hepatitis C, Chagas, sífilis, HTLV, core), el área de promoción debe ser una prioridad técnica para los actores que hacen parte de la medicina transfusional, ya que esta determina en buena medida si la sangre proviene de un donante de alto o bajo riesgo, además de la disponibilidad de dicho suministro.
    br
    p.mt-2 Igualmente, el artículo 4° del Decreto 1571 de 1993 manifiesta que:

    
    .row.mb-5.justify-content-center.align-items-center.mt-3
      .col-lg-6.mb-5.mb-lg-0
        .bloque-texto-b.p-5
          .bloque-texto-b__texto.h5.mb-0 La sangre humana solo podrá ser extraída y utilizada sin ánimo de lucro, con fines preventivos, terapéuticos, de diagnóstico en seres humanos o para investigaciones científicas.
          br
          span.z-index Ministerio de Salud,<br> 2020, p. 3

    p.mt-4 El artículo 28 del Decreto 1571 de 1993, expresa que: <b>“Por ser la salud un bien de interés público, donar sangre es un deber de solidaridad social que tienen las personas y, por ningún motivo, podrá ser remunerado”</b> así mismo, se sentencia que <b>“el acto de donación sea consciente, expreso y voluntario por parte del donante”</b> (Ministerio de Salud, 2020, p. 10). Esto ratifica que, la sangre donada con fines transfusionales solo pueda estar enmarcada bajo aspectos de tipo social, voluntarios y altruistas. 
    
    .cajon.cajon--gris.p-4.mb-5.mb-lg-0.mt-5    
      p.mb-0 Por lo tanto, quienes ejerzan funciones de promoción de la donación de sangre, deben informar adecuadamente a las personas, <b>utilizando mensajes claros, precisos, basados en conceptos técnicos que conlleven a la seguridad transfusional,</b> y que estos se den en ambientes que les permita tomar una decisión voluntaria, consciente, madura y responsable sobre el acto de donar.

    #t_1_2.h4.mt-5 1.2 Resolución 0901 de 1996
    .titulo-segundo

    p.mt-3 El Manual de normas técnicas, administrativas y de procedimientos en bancos de sangre, ha sido publicado a través de la Resolución 0901 de 1996 (Ministerio de Salud, 2020). Tiene como objetivos específicos,<b> proteger tanto a los donantes como a los receptores de sangre, crear y mantener la garantía de la calidad de la sangre y sus hemocomponentes.</b>

    .row.justify-content-center.align-items-center.mt-4
      .col-auto.me-5
        p.mb-3 En el capítulo 3 de dicha resolución, se expresa que:
        span.etiqueta--roja.mb-4 <b>“Donar sangre es un deber y un #[br]derecho de la solidaridad social que #[br] tienen las personas”</b> 
        br
        br       
        p (Ministerio de Salud, 2020, p. 10).
      .col-auto 
        img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/img_3.png").img-fluid

  
    p.mt-4 La anterior afirmación que da a conocer que es un deber social el ejercer la donación de sangre, pero, así mismo, expresa que los donantes son sujetos de derechos. También se determina que: 

    .bloque-texto-a.p-4.p-md-5.mt-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5.mb-0 Se debe advertir al donante sobre los eventuales riesgos inherentes a la extracción de sangre.
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Todos los donantes potenciales deben recibir materiales educativos y tener la posibilidad de leer carteles o mensajes, referentes a los riesgos de enfermedades transmisibles por transfusión, con el fin de <b>darles la opción de autoexcluirse de donar o de evitar que la unidad recolectada sea utilizada con fines transfusionales (Ministerio de Salud, 2020, p. 10).</b>

    p.my-5 Por ello es responsabilidad de los bancos de sangre <b> contar con la logística y herramientas necesarias para que los donantes potenciales sean bien informados,</b> y que la invitación a donar no esté solo centrada en la edad y peso mínimo requerido, puesto que para cumplir el objetivo de reducir el riesgo transfusional se debe ir más allá, es decir, abordar aspectos relacionados con las conductas de vida que conllevarían a que una persona tenga una alta probabilidad de estar infectada y que si acude a donar, podría estar transmitiendo dichas infecciones a otros que apenas están empezando a vivir o que tienen todas sus esperanzas de vida en la transfusión. <b>Es fundamental que el promotor conozca, sepa explicar y le dé a conocer a cada donante abordado, el concepto de ventana inmunológica.</b>

    .crd_A.crd_A--azul
      .row.justify-content-center.align-items-center.mt-3
        .col-auto.mb-4.mb-xl-0
            img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/img_4.png").img-fluid
        .col-12.col-xl
          p.text-jumbotron-padding Así, el promotor informa adecuadamente y se le permite al donante revisar la posibilidad de autoexcluirse en caso de considerar tener un <b>factor de riesgo que podría afectar al o los pacientes que pudiesen ser transfundidos con la sangre donada,</b> y que además perciba la autoexclusión como una acción de responsabilidad social. 

          p.text-jumbotron-padding Así mismo, al darle a conocer al donante los cuidados que debe tener luego de la donación, <b>se le da a conocer que su bienestar es vital para los bancos de sangre,</b> lo cual genera confianza en la población.
    
    #t_1_3.h4.mt-5 1.3 Circulares
    .titulo-segundo
    
      
    .cajon.cajon--gris.p-4.mb-5-lg-0.mt-5
      .row.align-items-center
        .col-auto
          figure
            img(src="@/assets/curso/images/pages/ilustraciones/ico_30.svg", alt="alt", style="width:100px;")          
        .col
          p.mb-0 Son aquellos documentos que se emplean para transmitir instrucciones y decisiones, las cuales deben ser tenidas en cuenta durante la gestión realizada por parte de los actores a los cuales les sea aplicables.

          
    p.mt-5 Con el fin de fortalecer los aspectos relacionados con la promoción de la donación, el <b>Instituto Nacional de Salud ha emitido algunas circulares en las cuales se involucran algunas consideraciones que tienen que ver con la captación de los donantes de sangre.</b> El origen de cada uno de estos documentos radica en las necesidades evidenciadas en la práctica. A continuación, se revisarán algunas circulares que son de interés para el tema objeto del presente curso.

    
    .h5.mt-5 1.3.1. Circular 001 de 2006          

    p.mb-4 Debido a que la donación de sangre se debe realizar bajo condiciones de tipo social, voluntaria y no remunerada, #[strong la Circular 001 de 2006 emitida por el Instituto Nacional de Salud], le ratifica a los actores de la red lo expresado en el Decreto 1571 de 1993 y la Resolución 0901 de 1996, enunciando que la donación de sangre se debe dar bajo acciones sociales, que #[strong dicha decisión debe ser libre, consciente y no coaccionada (INS, 2020).]

    .row.justify-content-center.align-items-center.mb-5
      .col-auto     
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_5.png", alt="alt", style="width:1500px;")        

    .cajon.cajon--gris.p-4.mb-4         
      p Además, manifiesta que <b> la donación coaccionada o de reposición, va en contra de la cultura de la donación </b> y, por lo tanto, no se debe ofrecer nada a cambio, como por ejemplo, el presionar o exigir donantes a los familiares y amigos de los pacientes para la prestación de servicios de salud (INS, 2020).
      

    p.mt-3 Así mismo, esta circular aclara que el carné de donante de sangre <b> no es un seguro para poder acceder a obtener gratuitamente hemocomponentes en caso de que sean requeridos por el donante o alguno de sus familiares;</b> se concibe como el soporte que evidencia que dicha persona es solidaria, además tiene como propósito recordarle la fecha de la próxima donación. Finalmente, se puntualiza que <b> se deben adoptar medidas para que las personas no sigan concibiendo la donación como la obtención de un beneficio tangible</b> (INS, 2020).

    .h5.mt-5 Circular 054 de 2014

    p.mt-4 En el 2014 el Instituto Nacional de Salud emite la Circular 054, la cual tiene como objetivo <b> proporcionar las líneas para mejorar el acceso a sangre y componentes sanguíneos,</b> esto en pro de favorecer el acceso, cobertura, seguridad y calidad de los componentes sanguíneos en el territorio nacional (INS, 2020). 

    p.my-3 Allí se relacionan los niveles y estructura y funcionalidad operativa de la red de sangre:

    .row.justify-content-center.mb-5
      .col-12.col-xl-8
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/images/pages/ilustraciones/ico_4.svg", alt="alt", style="width:70px;")
          .col
            p #[strong Banco de sangre]
              br
              | Puesto fijo de recolección de sangre.
              br
              | Puesto móvil de recolección de sangre.
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/images/pages/ilustraciones/ico_5.svg", alt="alt", style="width:70px;")
          .col
            p #[strong Servicio de transfusión sanguínea]
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/images/pages/ilustraciones/ico_6.svg", alt="alt", style="width:70px;")
          .col
            p #[strong Coordinaciones departamentales y distrital de sangre]
        hr
        .row.align-items-center
          .col-auto
            figure
              img(src="@/assets/curso/images/pages/ilustraciones/ico_7.svg", alt="alt", style="width:70px;")
          .col
            p #[strong Coordinación Nacional de la Red]
        hr 

    .cajon.cajon--gris.p-4.mb-4
      p Allí también se ratifica que el <b> Instituto Nacional de Salud ejerce su rol como Coordinador de la Red Nacional de bancos de sangre </b> y que las Secretarias de Salud Departamentales (SSD) ejercerán la coordinación territorial de la misma.
    
    .row.justify-content-center.align-items-center.mt-3
      .col-auto 
          img.img-a.my-3(src="@/assets/curso/images/pages/ilustraciones/img_9.png").img-fluid
      .col-12.col-lg
        p.mt-3 Que en el cumplimiento de su objeto de red estos actores a nivel nacional y territorial #[strong son responsables de planificar y promover la donación de sangre en el ámbito territorial y nacional, planificar la cobertura de necesidades y la distribución de sangre y hemocomponentes] de todas las instituciones públicas o privadas que requieran sangre y componentes y generar mecanismos de coordinación de los bancos de sangre para lograr acceso, cobertura y oportunidad y el uso más adecuado de la sangre.


    p.mt-3 Que la sangre es un bien público cuyo único donante es el ser humano. Por tanto, no debe ser sujeto a un uso inadecuado y debe captarse con base en las necesidades de sangre. La sangre no está sujeta a comercialización y no debe percibirse lucro por este servicio. Por tanto, #[strong la responsabilidad de la planificación y organización de la red de bancos necesaria para abastecer las necesidades del país está a cargo del Estado (INS, 2020).]

    p.mt-3 Así mismo, <b>da claridad en el orden y organización de los procesos de captación y distribución de sangre y componentes </b>dentro del territorio nacional.
    
    .hr--blank

    h5 Bancos de sangre
    p.mb-5 Estos deberán cumplir con lo relacionado en la Circular, entre otros aspectos:

    hr
    .row.align-items-center
      .col-auto
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/ico_9.svg", alt="alt", style="width:70px;")
      .col
        p Ceñirse al programa de promoción de la donación voluntaria y habitual de sangre, que desarrolle la Secretaría de Salud Departamental quien ejerce la coordinación territorial de la Red de Sangre acorde con los lineamientos de la red nacional.
    hr
    .row.align-items-center
      .col-auto
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/ico_10.svg", alt="alt", style="width:70px;")
      .col
        p Destinar la sangre colectada a cubrir, en primer lugar, las necesidades previstas en el departamento donde realizan la colecta.
    hr
    .row.align-items-center
      .col-auto
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/ico_11.svg", alt="alt", style="width:70px;")
      .col
        p Participar en el programa local de plan territorial de emergencias y desastres de la Secretaría de Salud Departamental (INS, 2020).
    hr
    p.mb-5 Además, en la circular se manifiesta que un banco de sangre <b> no puede realizar jornadas de donación en un departamento diferente a su área de influencia.</b> Para poder ingresar, debe gestionar un permiso con la dirección territorial, es decir, con la secretaría de salud departamental, en el cual se debe comprometer con dicha institución, en que la sangre que sea colectada será distribuida en los servicios de transfusión de ese departamento. La secretaría de salud tiene la autonomía de decidir si le permite o no el ingreso,<b>si no lo permite, el banco de sangre no podría realizar dicha jornada de donación.</b> Lo anterior aplica si es para una jornada móvil o para un puesto fijo de colecta.

    .bloque-texto-a.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          .h5.mb-0 Secretarías de salud departamentales quien ejerce la coordinación territorial de la Red de Sangre y Coordinación Red Nacional Bancos de Sangre y Servicios transfusionales.
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p <b> La Red Nacional de Bancos de Sangre del INS </b> en conjunto con las secretarías de salud departamentales quien ejerce la coordinación territorial de la <b> Red de Sangre, estimarán las necesidades de sangre a colectar anualmente,</b> para ello tendrán en cuenta los históricos de colecta de cada uno de los bancos de sangre y las transfusiones, así como la demanda satisfecha en los servicios transfusionales de su departamento, de acuerdo con los proveedores definidos en cada institución. Esta será la base para la autorización de colecta o distribución de sangre y sus componentes (INS, 2020).
            
    p.mb-4 Así mismo, realizarán seguimiento a indicadores de la red departamental:

    .cajon.cajon--gris.p-4.mb-5
      p.mb-0 Considerando que las necesidades de sangre y su cobertura definen si es necesario o no autorizar la apertura de bancos de sangre y puestos fijos o móviles de captación de sangre, son las SSD quien ejerce la coordinación territorial de la Red de Sangre, las que inicialmente evaluarán su viabilidad (INS, 2020).

    h5 Coordinación Red Nacional Bancos de Sangre y Servicios Transfusionales – INS
    br
    p Evaluará los criterios de organización y planificación de la Red cuando se presenten solicitudes de apertura de un puesto de captación (fijo o móvil) o un nuevo banco de sangre, emitirá un Concepto de viabilidad que podrá ser favorable o no: 
    br
    p.mb-5 En los dos casos se informará al Invima, a la SSD quien ejerce la coordinación territorial, de la Red de Sangre y al solicitante. #[strong Para la expedición de dicho concepto se deben revisar los criterios planteados por las secretarías de salud departamentales] quien ejerce la coordinación territorial de la Red de Sangre. 

    .row.mb-5
      .col-12.col-lg-5.mb-4.mb-lg-0     
        .bloque-texto-c.p-4      
          .h5.mb-3 El Invima realizará visita de seguimiento periódico posterior al inicio de las actividades del banco de sangre.
      .col-12.col-lg
        p Para los casos en los que el concepto sea favorable, <b>la Coordinación de la Red Nacional de Bancos de Sangre procederá a otorgar el Código Nacional del Banco de Sangre </b> y su respectiva inscripción en la Red Nacional de Bancos de Sangre, con base en el concepto que emita el Invima como autoridad sanitaria de Inspección Vigilancia y Control, respecto al cumplimiento de requisitos de acuerdo con la normatividad vigente que rigen para bancos de sangre. Cumplido este trámite, el Banco de Sangre podrá iniciar sus actividades. El Invima realizará visita de seguimiento periódico posterior al inicio de las actividades del banco de sangre (INS, 2020).

    .h5.mb-4 Circular 003 de 2015

    p.mb-5 En el 2015 el Instituto Nacional de Salud emite oficialmente la Circular 003, la cual tiene como propósito <b> dar a conocer algunas recomendaciones a los actores de la red para prevenir o mitigar la deficiencia de hemocomponentes en temporada decembrina y vacacional, </b> ya que, debido a las celebraciones y actividades relacionadas con la época, se ha evidenciado una baja en la colecta de sangre, lo cual puede impactar en la seguridad de los pacientes (INS, 2020). 

    .row.justify-content-center.align-items-center.mb-5
      .col-auto     
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_1.png", alt="alt", style="width:1200px;")       

    p.mb-4 Entre las recomendaciones dadas con respecto a promoción de la donación de sangre, están:

    .crd_A.crd_A--gris.mb-5
      .row.justify-content-center.align-items-center
        .col
          .h6.mb-4 #[span.etiqueta--roja Coordinación departamental:]    
          p Promover la donación voluntaria y habitual de sangre en la población, evitando los llamados alarmantes e inesperados, ya que comprometen la seguridad transfusional.
          hr
          p Requerir apoyo al Comité Departamental de Promoción (conformado por la dirección territorial y los promotores que lideran dicha área en cada uno de los bancos de sangre del departamento), esto con el fin de convocar a los donantes de sangre habituales y aquellos que hayan donado en los últimos 12 meses.
          hr
          p.mb-5 Solicitud de apoyo al área de comunicaciones de la gobernación departamental para la difusión de mensajes de información, sensibilización y educación sobre la donación voluntaria y habitual de sangre, a través de las redes sociales (INS, 2020).         

          .h6.mb-4 #[span.etiqueta--roja Bancos de sangre:]
          p Abastecerse con los insumos y la logística necesaria para la colecta de sangre.
          hr
          p Establecer estrategias que conlleven a sensibilizar a los donantes de sangre.
          hr
          p Contar con personal capacitado para realizar promoción de la donación de sangre (INS, 2020).  

    p.mb-5 Los actores de la red deben prever aquella época en la que la deficiencia de hemocomponentes se hace más evidente. Por lo tanto, deberán crear estrategias educativas, a través de las cuales, se den a conocer a la población,<b> la importancia de donar sangre de manera voluntaria y frecuente para poder contar con un suministro oportuno de hemocomponentes, </b> pero, sobre todo, de bajo riesgo. El mensaje dado no debe ser alarmante y siempre basado en aspectos positivos.     
    
    #t_1_4.titulo-segundo
      .h4 1.4 Lineamientos   

    p.mb-4 Dada la necesidad de fortalecer los aspectos técnicos, la Coordinación de la Red Nacional de Bancos de Sangre y Servicios de Transfusión, en cabeza del Instituto Nacional de Salud, <b> también ha dado lugar a la generación y publicación de documentos denominados como lineamientos,</b> en los cuales se dan a conocer directrices específicas y que están asociadas a la promoción de la donación de sangre.

    .cajon.cajon--gris.p-4.mb-5
      p.mb-0 El contenido de estos documentos es considerado importante para la <b>Red de Sangre en Colombia,</b> en aras del fortalecimiento de la seguridad transfusional, razón por la cual, <b>quienes realicen actividades de promoción deben conocerlas e incentivar su implementación.</b>

    .row.justify-content-center.align-items-center.mb-5
      .col-auto 
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_10.png", alt="alt", style="width:1500px;")        
        

    .h5 Lineamiento Promoción de la donación de sangre y componentes anatómicos

    p.mt-3 La promoción de la donación de sangre ha sido catalogada como el pilar fundamental de la seguridad transfusional, ya que, de la gestión realizada por los encargados de desempeñar esta labor, se determina el riesgo de transmisión de infecciones a través de la transfusión y la disponibilidad de los hemocomponentes (INS, 2020). 
    br
    p De acuerdo con la contribución en salud pública que tiene la promoción de la donación de sangre, el presente lineamiento expresa las consideraciones que debe evaluar e implementar el promotor, la población general y quienes ejercen funciones de comunicación; lo cual quiere decir que dicho documento tiene un enfoque transversal.
    br
    p #[strong Las acciones descritas en este documento se encaminan hacia los derechos humanos, ya que debe existir una coherencia entre lo que se desea recibir y lo que se desea para los demás.] Dichas acciones permiten que los promotores de la donación de sangre perciban que el donante también es un sujeto de derechos, ya que los derechos humanos amparan a todas las personas sin ningún tipo de distinción (INS, 2020). 
    br    
    p Por otro lado, los derechos humanos son interdependientes, por ejemplo, <b>un donante tiene derecho a ser informado sobre conductas de autocuidado, la importancia de donar sangre de manera frecuente, cuidados antes durante y posteriormente a haber donado,</b> ese tipo de información le aporta para poder ejercer su derecho a la salud y a la vida (INS, 2020).
    br
    p.mb-5 De la misma manera, los derechos humanos no se pierden con el tiempo, por ejemplo, no es posible que hoy se informe adecuadamente al donante pero ya mañana no, así que su derecho a estar informado debe permanecer en el tiempo.   

    .row.justify-content-center.align-items-center.mb-5
      .col-auto           
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_11.png", alt="alt", style="width:1500px;")        
      
    p.mb-5 Las consideraciones técnicas del lineamiento también están basadas en los principios éticos, por ejemplo, <b> los donantes de sangre por su acción social de salvar vidas deben ser valorados, cuando esto sucede, se cumple con el principio ético de la dignidad.</b> Así mismo, con la información previa que una persona recibe sobre la donación de sangre, puede decidir si dona o no lo hace, esta disposición <b> debe ser respetada y libre de cualquier tipo de coacción, </b> para que así no se le esté vulnerando el principio ético de la autonomía (INS, 2020).

    .crd_A.crd_A--azul.mb-5    
      .row.justify-content-center.align-items-center
        .col
          p Cuando una persona dona sangre con la convicción de que su sangre es de bajo riesgo de transmitir cualquier tipo de infección, y por consiguiente, los hemocomponentes obtenidos van a beneficiar a los pacientes a los cuales les serán transfundidos, <b>se ejerce el principio ético de la beneficencia.</b> Si un donante de sangre concibe <b>la autoexclusión como un acto de responsabilidad social, se hace alusión al principio ético de no maleficencia.</b>
        .col-auto
          img.number(src='@/assets/curso/images/pages/ilustraciones/ico_12.svg' alt="", style="width:150px; display:block; margin:auto 0;").img-float

    .h5.mb-4 Lineamientos Selección de donantes de sangre

    p.mt-3 Los encargados de realizar la promoción de la donación de sangre, tienen la responsabilidad de <b> informar a los donantes sobre los requisitos que deben cumplir para hacer efectiva su donación,</b> esto previamente al diligenciamiento de la encuesta y entrevista. Por esta razón, deben conocer los criterios establecidos, además de su fundamentación, especialmente centrándose en aquellos aspectos que son de un mayor interés para la población, como por ejemplo: 

    .tarjeta--container.row.mb-5.mt-5
      .col-md.tarjeta.tarjeta--roja.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/pages/ilustraciones/ico_13.svg', alt='Texto que describa la imagen')
          
        .h3.text-center ¿Una persona que tenga tatuajes puede donar sangre? 
        p Respuesta: sí puede ser donante de sangre, posterior a los 12 meses después de haberse realizado el tatuaje. 
        br
        p Debido a que el personal del banco de sangre desconoce las condiciones de asepsia en las que el tatuaje fue realizado, se debe esperar dicho tiempo, ya que si la persona fue infectada, al comienzo de la enfermedad los niveles de la infección no son los suficientes para que sean detectados por las pruebas infecciosas realizadas por los bancos de sangre, esto a lo que se le conoce como periodo de ventana inmunológica. 

      .col-md.tarjeta.tarjeta--roja-1.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/images/pages/ilustraciones/ico_14.svg' alt="", style="width:250px; display:block; margin:auto 0;").img-float
          
        .h3.text-center ¿Una persona que haya tenido hepatitis puede ser donante de sangre?
        br
        p Respuesta: se presume que la actividad sexual inicia a los 12 años, si un donante potencial refiere haber tenido hepatitis antes de los 12 años, esta persona no tiene restricción para donar por este criterio, ya que seguramente a dicha edad no había iniciado su actividad sexual y, por lo tanto, lo más seguro es que haya tenido hepatitis A por contaminación de alimentos, por el contrario, si refiere haber tenido hepatitis después de los 12 años, dicho donante no se puede aceptar porque pudo haber sido una hepatitis A por contaminación de alimentos pero también pudo haber sido una hepatitis B por contacto sexual (INS, 2020):

      .cajon.cajon--gris.p-4.mb-5.mb-lg-0.mt-5
        p.mb-0 En Colombia los criterios de selección de donantes <b> de sangre se encuentran unificados bajo un lineamiento emitido por el Instituto Nacional de Salud.</b>  

    .titulo-segundo
      #t_1_5.h4 1.5 Boletines técnicos    
    
    p.mb-5 La red de sangre emite periódicamente boletines técnicos, los cuales tienen como propósito <b> actualizar a los actores de la red en los diferentes aspectos de la medicina transfusional.</b> Teniendo en cuenta la necesidad de fortalecer las capacidades técnicas de quienes ejercen la labor de promover la donación de sangre; a continuación, se revisará lo argumentado en dichos documentos.

    .h5.mb-4 La promoción como impacto en la seguridad transfusional 

    p Este lineamiento tiene como finalidad manifestar a los actores de la red que la promoción de la donación tiene una relevancia técnica en la seguridad transfusional y que, por lo tanto, se requiere de la generación de acciones para su fortalecimiento. Es por esto que el Instituto Nacional de Salud da a conocer a los actores de la red las recomendaciones a tener en cuenta en la promoción de la donación voluntaria y habitual de sangre, para lo cual los bancos de sangre deberán tener en cuenta lo siguiente:

    hr.mt-5
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico1.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float    
      .col
        p La promoción se debe realizar con el propósito de captar donantes habituales: el donante habitual es aquella persona que dona dos veces en doce meses, aunque la frecuencia de donación es importante, no se puede dejar a un lado que esta persona, además, debe ser consciente de que sus conductas de vida no generan riesgo alguno en quien reciba la sangre donada. as as
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico2.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float     
      .col
        p Contar con personal capacitado y con experiencia en promoción y colecta, que emplee un lenguaje sencillo en el abordaje al donante, de la misma manera como se evidencia previamente que una persona esté capacitada para ejercer labores en inmunohematología, inmunosoderología, etc., el director del banco de sangre al ser responsable de todos los actos técnicos, científicos y administrativos, debe verificar que quien realice funciones de promoción esté debidamente entrenado y capacitado, antes de salir a trabajo de campo. 
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico3.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float   
      .col
        p Contar con los insumos y la logística necesaria para la realización de colectas de sangre: el grupo de promoción debe contar con material lúdico de apoyo, para facilitar la emisión del mensaje.
    hr
    .row.align-items-center.mt-3
      .col-auto
        figur
          img(src='@/assets/curso/images/pages/ilustraciones/ico_31.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float   
      .col
        p Garantizar que tanto en las campañas como en el banco de sangre se brinde la misma información al donante potencial.
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_32.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float     
      .col
        p Tener procedimientos y registros documentados: el área de promoción debe contar con un procedimiento en el cual se estandaricen las actividades a desarrollar, de tal manera que quienes ejerzan dicha labor lo hagan de la misma manera, así mismo se deben generar <b> registros que permitan evidenciar la trazabilidad de las acciones ejecutadas,</b> además, dicha información servirá para la toma de decisiones.  
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_33.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float        
      .col
        p Evaluar de manera sistemática mediante verificación y auditorías los procedimientos y la gestión en promoción y colecta: se requiere la realización de auditorías con el fin de identificar aquellos aspectos que requieren acciones de mejora.  
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_34.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float     
      .col
        p Realizar seguimiento permanente al indicador de donantes voluntarios y habituales de sangre, así como a la positividad o casos de VIH, hepatitis por cada 10.000 donaciones de sangre y por tipo de donante; todo promotor debe basar su actuar en una revisión y análisis previo de los indicadores.
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_35.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float        
      .col
        p Otorgar el carné de donante de sangre que tiene como único fin confirmar el grupo sanguíneo, recordación de la próxima donación y reconocimiento social..  
    hr
    .row.align-items-center.mt-3
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_36.svg' alt="", style="width:60px; display:block; margin:auto 0;").img-float     
      .col
        p Contar con clubes de donantes de grupos sanguíneos poco frecuentes: esto permite contar con donantes frecuentemente informados y dispuestos a donar cuando sea necesario.
    hr

    .h5.mt-5 Resumen casos de donación coaccionada 2016 (INS, 2020)
      p.mt-3 La donación coaccionada, familiar o de reposición ha sido considerada como de <b> alto riesgo para la transmisión de infecciones a los pacientes a través de la transfusión,</b> pues a dichos donantes se les invita a donar sin brindarles la información previa necesaria y bajo condiciones como las que se describen a continuación:
    
    SlyderC.mb-5.mt-5(:datos="datosSlyderC")

    .crd_A.crd_A--azul.mb-5  
      .row.justify-content-center.align-items-center
        .col-auto
          img.img-jumbotron-padding(src='@/assets/curso/images/pages/ilustraciones/ico_17.svg' alt="", style="width:150px; display:block; margin:auto 0;")
        .col
          p Este boletín técnico tiene como propósito definir el algoritmo de acción cuando son notificados ante la <b> Red Nacional de Bancos de Sangre y Servicios de Transfusión del Instituto Nacional de Salud,</b> posibles casos de donación de sangre coaccionada y, a su vez, con lo identificado <b>retroalimentar a los actores de la red sobre este tipo de situaciones presentadas, </b> para evitar que se vuelvan a presentar.

    .h5 Mecanismos de respuesta de la Red de Sangre en emergencias 

    p.mt-5 El Instituto Nacional de Salud (INS) establece los lineamientos para <b> optimizar los mecanismos de respuesta de la Red Nacional de Bancos de Sangre y Servicios de Transfusión ante situaciones críticas de desabastecimiento de sangre y hemocomponentes </b> a nivel nacional, departamental y local (desastres naturales, eventos públicos que concentran gran número de personas, situación social de conflicto que pueda generar alto número de pacientes, entre otros); <b>protegiendo la sangre como un bien de interés público social y garantizando el fortalecimiento de la seguridad transfusional</b> bajo los principios de acceso, equidad, solidaridad y seguridad.

    p.mt-3 Por lo tanto, establece las actividades que deben realizar los actores de la red para responder efectivamente ante una alerta ocasionada por riesgo de desastre, emergencia o desastre, entre las cuales están:

    TabsB.my-5
      .py-4.py-md-5(titulo="Ministerio de Salud y Protección Socia") 
        p.mb-0 El Centro Regulador de Urgencias y Emergencias (CRUE) Nacional se considera como la fuente oficial para generar alertas con el desabastecimiento de hemocomponentes.
      .py-4.py-md-5(titulo="Instituto Nacional de Salud")        
        p.mb-0 Responsable de monitorear el comportamiento de los bancos de sangre. Así mismo debe identificar la disponibilidad de hemocomponentes en los bancos de sangre priorizados para generar respuesta (por tamaño, o cercanía geográfica), a través del Sistema de información en Hemovigilancia Sihevi-INS©. También es el encargado de establecer los mecanismos de comunicación con los bancos de sangre que prestaran el apoyo requerido.
      .py-4.py-md-5(titulo="Direcciones territoriales")        
        p.mb-0 Monitorear de manera constante el comportamiento de demanda y abastecimiento de hemocomponentes en su área de influencia, a través del Sistema de información en Hemovigilancia Sihevi-INS©. Así mismo, identificar los bancos de sangre proveedores en cada una de las IPS que transfunden.
      .py-4.py-md-5(titulo="Bancos de Sangre y Servicios de Transfusión")        
        p.mb-0 Mantener actualizada su información en Sihevi-INS© respecto a captación, transfusión, satisfacción a la demanda, proveedores de hemocomponentes, disponibilidad de sangre y demás variables que atañen a su gestión, ya que es la fuente oficial para monitorear la capacidad de respuesta desde el INS, como Coordinador Nacional de la Red.
        

    p.mb-4 También deben contar con un procedimiento para establecer los inventarios de hemocomponentes, de acuerdo con sus necesidades diarias, procurando además contar con un excedente en el suministro que logre atender las necesidades que se presenten durante tres (3) días, como mínimo. Este criterio requiere de una estricta labor por parte del grupo de colecta, en donde se encuentra incluido el grupo de promoción.   

    .row.justify-content-center.align-items-center.mb-5
      .col-auto 
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_17.png", alt="alt", style="width:1200px;")

    .h5.mb-5 Flujo de comunicación para cubrir el desabastecimiento de los hemocomponentes

    hr
    .row.align-items-center
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_5.svg' alt="", style="width:70px; display:block; margin:auto 0;")
      .col
        p #[strong 1) El Centro Regulador de Urgencias y Emergencias Nacional – CRUE,]  alertará al INS a través del Centro Regulador de Trasplantes – CRT, sobre la preparación para la respuesta o activación del abastecimiento de sangre y hemocomponentes en casos de riesgo de desastre, emergencia o desastre. 
    hr
    .row.align-items-center
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_19.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float    
      .col
        p #[strong 2) El INS en su rol de autoridad nacional y vocero oficial debe generar alerta a los bancos de sangre, iniciando con los que reportan una captación superior a 12.000 unidades al año,] junto a aquellos que estén cercanos a la zona del evento (riesgo de desastre, emergencia o desastre), con el fin de que verifiquen su inventario de sangre y hemocomponentes, lo racionen y estén preparados para apoyar la movilización de los mismos en caso de que se requiera. 
    hr
    .row.align-items-center
      .col-auto
        figure
          img(src='@/assets/curso/images/pages/ilustraciones/ico_20.svg' alt="", style="width:70px; display:block; margin:auto 0;").img-float   
      .col
        p #[strong 3) El INS será el vocero oficial ante el Ministerio de Salud y Protección Social] y los actores de la red de sangre para reportar la situación de disponibilidad y la oportunidad en la respuesta ante necesidades de hemocomponentes en situaciones de riesgo de desastre, emergencia o desastre en el territorio nacional
    hr.mb-5

    .h5 Colecta de Sangre en Puestos Móviles (INS, 2020)

    p.mb-5 El presente documento fue publicado por el Instituto Nacional de Salud, con el fin de que los <b> bancos de sangre conozcan los pasos para organizar y desarrollar la colecta de sangre </b> y dando a conocer algunas acciones a tener en cuenta antes, durante y después de la colecta de sangre en los puestos móviles, esto con el fin de fortalecer la seguridad transfusional.

    .h6.mb-4 #[strong 01. Previamente a la jornada de donación]

    .crd_A.crd_A--gris.brd-r1.mb-5
      .row.justify-content-center.align-items-center
        .col-auto.mb-5
          img(src='@/assets/curso/images/pages/ilustraciones/img_18.svg' alt="", style="width:500px; display:block; margin:auto 0;")
        
      .h6.mb-4 #[strong Revisión de indicadores y gestión de inventarios:]           
              
      p Este tipo de información le permite al promotor tomar decisiones adecuadas sobre el número de unidades a colectar y así definir las jornadas a realizar. También permite que el promotor pueda <b> observar a través del tipo de donante captado y de las tasas de positividad, si realmente las estrategias educativas implementadas están conllevando a la captación donantes </b> con una probabilidad baja de tener alguna infección.
      hr.my-5

      .h6 Gestión de donantes             
      p Es importante que el promotor realice las jornadas de donación en poblaciones consideradas con bajo riesgo de infección. 
      br
      p Así mismo, <b>las personas deben ser debidamente informadas para que puedan tomar una decisión consciente, responsable y madura de donar su sangre,</b> por lo tanto, los promotores siempre deben contar con estrategias que conlleven a la cultura de donación.
      br
      p El grupo de promoción debe estar atento a realizar actividades que permitan convocar a donar a quienes ya lo han hecho previamente.
      hr.my-5

      .h6 Talento humano:           
      p Estimar el número de personas designadas para cada jornada de donación.
      hr.my-5
      
      .h6 Infraestructura:
      p Gestionar los trámites necesarios para adquirir las autorizaciones de ubicación del equipamiento y grupo de colecta de sangre.
        br
        br
        | Las áreas que vayan a ser utilizadas para diligenciamiento de la encuesta, valoración clínica y entrevista deben cumplir con condiciones de privacidad, es decir, que sean individuales e independientes en donde el donante perciba un ambiente de confidencialidad. 
        br
        br
        | Tener en cuenta las características de ventilación y control de temperatura adecuados en el que se va a ubicar el puesto móvil, <b> rango que estará entre 15 °C a 24°C, de acuerdo con el clima de la zona del país en donde se esté realizando la colecta de sangre,</b> para así controlar las condiciones de temperatura y evitar eventos adversos. Para el cumplimiento de dichos parámetros, dentro del equipamiento de la colecta móvil de sangre, se contará con dispositivos que permitan la regulación de la temperatura ambiente.
      hr.my-5

      .h6 Sistema de Gestión de Calidad:          
           
      p Diligenciar todos los documentos relacionados con la realización de la campaña y análisis posterior a la misma. Así mismo, #[strong realizar consulta sistemática y oportuna de manuales, procedimientos e instructivos relacionados con la colecta de sangre en puestos móviles.]
        br
        br
        | Los promotores deben contar con procesos de inducción y capacitación sistemática.
      hr.my-5

      .h6 Equipos, materiales e insumos:
      p Según sea el caso, se debe realizar el alistamiento de: carpas o unidad móvil, camillas, equipos electrónicos, ya sean computadores, tabletas o celulares, puntos de acceso a internet, equipos de refrigeración, papelería, material informativo sobre la donación, insumos necesarios para la colecta y mantenimiento de la sangre en condiciones óptimas de conservación.

        
    .h6.mb-5 #[strong 02. Durante la jornada de donación]

    .crd_A.crd_A--gris.brd-r1.mb-5    
      .row.justify-content-center.align-items-center
        .col-auto.mb-4
          img(src='@/assets/curso/images/pages/ilustraciones/img_19.png' alt="", style="width:500px; display:block; margin:auto 0rem;")
        
          
      h6.mt-5 #[strong Talento humano:]
      p El personal que realice la promoción #[strong debe estar debidamente entrenado y con la capacidad para emitir respuestas], según las necesidades de información de los donantes.
      hr.my-5
      
      .h6 Sistema de Gestión de Calidad:
      p Documentar dentro de los procesos de captación, selección y donación, los procedimientos y actividades realizadas. Registrar cada actividad en los formatos establecidos, <b>de tal manera que se pueda observar la trazabilidad del proceso de promoción.</b>  
      
      hr.my-5

      .h6 #[strong Infraestructura:]
      p En las colectas móviles <b>se debe primar porque las condiciones de infraestructura sean similares a las de la sede central del banco de sangre, así como las condiciones de limpieza, aseo y desinfección.</b>
      hr.my-5
      
      .h6 #[strong Materiales y equipos:]
      p Disponer de recursos y material lúdico para informar, sensibilizar y educar a los donantes de sangre, profundizando en conceptos que les permitan autoexcluirse al considerar que sus conductas de vida son de alto riesgo para transmitir infecciones a través de la sangre. 
        br
        br
        | Para la extracción de sangre en climas clasificados como cálidos (temperatura superior a 23 °C) y templados (temperatura 15 °C y 23°C), <b> se debe disponer de dispositivos que regulen la temperatura ambiente en un rango entre 15 °C y 24 °C,</b> con el fin de disminuir el riesgo de Reacciones Adversas a la Donación (RAD).
        
    
    .h6.mb-5 #[strong 03. Posteriormente a la jornada de donación]

    .crd_A.crd_A--gris.brd-r1.mb-5    
      .row.justify-content-center.align-items-center
        .col-auto.mt-2
          img(src='@/assets/curso/images/pages/ilustraciones/img_20.png' alt="", style="width:500px; display:block; margin:auto 0;")
        
      .h6.mt-5 Talento humano:
      p Se deben establecer mecanismos que permitan <b> evidenciar los conocimientos de quienes ejercen funciones de promoción.</b> Además de realizar jornadas de reinducción.
      hr.my-5

      .h6 Sistema Gestión de Calidad y Revisión de indicadores:
      p Realizar análisis de indicadores (% donante habitual, tasas de positividad, entre otros), para establecer: acciones de mejora y proyección de metas.
        br
        br
        |  Determinar las causas y realizar análisis y seguimiento de las RAD presentadas. Llevar a cabo ejercicios de trazabilidad que permitan #[strong verificar el cumplimiento de los lineamientos, procedimientos y actividades relacionadas con los procesos de promoción, selección de donantes y colecta], entre otros. Además, realizar análisis de encuestas de satisfacción e implementación de acciones de mejora. 
        br
        br
        |  Se deben realizar análisis de las situaciones que se puedan presentar como no conformidades en la actividad realizada en la campaña y las personas responsables deberán documentar el análisis de la situación, las acciones a realizar para evitar la situación y el seguimiento de las recurrencias, con el fin de tomar acciones más drásticas.

    .h5.mb-5  Estrategias asociadas a promoción de la donación de sangre (INS, 2020)

    p.mb-5 Debido a que los productos sanguíneos generan un alto impacto en la prestación de los servicios de salud, en la calidad de vida de ciertos pacientes y en la salud pública de un país, <b> esta estrategia da a conocer la propuesta de algunas de las actividades que son permanentes y deben ser desarrolladas por cada actor que hace parte de la red de sangre,</b> con el fin de lograr los objetivos comunes: solidaridad, acceso, disponibilidad, y seguridad en el territorio nacional. 

    figure.mb-5
      img(src="@/assets/curso/images/pages/ilustraciones/img_21.png", alt="alt", style="width:1200px;")
    
    p.mb-4 Dentro de las acciones que debe realizar los promotores (bancos de sangre), se recomienda:

    .crd_A.crd_A--gris.brd-r1.mb-5
      
      .h6
        span.etiqueta--roja #[strong Información, sensibilización y educación:]
      p.mt-4 Proyectar mensajes dirigidos a la comunidad en donde se fundamente la importancia de la donación voluntaria y habitual de sangre, conductas de autocuidado, aclaración de mitos y motivación de autoexclusión como conducta solidaria.
      hr
      p Evaluar la factibilidad de realizar proyectos educativos sobre la donación voluntaria y habitual de sangre de sangre, con aplicación especial en niños y jóvenes.
      hr        
      p Programar recursos (incluye económicos y humanos) que permitan viabilizar la implementación de estrategias para informar, sensibilizar y educar sobre la donación voluntaria y habitual de sangre.
      hr
      p Programar proyectos de investigación en donación voluntaria y habitual de sangre.
      hr
      p.mb-5 Prever la organización de semilleros de promotores (voluntariado) en funcionarios empresariales, estudiantes de colegio y universidades.

      span.etiqueta--roja #[strong Día Mundial del Donante de Sangre:]
      p.mt-4 Identificar el tema y lema definido para la celebración, por el nivel nacional (INS) y acorde al llamado internacional.
      hr
      p.mb-5 Definir el homenaje y tipo de reconocimiento social para donantes habituales y empresas que apoyan la donación de sangre.
        
      span.etiqueta--roja #[strong Retroalimentación de indicadores:]
      p.mt-4.mb-5 Programar jornadas de capacitación para la interpretación, análisis y toma de decisión, sobre el comportamiento de los indicadores que impactan el proceso de promoción de la donación voluntaria y habitual de sangre.

      span.etiqueta--roja #[strong Campañas masivas / Campañas de donación de sangre periódicas:]
      p.mt-4 Programar capacitaciones, respecto a los aspectos técnicos que se deben tener en cuenta en la planeación y programación de jornadas masivas y periódicas de donación de sangre.
      hr
      p Priorizar la planeación de jornadas de donación en población de bajo riesgo acorde con las necesidades de inventarios y demanda de hemocomponentes a satisfacer.
      hr
      p Contar con una base de datos que contenga la información de contacto de los donantes habituales y con grupos sanguíneos de alta demanda.

    .h5.mt-5 Notificación de tres casos de infección transmitida por transfusión - VIH

    p.mb-4 En el boletín del INS (2020) se da a conocer un caso de hemovigilancia presentado, y en el cual se infectaron de VIH a tres pacientes menores de edad, a través de la transfusión de sangre, cuya unidad fue donada por un donante habitual.

    .row.mb-5
      .col-12.col-lg
        .h5.mt-2
          <b>El promotor siempre debe enfatizar en el tipo de información que se le manifiesta a las personas </b>
          span.etiqueta--green previamente a que realicen la donación.
      .col-12.col-lg-8
        p.mt-2 Debido a que el donante de sangre habitual ha sido considerado como uno de los de menor riesgo de infección,<b> este tipo de casos ponen en evidencia que el promotor siempre debe enfatizar en el tipo de información que se le manifiesta a las personas previamente a que realicen la donación,</b> no se puede olvidar que el ser informado adecuadamente es un derecho que tienen las personas, así como la decisión que tomen posteriormente al haberse enterado de los aspectos relacionados con la donación de sangre (INS, 2020).

    .row.mb-5
      .col-auto
        figure
          img(src="@/assets/curso/images/pages/ilustraciones/img_8.png", alt="alt", style="width:1200px;")      

    p.mb-5 De la misma manera, estos casos expresan la necesidad de fortalecer los criterios de selección de donantes de sangre. 

    .cajon.cajon--gris.p-4.mb-5
      p.mb-0 Posterior al análisis de este caso, se pudo concluir que hay evidencia de <b> tres (3) infecciones transmitidas por transfusión de VIH, a partir de un donante que pudo ser aceptado en periodo de ventana inmunológica.</b>

    .titulo-segundo
      #t_1_6.h4 1.6 Estándares de trabajo para servicios de sangre (OPS, 2020)      

    p.mt-2 Al ser los bancos de sangre miembros esenciales del sistema de salud, estos deben realizar su labor con calidad, conllevando a disminuir la posibilidad de que se presenten errores. 
    br
    p La calidad implica tener las actividades debidamente documentadas, ya que esto, no solo conlleva a que todos realicen la labor de la misma forma, sino que, además, <b>permite que el trabajo sea más simple y sencillo, logrando una actitud positiva de quienes desarrollan cada actividad.</b> Es decir, que esto conlleva a un mayor empoderamiento en el personal, quienes son el motor de toda organización.

    .row.mt-5      
      .col-12.col-lg-6.mb-4.mb-lg-0
        .bloque-texto-c.p-4      
          .h5.mb-2 La cadena transfusional está compuesta por una serie compleja de procesos que abarcan desde el donante hasta el receptor. 
          
      .col-12.col-lg-5
        p Es importante tener en cuenta que, en calidad lo que no está escrito no existe, por esta razón quienes desarrollan funciones de promoción de la donación de sangre, tienen la responsabilidad de documentar las acciones realizadas en dicha área; información que también les contribuirá en la toma de sus decisiones para fortalecer sus acciones técnicas y brindar una mayor seguridad transfusional a través del tipo de donante de sangre captado.

    p.mt-4 En promoción, se requiere de un <b> Procedimiento Operativo Estándar (POE), el cual se define ¿quién?, ¿cómo? y ¿cuándo? se deben hacer las cosas, es una documentación instructiva para realizar una actividad. </b> Estos pueden ser modificados, por ejemplo, si se incorpora una nueva estrategia educativa para informar, sensibilizar y educar a la población sobre la donación de sangre, se lleva a cabo el ajuste en dicho documento.
    br
    p.mb-5 En promoción de la donación de sangre deben existir como mínimo los siguientes registros:

    .row.justify-content-center.align-items-start
      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-3
            img(src="@/assets/curso/images/pages/ilustraciones/ico_21.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Cronograma de capacitación] 

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_22.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Cronograma de jornadas de donación]  

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_23.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Sensibilización previa a la jornada de donación]   

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_24.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Datos del lugar y contacto]

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_25.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Lista chequeo área física desarrollo jornada.]

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_26.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Lista de chequeo materiales e insumos requeridos.]

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_27.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Listado de personal y rol]

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_28.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center #[strong Resultados de la jornada]

      .col-10.col-md-6.col-lg-4.mb-4.hg--full
        .crd_A.crd_A--brd
          figure.mb-4
            img(src="@/assets/curso/images/pages/ilustraciones/ico_29.svg", alt="alt", style="width:60px; display:block; margin:0 auto;")     
          p.text-center.mb-3 #[strong Club de donantes con grupos sanguíneos y datos de contacto]
          p.text-center.text-small Celular, teléfono, correo electrónico.            

    p.mt-4 De la misma manera, se deberán levantar acciones preventivas y correctivas. Es de resaltar que los sistemas de gestión de calidad fueron creados con el fin de disminuir los errores, por lo tanto, <b> el ideal es que se documenten más acciones preventivas que correctivas.</b>

    .cajon.cajon--gris.p-4.mb-5.mb-lg-0.mt-4
      p.mb-0 Así mismo, se debe contar con una lista de chequeo que permita <b>realizar revisiones de tipo técnico para ajustar el proceso de promoción </b> y a su vez, prepararse para las auditorías, identificando las acciones de mejora a realizar.

  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    datosSlyderC: [
      {
        titulo: '',
        texto:
          'Solicitud de donantes a los familiares y amigos de los pacientes a cambio de la prestación de servicios de salud.',
        imagen: require('@/assets/curso/images/pages/ilustraciones/img_12.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Persona que accede a donar en momento de angustia y sin la conciencia necesaria del acto de donar sangre.',
        imagen: require('@/assets/curso/images/pages/ilustraciones/img_13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto: 'Llamados de urgencia, alarmantes e inesperados.',
        imagen: require('@/assets/curso/images/pages/ilustraciones/img_14.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En espera de recibir un beneficio tangible a cambio, como por ejemplo, adquirir por la donación un souvenir que le fue ofrecido antes de acceder a donar.',
        imagen: require('@/assets/curso/images/pages/ilustraciones/img_15.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En espera de recibir un beneficio intangible a cambio, como por ejemplo, confiar en que a través de la donación de sangre se le disminuye el colesterol, los triglicéridos, las posibilidades de tener un infarto de miocardio o un accidente cerebrovascular, condiciones que no han sido comprobadas científicamente. ',
        imagen: require('@/assets/curso/images/pages/ilustraciones/img_16.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>
<style lang="sass" scoped></style>
