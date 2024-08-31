import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons, TrendingDown } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "BookOpen", // Example icon, replace with the actual icon name you want to use
    title: "Comprehensive Training",
    description:
      "Gain the skills you need to excel in digital marketing with our expert-led workshops and one-on-one coaching.",
  },
  {
    icon: "Target", // Example icon, replace with the actual icon name you want to use
    title: "Tailored Strategies",
    description:
      "Our customized marketing strategies are designed to align with your unique business goals and community mission.",
  },
  {
    icon: "Settings", // Example icon, replace with the actual icon name you want to use
    title: "Modern Tools",
    description:
      "Stay ahead with the latest digital tools and platforms, ensuring your business remains competitive online.",
  },
  {
    icon: "TrendingUp", // Example icon, replace with the actual icon name you want to use
    title: "Continuous Growth",
    description:
      "Embrace continuous learning and adaptation to keep up with the ever-evolving digital landscape.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            At Kasper, we empower small businesses to thrive in the digital
            world. Here’s how we can help you succeed online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
