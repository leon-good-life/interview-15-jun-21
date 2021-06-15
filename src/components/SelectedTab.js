import {
  SelectedTab,
  SelectedDayText,
  SelectedTabWeather,
  TempratureContainer,
  TempratureDay,
  TempratureNight,
  TempratureMessage,
} from "./styled";

const SelectedTabComponent = ({ index, setSelectedIndex, item }) => (
  <SelectedTab>
    <SelectedDayText>{index === 0 ? "Today" : item.dt}</SelectedDayText>
    <SelectedTabWeather>
      <img
        src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
        alt={item.main}
      />
      <TempratureContainer>
        <TempratureDay>{item.day}&deg;</TempratureDay>
        <TempratureNight>{item.night}&deg;</TempratureNight>
      </TempratureContainer>
      <TempratureMessage>{item.description}</TempratureMessage>
    </SelectedTabWeather>
  </SelectedTab>
);

export default SelectedTabComponent;
