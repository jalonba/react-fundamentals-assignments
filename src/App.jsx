import { useState, useContext } from "react";
import { MainControls } from "./components/MainControls";
import { SmartHome } from "./components/SmartHome";
import { SmartHomeContext } from "./SmartHomeContext";

export function App() {
  const [lights] = useContext(SmartHomeContext);
  const [firstLightOn, setFirstLightOn] = useState(false);
  const [secondLightOn, setSecondLightOn] = useState(false);
  const [thirdLightOn, setThirdLightOn] = useState(true);

  const handleAllOn = () => {
    setFirstLightOn(true);
    setSecondLightOn(true);
    setThirdLightOn(true);
  };

  const handleAllOff = () => {
    setFirstLightOn(false);
    setSecondLightOn(false);
    setThirdLightOn(false);
  };

  return (
    <div>
      <SmartHomeContext.Provider
        value={{ lights: [firstLightOn, secondLightOn, thirdLightOn] }}
      >
        <MainControls onAllOnClick={handleAllOn} onAllOffClick={handleAllOff} />

        <SmartHome
          onFirstToggle={() => setFirstLightOn(!firstLightOn)}
          onSecondToggle={() => setSecondLightOn(!secondLightOn)}
          onThirdToggle={() => setThirdLightOn(!thirdLightOn)}
        />
      </SmartHomeContext.Provider>
    </div>
  );
}
