import styled from "styled-components";

export const DayText = styled.div`
  padding: 2px;
`;

export const SelectedDayText = styled.div`
  padding: 5px;
  font-size: 18px;
`;

export const WeatherSection = styled.div`
  background-color: #578dd0;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  overflow: auto;
`;

export const CityHeading = styled.h1`
  color: #ffffff;
  margin: 0;
  display: inline-block;
  vertical-align: middle;
`;

export const AddToMyLocationsButton = styled.button`
  margin-left: 15px;
  background-color: #203752;
  border: none;
  color: #ffffff;
  padding: 5px;
  cursor: pointer;
`;

export const Tabs = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: flex-end;
`;

export const SelectedTab = styled.div`
  width: 270px;
  height: 120px;
  border-top: solid #f26930 5px;
  border-right: 1px solid lightgray;
  background-color: white;
  display: inline-block;
`;

export const Tab = styled.div`
  width: 90px;
  height: 80px;
  border-bottom: solid #f26930 3px;
  border-right: 1px solid lightgray;
  background-color: white;
  display: inline-block;
  cursor: pointer;
`;

export const TempratureContainer = styled.div`
  display: inline-block;
`;

export const TempratureDay = styled.div`
  font-weight: bold;
`;

export const TempratureNight = styled.div``;

export const SelectedTabWeather = styled.div`
  display: flex;
  align-items: center;
`;

export const TempratureMessage = styled.div`
  border-left: solid 1px #7a7a7a;
  padding: 0 20px;
  margin-left: 20px;
`;



// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun } from "@fortawesome/free-solid-svg-icons";

// const TodayIcon = styled(FontAwesomeIcon)`
//   color: #fdc200;
//   margin: 10px;
// `;
/* <TodayIcon icon={faSun} size="4x" /> */