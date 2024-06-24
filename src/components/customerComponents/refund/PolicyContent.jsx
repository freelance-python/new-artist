import { Container, Box, ListItem, Link } from "@mui/material";
import { useState } from "react";

const termsData = [
  {
    title: "Vendor Return Policy",
    content:
      "Our vendor return policy ensures that you can return products within 30 days of purchase if they are damaged or not as described.",
  },
  {
    title: "Customer Return Policy",
    content:
      "Our customer return policy allows you to return products within 14 days of purchase for a full refund, no questions asked.",
  },
  {
    title: "Electronics Return Policy",
    content:
      "For electronics, our return policy extends to 60 days. We stand by the quality of our electronic products.",
  },
  {
    title: "Furniture Return Policy",
    content:
      "Our furniture return policy allows you to return furniture within 7 days if it doesn't meet your expectations. Customer satisfaction is our priority.",
  },
  {
    title: "Custom Orders Policy",
    content:
      "Please note that custom orders are not eligible for returns or refunds. We craft custom items to your specifications.",
  },
];

const PolicyContent = () => {
  const [selectedSection, setSelectedSection] = useState(termsData[0].title);

  return (
    <Container maxWidth="lg" className="mx-auto px-4 py-10">
      <Box className="flex flex-col md:flex-row">
        <nav className="mb-8 hidden md:mb-0 md:block md:w-60 lg:w-72 xl:w-80">
          <ol className="sticky z-10 md:top-28 lg:top-24">
            {termsData.map((section) => (
              <ListItem key={section.title}>
                <Link
                  href={`#${section.title}`}
                  underline="none"
                  className="my-3 inline-flex cursor-pointer"
                  onClick={() => setSelectedSection(section.title)}
                >
                  <p
                    className={`pl-4 text-[#374151] text-sm lg:text-base ${
                      selectedSection === section.title
                        ? "!text-[#009f7f] font-semibold relative before:absolute before:w-0.5 before:h-5 before:top-0.5 before:left-0 before:bg-[#009f7f]"
                        : ""
                    }`}
                  >
                    {section.title}
                  </p>
                </Link>
              </ListItem>
            ))}
          </ol>
        </nav>
        <Box className="md:w-9/12 md:pb-10 ltr:md:pl-8 rtl:md:pr-8">
          {termsData.map((section) => (
            <Box
              key={section.title}
              id={section.title}
              className="mb-7 md:mb-10"
            >
              <h2 className="mb-4 text-lg font-bold text-[#1f2937] md:text-xl lg:text-2xl">
                {section.title}
              </h2>
              <p className="mt-15 leading-loose text-[#333333]">
                {section.content}
              </p>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default PolicyContent;
