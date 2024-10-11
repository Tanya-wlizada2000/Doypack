// module.exports = {
//   locales: ['ru', 'en'],
//   defaultLocale: 'es',
//   pages: {
//     '*': ['posts', 'header', 'footer'],
//     '/': ['home'],
//   }
// }

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Загружает переводы через HTTP
  .use(LanguageDetector) // Автоматически определяет язык пользователя
  .use(initReactI18next) // Привязывает i18next к React
  .init({
    fallbackLng: "es",
    // lng: 'es', // 'es' | 'en',
    debug: true,
    resources: {
      es: {
        translation: {
          //navbarTranslation
          Home: { label: "Hogar" },
          About: { label: "Acerca de" },
          aboutTheCompany: { label: "Acerca de la empresa" },
          Product: { label: "Producto" },
          StandUpPouch: { label: "Bolsa de pie" },
          SpoutPouch: { label: "Bolsa con boquilla" },
          GussetedPouch: { label: "Bolsa con fuelle" },
          RollFilm: { label: "Rollo de película" },
          ShapedAndTransparent: { label: "Con forma y transparente" },
          Contact: { label: "Contacto" },
          //headerbannerTranslation
          With13YearsExperienceinFlexiblePackaging: {
            label: "Con 13 años de experiencia en envases flexibles",
          },
          DOYPACKYourReliablePackagingSupplier: {
            label: "DOY PACK, Su Proveedor de Embalajes Confiable",
          },
          //mainCompany
          Company: { label: "Compañía" },
          companyHeading: {
            label: "Proveedor de embalaje de confianza a nivel mundial",
          },
          companytext: {
            label:
              'EMBALAJE DE PLÁSTICO DOYPACK Fue fundada en 2012 y está ubicada en el condado de Dongguan, provincia de Hebei. Se trata de una empresa privada moderna que combina investigación y desarrollo, diseño, producción de películas, impresión, compuestos y producción de envases. La empresa fue reconocida como miembro de la "Asociación de Envases Plásticos de Hebei" en el primer semestre de 2015. La empresa ocupa una superficie de 6.000 metros cuadrados, incluidos 3.500 metros cuadrados de talleres limpios estándar y 15 millones de yuanes en activos fijos. En 2014, pasó la certificación nacional de calidad de envases de alimentos QS y la calificación récord de producción de envases de exportación de productos alimenticios. Hay 102 empleados, incluidos 6 empleados de oficina, 9 empleados de gestión de producción, 5 empleados de I+D y 6 directores de calidad.',
          },
          Companytext2: {
            label:
              "Hay 10 vendedores de la red y 5 diseñadores destacados. La empresa produce principalmente bolsas para envasado de alimentos, bolsas para envasado diario de productos químicos, bolsas selladas de tres lados, bolsas selladas de cuatro lados, bolsas selladas de ocho lados, bolsas de entrega, bolsas con cremallera, bolsas tipo bolsa, bolsas de vacío y bolsas de plástico. papel de aluminio, papel kraft, bolsas de papel con ventana, que produce y procesa envases de retorta, envases para cestas y comida para perros, bolsas de fertilizantes líquidos, bolsas de arroz, bolsas de harina, etiquetas de PVC, etiquetas retráctiles, películas bopp, películas de PVC, películas CCP, aluminizadas. película, etc. La empresa cuenta con un completo y moderno sistema de gestión de calidad. La integridad, resistencia y calidad de los productos de Dongguang Yalei Plastic Industry Co., Ltd.",
          },
          button: { label: "Acerca de la empresa" },
          //companyCards
          cards1heading: { label: "Desde hace más de 13 años" },
          cards1text: {
            label:
              "Hemos estado desarrollando y fabricando soluciones de embalaje.",
          },
          cards2heading: { label: "11 sitios de producción" },
          cards2text: {
            label: "crear el servicio perfecto para nuestros clientes",
          },
          cards3heading: { label: "102 + empleadas" },
          cards3text: {
            label:
              "Producimos envases flexibles para clientes de todo el mundo. Nos preocupamos por el medio ambiente y el reciclaje.",
          },
          cards4heading: { label: "Sostenibilidad" },
          cards4text: {
            label: "nos preocupamos por el medio ambiente y el reciclaje",
          },
          //proAdav
          proadavheading: { label: "Ventajas del producto" },
          proadavtext1: { label: "Alta calidad de productos terminados" },
          proadavtext2: { label: "Seguridad e higiene" },
          proadavtext3: { label: "Larga vida útil de los productos." },
          proadavtext4: { label: "Reciclaje y sostenibilidad" },
          //footer
          footerheading: {
            label:
              "DOY PACK es líder mundial en la producción de <br/> bolsas confeccionadas con cierres y un actor  <br/>  global en envases flexibles.",
          },
          footerpar: {
            label:
              "Derechos de propiedad intelectual de las marcas propiedad de <br/>los propietarios de estas marcas comerciales.",
          },
          tel: { label: "Teléfono:" },
          email: { label: "Correo electrónico:" },
          address: { label: "Dirección de la oficina en China:" },
          lasttext: { label: "política de privacidad" },
          //about
          mainabouttext: {
            label:
              "DOY PACK China lleva más de ocho años ocupando con confianza posiciones de liderazgo en el mercado de fabricantes de envases flexibles para diversos tipos de producción. Gracias a tecnologías únicas, estamos preparados para ofrecer una amplia gama de soluciones, desde envases flexibles y moldeo por inyección hasta diseño y producción de líneas de embotellado. <br /><br />Junto con nuestros socios y nuestro centro de I+D en constante desarrollo, trabajamos para garantizar que la empresa ofrezca sólo tecnologías innovadoras que cuiden el medio ambiente. <br /><br /> Nuestra especialidad es el diseño y fabricación de líneas de llenado y túneles de pasteurización para envases terminados. Podemos ofrecer una solución ya preparada o desarrollar una solución personalizada para su negocio.",
          },
          mainabouttext2: {
            label:
              "DOY PACK ofrece los siguientes tipos de productos: - envases confeccionados de diversas formas y capacidades: nuestros productos son seguros e higiénicos, convenientes y tienen una amplia gama de opciones de diseño, son fáciles de transportar y almacenar. Embalaje en rollo: el alto rendimiento se combina con la flexibilidad y una amplia gama de opciones. <br /><br /> Ofrecemos formulación y extrusión de películas, impresión por huecograbado y laminación moderna. Y nuestros productos son utilizados con éxito por empresas fabricantes en diversas industrias, desde alimentos hasta cosméticos. <br /><br /> Tapas y picos: una amplia gama de picos y tapas para envases flexibles, incluida la tecnología antiasfixia BabyCap™ de clase mundial para productos de alimentación para bebés.",
          },
          mainheading1: { label: "Misión y Visión" },
          mainabouttext3: {
            label: `El desarrollo continuo es nuestra prioridad. DOY PACK se especializa
                  en la producción de envases flexibles de alto rendimiento.
                  Calidad, servicio y soluciones innovadoras para nuestros clientes
                  son nuestras principales prioridades.
                  <br /> Nuestra fortaleza es la sinergia de
                  tecnologías y desarrollos innovadores para solucionar a nuestros clientes
                  problemas.
                  <br /> El desarrollo sostenible es nuestra tarea diaria en
                  buscando soluciones tecnológicas cuidando el
                  medio ambiente y el futuro. Invertimos en motivados y
                  gente talentosa!`,
          },
          mainheading2: { label: "Equipo" },
          mainabouttext4: {
            label: ` Nuestro equipo de profesionales, basado en la experiencia global de
                  todo el grupo de empresas, le ayudará a elegir la mejor
                  solución en el campo del embalaje flexible para el
                  desarrollo y mejora de su negocio.
                  <br />Brindaremos soporte calificado durante el
                  proceso de producción. Integración flexible con el grupo.
                  fábricas de todo el mundo para resolver los problemas más complejos.`,
          },
          mainheading3: { label: "Desarrollo sostenible" },
          mainabouttext5_1: {
            label: `Nuestras soluciones innovadoras y fiables de embalajes listos para usar:
                    Economía circular 
                    Reciclabilidad, especialmente de embalajes flexibles de un solo
                    uso. Clima 
                    Reducción del impacto medioambiental de los embalajes en términos de emisiones de
                    CO2.
                    Seguridad Seguridad de los consumidores, especialmente de los niños, que
                    utilizan embalajes listos para usar.
                    ¿Qué hacemos?
                      `,
          },
          mainabouttext5_2: {
            label: ` Instalación de una planta de cogeneración para optimizar el consumo de combustibles fósiles
                    y limitar las emisiones de CO2;
                  `,
          },

          mainabouttext5_3: {
            label: `Implementar un programa de conservación de energía para reducir
                    las toneladas equivalentes de petróleo (TEP) totales y la huella de carbono de
                    nuestras operaciones;
                  `,
          },

          mainabouttext5_4: {
            label: ` Implementación de un proyecto de energía limpia a través de un sistema solar
                    fotovoltaico;
                  `,
          },

          mainabouttext5_5: {
            label: `reducción del consumo de agua mediante la sustitución de sistemas de refrigeración;
                  `,
          },

          mainabouttext5_6: {
            label: `Instalación de una unidad de recuperación de disolventes para reducir las emisiones de COV (sustancias orgánicas volátiles);
                  `,
          },

          mainabouttext5_7: {
            label: `Certificación ISO 14001 y SMETA 4 pilares.
                  `,
          },

          mainheading4: { label: "Responsabilidad social" },
          mainabouttext6_1: {
            label: `El Grupo de Empresas DOY PACK ha creado la Fundación SociAL
                    para invertir parte de los ingresos del Grupo en apoyo
                    de iniciativas destinadas a la inclusión social, la asistencia económica
                    y la promoción de la cultura:
                      `,
          },
          mainabouttext6_2: {
            label: ` Apoyo financiero a instituciones
                     médicas:
                  `,
          },

          mainabouttext6_3: {
            label: `Apoyo a organizaciones
                    humanitarias:
                  `,
          },

          mainabouttext6_4: {
            label: `Asistencia a las personas afectadas por
                    desastres naturales:
                  `,
          },

          mainabouttext6_5: {
            label: `Los principios fundamentales del trabajo del fondo
                    son:
                  `,
          },

          mainabouttext6_6: {
            label: `justicia e igualdad social:
                  `,
          },

          mainabouttext6_7: {
            label: `participación democrática:
                  `,
          },
          mainabouttext6_8: {
            label: `Libertad y seguridad personal:
                  `,
          },

          mainabouttext6_9: {
            label: `Confianza y solidaridad entre generaciones:
                  `,
          },
          mainabouttext6_10: {
            label: `Nuestras plantas de producción en todo el mundo promueven iniciativas
                    locales y las gestionan ellas mismas:
                  `,
          },

          mainabouttext7: {
            label: `Descargar presentación de la empresa en formato PDF:
                  `,
          },

          mainaboutbutton: {
            label: `Obtenga la presentación
                  `,
          },

          //Contact
          contactText: {
            label: `Complete este formulario si tiene alguna pregunta, necesita más
                  información o necesita ayuda con su pedido.
            `,
          },

          contactName: {
            label: "Su nombre",
          },

          contactEmail: {
            label: `Correo electrónico`,
          },

          contactPhone: {
            label: `Número de teléfono`,
          },

          contactMessage: {
            label: `Tu mensaje`,
          },

          contactbutton: {
            label: `Enviar un mensaje`,
          },


           //product
           heading_1: {
            label:
              "Bolsa con cierre DOY PACK personalizada para envasar dulces, chocolates y alimentos",
          },
          pragh_1: {
            label: `Esta innovadora solución de embalaje ofrece una serie de ventajas en comparación con las tradicionales bolsas de plástico selladas por tres lados, lo que la hace ideal para el embalaje de alimentos y más.<br/><br/> En primer lugar, la característica de autoportancia de estas bolsas les permite permanecer de pie en el estante, lo que proporciona una presentación visualmente atractiva que llama la atención del consumidor. En el competitivo entorno minorista actual, esto es fundamental para atraer la atención e impulsar las ventas. Las bolsas de embalaje con cierre de cremallera independientes pueden exhibir los productos de manera más efectiva, mejorar el efecto general de la exhibición y aumentar la posibilidad de compra.<br/><br/>Además, estas bolsas ocupan menos espacio en el estante, lo que permite un uso más eficiente del espacio y una exhibición más ordenada y organizada. Esto no solo beneficia a los minoristas al maximizar el espacio en el estante, sino que también hace que sea más fácil para los consumidores encontrar y acceder a los productos.<br/><br/>Además de sus beneficios prácticos, nuestras bolsas con cierre de cremallera independientes están diseñadas para reutilizarse. El cierre de cremallera integrado permite a los consumidores sellar y volver a sellar fácilmente la bolsa, manteniendo la frescura y la integridad del contenido.<br/><br/>Tamaño: 28*23 cm + 9 cm <br/>Material: PET+PE <br/>Espesor: 112 micrones`,
          },

          heading_2: {
            label:
              "Bolsa de plástico DOY PACK de 500 g con cierre de cremallera para uso alimentario",
          },
          pragh_2: {
            label: `La bolsa con cierre de pie se puede abrir y cerrar repetidamente, con un sellado fuerte, conveniente para guardar productos y evitar la humedad.<br/><br/>La bolsa con cierre de pie se puede colocar de pie en el estante para mejorar la estética. La bolsa con cierre de pie ofrece a los consumidores características favorables al mercado. Por ejemplo, puede elegir si desea agregar una cremallera, si desea agregar un corte, si desea agregar un orificio para colgar, etc., una fuerte presencia en el estante y un atractivo cartel para etiquetas y gráficos.<br/><br/>Las bolsas con cierre de pie se venden en una amplia variedad de mercados, incluidos alimentos para mascotas, café, té, productos naturales y alimentos especiales.`,
          },

          heading_3: {
            label:
              "DOY PACK 5L Bolsa Stand Up con Deporte Especial para Envasado de Líquido Adblue Bolsa de Plástico DOY PACK",
          },
          pragh_3: {
            label: `Las bolsas stand-up son una forma relativamente nueva de embalaje, la mayor ventaja sobre las formas comunes de embalaje es la portabilidad; las bolsas stand-up se pueden colocar fácilmente en mochilas o incluso en bolsillos, y se pueden reducir de tamaño con la reducción del contenido, lo que las hace más cómodas de llevar. En muchos aspectos, como la mejora del producto, el fortalecimiento del efecto visual del estante, la portabilidad, la comodidad de uso, la frescura y la capacidad de sellado, etc., tiene ventajas. Nuestras bolsas con boquilla también tienen orificios redondos para colgarlas en los estantes de los supermercados.`,
          },

          heading_4: {
            label:
              "Bolsa de embalaje colorida DOY PACK Sanrio, bolsa con cierre térmico vertical para detergente para ropa",
          },
          pragh_4: {
            label: `La bolsa con sellado térmico tiene un sellado fuerte, lo que es conveniente para almacenar productos y no gotea.<br/><br/>Las bolsas con sellado térmico verticales pueden colocarse en posición vertical en un estante para mejorar la estética. Las bolsas con sellado térmico verticales ofrecen características favorables para el mercado a los consumidores. Por ejemplo, puede elegir si desea agregar cremalleras, muescas de rasgado, orificios para colgar, etc., una fuerte presencia en el estante y carteles atractivos para etiquetas y gráficos.<br/><br/>Las bolsas con sellado térmico verticales se venden en una variedad de mercados, incluidos jugos, café, té, productos naturales y alimentos especiales.`,
          },

          heading_5: {
            label:
              "Bolsa de plástico de calidad alimentaria con pico vertical para puré de frutas de 105 g y diseño colorido DOY PACK",
          },
          pragh_5: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en la parte inferior. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto.<br/><br/>La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.<br/><br/>MaterialPET+AL+NY+RPE`,
          },

          heading_6: {
            label:
              "Bolsa de plástico sellada al calor con impresión personalizada DOY PACK de 590 ml para detergente para ropa",
          },
          pragh_6: {
            label: `Las bolsas verticales para detergente para ropa tienen un excelente sellado y la resistencia de los materiales compuestos, además no aparecerán después de unos minutos y pueden soportar una presión ≥ 50 kg, ruptura, fugas, utilización con latas de aluminio, Tetra Pak, botellas PET y contenedores de bebidas, y con fácil de beber, rendimiento liviano, menor consumo de material, fácil de transportar y otros contenedores no pueden tener las ventajas.<br/><br/>Las bolsas verticales con sellado en caliente para detergente para ropa tienen: antiestático, anti-UV, bloqueo de humedad y oxígeno, sombra, temperatura de aceite frío, fácil de sellar, barrera de oxígeno fresco y otras características.<br/>1、Resistente a la erosión química;<br/>2、Bolsas con cierre independientes, brillantes, parcialmente transparentes o translúcidas;<br/>3, en su mayoría buen aislante;<br/>4、Las bolsas con cierre independientes son livianas y fuertes;<br/>5, el proceso es fácil de producir en masa, económico;<br/>6、Las bolsas con cierre independientes son multifuncionales, multiprácticas, fáciles de colorear, y alguna temperatura alta;`,
          },

          heading_7: {
            label:
              "Bolsa de embalaje de plástico con diseño OEM DOY PACK, superficie mate, para detergente para ropa, bolsa Doypack de 1,5 l con sellado térmico",
          },
          pragh_7: {
            label: `La bolsa con sellado térmico tiene un sellado fuerte, lo que es conveniente para almacenar productos y no gotea.<br/><br/>Las bolsas con sellado térmico verticales pueden colocarse en posición vertical en un estante para mejorar la estética. Las bolsas con sellado térmico verticales ofrecen características favorables para el mercado a los consumidores. Por ejemplo, puede elegir si desea agregar cremalleras, muescas de rasgado, orificios para colgar, etc., una fuerte presencia en el estante y carteles atractivos para etiquetas y gráficos.<br/><br/>Las bolsas con sellado térmico se venden en una variedad de mercados, incluidos alimentos para mascotas, café, té, productos naturales y alimentos especiales.<br/><br/>Material: BOPP mate/PA/PE blanco<br/>Tamaño: 160 mm x 250 mm + 50 mm x 2`,
          },
          heading_8: {
            label:
              "DOY PACK 198g Envase de comida para perros Bolsa de plástico con cierre de cremallera",
          },
          pragh_8: {
            label: `Esta bolsa de comida para perros tiene una estructura de material de tres capas, lo que puede reducir la probabilidad de rotura de la bolsa. El diseño colorido y encantador es más atractivo para los clientes. Podemos imprimir hasta 13 colores, utilizando la impresión en huecograbado, el producto real es más cercano al diseño.<br/><br/>Esta bolsa de comida para perros agrega una ventana visual a través de la cual los consumidores pueden ver claramente el contenido de la bolsa, y también agrega un orificio para avión, lo que hace que esta bolsa sea adecuada para exhibir en supermercados. Acepta tamaño e impresión personalizados.`,
          },
          
          heading_9: {
            label:
              "Bolsa de jugo con boquilla retortable impresa a medida para envasado de alimentos para bebés",
          },
          pragh_9: {
            label: `Bolsa con boquilla, la solución perfecta para envasar jugos, purés, bebidas y más. Con capacidades personalizables desde 10 ml hasta 10 litros, puede estar seguro de que la bolsa con boquilla se adaptará perfectamente a sus productos.<br/><br/>Una de las características distintivas de la bolsa con boquilla es la tapa anti-ingerencia, que proporciona mayor seguridad y tranquilidad, especialmente para productos para bebés. También hay disponibles diferentes formas de tapas, lo que le permite elegir la mejor opción para su producto y marca.<br/><br/>La bolsa con boquilla también es adecuada para el llenado en caliente, lo que garantiza que la bolsa no se deforme a altas temperaturas de hasta 130 grados. Esto la hace ideal para productos que requieren un proceso de llenado en caliente, lo que garantiza que se mantenga la integridad del paquete.<br/><br/>Ya sea que esté buscando una solución de envasado confiable para jugos, purés u otras bebidas, las bolsas con boquilla brindan funcionalidad y seguridad. Sus opciones personalizables, resistencia a altas temperaturas y materiales no tóxicos la convierten en una excelente opción para las marcas que buscan mejorar el envasado de sus productos.`,
          },
          
          heading_10: {
            label:
              "Bolsa Doypack de grado alimenticio con pico vertical para jugo",
          },
          pragh_10: {
            label: `Las bolsas con boquilla DOY PACK son una forma relativamente nueva de embalaje, son las bolsas de embalaje de gelatina. En comparación con las formas de embalaje comunes, la mayor ventaja es la portabilidad, las bolsas de embalaje con boquilla se pueden colocar fácilmente en mochilas o incluso en bolsillos. Las bolsas con boquilla Gualapack son uno de los productos más populares de DOYPACK, que está hecho de una estructura laminada de PET/lámina/PET/PE, y también puede tener otras especificaciones, como materiales de 2 capas y 3 capas, dependiendo de los productos envasados, hay diferentes materiales para elegir: PET, PE, NY, AL, PA, VMPET, RCPP, LLDPE, etc.`,
          },
         
          heading_11: {
            label:
              "DOY PACK Envase de yogur personalizado de 200 ml Bolsa con boquilla de fondo plano vertical",
          },
          pragh_11: {
            label: `Presentamos nuestras bolsas con boquilla personalizadas: la solución definitiva para el envasado de líquidos y bebidas a prueba de fugas. Nuestras bolsas con boquilla están diseñadas con un enfoque único e innovador que permite un llenado flexible directamente a través de la boca o a través de espacios en la película que luego se sella. Este diseño garantiza que sus productos líquidos estén contenidos de forma segura, lo que evita fugas o derrames durante el almacenamiento o el transporte.<br/><br/>Además de su practicidad, nuestras bolsas con boquilla personalizadas también son una de las opciones más rentables para el envasado de líquidos y bebidas. En comparación con los materiales de envasado tradicionales como el vidrio y el plástico duro, nuestras bolsas con boquilla ofrecen una calidad superior a un precio mucho más bajo. Esto las hace ideales para empresas que buscan optimizar los costos de envasado sin comprometer la seguridad e integridad del producto.<br/><br/>Ya sea que esté envasando jugos, salsas u otros productos líquidos, nuestras bolsas con boquilla a prueba de fugas brindan una solución confiable y conveniente. Con su diseño personalizable, puede personalizar la bolsa para cumplir con sus requisitos específicos de marca y envasado, creando un producto único y llamativo que se destaca en el estante.`,
          },
          
          heading_12: {
            label:
              "Bolsa de embalaje DOY PACK de 200 g con pico vertical, 100 % de calidad alimentaria, para puré de frutas, para bebés",
          },
          pragh_12: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en el fondo. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto.<br/><br/>La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.`,
          },
          heading_13: {
            label:
              "Bolsa vertical con pico para llenado en caliente de 125 ℃ con diseño OEM de DOY PACK",
          },
          pragh_13: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en la parte inferior. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto. La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.<br/><br/>MaterialPET+AL+NY+RPE<br/>Tamaño8,4 X 13,9 cm + 5 cm<br/>Diámetro interior de la boquilla8,6 mm`,
          },
          
          heading_14: {
            label:
              "Bolsa de plástico DOY PACK con boquilla vertical de 140 g con diseño colorido para alimentos para bebés",
          },
          pragh_14: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en el fondo. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto.<br/><br/>La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.`,
          },

          heading_15: {
            label:
              "Bolsa de plástico DOY PACK con diseño personalizado, 90 g, con boquilla vertical, para alimentos para bebés",
          },
          pragh_15: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en el fondo. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto.<br/><br/>La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.`,
          },

          heading_16: {
            label:
              "Bolsa de embalaje para yogur DOY PACK antigoteo de 100 g, diseño colorido, con boquilla DOY PACK",
          },
          pragh_16: {
            label: `Somos DOY PACK, que tiene más de 13 años de experiencia en envases flexibles. La bolsa con boquilla es nuestro producto principal y el más vendido. Tenemos una fórmula especial que puede reducir el porcentaje de fugas en el fondo. Ofrecemos servicio OEM y ODM, podemos satisfacer las diferentes necesidades de los clientes.<br/><br/>La bolsa de retorta puede soportar una esterilización a alta temperatura de 125 ℃. La bolsa con boquilla común solo se puede llenar a 98 grados centígrados. La bolsa está hecha de aluminio, que es una de las propiedades de alta barrera y puede extender la vida útil del producto.<br/><br/>La tapa también utiliza material de retorta, no se deforma fácilmente durante la cocción. El color, la forma y el tamaño de la tapa se pueden personalizar.`,
          },

          heading_17: {
            label:
              "Bolsa de fondo plano para envasar café en polvo personalizada",
          },
          pragh_17: {
            label: `DOY PACK, un proveedor líder de soluciones de envasado de café personalizadas. Con más de 13 años de experiencia en la fabricación de envases flexibles, ofrecemos precios competitivos, calidad superior y una amplia gama de opciones de personalización para satisfacer sus necesidades específicas.<br/><br/>Nuestra diversa gama de tipos de envases de café incluye bolsas de fondo plano, bolsas con cierre autoportante, bolsas con sellado en los cuatro lados, bolsas tipo acordeón, películas de rollo de envases compuestos y más. Fabricados con materiales de plástico compuesto de alta barrera o papel-plástico, nuestros envases cuentan con propiedades excepcionales como barrera de gas, barrera de humedad, protección contra la luz y conservación de fragancias. Ya sea que necesite un llenado totalmente automático, semiautomático o manual, nuestros envases están diseñados para satisfacer sus procesos de producción únicos.<br/><br/>Si está listo para elevar su marca con envases de café personalizados que se destaquen, no busque más que DOY PACK. Contáctenos hoy para recibir la cotización más reciente. Con DOY PACK, sus productos de café seguramente dejarán una impresión duradera en sus clientes.`,
          },

          heading_18: {
            label:
              "Bolsa de embalaje de alimentos con granos de café personalizada DOY PACK con válvula unidireccional",
          },
          pragh_18: {
            label: `Presentamos nuestras versátiles bolsas de fondo plano de alta calidad, la solución de embalaje perfecta para una variedad de productos. Ya sea que trabaje en alimentos para mascotas, café, té, alimentos de alta gama, cosméticos u otras industrias, esta innovadora bolsa de embalaje puede satisfacer sus necesidades con su alto valor agregado y excelente funcionalidad.<br/><br/>Nuestras bolsas de fondo plano se fabrican utilizando tecnología de laminación de embalaje flexible y están disponibles en una variedad de materiales según los requisitos específicos.Una de las características destacadas de nuestra bolsa de fondo plano son sus cremalleras reutilizables, que brindan comodidad y facilidad de uso a los consumidores. La cremallera se abre y se cierra fácilmente para facilitar el acceso al contenido de la bolsa al tiempo que garantiza un almacenamiento seguro para una vida útil prolongada.<br/><br/>En general, nuestras bolsas de fondo plano son una solución de embalaje versátil y de alta calidad que brinda un excelente valor para una variedad de productos. Con sus opciones de materiales flexibles, cremalleras reutilizables y características personalizables, es la opción perfecta para las empresas que buscan mejorar el embalaje de sus productos y brindarles a los clientes una experiencia superior.`,
          },

          heading_19: {
            label:
              "Bolsa de plástico de grado alimenticio DOY PACK con cierre de cremallera y fondo plano para bebidas en polvo",
          },
          pragh_19: {
            label: `La bolsa con cierre de pie se puede abrir y cerrar repetidamente, con un sellado fuerte, conveniente para guardar productos y evitar la humedad. <br/><br/>La bolsa con cierre de pie se puede colocar de pie en el estante para mejorar la estética. La bolsa con cierre de pie ofrece a los consumidores características favorables al mercado. Por ejemplo, puede elegir si desea agregar una cremallera, si desea agregar un corte, si desea agregar un orificio para colgar, etc., una fuerte presencia en el estante y un atractivo cartel para etiquetas y gráficos. <br/><br/>Las bolsas con cierre de pie se venden en una amplia variedad de mercados, incluidos alimentos para mascotas, café, té, productos naturales y alimentos especiales.`,
          },
          
          heading_20: {
            label:
              "Bolsa de plástico DOY PACK Qual-Seal con fondo plano y cierre de cremallera",
          },
          pragh_20: {
            label: `La bolsa con cierre de pie se puede abrir y cerrar repetidamente, con un sellado fuerte, conveniente para guardar productos y evitar la humedad.<br/><br/>La bolsa con cierre de pie se puede colocar de pie en el estante para mejorar la estética. La bolsa con cierre de pie ofrece a los consumidores características favorables al mercado. Por ejemplo, puede elegir si desea agregar una cremallera, si desea agregar un corte, si desea agregar un orificio para colgar, etc., una fuerte presencia en el estante y un atractivo cartel para etiquetas y gráficos.<br/><br/>Las bolsas con cierre de pie se venden en una amplia variedad de mercados, incluidos alimentos para mascotas, café, té, productos naturales y alimentos especiales.`,
          },

          heading_21: {
            label:
              "DOY PACK 250 g 1 kg Bolsa de fondo plano para envasado de granos de café en polvo",
          },
          pragh_21: {
            label: `Las bolsas de café tienen una variedad de tipos de bolsas para elegir, bolsa con cierre de cremallera vertical, bolsa de fondo plano, bolsa de órgano, la bolsa de fondo plano es la más popular.<br/><br/>Bolsa de fondo plano, también conocida como bolsa plana, bolsa cuadrada, bolsa plegable, bolsa tridimensional, debido a que la parte inferior del producto terminado pertenece a la parte plana, cuatro bordes pueden hacer que el empaque sea más estable "de pie", más adherencia.<br/><br/>¿Cuáles son sus ventajas? La capacidad de la bolsa de fondo plano es mayor que la de otros tipos de bolsas del mismo tamaño. Ocho páginas impresas con amplio espacio para descripciones detalladas del producto. Más perfecto para promover las ventas de productos, la visualización de la información del producto es más completa. Más puede permitir que los clientes comprendan sus productos.<br/><br/>Material: PET/AL/PE y personalización<br/>Tamaño: 13 x 21 cm +7 cm<br/>Manejo de la superficie: Impresión UV<br/>Color: Puede hasta 13 colores<br/>Envío: Tierra/Expreso/Aéreo/Marítimo`,
          },
          heading_22: {
            label:
              "Bolsa de fondo plano DOY PACK, oferta especial, bolsa para comida para mascotas",
          },
          pragh_22: {
            label: `La bolsa para mascotas con fondo plano es uno de nuestros productos más vendidos. Esta bolsa con cierre de calidad tiene una cremallera de un solo lado, diferente de la cremallera de doble lado, más diseño. La bolsa con cierre térmico también tiene una abertura para rasgar, que es conveniente para abrir. El cierre de ocho lados es una de las mejores opciones para que los clientes elijan bolsas de comida para mascotas.<br/><br/>Las ventajas de las bolsas con cierre de ocho lados son las siguientes.<br/><br/>1、Se colocan sin problemas, lo que favorece la exhibición en los estantes y atraen profundamente la atención de los consumidores.<br/>2, un total de ocho páginas impresas, espacio suficiente para describir el producto o las ventas del producto en el idioma, la promoción del producto de ventas globales para su uso. Visualización más completa de la información del producto.<br/>3、Dado que la parte inferior de la bolsa es plana y abierta, coloque la bolsa plana, la parte inferior no se pierde como un excelente diseño de exhibición.<br/>4、El sello octagonal se mantiene recto, lo que favorece la hermosa exhibición de la marca<br/>5, proceso compuesto de empaque flexible, variación del material, de acuerdo con el grosor del material, barrera de agua y oxígeno, efecto metálico e incluso efecto de impresión, los beneficios son definitivamente mayores que los cambios de una sola caja.`,
          },
          heading_23: {
            label:
              "Bolsa de empaquetado de aperitivos con semillas de girasol, bolsa de fondo plano con ventana y sellado Qual-Seal",
          },
          pragh_23: {
            label: `La bolsa con sello cuádruple tiene un formato similar al de la bolsa con fuelle lateral y crea una diferencia distintiva en el aspecto de la estantería. Sellada en las cuatro esquinas de la bolsa, en lugar de en la parte posterior, la bolsa con sello cuádruple ofrece cuatro paneles nítidos y limpios para la colocación de etiquetas y gráficos y una presencia general sólida en la estantería.`,
          },
          heading_24: {
            label:
              "Rollo de película de plástico para envoltorio de helado personalizado para alimentos congelados",
          },
          pragh_24: {
            label: `A medida que aumentan las temperaturas y brilla el sol, no hay nada más delicioso que disfrutar de un helado. DOY PACK comprende los requisitos únicos del envasado de alimentos congelados, especialmente los helados. Nuestras bolsas de película en rollo para envasado de helados están diseñadas para preservar el sabor, la textura y la calidad de sus delicias congeladas, asegurando que lleguen a sus clientes en perfectas condiciones. En DOY PACK, priorizamos la personalización y la flexibilidad para satisfacer las necesidades únicas de nuestros clientes. Trabajamos en estrecha colaboración con usted para determinar el material, el grosor, el tamaño y la especificación ideales para su envasado de helados, asegurando que cumpla con los requisitos de su marca y proporcione la mejor solución de envasado para su producto. Elija DOY PACK para sus necesidades de envasado de helados y mejore la presentación y la protección de sus alimentos congelados. Permítanos ayudarlo a crear envases que deleiten a sus clientes y los hagan volver por más. Materiales compuestos de 2 capas: OPP/CPP Aluminio, KOP/CPP, KPET/CPP, Papel Kraft/CPP o PE Materiales compuestos de 3 capas: PET/PAPEL/LLDPE o Papel Kraft/AL/PE`,
          },
          heading_25: {
            label:
              "Rollo de película para envoltorio de patatas fritas, snacks y alimentos con impresión personalizada DOY PACK",
          },
          pragh_25: {
            label: `Presentamos las soluciones de embalaje de alta calidad para papas fritas de DOY PACK<br/><br/>¿Necesita servicios de impresión gráfica llamativos o materiales de embalaje fáciles de cortar para sus productos de papas fritas? No busque más que DOY PACK, donde nos especializamos en brindar soluciones de embalaje de primer nivel diseñadas para satisfacer sus necesidades específicas.<br/><br/>En DOY PACK, entendemos la importancia de mantener la calidad de sus papas fritas, por lo que nuestro equipo de expertos colaborará con usted para diseñar una estructura de embalaje que se adapte perfectamente a preservar la textura crujiente de su producto. Ya sea que sus papas fritas estén hechas de materias primas saludables y de alta calidad o tengan un perfil de sabor delicioso y saludable, tenemos las soluciones de embalaje para ayudar a promover las ventas y elevar su marca.<br/><br/>Confíe en DOY PACK para brindarle soluciones de embalaje de alta calidad que no solo sean visualmente impactantes, sino que también conserven de manera efectiva la frescura y la textura crujiente de sus papas fritas. Eleve su marca con un embalaje que refleje verdaderamente la excelencia de su producto.`,
          },
          heading_26: {
            label:
              "DOY PACK - Película de embalaje automática de grado alimenticio, rollo de película de plástico para galletas, snacks, bolsa de embalaje con sellado posterior",
          },
          pragh_26: {
            label: `El film en rollo para embalaje automático es un tipo de bolsa de embalaje que se convierte en una bolsa mediante el último proceso, que es simplemente un proceso de fabricación de bolsas. La ventaja es que el coste es menor que el de la fabricación de bolsas, ya que se pueden fabricar muchas bolsas pequeñas al mismo precio. Todos sabemos que cuanto más pequeño es un producto, más embalaje necesita (envases para aperitivos, caramelos, cereales, etc.), por lo que el envoltorio automático es una opción asequible.`,
          },
          heading_27: {
            label:
              "Película en rollo de PET para embalaje de galletas de grado alimenticio con diseño OEM DOY PACK",
          },
          pragh_27: {
            label: `En pocas palabras, la película enrollada se refiere a la película de embalaje que se enrolla. Para las empresas de producción de embalaje, solo requiere un proceso menos que la producción de bolsas terminadas, y su tipo de material también es consistente con las bolsas de embalaje de plástico. Los tipos comunes incluyen película retráctil de PVC, película OPP, película de PE, película protectora para mascotas, película compuesta, etc. La película en rollo se aplica a las máquinas de envasado automático, como el champú en bolsa de uso común y algunas toallitas húmedas, que utilizan este modo de envasado. El costo de usar el embalaje de película en rollo es relativamente bajo, pero requiere una máquina de envasado automática. Además, en nuestra vida diaria, también veremos un tipo de aplicación de película en rollo. En las pequeñas tiendas que venden tazas de té con leche, Congee, etc., a menudo veremos un tipo de máquina de sellado de embalaje en el lugar. La película de sellado que utiliza es película en rollo. El embalaje de película en rollo más común es el embalaje de botellas, y generalmente utiliza película en rollo termorretráctil, como algunas colas, agua mineral, etc. Especialmente para botellas con forma no cilíndrica, la película en rollo termorretráctil se usa comúnmente.`,
          },
          heading_28: {
            label:
              "Rollo de película para envasar croissants de BOPP mate DOY PACK",
          },
          pragh_28: {
            label: `La principal ventaja de los rollos de film en la industria del embalaje es el ahorro de costes en todo el proceso de embalaje. El uso de film en rollo en las máquinas de embalaje automáticas elimina la necesidad de cualquier trabajo de sellado por parte del fabricante de embalajes y solo requiere una operación de sellado única en la planta de fabricación. El coste del transporte también se reduce porque se suministra en rollos. Con la aparición del film en rollo, todo el proceso de embalaje de plástico se simplifica en tres pasos principales: impresión, transporte y embalaje, lo que simplifica enormemente el proceso de embalaje y reduce el coste de toda la industria, convirtiéndolo en la primera opción para los envases pequeños.`,
          },
          heading_29: {
            label:
              "Película de rollo de plástico Mylar para embalaje de golosinas, chocolates y frutas para mascotas OEM",
          },
          pragh_29: {
            label: `El rollo de película para embalaje automático también es un tipo de bolsa de embalaje, está hecho de bolsa de embalaje en el proceso. El costo es más barato que hacer bolsas, y se pueden hacer más bolsas pequeñas al mismo precio, muy adecuado para dulces, bocadillos, cereales y otros paquetes pequeños.<br/><br/>Este es un paquete para dulces, el diseño translúcido permite a los clientes ver el producto, más atractivo. Todos los materiales que usamos son de calidad alimentaria, no dude en trabajar con nosotros. La película en rollo viene en una variedad de espesores perfectos para satisfacer sus necesidades.<br/><br/>Podríamos personalizar muchos tipos de película de embalaje de plástico, como: película para cocinar, película inflable, película de baja temperatura, película congelada, película retorcida, película láser, etc.`,
          },
          heading_30: {
            label:
              "Proveedor chino de película de plástico DOY PACK, película de stock en rollo para aperitivos",
          },
          pragh_30: {
            label: `La principal ventaja de los rollos de film en la industria del embalaje es el ahorro de costes en todo el proceso de embalaje. El uso de film en rollo en las máquinas de embalaje automáticas elimina la necesidad de cualquier trabajo de sellado por parte del fabricante de embalajes y solo requiere una operación de sellado única en la planta de fabricación. El coste del transporte también se reduce porque se suministra en rollos. Con la aparición del film en rollo, todo el proceso de embalaje de plástico se simplifica en tres pasos principales: impresión, transporte y embalaje, lo que simplifica enormemente el proceso de embalaje y reduce el coste de toda la industria, convirtiéndolo en la primera opción para los envases pequeños.`,
          },
          heading_31: {
            label:
              "Película para envasado de snacks Película de plástico para envasado Película para envasado automático",
          },
          pragh_31: {
            label: `El film en rollo para embalaje automático es un tipo de bolsa de embalaje que se convierte en una bolsa mediante el último proceso, que es simplemente un proceso de fabricación de bolsas. La ventaja es que el coste es menor que el de la fabricación de bolsas, ya que se pueden fabricar muchas bolsas pequeñas al mismo precio. Todos sabemos que cuanto más pequeño es un producto, más embalaje necesita (envases para aperitivos, caramelos, cereales, etc.), por lo que el envoltorio automático es una opción asequible.`,
          },
          
          heading_32: {
            label:
              "Bolsa de plástico transparente con orificio para ventilación de frutas y verduras DOY PACK",
          },
          pragh_32: {
            label: `Con la mejora del nivel de vida de las personas, los requisitos para el envasado y la conservación de la fruta son cada vez mayores, lo que insta a los fabricantes de fruta a mejorar y perfeccionar el embalaje interior de la fruta, a fin de mejorar la frescura de la fruta.`,
          },

          proText1: {
            label: `El embalaje en rollo, laminado en capas o multicapa, tiene propiedades
                    verdaderamente excelentes. Entre las características prácticas, podemos destacar
                    las siguientes: fiabilidad y durabilidad, ligereza, excelente
                    hermeticidad y alta barrera. Las propiedades estéticas incluyen un aspecto limpio
                    y presentable. Nuestro embalaje en rollo se puede utilizar como:
                    embalaje de ketchup; embalaje de mayonesa; embalaje de salsa; embalaje de jugo; embalaje de puré; embalaje para jabón líquido y
                    pasta de dientes, etc. Los envases laminados también son tapas blandas y bolsitas que protegen el producto de la humedad. `,
          },

          proText2: {
            label: `Actualmente, es casi imposible encontrar un material que pueda competir con los polímeros en cuanto a fiabilidad. Otra ventaja de este material es su
                    precio asequible. DOY PACK fabrica envases en rollo flexibles desde hace más de ocho años. Nuestro equipo nos permite utilizar
                    la tecnología de extrusión, que le da al film un aspecto excelente
                    y proporciona una transparencia ideal. Esto también garantiza una alta elasticidad
                    y resistencia a la perforación. Además, DOY PACK ofrece
                    servicios de impresión rotograbado y laminación modernos, lo que le permite crear su diseño único.`,
           },
     

           Materials: {label: `Materials`,},
          TwoLayer: {label: `Dos capas`,},
          ThreeLayer: {label: `Tres capas`,},
          FourLayer: {label: `Cuatro capas`,},

          Color: {label: `Color`,},
          upto13colors: {label: `hasta 13 colores`,},
          LeadTime: {label: `Plazo de entrega`,},
          days: {label: `20-25 días`,},
          

          Term: {label: `Término`,},
          Sample: {label: `Muestra`,},
          freestocksamplesoffered: {label: `Se ofrecen muestras de stock gratuitas`,},
          
          Package: {label: `Paquete`,},
          high: {label: `Núcleo de papel de alta calidad + bolsa de PE + tapón de plástico + cartón de 5 capas + cinta de embalaje + paleta de madera o plástico`,},

          PaymentTerm: {label: `Plazo de pago`,},
          Western: {label: `T/T, L/C, D/A, D/P, Western Union, Otras`,},

          Feature: {label: `Característica`,},
          longText1: {label: `1. Sin olor
                              2. Fácil de sellar con calor
                              3. Buena contracción, alta transparencia
                              4. Efectos de impresión de alta calidad`,},

          Application: {label: `Solicitud`,},
          longText2: {label: ` 1. Contenido sólido para alimentos: caramelos, galletas, galletas de patata, etc.
                                2. Contenido sólido para cosméticos y detergentes: detergentes, etc.
                                3. Alimentos secos: patatas fritas, pasas, aperitivos, etc.
                                4. Contenido líquido: zumos, bebidas, agua mineral, salsas, etc.`,},

         Specs: {label: `Especificaciones`,},
        },
      },

      ///////////////////////////////////////////////////////////////////////////////////////////////
      en: {
        translation: {
          //product
          heading_1: {
            label:
              "Custom DOY PACK Zipper Bag for Candy Sweet Chocolate Food Packaging",
          },
          pragh_1: {
            label: `This innovative packaging solution offers a range of advantages over traditional three-side sealed plastic bags, making it ideal for food packaging and more.<br/><br/> First and foremost, the self-standing feature of these bags allows them to stand upright on the shelf, providing a visually appealing display that catches the consumer’s eye. In today’s competitive retail environment this is critical to attracting attention and driving sales. Self-standing zipper packaging bags can display products more effectively, enhance the overall display effect, and increase the possibility of purchase.<br/><br/>Additionally, these bags take up less space on the shelf, allowing for more efficient use of space and a neater, more organized display. Not only does this benefit retailers by maximizing shelf space, but it also makes it easier for consumers to find and access products.<br/><br/>In addition to their practical benefits, our self-standing zipper bags are designed for reuse. The integrated zipper closure allows consumers to easily seal and reseal the bag, maintaining the freshness and integrity of the contents.<br/><br/>Size: 28*23 cm + 9 cm <br/>Material: PET+PE <br/>Thickness: 112 microns`,
          },

          heading_2: {
            label:
              "DOY PACK Food Grade Stand Up Zipper Pouch 500g Plastic Packaging Bag",
          },
          pragh_2: {
            label: `Stand up zipper pouch can be opened and closed repeatedly,with strong sealing, convenient to save goods and prevent moisture.<br/><br/>Stand up zipper pouch can be placed standing up on the shelf to enhanced the aesrhetics.The stand-up zipper pouch provides consumers with market-friendly features. For example, you can choose whether to add a zipper, whether to add a tear, whether to add a hanging hole, etc., strong shelf presence and an attractive billboard for label and graphics.<br/><br/>Stand-up pouches are sold into a wide variety of markets including pet food, coffee, tea, natural products and specialty foods.`,
          },

          heading_3: {
            label:
              "DOY PACK 5L Stand Up Pouch with Special Sport for Adblue Liquid Packaging Bag Plastic DOY PACK",
          },
          pragh_3: {
            label: `Stand-up pouches are a relatively new form of packaging, the biggest advantage over common forms of packaging is portability; stand-up pouches can be easily put into backpacks or even pockets, and can be reduced in size with the reduction of the contents, more convenient to carry. In many aspects such as upgrading the product, strengthening the visual effect of the shelf, portable, convenient to use, freshness and sealability, etc., it has advantages. Our spout bags also have round holes for hanging on supermarket stands.`,
          },

          heading_4: {
            label:
              "DOY PACK Sanrio Colorful Packaging Bag Stand Up Heat Seal Pouch For Laundry Detergent",
          },
          pragh_4: {
            label: `The heat seal bag has strong sealing, which is convenient for storing goods and no leaking.<br/><br/>Stand up heat seal bags can stand upright on a shelf to enhance aesthetics. Stand up heat seal pouch offer market-friendly features to consumers. For example, you can choose whether to add zippers, tear notch, hanging holes, etc., a strong shelf presence, and attractive billboards for labels and graphics.<br/><br/>Stand up pouches are sold to a variety of markets, including juice, coffee, tea, natural products, and specialty foods.`,
          },
          heading_5: {
            label:
              "DOY PACK Colorful Design 105g Fruit Puree Stand Up Spout Pouch Food Grade Plastic Packaging Bag",
          },
          pragh_5: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.<br/><br/>The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.<br/><br/>MaterialPET+AL+NY+RPE `,
          },

          heading_6: {
            label:
              "DOY PACK Custom Printed 590ML Heat Seal Packaging Bag Plastic Liquid Stand Up Pouch For Laundry Detergent",
          },
          pragh_6: {
            label: `Laundry detergent stand-up pouches have excellent sealing and strength of composite materials, also will not appear after a few minutes can withstand pressure ≥ 50kg rupture, leakage, utilization with aluminum cans, Tetra Pak, PET bottles and beverage containers, and with easy to drink, light weight performance, less material consumption, easy to transport and other containers can not have the advantages.<br/><br/>Laundry detergent stand up Hot Seal pouches have: anti-static, anti-UV, moisture and oxygen blocking shade, cold oil temperature, easy to seal fresh oxygen barrier and other characteristics.<br/>1、Resistant to chemical erosion ;<br/>2、Self-standing zipper bags, glossy, partially transparent or translucent;<br/>3, mostly good insulator;<br/>4、Self-standing zipper bags are light weight and strong;<br/>5, the process is easy to mass production, inexpensive ;<br/>6、Self-standing zipper bags are multi-functional, multi-practical, easy to color, and some high temperature;`,
          },

          heading_7: {
            label:
              "DOY PACK OEM Design Plastic Packaging Bag Matte Surface Laundry Detergent Doypack 1.5L Heat Seal Stand Up Pouch",
          },
          pragh_7: {
            label: `The heat seal bag has strong sealing, which is convenient for storing goods and no leaking.<br/><br/>Stand up heat seal bags can stand upright on a shelf to enhance aesthetics. Stand up heat seal pouch offer market-friendly features to consumers. For example, you can choose whether to add zippers, tear notch, hanging holes, etc., a strong shelf presence, and attractive billboards for labels and graphics.<br/><br/>Stand up pouches are sold to a variety of markets, including pet food, coffee, tea, natural products, and specialty foods.<br/><br/> Material：Matte BOPP/PA/White PE <br/>Size：160mm x 250mm + 50mm x 2`,
          },

          heading_8: {
            label:
              "DOY PACK 198g Dog Food Packaging Plastic Bag Stand Up Zipper Pouch Doypack",
          },
          pragh_8: {
            label: `This dog food bag adpots three-layer material structure, which can reduce the probability of bag breakage. Colorful and lovely design is more attractive to customers. we can print up to 13 colors ,using gravure printing, the actual product is closer to the design.<br/><br/>This dog food bag adds a visual window through which consumers can see the contents of the bag clearly, and also adds an aircraft hole, making this bag suitable for display in supermarkets. Accept custom size and printing.`,
          },

          heading_9: {
            label:
              "Custom Printed Juice Bag Retort Spout Pouch for Baby Food Packaging",
          },
          pragh_9: {
            label: `Spout pouch, the perfect solution for packaging juices, purees, drinks and more. With customizable capacities from 10 ml to 10 liters, you can rest assured that the Spout pouch will perfectly accommodate your products.<br/><br/>One of the distinguishing features of the Spout pouch  is the anti-swallowing lid, which provides added safety and peace of mind, especially for baby products. Different shapes of lids are also available, allowing you to choose the best option for your product and brand.<br/><br/>The spouted bag is also suitable for hot filling, ensuring that the bag will not warp at high temperatures of up to 130 degrees. This makes it ideal for products that require a hot filling process, ensuring that the integrity of the package is maintained.<br/><br/>Whether you are looking for a reliable packaging solution for juices, purees, or other beverages, spout bags provide functionality and safety. Its customizable options, high temperature resistance, and non-toxic materials make it a great choice for brands looking to improve the packaging of their products.`,
          },

          heading_10: {
            label:
              "DOY PACK Food Grade Doypack Pouch Stand Up Spout Bag For Juice",
          },
          pragh_10: {
            label: `DOY PACK Stand up spout pouch is a relatively new form of packaging, is the jelly packaging bags. Compared with ordinary forms of packaging, the biggest advantage is portability, spout packaging bag can be easily put into backpacks or even pockets. Gualapack spout pouch is one of the most popular products of DOYPACK, which is made of PET/Foil/PET/PE laminated structure, and can also have other specifications, such as 2-layer and 3-layer materials, depending on the packaged products, there are different materials to choose from: PET, PE, NY, AL, PA, VMPET, RCPP, LLDPE, etc.`,
          },

          heading_11: {
            label:
              "DOY PACK Custom 200ml Yogurt Packaging Stand up flat bottom Spout Pouch",
          },
          pragh_11: {
            label: `Introducing our custom spout bags – the ultimate solution for leak-proof liquid and beverage packaging. Our spouted bags are designed with a unique and innovative approach that allows flexible filling directly through the mouth or through gaps in the film that is subsequently sealed. This design ensures your liquid products are securely contained, preventing any leaks or spills during storage or transportation.<br/><br/>In addition to their practicality, our custom spout bags are also one of the most cost-effective options for liquid and beverage packaging. Compared to traditional packaging materials like glass and hard plastic, our spout bags offer superior quality at a much lower price. This makes them ideal for businesses looking to optimize packaging costs without compromising product safety and integrity.<br/><br/>Whether you’re packaging juices, sauces or other liquid products, our leak-proof spouted bags provide a reliable and convenient solution. With its customizable design, you can customize the bag to meet your specific branding and packaging requirements, creating a unique and eye-catching product that stands out on the shelf.`,
          },

          heading_12: {
            label:
              "DOY PACK 100% Food Grade 200g Stand Up Spout Pouch Fruit Puree Packaging Bag for Baby",
          },
          pragh_12: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.<br/><br/>The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.`,
          },

          heading_13: {
            label:
              "DOY PACK OEM Design 125℃ Hot Filling Stand up pouch with spout",
          },
          pragh_13: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.<br/><br/>MaterialPET+AL+NY+RPE <br/>Size8.4 X 13.9cm +5 cm <br/>nozzle inner diameter8.6 mm`,
          },

          heading_14: {
            label:
              "DOY PACK Colorful Design DOY PACK 140g Plastic Stand Up Spout Bag For Baby Food",
          },
          pragh_14: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.<br/><br/>The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.`,
          },

          heading_15: {
            label:
              "DOY PACK Custom Design 90g Stand Up Spout Pouch Plastic DOY PACK for Baby Food",
          },
          pragh_15: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.<br/><br/>The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.`,
          },

          heading_16: {
            label:
              "DOY PACK No-Leaking 100g Yogurt Packaging Bag Colorful Design DOY PACK with Spout",
          },
          pragh_16: {
            label: `We are DOY PACK, who has more than 13 years experience in flexible packaging. Spout pouch is our main product and hot seller.We have special formular can reduce the percentage of  bottom leakage.We provide OEM&ODM service,can meet the different needs of customers.<br/><br/>The retort pouch can withstand 125℃ High temperature sterilization. Ordinary spout pouch can only be filled at 98 degrees celsius.The bag is made of aluminum, which is one of the high barrier properties and can extend the shelf life of the product.<br/><br/>The lid also use retort material, not easily deformed during cooking. Lid color,shape,size can be customized.`,
          },

          heading_17: {
            label:
              "Custom Coffee Bean Powder Packaging Bag Flat Bottom Pouch",
          },
          pragh_17: {
            label: `DOY PACK, a leading provider of customized coffee packaging solutions. With more than 13 years of flexible packaging manufacturing expertise, we offer competitive prices, superior quality, and a wide range of customization options to meet your specific needs.<br/><br/>Our diverse range of coffee packaging types includes flat bottom bags, self-standing zipper bags, four-side seal bags, accordion bags, composite packaging roll films, and more. Crafted from high-barrier composite plastic or paper-plastic materials, our packaging boasts exceptional properties such as gas barrier, moisture barrier, light shielding, and fragrance preservation. Whether you require fully automatic, semi-automatic, or manual filling, our packaging is designed to cater to your unique production processes.<br/><br/>If you’re ready to elevate your brand with personalized coffee packaging that stands out, look no further than DOY PACK. Contact us today to receive the latest quote. With DOY PACK, your coffee products are sure to make a lasting impression on your customers.`,
          },

          heading_18: {
            label:
              "DOY PACK Custom Coffee Bean Food Packaging Bag with one-way valve",
          },
          pragh_18: {
            label: `Introducing our versatile high quality flat bottom bags, the perfect packaging solution for a variety of products. Whether you are in pet food, coffee, tea, high-end food, cosmetics or other industries, this innovative packaging bag can meet your needs with its high added value and excellent functionality.<br/><br/>Our flat bottom bags are manufactured using flexible packaging lamination technology and are available in a variety of materials depending on specific requirements.One of the standout features of our flat bottom bag is their reusable zippers, providing convenience and ease of use to consumers. The zipper opens and closes easily for easy access to the contents of the bag while ensuring secure storage for extended shelf life.<br/><br/>All in all, our flat bottom bags are a versatile, high-quality packaging solution that provides excellent value for a variety of products. With its flexible material options, reusable zippers and customizable features, it’s the perfect choice for businesses looking to elevate their product packaging and provide customers with a superior experience.`,
          },

          heading_19: {
            label:
              "DOY PACK Food Grade Plastic Packaging Bag Flat Bottom Zipper Doypack for Drink Powder",
          },
          pragh_19: {
            label: `Stand up zipper pouch can be opened and closed repeatedly,with strong sealing, convenient to save goods and prevent moisture. <br/><br/>Stand up zipper pouch can be placed standing up on the shelf to enhanced the aesrhetics.The stand-up zipper pouch provides consumers with market-friendly features. For example, you can choose whether to add a zipper, whether to add a tear, whether to add a hanging hole, etc., strong shelf presence and an attractive billboard for label and graphics.<br/><br/>Stand-up pouches are sold into a wide variety of markets including pet food, coffee, tea, natural products and specialty foods.`,
          },
          
          heading_20: {
            label:
              "DOY PACK Qual-Seal Flat Bottom Bag Plastic Stand Up Packaging Pouch With  Zipper Lock ",
          },
          pragh_20: {
            label: `Stand up zipper pouch can be opened and closed repeatedly,with strong sealing, convenient to save goods and prevent moisture.<br/><br/>Stand up zipper pouch can be placed standing up on the shelf to enhanced the aesrhetics.The stand-up zipper pouch provides consumers with market-friendly features. For example, you can choose whether to add a zipper, whether to add a tear, whether to add a hanging hole, etc., strong shelf presence and an attractive billboard for label and graphics.<br/><br/>Stand-up pouches are sold into a wide variety of markets including pet food, coffee, tea, natural products and specialty foods.`,
          },

          heading_21: {
            label:
              "DOY PACK 250g 1kg Flat Bottom Pouch for Coffee Bean Powder Packaging",
          },
          pragh_21: {
            label: `Coffee bags have a variety of bag types to choose from, stand up zipper bag, flat bottom bag, organ bag, flat bottom bag is the most popular.<br/><br/>Flat bottom pouch bag, also known as flat bag, square bag, folding bag, three-dimensional bag, because the bottom of the finished product belongs to the flat, four edges can make the packaging more stable “standing”, more adhesion.<br/><br/>What are its advantages? The capacity of the flat bottom bag is larger than that of other bag types at the same size.  Eight printed pages with ample space for detailed descriptions of the product. More perfect to promote product sales, product information display more complete. More can let customers understand your products.<br/><br/>Material: PET/AL/PE & Customization <br/>size: 13 x 21 cm +7 cm <br/>Surface Handing: UV printing <br/>Color : Can up to 13 color <br/>Shipping: Land/Express/Air/Sea`,
          },
          heading_22: {
            label:
              "DOY PACK Flat Bottom Pouch Hot Sale Pet Food Bag",
          },
          pragh_22: {
            label: `Flat bottom pouch pet bag is one of our hot selling products, this qual seal bag has a single side zipper, different from the double side zipper, more design. The Heat seal bag also has a tear opening, which is convenient to tear open. Eight side seal is one of the best choices for customers to choose pet food bags.<br/><br/>The advantages of the eight side seal bags are as follows.<br/><br/>1、Standing smoothly, conducive to shelf display, deeply attract the eyes of consumers.<br/>2, a total of eight printed pages, sufficient place to describe the product or language product sales, global sales product promotion for use. More complete display of product information.<br/>3、Since the bottom of the bag is flat and open, put the bag flat, the bottom is not lost as an excellent display layout.<br/>4、The octagonal seal stands straight, which is conducive to the beautiful display of the brand<br/>5, flexible packaging composite process, material variation, according to the thickness of the material, water and oxygen barrier, metal effect and even printing effect, the benefits are definitely greater than a single box changes.`,
          },
          heading_23: {
            label:
              "Sunflower Seeds Snack Packaging Bag Qual-Seal Flat Bottom Pouch With Window",
          },
          pragh_23: {
            label: `Quad Seal Pouch is similar in format to the side gusset bag, Quad Seal Bags create a distinctive difference in shelf appearance. Sealed on the four corners of the bag, rather than the back, the quad seal bag offers four crisp, clean panels for labels and graphic placement and an overall strong shelf presence`,
          },
          heading_24: {
            label:
              "Custom Ice Pop Popsicle Wrapper Plastic frozen Food Packaging Film Roll",
          },
          pragh_24: {
            label: `As temperatures rise and the sun shines, there’s nothing more delicious than enjoying a Popsicle.DOY PACK understands the unique requirements of packaging frozen foods, especially ice pop. Our ice pop packaging roll film bags are designed to preserve the flavour, texture and quality of your frozen treats, ensuring they reach your customers in perfect condition.At DOY PACK, we prioritize customization and flexibility to meet our customers’ unique needs. We work closely with you to determine the ideal material, thickness, size and specification for your ice pop packaging, ensuring it meets your brand requirements and provides the best packaging solution for your product.Choose DOY PACK for your ice pop packaging needs and enhance the presentation and protection of your frozen foods. Let us help you create packaging that delights your customers and keeps them coming back for more.2-Layer composite materials :OPP/CPP Aluminum ,KOP/CPP, KPET/CPP, Kraft Paper/CPP or PE3-Layer composite materials : PET/PAPER/LLDPE or Kraft Paper/ AL/PE`,
          },
          heading_25: {
            label:
              "DOY PACK Custom Printed Food Potato Chips Snack Wrapper Packaging Roll Film",
          },
          pragh_25: {
            label: `Introducing DOY PACK’s High-Quality Potato Chip Packaging Solutions<br/><br/>Are you in need of eye-catching graphic printing services or easy-to-tear packaging materials for your potato chip products? Look no further than DOY PACK, where we specialize in providing top-notch packaging solutions tailored to meet your specific needs.<br/><br/>At DOY PACK, we understand the importance of maintaining the quality of your potato chips, which is why our team of experts will collaborate with you to design a packaging structure that is perfectly suited for preserving the crispiness of your product. Whether your potato chips are made from high-quality and healthy raw materials or boast a delicious and healthy flavor profile, we have the packaging solutions to help promote sales and elevate your brand.<br/><br/>Trust DOY PACK to provide you with high-quality packaging solutions that are not only visually stunning but also effectively preserve the freshness and crispness of your potato chips. Elevate your brand with packaging that truly reflects the excellence of your product.`,
          },
          heading_26: {
            label:
              "DOY PACK Food Grade Automatic Packaging Film Plastic Roll Stock Film For Cookie Snacks Back Seal Packing Bag",
          },
          pragh_26: {
            label: `Automatic packaging roll film is a kind of packaging bag, it is made into a bag of the last process is simply a bag making process.  The advantage is that the cost is lower than making bags, you can make a lot of small bags at the same price.  We all know that the smaller a product is, the more packaging it needs — snack packaging, candy packaging, cereal packaging, etc. — so auto-wrap is an affordable option.`,
          },
          heading_27: {
            label:
              "DOY PACK OEM Design Food Grade Cookie Packaging Film PET Roll Stock Film ",
          },
          pragh_27: {
            label: `smply put, rolled film refers to the packaging film that is rolled up. For packaging production enterprises, it only requires one less process than producing finished bags, and its material type is also consistent with plastic packaging bags. Common types include PVC shrink film, OPP film, PE film, pet protective film, composite film, etc.Roll film is applied to automatic packaging machines, such as commonly used bag shampoo and some wet wipes, which use this packaging mode. The cost of using roll film packaging is relatively low, but it requires an automatic packaging machine.In addition, in our daily life, we will also see a kind of roll film application. In small stores selling cup of milk tea, Congee, etc., we will often see a kind of on-site packaging sealing machine. The sealing film it uses is roll film. The most common roll film packaging is bottle packaging, and generally uses heat shrink roll film, such as some cola, mineral water, etc. Especially for non cylindrical shaped bottles, heat shrink roll film is commonly used`,
          },
          heading_28: {
            label:
              "DOY PACK Matte BOPP Croissant Food Packaging Film Roll",
          },
          pragh_28: {
            label: `The main advantage of film rolls in the packaging industry is the cost savings in the entire packaging process. The use of roll stock film in automatic packaging machinery eliminates the need for any sealing work by the packaging manufacturer and requires only a one-time sealing operation at the manufacturing facility. The cost of transportation is also reduced because it is supplied in rolls. With the emergence of roll film, the entire process of plastic packaging is simplified into three major steps: printing – transportation – packaging, which greatly simplifies the packaging process and reduces the cost of the entire industry, making it the first choice for small packaging.`,
          },
          heading_29: {
            label:
              "OEM Pet Fruit Candy Snack Chocolate Packaging Plastic Myalr Roll Film",
          },
          pragh_29: {
            label: `Automatic packaging roll film is also kind of packaging bag,it is made of packaging bag on the process. Cost is cheaper than making bags,and more small bags can be made at the same price, very suitable for candy , snack , cereals and other small packages.<br/><br/>This one is pack for candy, translucent design allows customers to see the product, more attractive. All materials we use food grade material, pls feel free to work with us. Roll film comes in a variety of thicknesses perfect to meet your needs.<br/><br/>We could customzed  many types of plastic packaging film, such as: cooking film, inflatable film, low temperature film, frozen film, twist film, laser film, etc.`,
          },
          heading_30: {
            label:
              "DOY PACK China Supplier Plastic Packaging Film Snack Roll Stock Film",
          },
          pragh_30: {
            label: `The main advantage of film rolls in the packaging industry is the cost savings in the entire packaging process. The use of roll stock film in automatic packaging machinery eliminates the need for any sealing work by the packaging manufacturer and requires only a one-time sealing operation at the manufacturing facility. The cost of transportation is also reduced because it is supplied in rolls. With the emergence of roll film, the entire process of plastic packaging is simplified into three major steps: printing – transportation – packaging, which greatly simplifies the packaging process and reduces the cost of the entire industry, making it the first choice for small packaging.`,
          },
          heading_31: {
            label:
              "Snack Packaging film Packaging Plastic Roll Film Automatic Packaging Film",
          },
          pragh_31: {
            label: `Automatic packaging roll film is a kind of packaging bag, it is made into a bag of the last process is simply a bag making process.  The advantage is that the cost is lower than making bags, you can make a lot of small bags at the same price.  We all know that the smaller a product is, the more packaging it needs — snack packaging, candy packaging, cereal packaging, etc. — so auto-wrap is an affordable option.`,
          },
          
          heading_32: {
            label:
              "DOY PACK Fruit Vegetable Vent Bag Transparent Plastic Packaging Bag with Hole",
          },
          pragh_32: {
            label: `With the improvement of people’s living standards, the requirements for fruit packaging and preservation are getting higher and higher, which urges fruit manufacturers to improve and perfect the inner packaging of fruit, so as to improve the freshness of fruit.`,
          },

          proText1: {
            label: `layer or multi-layer laminate, roll packaging has truly excellent
              properties. Among the practical characteristics, we can highlight
              the following: reliability and durability, lightness, excellent
              tightness and high barrier. Aesthetic properties include a neat
              and presentable appearance. Our roll packaging can be used as:
              ketchup packaging; mayonnaise packaging; sauce packaging; juice
              packaging; puree packaging; packaging for liquid soap and
              toothpaste, etc. Laminated packaging is also soft lids and sachets
              that protect the product from moisture. `,
          },

          proText2: {
            label: `At the moment, it is almost impossible to find a material that could compete with
              polymers in reliability. Another advantage of this material is its
              affordable price. Flexible roll packaging has been manufactured by
             DOY PACK for over eight years. Our equipment allows us to use
              extrusion technology, which gives the film an excellent appearance
              and provides ideal transparency. This also ensures high elasticity
              and puncture resistance. In addition,DOY PACK provides
              rotogravure printing and modern lamination services, which allows
              you to create your unique design.`,
          },


          Materials: {label: `Materials`,},
          TwoLayer: {label: `Two Layer`,},
          ThreeLayer: {label: `Three Layer`,},
          FourLayer: {label: `Four Layer`,},

           
          Color: {label: `Color`,},
          upto13colors: {label: `up to 13 colors`,},
          LeadTime: {label: `Lead Time`,},
          days: {label: `20-25 days`,},

          Term: {label: `Term`,},
          Sample: {label: `Sample`,},
          freestocksamplesoffered: {label: `free stock samples offered`,},
          
          Package: {label: `Package`,},
          high: {label: `High quality paper core + PE bag + Plastic Plug + 5-layer carton + packing belt + wooden or plastic pallet`,},

          PaymentTerm: {label: `Payment Term`,},
          Western: {label: `T/T, L/C, D/A, D/P, Western Union, Other`,},

          Feature: {label: `Feature`,},
          longText1: {label: `    1. Non-smell
                      2. Easy to be sealed by heat
                      3. Good shrinkage, high clear
                      4. High quality printing effects`,},

          Application: {label: `Application`,},
          longText2: {label: ` 1. Solid Contents for Foods: Candy, Biscuit, Potato
                      Cracker, etc.
                      2. Solid Contents for Cosmetic and Washing Powder: Washing
                      Powder, etc.
                      3. Dried Foods: Potato Chip, Raisin, Snack, etc.
                      4. Liquid Contents: Juice, Drink, Mineral Water, Sauce,
                      etc.`,},
          Specs: {label: `Specs`,},
          
          //navbarTranslation
          Home: { label: "Home" },
          About: { label: "About" },
          aboutTheCompany: { label: "About The Company" },
          Product: { label: "product" },
          StandUpPouch: { label: "Stand Up Pouch" },
          SpoutPouch: { label: "Spout Pouch" },
          GussetedPouch: { label: "Gusseted Pouch" },
          RollFilm: { label: "Roll Film" },
          ShapedAndTransparent: { label: "Shaped & Transparent" },
          Contact: { label: "Contacts" },
          //headerbannerTranslation
          With13YearsExperienceinFlexiblePackaging: {
            label: "With 13 Years Experience in Flexible Packaging",
          },
          DOYPACKYourReliablePackagingSupplier: {
            label: "DOY PACK, Your Reliable Packaging Supplier",
          },
          //mainCompany
          Company: { label: "Company" },
          companyHeading: { label: "Worldwide Trusted Packaging Supplier" },
          companytext: {
            label:
              'DOYPACK PLASTIC PACKAGING It was founded in 2012 and is located in Dongguan County, Hebei Province. This is a modern private enterprise that combines research and development, design, film production, printing, compounding and package production. The company was recognized as a member of the "Hebei Plastic Packaging Association" in the first half of 2015. The company occupies an area of ​​6,000 square meters, including 3,500 square meters of standard clean workshops and 15 million yuan in fixed assets. In 2014, it passed the national quality certification of food packaging QS and the record production qualification of export packaging of food products. There are 102 employees, including 6 office employees, 9 production management employees, 5 R&D employees and 6 quality managers.',
          },
          Companytext2: {
            label:
              "There are 10 network sellers and 5 outstanding designers. The company mainly produces food packaging bags, daily chemical packaging bags, three-sided sealed bags, four-sided sealed bags, eight-sided sealed bags, delivery bags, zippered bags, pouch bags, vacuum bags, plastic bags. aluminum foil, kraft paper, paper window bags, which produces and processes retort packaging, packaging for basket and dog food, liquid fertilizer bags, rice bags, flour bags, PVC labels, shrink labels, bopp film, PVC film, CCP film, aluminized film, etc. The company has a complete modern quality management system. The integrity, strength and quality of products of Dongguang Yalei Plastic Industry Co., Ltd.",
          },
          button: { label: "About the company" },
          //companyCards
          cards1heading: { label: "For more than 13 years" },
          cards1text: {
            label:
              "we have been developing and manufacturing packaging solutions",
          },
          cards2heading: { label: "11 production sites" },
          cards2text: { label: "create the perfect service for our customers" },
          cards3heading: { label: "102 + employees" },
          cards3text: {
            label:
              "produce flexible packaging for customers around the world we care about the environment and recycling",
          },
          cards4heading: { label: "Sustainability" },
          cards4text: { label: "we care about the environment and recycling" },
          //proAdav
          proadavheading: { label: "Product Advantages" },
          proadavtext1: { label: "High quality of finished products" },
          proadavtext2: { label: "Safety and hygiene" },
          proadavtext3: { label: "Long shelf life of products" },
          proadavtext4: { label: "Recycling and sustainability" },
          //footer
          footerheading: {
            label:
              "DOY PACK is a world leader in the production of  <br/>  ready-made bags with closures and a global player <br/> in flexible packaging.",
          },
          footerpar: {
            label:
              "Intellectual property rights to trademarks <br/> owned by the owners of these trademarks.",
          },
          tel: { label: "Telephone:" },
          email: { label: "E-mail:" },
          address: { label: "Office address in China:" },
          lasttext: { label: "Privacy Policy" },
          mainabouttext: {
            label:
              "DOY PACK China has been confidently holding leading positions in the market of flexible packaging manufacturers for various types of production for over eight years. Thanks to unique technologies, we are ready to offer a wide range of solutions from flexible packaging and injection molding to design and production of bottling lines. <br /><br />Together with our partners and our constantly developing R&D center, we work to ensure that the company offers only innovative technologies that take care of the environment. <br /><br /> Our specialty is the design and manufacture of filling lines and pasteurization tunnels for finished packaging.We can offer a ready-made solution or develop a custom solution for your business.",
          },
          mainabouttext2: {
            label:
              "DOY PACK offers the following types of products: - ready-made packaging of various shapes and capacities: our products are safe and hygienic, convenient and have a wide range of design options, they are easy to carry and store. roll packaging: high performance meets flexibility and a wide range of options. <br /><br /> We offer film formulation and extrusion, rotogravure printing and modern lamination. And Our products are successfully used by manufacturing companies in various industries, from food, cosmetics . <br /><br /> Caps and Spouts: A wide range of spouts and caps for flexible packaging, including the world-class BabyCap™ anti-choking technology for baby food products.",
          },
          mainheading1: { label: "Mission and Vision" },
          mainabouttext3: {
            label: ` Continuous development is our priority. DOY PACK specializes
                  in the production of high-performance flexible packaging.
                  Quality, service and innovative solutions for our customers
                  are our top priorities.
                  <br />  Our strength is the synergy of effective
                  technologies and innovative developments to solve our clients
                  problems.
                  <br />  Sustainable development is our daily task in
                  searching for technological solutions with care for the
                  environment and the future. We invest in motivated and
                  talented people!`,
          },
          mainheading2: { label: "Team" },
          mainabouttext4: {
            label: ` Our team of professionals, based on the global experience of
                  the entire group of companies, will help you choose the best
                  solution in the field of flexible packaging for the
                  development and improvement of your business.
                  <br />  We will provide qualified support during the
                  production process. Flexible integration with the group's
                  factories around the world to solve the most complex problems.`,
          },
          mainheading3: { label: "Sustainable development" },
          mainabouttext5_1: {
            label: ` Our innovative and reliable ready-made packaging solutions:
                  Circular economy 
                  Recyclability, especially of flexible packaging for single
                  use. Climate 
                  Reducing the environmental impact of packaging in terms of CO2
                  emissions.
                  Safety Safety of consumers, especially children, who
                  use ready-made packaging.
                  What do we do?
                  `,
          },
          mainabouttext5_2: {
            label: ` installation of a cogeneration plant to optimize fossil fuel
                  consumption and limit CO2 emissions;
                  `,
          },

          mainabouttext5_3: {
            label: `implementing an energy conservation prog ram to reduce the
                  total TOE (tonnes of oil equivalent) and carbon footprint of
                  our operations;
                  `,
          },

          mainabouttext5_4: {
            label: ` implementation of a clean energy project through a solar
                  photovoltaic system;
                  `,
          },

          mainabouttext5_5: {
            label: `reduction of water consumption by replacing cooling systems;
                  `,
          },

          mainabouttext5_6: {
            label: `installation of a solvent recovery unit to reduce VOC
                  (Volatile Organic Substances) emissions;
                  `,
          },

          mainabouttext5_7: {
            label: `ISO 14001 and SMETA 4-Pillar certification.
                  `,
          },

          mainheading4: { label: "Social responsibility" },
          mainabouttext6_1: {
            label: `The DOY PACK Group of Companies has created the SociAL
                  Foundation to invest part of the Group's revenues in support
                  of initiatives aimed at social inclusion, economic assistance
                  and the promotion of culture:
                      `,
          },
          mainabouttext6_2: {
            label: ` financial support for medical
                  institutions:
                  `,
          },

          mainabouttext6_3: {
            label: `support for humanitarian
                  organizations:
                  `,
          },

          mainabouttext6_4: {
            label: ` assistance to people affected by
                  natural disasters:
                  `,
          },

          mainabouttext6_5: {
            label: `The main principles of the fund's
                  work:
                  `,
          },

          mainabouttext6_6: {
            label: `justice and social equality:
                  `,
          },

          mainabouttext6_7: {
            label: `democratic participation:
                  `,
          },
          mainabouttext6_8: {
            label: `freedom and personal security:
                  `,
          },

          mainabouttext6_9: {
            label: `trust and solidarity between
                  generations:
                  `,
          },
          mainabouttext6_10: {
            label: `Our production sites around the world promote local
                   initiatives and manage them themselves:
                  `,
          },

          mainabouttext7: {
            label: `Download company presentation in PDF format:
                  `,
          },

          mainaboutbutton: {
            label: `Get the presentation
                  `,
          },

          //Contact
          contactText: {
            label: `Please fill out this form if you have any questions, need more
                      information, or need assistance with your order.
                  `,
          },

          contactName: {
            label: "Your name",
          },

          contactEmail: {
            label: `E-mail`,
          },

          contactPhone: {
            label: `Phone Number`,
          },

          contactMessage: {
            label: `Your message`,
          },

          contactbutton: {
            label: `Send a message`,
          },
        },
      },
    },
  });

export { i18n };
