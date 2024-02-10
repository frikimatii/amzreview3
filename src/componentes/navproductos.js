import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Informatica from "./card_inform.js";
import AireLibre from "./card_airelibre.js";
import Mascotas from "./card_mascotas.js";
import Hogar from "./card_hogar.js";
import Belleza from "./card_belleza.js";
import Juguetes from "./card_juguetes.js";
import Amazon from "./card_amazon.js";
import Herramientas from "./card_herramineta.js";


function ControlledTabsExample() {
  const navigate = useNavigate(); // Usa useNavigate en lugar de useHistory
  const [key, setKey] = useState(''); // Ajusta el valor inicial de key

  const handleSelect = (selectedKey) => {
    setKey(selectedKey);
    navigate(`/${selectedKey}`); // Utiliza navigate para navegar a la ruta
  };

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={handleSelect}
      className="mb-4"
    >
      <Tab eventKey="informatica" title="Informatica">
        <Informatica/> 
      </Tab>
      <Tab eventKey="mascotas" title="Mascota">
        <Mascotas/>
      </Tab>
      <Tab eventKey="aire_libre" title="Aire Libre" >
        <AireLibre/>
      </Tab>
      <Tab eventKey="hogar" title="Hogar">
        <Hogar/>
      </Tab>
      <Tab eventKey="belleza" title="Belleza">
        <Belleza/>
      </Tab>
      <Tab eventKey="juguetes" title="Juguetes">
        <Juguetes/>
      </Tab>
      <Tab eventKey="herraminetas" title="Herramientas">
       <Herramientas/> 
      </Tab>
      <Tab eventKey="amazon_basic" title="Amazon Basic">
       <Amazon/> 
      </Tab>
    </Tabs>
  );
}

export default ControlledTabsExample;
