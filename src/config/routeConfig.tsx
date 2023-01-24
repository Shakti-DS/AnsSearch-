import UniversalSearchPage from "../pages/UniversalSearchPage";
import { universalResultsConfig } from "./universalResultsConfig";
import LocationsPage from "../pages/LocationsPage";
import Menuitem from "../pages/MenuItem";
import FAQsPage from "../pages/FAQsPage";

export const routeConfig = [
  {
    path: "/",
    exact: true,
    page: (
      <UniversalSearchPage universalResultsConfig={universalResultsConfig} />
    ),
  },
  {
    path: "/locations",
    page: <LocationsPage verticalKey="locations" />,
  },
  {
    path: "/faqs",
    page: <FAQsPage verticalKey="faqs" />,
  },

  {
    path: "/menuitems",
    page: <Menuitem verticalKey="menu_items" />,
  },
];
