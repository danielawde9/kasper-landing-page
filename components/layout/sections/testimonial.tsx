"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://example.com/john-doe.png", // Replace with an actual image URL
    name: "Anwar",
    userName: "Co-founder of Dekent Al Nes",
    comment:
      "Farah and hiba brought creative solutions that significantly boost our social media presence with high organic reach. \n\n They have a keen understanding about our targeted customer and how to leverage them for effective engagement",
    rating: 5.0,
  },
  {
    image: "https://example.com/sophia-collins.png", // Replace with an actual image URL
    name: "Nibal Al Daouk",
    userName: "Co-founder of 0-Waste Community",
    comment:
      "I would like to extend our warmest regards for all the efforts and time in supporting our initiative/NGO.  0-Waste Community has been looking forward to showing the impact behind this collaboration.\n\n The package of re-branding, road map, and advice on the next steps has been truly effective.\n\n  Your guidance, training, and follow-up have made the difference. \n\n I'm looking forward to more magic in the making.",
    rating: 4.8,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonials
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Hear What Our Clients Say
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-4 ${
                          i < Math.round(review.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    {/* <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.charAt(0)}
                        {review.name.split(" ")[1]?.charAt(0)}
                      </AvatarFallback>
                    </Avatar> */}

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
