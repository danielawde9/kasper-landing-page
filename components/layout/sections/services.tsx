import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}

interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "In-depth Digital Marketing Training",
    description:
      "Group workshops and one-on-one coaching to equip businesses with essential digital skills.",
    pro: ProService.NO,
  },
  {
    title: "Tailored Marketing Strategies",
    description:
      "Custom digital marketing plans aligned with your business's unique mission and community goals.",
    pro: ProService.YES,
  },
  {
    title: "Support with Modern Tools",
    description:
      "Guidance on utilizing the latest digital tools and platforms to enhance online presence.",
    pro: ProService.NO,
  },
  {
    title: "Continuous Learning and Adaptation",
    description:
      "Ongoing process of learning and adapting to new digital trends and technologies.",
    pro: ProService.NO,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32 relative ">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Grow Your Business
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        From marketing and sales to operations and strategy, we have the
        expertise to help you achieve your goals.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
              aria-label={ProService.YES === pro ? "Pro Service" : ""}
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
      <div className="absolute left-1/2 top-1/2 -z-10 transform -translate-x-1/2 -translate-y-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};
