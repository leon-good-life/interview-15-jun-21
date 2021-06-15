import moment from "moment";
import { mockData } from "./mock";
import { useState } from "react";
import {
  WeatherSection,
  CityHeading,
  AddToMyLocationsButton,
} from "./components/styled";
import TabsComponent from "./components/Tabs";
import { useEffect } from "react/cjs/react.production.min";

const data = mockData.daily.map((item) => ({
  icon: item.weather[0].icon,
  day: Math.round(item.temp.day),
  night: Math.round(item.temp.night),
  description: item.weather[0].description,
  main: item.weather[0].main,
  dt: moment.unix(item.dt).format("ddd Do"),
}));

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [data2, setData2] = useState({});
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/onecall?lat=32.0853&lon=34.7818&exclude=minutely,hourly&appid=41a71378f37589c7554157dce6062819`
  //   )
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((response) => setData2(response));
  // });
  return (
    <WeatherSection>
      <CityHeading>Tel Aviv</CityHeading>
      <AddToMyLocationsButton>+ Add to my locations</AddToMyLocationsButton>
      <TabsComponent {...{ data, selectedIndex, setSelectedIndex }} />
    </WeatherSection>
  );
};

export default App;
