import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "Kasper specializes in working with small, community-focused businesses that are eager to leverage digital marketing to enhance their impact.",
    value: "item-1",
  },
  {
    question: "How does Kasper's training work?",
    answer:
      "We offer in-depth digital marketing training through both group workshops and personalized one-on-one sessions tailored to your business needs.",
    value: "item-2",
  },
  {
    question: "What is included in the custom marketing strategy?",
    answer:
      "Our custom strategies are designed to align with your business's unique mission and goals, focusing on maximizing online visibility and engagement.",
    value: "item-3",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes! Kasper believes in continuous learning and adaptation, providing ongoing support to help your business stay ahead in the ever-evolving digital landscape.",
    value: "item-4",
  },
  {
    question: "How can I get started with Kasper?",
    answer:
      "Simply contact us through our website or join our community to begin your digital marketing journey.",
    value: "item-5",
  },
  {
    question: "What services does Kasper offer?",
    answer:
      "Kasper offers a range of services including digital marketing training, custom marketing strategy development, and ongoing support for small businesses.",
    value: "item-6",
  },
  {
    question: "How can Kasper help improve my online presence?",
    answer:
      "Kasper helps improve your online presence through tailored strategies that increase your visibility, engage your target audience, and drive growth.",
    value: "item-7",
  },
  {
    question:
      "What makes Kasper different from other digital marketing agencies?",
    answer:
      "Kasper focuses on empowering small, community-focused businesses with personalized strategies and training, ensuring they can thrive in the digital landscape.",
    value: "item-8",
  },
  {
    question: "Is Kasper's service suitable for startups?",
    answer:
      "Absolutely! Kasper is ideal for startups looking to build a strong online presence from the ground up with targeted strategies and hands-on support.",
    value: "item-9",
  },
];

function generateFAQSchema(faqs: FAQProps[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export const FAQSection = () => {
  const faqSchema = generateFAQSchema(FAQList);

  return (
    <section id="faq" className="container lg:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
};
