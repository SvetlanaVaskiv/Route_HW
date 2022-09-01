import { useState } from "react";
import { TextsSearchLayout, Tab } from "../components/MovieList/styles";

export const Tabs = ({ tabs, onTabClick }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return tabs.map((tab, i) => (
    <TextsSearchLayout
      key={tab}
      active={selectedTabIndex === i}
      onClick={() => {
        setSelectedTabIndex(i);
        onTabClick(tab);
      }}
    >
      <Tab active={selectedTabIndex === i}>{tab}</Tab>
    </TextsSearchLayout>
  ));
};
