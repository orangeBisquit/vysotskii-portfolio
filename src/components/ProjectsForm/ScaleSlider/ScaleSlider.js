import { Slider } from "primereact/slider";
import { useState } from "react";

const ScaleSlider = () => {
  const [value, setValue] = useState();
  return (
    <Slider value={value} onChange={(e) => setValue(e.value)} min={1} max={5} />
  );
};

export default ScaleSlider;
