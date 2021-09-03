import React from "react";
export const Feature10DataSource = {
  wrapper: { className: "home-page-wrapper content1-wrapper" },
  OverPack: { className: "home-page content1", playScale: 0.3 },
  imgWrapper: { className: "content1-img", md: 10, xs: 24 },
  img: {
    children:
      "https://images.pexels.com/photos/3811082/pexels-photo-3811082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  textWrapper: { className: "content1-text", md: 14, xs: 24 },
  title: {
    className: "content1-title  title-irrational",
    children: "Nosotros",
  },
  content: {
    className: "content1-content",
    children:
      "Irrational Company empresacreativa, integradora de servicios gráficos y de comunicación visual con más de 20 años de experiencia en México, Alemania, Brasil y Estados Unidos. Tenemos experiencia de mostrada en materia de creatividad, diseño gráfico y producción estrategias visuales.",
  },
};
export const Feature20DataSource = {
  wrapper: { className: "home-page-wrapper content2-wrapper" },
  OverPack: { className: "home-page content2", playScale: 0.3 },
  imgWrapper: { className: "content2-img", md: 10, xs: 24 },
  img: {
    children:
      "https://images.pexels.com/photos/90333/pexels-photo-90333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  textWrapper: { className: "content2-text", md: 14, xs: 24 },
  title: {
    className: "content2-title  title-irrational",
    children: "Filosofía",
  },
  content: {
    className: "content2-content",
    children:
      "En Irrational Company somos profesionales claramente comprometidos con nuestros clientes. Su imagen gráfica es importante para nosotros, por eso elaboramos diseños impactantes e innovadores con soluciones a la medida para que su presencia garantice una experiencia de marca, perfectamente a lineada a objetivos y capaz de destacar.",
  },
};
export const Teams00DataSource = {
  wrapper: { className: "home-page-wrapper teams0-wrapper" },
  OverPack: { playScale: 0.3, className: "home-page teams0" },
  BannerAnim: {
    className: "banner-anim banner-anim-check",
    children: [
      {
        name: "elem0",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*--rVR4hclJYAAAAAAAAAAABjARQnAQ",
              className: "teams0-image",
            },
            {
              name: "content",
              children:
                "100% Recomendable, su trabajo es excelente siempre a la vanguardia y junto con su profesionalismo son un gran equipo...",
              className: "teams0-content",
            },
            {
              name: "title",
              children: "Grisel Castorena",
              className: "teams0-h1",
            },
            {
              name: "content2",
              children: "Identatronics",
              className: "teams0-content",
            },
          ],
        },
      },
      {
        name: "elem1",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children:
                "https://gw.alipayobjects.com/mdn/rms_ae7ad9/afts/img/A*njqxS5Ky7CQAAAAAAAAAAABjARQnAQ",
              className: "teams0-image",
            },
            {
              name: "content",
              children:
                "Empresa profesional, íntegra y comprometida con la calidad de sus servicios...",
              className: "teams0-content",
            },
            {
              name: "title",
              children: "Alberto Herbel",
              className: "teams0-h1",
            },
            {
              name: "content2",
              children: "OPS México",
              className: "teams0-content",
            },
          ],
        },
      },
      {
        name: "elem2",
        className: "teams0-banner-user-elem",
        titleWrapper: {
          className: "teams0-content-wrapper",
          children: [
            {
              name: "image",
              children:
                "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
              className: "teams0-image",
            },
            {
              name: "content",
              children:
                "Hemos recibido siempre el asesoramiento y una alta calidad de servicios y productos, que nos han servido para lograr un impacto favorable en la población a la que nos dirigimos ...",
              className: "teams0-content",
            },
            { name: "title", children: "Sonia Ortega", className: "teams0-h1" },
            {
              name: "content2",
              children: "Tómatelo a Pecho",
              className: "teams0-content",
            },
          ],
        },
      },
    ],
  },
};
export const Footer00DataSource = {
  wrapper: { className: "home-page-wrapper footer0-wrapper" },
  OverPack: { className: "home-page footer0", playScale: 0.05 },
  copyright: {
    className: "copyright",
    children: <span>©2021</span>,
  },
};
export const Feature30DataSource = {
  wrapper: { className: "home-page-wrapper content3-wrapper" },
  page: { className: "home-page content3" },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: "title-wrapper",
    children: [
      {
        name: "title",
        children: (
          <span>
            <p>Medios Digitales</p>
          </span>
        ),
        className: "title-h1",
      },
      {
        name: "content",
        className: "title-content",
        children: "基于阿里云强大的基础资源",
      },
    ],
  },
  block: {
    className: "content3-block-wrapper",
    children: [
      {
        name: "block0",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: "/1.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Sitios Web y Tienda en Línea</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Elimina las barreras geográficas y haz que tu producto o
                  servicio llegue a más personas, comienza a vender en internet.
                  Fácil de usar y administrar. Te ayudamos a elegir la mejor
                  opción de pagos y envíos.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block1",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: "/02.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Steaming</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Conecta con tu audiencia a través de videos en vivo, realiza
                  una producción audiovisual avanzada y de calidad que
                  represente a tu marca.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block2",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: "/03.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Impresión y promocionales</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Consideramos la impresión como el punto clave en el que la
                  calidad del diseño se hace tangible. Por ello, ofrecemos a
                  nuestros clientes ser su agente de contacto y de enlace con
                  los verdaderos profesionales del ramo y así obtener lo mejor.
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: "block3",
        className: "content3-block",
        md: 12,
        xs: 24,
        children: {
          icon: {
            className: "content3-icon",
            children: "/01.png",
          },
          textWrapper: { className: "content3-text" },
          title: {
            className: "content3-title",
            children: (
              <span>
                <p>Fotografía y Video Corporativo</p>
              </span>
            ),
          },
          content: {
            className: "content3-content",
            children: (
              <span>
                <p>
                  Crea presencia, informa, da credibilidad, vende una imagen
                  profesional, cuenta una historia.
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
