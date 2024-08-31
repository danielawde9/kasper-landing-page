import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Optimized",
    description:
      "Ensure your digital presence is seamless across all devices, providing a user-friendly experience on mobile and tablet.",
  },
  {
    icon: "BadgeCheck",
    title: "Credibility Building",
    description:
      "Boost your brand's trustworthiness with social proof elements that resonate with your audience.",
  },
  {
    icon: "Target",
    title: "Targeted Content",
    description:
      "Deliver content that speaks directly to your audience’s needs and drives engagement.",
  },
  {
    icon: "Image",
    title: "Strong Visuals",
    description:
      "Capture attention with compelling visuals that align with your brand and message.",
  },
  {
    icon: "MousePointerClick",
    title: "Clear Calls to Action",
    description:
      "Guide your visitors with clear, compelling calls to action that encourage interaction.",
  },
  {
    icon: "Text",
    title: "Impactful Headlines",
    description:
      "Craft headlines that grab attention and clearly communicate the value of your offerings.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Kasper empowers your business with key features that set you apart in
        the digital landscape.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
