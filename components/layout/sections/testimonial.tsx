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
    name: "John Doe",
    userName: "Owner of Doe's Bakery",
    comment:
      "Kasper has transformed our online presence! The tailored digital marketing strategies they provided have helped us reach more local customers and grow our brand.",
    rating: 5.0,
  },
  {
    image: "https://example.com/sophia-collins.png", // Replace with an actual image URL
    name: "Sophia Collins",
    userName: "Founder of EcoClean",
    comment:
      "Thanks to Kasper's training, I've learned how to effectively manage our social media and attract more customers who care about sustainability.",
    rating: 4.8,
  },

  {
    image: "https://example.com/adam-johnson.png", // Replace with an actual image URL
    name: "Adam Johnson",
    userName: "CEO of GreenTech Solutions",
    comment:
      "The personalized strategy Kasper developed for us has been a game-changer. We're now more visible online and seeing higher engagement from our target audience.",
    rating: 4.9,
  },
  {
    image: "https://example.com/ethan-parker.png", // Replace with an actual image URL
    name: "Ethan Parker",
    userName: "Owner of Parker Fitness",
    comment:
      "Kasper's expertise in digital marketing has helped us attract more clients and keep them engaged with our content. Highly recommend their services!",
    rating: 5.0,
  },
  {
    image: "https://example.com/ava-mitchell.png", // Replace with an actual image URL
    name: "Ava Mitchell",
    userName: "Manager at Ava's Art Studio",
    comment:
      "The training sessions from Kasper were incredibly insightful. I've learned how to leverage digital tools to better promote our workshops and art classes.",
    rating: 5.0,
  },
  {
    image: "https://example.com/isabella-reed.png", // Replace with an actual image URL
    name: "Isabella Reed",
    userName: "Founder of Reed's Boutique",
    comment:
      "Kasper has provided us with the knowledge and tools to compete online. Our boutique is now thriving thanks to their innovative marketing strategies.",
    rating: 4.9,
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
                    <Avatar>
                      <AvatarImage src={review.image} alt={review.name} />
                      <AvatarFallback>
                        {review.name.charAt(0)}
                        {review.name.split(" ")[1]?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>

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
