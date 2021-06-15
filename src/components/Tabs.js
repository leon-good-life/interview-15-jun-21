import { Tabs } from "./styled";
import TabComponent from "./Tab";
import SelectedTabComponent from "./SelectedTab";

const TabsComponent = ({
  data,
  selectedIndex,
  setSelectedIndex,
}) => (
  <Tabs>
    {data.map((item, index) => {
      if (index === selectedIndex) {
        return <SelectedTabComponent {...{ index, setSelectedIndex, item }} />;
      }
      return <TabComponent {...{ index, setSelectedIndex, item }} />;
    })}
  </Tabs>
);

export default TabsComponent;
