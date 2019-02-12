import React from "react";
import { YMaps, Map } from "react-yandex-maps";

const App = () => (
  <>
    <YMaps>
      <div>
        My awesome application with maps!
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
      </div>
    </YMaps>
  </>
);

export default App;
