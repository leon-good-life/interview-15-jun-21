import {
  Tab,
  DayText,
  SelectedTabWeather,
  TempratureContainer,
  TempratureDay,
  TempratureNight,
} from "./styled";

const TabComponent = ({index, setSelectedIndex, item}) => (
  <Tab onClick={() => setSelectedIndex(index)}> {/* TODO: use useCallback */}
    <DayText>{index === 0 ? "Today" : item.dt}</DayText>
    <SelectedTabWeather>
      <img
        src={`http://openweathermap.org/img/wn/${item.icon}.png`}
        alt={item.main}
      />
      <TempratureContainer>
        <TempratureDay>{item.day}&deg;</TempratureDay>
        <TempratureNight>{item.night}&deg;</TempratureNight>
      </TempratureContainer>
    </SelectedTabWeather>
  </Tab>
);

export default TabComponent;
