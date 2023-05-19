import React, { createContext, useReducer } from "react";

const SmartHomeContext = createContext({ lights: [] });

const SmartHomeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(smartDevicesReducer, lights);
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(true);
};

return (
  <SmartHomeContext.Provider
    value={[{ lights: [firstLightOn, secondLightOn, thirdLightOn] }]}
  >
    c{children}
    <SmartHome>
      <Light />
      <Light />
      <Light />
    </SmartHome>
  </SmartHomeContext.Provider>
);

export default SmartHomeProvider;
export { SmartHomeContext };
