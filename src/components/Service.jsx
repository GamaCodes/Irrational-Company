import React from "react";
import { Tabs, List, Divider } from "antd";

const { TabPane } = Tabs;

const data = [
  "Manual de Inducción",
  "Capacitación Manual",
  "Informe Organizacional",
  "Documentos Académicos",
  "Libros de Historia",
  "Arte",
  "Educación",
];

const corps = [
  "Logotipo",
  "Banner",
  "Firma electrónica ",
  "Presentación Corporativa",
  "Tarjeta de presentación",
  "Catálogo Comercial",
  "Folder",
  "Newsletter",
  "Portada para redes sociales ",
  "Empaque",
];

export default function Service() {
  return (
    <div className="service-box">
      <h2 key="h1" className="content2-title  title-irrational center">
        Servicios
      </h2>
      <div className="service-tab">
        <Tabs
          defaultActiveKey="0"
          tabPosition="left"
          style={{ height: "auto" }}
        >
          <TabPane tab={`Diseño gráfico`} key="0">
            <div className="tabpan-wi">
              <p>
                Conceptos integrales, legibilidad, equilibrio y composición
                visual.
              </p>
              <Divider />
              <p>Creaciones únicas para:</p>

              <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </div>
          </TabPane>
          <TabPane tab={`Corporativo`} key="1">
            <div className="tabpan-wi">
              <p>
                Un diseño creativo y profesionales el principio de una historia
                de éxito.
              </p>
              <p>Transmite claridad y comunicación asertiva.</p>
              <Divider />
              <p>
                Desarrollamos o modernizamos tu logo tipo e imagen corporativa y
                diversidad de productos corporativos:
              </p>

              <List
                size="small"
                bordered
                dataSource={corps}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
              <Divider />
              <p>
                Además, te ayudamos a registrar tu marca, así tendrás la
                exclusividad, otorga licencias de uso aterceras personas o bien
                otorga franquicias de tu negocio.
              </p>
            </div>
          </TabPane>
          <TabPane tab={`Logotipos`} key="2">
            <div className="tabpan-wi">
              <p>
                ¿ Busca un logo tipo profesional y moderno a un precio económico
                ?
              </p>
              <Divider />
              <p>
                Espacio desarrollado para todos aquellos emprendedores que están
                iniciando su negocio y que reconocen el valor de llegar asu
                público meta a través de logotipos profesionales con una
                inversió n mínima .
              </p>

              <p>
                ¡Que tu imagen corporativa sea el comienzo de una historia de
                éxito!
              </p>
              <Divider />
              <p>
                Elegantes, atractivos con bases prediseñadas y creadas por
                diseñadores profesionales.
              </p>
              <p>Seguro encontrarás el LOGOTIPO que se adapte a tu negocio …</p>
            </div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
