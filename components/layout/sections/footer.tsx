import { Separator } from "@/components/ui/separator";
import { Building2, ChevronsDownIcon, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className=" py-5 m-6 w-auto bg-primary/5 border border-secondary rounded-2xl container mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-8 md:gap-x-16 md:gap-y-12">
        <div className="flex flex-col">
          <Link href="#" className="flex font-bold items-center mb-4">
            <Image
              src={"/logo.png"}
              alt="Kasper By the Sisters"
              width={50}
              height={50}
            />
            <h3 className="text-2xl ml-2">Kasper By The Sisters</h3>
          </Link>
          <p className="text-muted-foreground">
            Kasper empowers small, community-focused businesses with tailored
            digital marketing training and strategies to thrive online and make
            an impact. Whether you have questions or need tailored advice,
            Kasper is here to help. Reach out to us and start your journey to
            mastering digital marketing.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 mb-4 mt-2">
            <Phone />
            <div className="font-bold">Call us</div>
          </div>
          <div>
            <Link
              href="tel:+96176313515"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              +961 76 313 515
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2 mb-4 mt-2">
            <Mail />
            <div className="font-bold">Email us</div>
          </div>
          <div>
            <Link
              href="mailto:kasperbythesisters@gmail.com"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              kasperbythesisters@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <Separator className="my-6" />
      <section className="text-center">
        <h3 className="text-sm">
          &copy; 2024 Designed and developed by
          <Link
            target="_blank"
            href="https://danielawde9.com"
            className="text-primary transition-all border-primary hover:border-b-2 ml-1"
          >
            Daniel Awde
          </Link>
        </h3>
      </section>
    </footer>
  );
};
