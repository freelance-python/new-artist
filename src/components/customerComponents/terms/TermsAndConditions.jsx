import { Container, Box, ListItem, Link } from "@mui/material";
import { useState } from "react";

const termsData = [
  {
    title: "Disclaimers and Limitation of Liability",
    content:
      'The Website is provided "as is" and "as available" without any warranties, either expressed or implied. Pickbazar shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the Website.',
  },
  {
    title: "Intellectual Property",
    content:
      "The Website and its original content, features, and functionality are owned by [Your Company] and are protected by international copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "Privacy Policy",
    content:
      "Your use of the Website is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Website, you consent to the practices described in the Privacy Policy.",
  },
  {
    title: "Use of the Website",
    content:
      "You must be at least [Age] years old to use this Website. By using the Website, you represent and warrant that you are at least [Age] years old. You agree to use the Website for lawful purposes only and in a manner that does not infringe upon the rights of others.",
  },
  {
    title: "Acceptance of Terms",
    content:
      "By using this Website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the Website.",
  },
  {
    title: "Disclaimers and Limitation of Liability",
    content:
      'The Website is provided "as is" and "as available" without any warranties, either expressed or implied. Pickbazar shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the Website.',
  },
  {
    title: "Intellectual Property",
    content:
      "The Website and its original content, features, and functionality are owned by [Your Company] and are protected by international copyright, trademark, and other intellectual property laws.",
  },
  {
    title: "Privacy Policy",
    content:
      "Your use of the Website is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Website, you consent to the practices described in the Privacy Policy.",
  },
  {
    title: "Use of the Website",
    content:
      "You must be at least [Age] years old to use this Website. By using the Website, you represent and warrant that you are at least [Age] years old. You agree to use the Website for lawful purposes only and in a manner that does not infringe upon the rights of others.",
  },
  {
    title: "Acceptance of Terms",
    content:
      "By using this Website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the Website.",
  },
];

const TermsAndConditions = () => {
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

export default TermsAndConditions;
