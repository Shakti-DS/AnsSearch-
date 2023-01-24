import { VerticalConfig } from "../components/UniversalResults";
import { LocationCard } from "../components/cards/LocationCard";
import LocationSection from "../sections/LocationSection";
import { FaqCard } from "../components/cards/FaqCard";

export type UniversalResultsConfig = Record<string, VerticalConfig>;

export const universalResultsConfig: UniversalResultsConfig = {
  locations: {
    label: "Locations",
    SectionComponent: LocationSection,
    viewMapButton: true,
    viewAllButton: true,
    cardConfig: {
      CardComponent: LocationCard,
      showOrdinal: false,
    },
  },

  faqs: {
    label: "FAQs",
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false,
    },
  },
  menuitems: {
    label: "Menu Items",
    viewAllButton: true,
    cardConfig: {
      CardComponent: FaqCard,
      showOrdinal: false,
    },
  },
};
