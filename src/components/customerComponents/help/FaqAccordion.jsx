import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We have a flexible return policy. If you're not satisfied with your purchase, you can return most items within 30 days for a full refund or exchange. Please review our Return Policy for more details.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, you can track your order's status. Once your order is shipped, you will receive a tracking number via email. You can use this tracking number to monitor the progress of your delivery.",
  },
  {
    question: "How long will it take to receive my order?",
    answer:
      "Delivery times may vary depending on your location and the shipping method you choose. Typically, orders are processed and shipped within 1-2 business days. You can check the estimated delivery time during checkout.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept a variety of payment methods, including credit cards (Visa, MasterCard, American Express), PayPal, and more. You can choose your preferred payment option during the checkout process.",
  },
  {
    question: "How can I place an order?",
    answer:
      "To place an order, simply browse our online store, add the items you want to your cart, and proceed to checkout. Follow the prompts to enter your shipping information and payment details to complete your purchase.",
  },
  {
    question: "What is the delivery process for furniture purchases?",
    answer:
      "We offer convenient and reliable furniture delivery services. After making your purchase, our team will contact you to schedule a delivery time that suits your availability. Our delivery professionals will assemble and set up the furniture in your desired room. Please refer to our Delivery Information page for more details.",
  },
  {
    question: "Do you provide warranty coverage for furniture items?",
    answer:
      "Yes, many of our furniture items come with manufacturer warranties that cover structural defects and craftsmanship issues. The duration and terms of the warranty may vary by product. You can find warranty information in the product descriptions, or you can contact our customer support team for specific details.",
  },
  {
    question: "What is your return policy for clothing items?",
    answer:
      "We offer a hassle-free return policy for clothing purchases. If you are not completely satisfied with your clothing item, you can return it within 30 days of purchase, as long as the item is in its original condition with tags attached. For detailed information on our return process, please refer to our Returns and Exchanges page.",
  },
  {
    question: "Do you offer plus-size or petite clothing options?",
    answer:
      "Yes, we strive to provide a diverse range of clothing sizes to accommodate all body types. Our inventory includes a selection of plus-size and petite clothing options in various styles and designs. You can use our size filters or contact our customer support for assistance in finding the perfect fit.",
  },
  {
    question:
      "How can I determine the right size and style of bag for my needs when shopping online?",
    answer:
      "Finding the perfect bag online is made easier with our selection and helpful tools. Here's how to make an informed choice. Each bag product on our website includes detailed descriptions, including dimensions, capacity, and features. Read these descriptions carefully to understand the size and functionality of the bag. We provide high-quality images and, in some cases, videos that showcase the bag from different angles and show it in use. Visual aids can help you assess the bag's size and style better. Check out reviews and ratings from other customers who have purchased the same bag. Feedback from others who have used the bag for various purposes can provide valuable insights. We may offer size guides or charts to help you understand the bag's dimensions in relation to common items you might carry, such as laptops, books, or clothing. If you have specific questions or need personalized recommendations, our customer support team is here to assist you. Use our live chat feature or contact us via email or phone for expert guidance. Rest assured that we have a flexible returns and exchanges policy. If the bag doesn't meet your expectations, you can usually return or exchange it within a specified time frame.",
  },
  {
    question:
      "What measures do you take to ensure the quality and durability of the bags you sell online?",
    answer:
      "We are committed to providing high-quality and durable bags to our customers. Here's how we ensure the quality and durability of the bags in our online shop. We carefully curate our collection from reputable brands known for their craftsmanship and quality. We partner with brands that have a strong track record in producing durable and long-lasting bags. Each bag product listing includes detailed information about the materials used in its construction. This allows you to assess the bag's durability and suitability for your needs. Many of our bags come with manufacturer warranties that cover defects in materials and workmanship. Check the product listing for warranty details. We value customer feedback and consider it when selecting bags for our inventory. Positive reviews and high ratings from satisfied customers are indicative of product quality. In the rare event that you receive a bag with defects or quality issues, our returns and exchanges policy allows you to return or exchange the product for your peace of mind.",
  },
  {
    question:
      "How can I find the right makeup products for my skin tone and type when shopping online?",
    answer:
      "Shopping for makeup online is made easier with our website's tools and resources to help you find the perfect products for your skin. Here's how to get started. Each makeup product on our website includes detailed descriptions, including shade names, undertones, and ingredients. Read these descriptions carefully to find products that match your skin tone and type. We offer shade matching tools and guides for foundations, concealers, and other complexion products. These tools can help you identify your ideal shade based on your skin undertones. Check out product reviews and ratings left by other customers who have similar skin tones or concerns. Their feedback can provide valuable insights into how a product performs. If you're unsure about a product or need personalized recommendations, our customer support team is here to assist you. Use our live chat or contact us via email or phone for expert guidance. We may offer sample sizes or testers for select products. Trying out samples can be a great way to test shades and formulas before committing to a full-sized product. Rest assured that we have a flexible returns and exchanges policy. If a product doesn't meet your expectations, you can usually return or exchange it within a specified time frame.",
  },
  {
    question:
      "How do I ensure the authenticity and quality of the makeup products purchased online?",
    answer:
      "We prioritize the authenticity and quality of all our makeup products to ensure a positive shopping experience. Here's how we guarantee the authenticity and quality of our products. We are an authorized retailer for all the brands and products we carry. This means that we source our products directly from reputable manufacturers and distributors. Makeup products are delivered in their original, sealed packaging. We do not sell opened or tampered products. We only carry well-known and trusted makeup brands with a proven track record for quality and safety. Each product listing on our website includes detailed information, including brand, ingredients, and usage instructions, to help you make an informed decision. We value customer feedback and take it into account when selecting products for our inventory. Positive reviews and high ratings from satisfied customers are indicative of product quality. In the unlikely event that you receive a product that doesn't meet your expectations, our flexible returns and exchanges policy allows you to return or exchange it for your peace of mind.",
  },
  {
    question: "How do I place an order for bakery products on your website?",
    answer:
      "Ordering delicious bakery products from our online shop is easy and convenient. Here's a step-by-step guide to placing an order: Visit our website to explore our mouthwatering range of bakery products. You can browse by category, including bread, pastries, cakes, and more. Click on the items you'd like to purchase to view detailed descriptions, prices, and available options (e.g., flavors, sizes, and quantities). Add your desired products to your virtual shopping cart. Before proceeding to checkout, review the items in your cart to ensure you've selected everything you want. You can make adjustments, update quantities, or remove items as needed. When you're ready to complete your order, proceed to the checkout page. Here, you'll provide your delivery information and select your preferred delivery date and time slot. Choose your preferred payment method, such as credit/debit card or digital wallet, and securely enter your payment details. After successful payment, you'll receive an order confirmation via email or SMS. This confirmation will include the details of your order, delivery date, and a unique order number. On the scheduled delivery date, our team will carefully prepare your bakery items and deliver them to your doorstep. You'll receive a notification when your order is on its way. Once your delicious bakery treats arrive, simply unpack and enjoy your freshly baked goodies.",
  },
  {
    question: "Do you accommodate special dietary needs or allergies?",
    answer:
      "Yes, we strive to accommodate various dietary needs and allergies to ensure that everyone can enjoy our bakery products. Here's how we address specific dietary requirements: Each product on our website includes detailed information about allergens, such as nuts, dairy, eggs, and gluten. You can check these allergen labels to make informed choices. We offer a selection of products tailored to specific dietary preferences and restrictions. This may include gluten-free, vegan, or sugar-free options. You can easily filter products by dietary category on our website to find suitable choices. In some cases, we may be able to customize certain products to meet your specific dietary needs. If you have a special request or dietary requirement, please reach out to our customer support team, and we'll do our best to assist you.",
  },
  {
    question: "How does the online ordering and delivery process work?",
    answer:
      "Ordering groceries online with us is simple and convenient. Here's a step-by-step guide to our process: Visit our website or mobile app to browse our wide selection of groceries. You can search for specific items or explore categories. Add the products you need to your virtual shopping cart. Before checkout, review your cart to ensure you have everything you need. You can also customize your order, specify quantities, and make any necessary adjustments. Proceed to the checkout page to review your order one last time. You can choose your preferred payment method, including credit/debit cards or digital wallets, and complete the transaction securely. Select your preferred delivery time slot. We offer flexible delivery options to accommodate your schedule. Once your order is placed, you will receive an order confirmation via email or SMS. You can track the status of your order through your account. Our dedicated delivery team will carefully pack your groceries and deliver them to your doorstep at the chosen time. You'll receive a notification when your order is out for delivery. Receive your groceries, unpack, and enjoy your fresh and quality products.",
  },
  {
    question: "What are the delivery fees and minimum order requirements?",
    answer:
      "We aim to provide affordable and convenient online grocery shopping. Our delivery fees and minimum order requirements are as follows: The delivery fee may vary depending on your location and the time slot you choose. We strive to keep our delivery charges competitive and transparent. You can view the applicable fees during the checkout process. To place an order for delivery, we have a minimum order requirement. This requirement helps us cover the costs associated with packing and delivering your groceries. The minimum order amount may vary based on your location, but you can easily check the specific minimum for your area on our website or app. Please note that we may offer promotions and discounts from time to time, including waived delivery fees for orders over a certain amount. Keep an eye out for these special offers to save even more on your online grocery shopping.",
  },
  {
    question: "Can I order both physical books and e-books from your store?",
    answer:
      "Yes, you can choose from a wide selection of physical books and e-books in our store. Simply browse our catalog and select your preferred format for each title. Physical books will be delivered to your address, while e-books can be downloaded instantly upon purchase.",
  },
  {
    question: "Do you offer book recommendations or have a book club?",
    answer:
      "We love books, and we're here to help you discover new reads! You can explore our Recommended Reads section for curated book recommendations. Additionally, we periodically host virtual book club events where readers can discuss and explore books together. Stay tuned for announcements on our website or social media.",
  },
];

function FaqAccordion() {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, index) => (
        <Accordion
          elevation={0}
          disableGutters
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          className="border border-solid border-border-200"
          sx={{"&.MuiAccordion-root::before": {height: 0}}}
        >
          <AccordionSummary
            expandIcon={
              expanded !== index ? (
                <FiPlus color="#1f2937" />
              ) : (
                <FiMinus color="#1f2937" />
              )
            }
            sx={{
              minHeight: "0px !important",
              height: "48px !important",
            }}
          >
            <h2 className="text-sm md:text-base font-semibold leading-relaxed text-[#1f2937]">
              {faq.question}
            </h2>
          </AccordionSummary>
          <AccordionDetails>
            <p className="md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-[#333333]">
              {faq.answer}
            </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default FaqAccordion;
