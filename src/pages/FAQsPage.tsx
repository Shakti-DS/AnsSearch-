import ResultsCount from "../components/ResultsCount";
import AlternativeVerticals from "../components/AlternativeVerticals";
import AppliedFilters from "../components/AppliedFilters";
import DirectAnswer from "../components/DirectAnswer";
import VerticalResults from "../components/VerticalResults";
import SpellCheck from "../components/SpellCheck";
import LocationBias from "../components/LocationBias";
import usePageSetupEffect from "../hooks/usePageSetupEffect";
import { FaqCard } from "../components/cards/FaqCard";
import Footer from "../components/Footer";

export default function FAQsPage({ verticalKey }: { verticalKey: string }) {
  usePageSetupEffect(verticalKey);

  return (
    <>
      <div>
        <DirectAnswer />
        <SpellCheck />
        <ResultsCount />
        <AppliedFilters hiddenFields={["builtin.entityType"]} />
        <AlternativeVerticals
          currentVerticalLabel="FAQs"
          verticalsConfig={[
            { label: "Locations", verticalKey: "locations" },
            { label: "Faqs", verticalKey: "faqs" },
            { label: "Menu Item", verticalKey: "menu_items" },
          ]}
        />
        <VerticalResults CardComponent={FaqCard} />
        <LocationBias />
        <Footer />
      </div>
    </>
  );
}









// import { Fragment, useState } from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// export default function Example() {
//   const [open, setOpen] = useState(1);

//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };

//   return (
//     <Fragment>
//       <Accordion open={open === 1}>
//         <AccordionHeader onClick={() => handleOpen(1)}>
//           What is Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 2}>
//         <AccordionHeader onClick={() => handleOpen(2)}>
//           How to use Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//       <Accordion open={open === 3}>
//         <AccordionHeader onClick={() => handleOpen(3)}>
//           What can I do with Material Tailwind?
//         </AccordionHeader>
//         <AccordionBody>
//           We&apos;re not always in the position that we want to be at.
//           We&apos;re constantly growing. We&apos;re constantly making mistakes.
//           We&apos;re constantly trying to express ourselves and actualize our
//           dreams.
//         </AccordionBody>
//       </Accordion>
//     </Fragment>
//   );
// }