import { Button, buttonVariants } from "@/components/ui/button";
import Navbar from "../_components/navbar";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DemoCard from "../_components/demo-card";

export default function Home() {
  const sectionStyles = "py-20 px-10";
  const sectionTitleStyles = "text-4xl mb-25 text-center";
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {/*Hero*/}
      <section id="hero" className="relative h-screen ">
        <Image
          objectFit="cover"
          src="/images/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full left-0 top-0 absolute"
          fill
        />
        <div className="w-full h-full bg-black/50 relative">
          <div className="container px-4 relative w-full h-full flex flex-col gap-3 justify-center items-start md:px-20">
            <span className="text-7xl text-white">
              <span className="font-semibold">Bili</span>Buddy
            </span>
            <p className="text-4xl max-w-lg text-white mb-8">
              Save newborns from the severe effects of neonatal jaundice
            </p>
            <Button
              variant={"outline"}
              className="text-2xl px-8 py-6 text-white"
            >
              Get the App
            </Button>
          </div>
        </div>
      </section>
      {/** how it works */}
      <section id="how-it-works" className={cn(sectionStyles, "bg-gray-300")}>
        <div className="container mx-auto">
          <h2 className={sectionTitleStyles}>
            <span className="font-semibold">How</span> BiliBuddy Works
          </h2>
          <div className="flex flex-col items-center gap-16 justify-around md:flex-row  md:gap-4">
            <DemoCard
              image="/images/how_it_works/take-image.svg"
              description="Take region of specified body part"
              index={0}
            />
            <DemoCard
              image="/images/how_it_works/confirm-patches.svg"
              description="Verify that the given patches have been identified"
              index={1}
            />
            <DemoCard
              image="/images/how_it_works/preview.svg"
              description="Preview the patches after all images have been taken"
              index={2}
            />
            <DemoCard
              image="/images/how_it_works/results-in-frame.svg"
              description="Submit images and view results"
              index={3}
            />
          </div>
        </div>
      </section>
      {/** Our mission */}
      <section
        id="our-mission"
        className={cn(sectionStyles, "bg-primary px-0")}
      >
        <div className=" text-primary-foreground">
          <h2 className={sectionTitleStyles}>
            Our <span className="font-semibold">Mission</span>
          </h2>
          <div className="w-full">
            <div className="container mx-auto px-4">
              <div className="flex flex-col justify-center items-center max-w-6xl mx-auto gap-8 py-14 md:flex-row">
                <div className="h-[400px] max-w-[600px] w-full relative">
                  <Image
                    src="/images/healthcare-worker-on-phone.webp"
                    alt="Child with cerebral palsy receiving injection from nurse"
                    objectFit="cover"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-3xl mb-4">Improve Early Detection</h3>
                  <p>
                    To enable early and accurate detection of neonatal jaundice
                    by providing an affordable, AI-powered screening tool that
                    works in low-resource and rural healthcare settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary py-14">
            <div className="container mx-auto px-4">
              <div className="flex flex-col justify-center items-center max-w-6xl mx-auto gap-8 md:flex-row-reverse">
                <div className="h-[400px] max-w-[600px] w-full relative">
                  <Image
                    src="/images/cerebral_palsy.jpg"
                    alt="Child with cerebral palsy receiving injection from nurse"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl mb-4">Prevent Life-long Effects</h3>
                  <p>
                    Bilibuddy seeks to ensture the early detection of severe
                    neonatal jaundice in order to prevent life long caused by
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="container mx-auto px-4">
              <div className="flex flex-col justify-center items-center max-w-6xl mx-auto gap-8 py-14 md:flex-row">
                <div className="h-[400px] max-w-[600px] w-full relative">
                  <Image
                    src="/images/healthcare-workers-on-tablet.webp"
                    alt="Child with cerebral palsy receiving injection from nurse"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="text-3xl mb-4">Empower Healthcare Workers</h3>
                  <p>
                    To equip healthcare workers with an easy-to-use, reliable
                    mobile solution that delivers consistent bilirubin
                    estimation across all skin tones, improving clinical
                    decision-making at the point of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** who can use */}
      <section className="h-screen flex flex-col relative md:flex-row">
        <h2
          className={cn(
            sectionTitleStyles,
            "absolute w-full top-0 left-0 z-10 text-primary-foreground mt-20"
          )}
        >
          <span className="font-semibold">Who</span> Can Use BiliBuddy
        </h2>
        <div className="flex-grow relative h-full">
          <Image
            objectFit="cover"
            src="/images/mother_with_child_2.jpg"
            alt="Smiling baby with mother"
            fill
          />
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 flex flex-col gap-4 justify-center items-center text-primary-foreground">
            <h3 className="text-4xl font-semibold">Parents</h3>
            <p className="text-2xl max-w-100 font-light text-center">
              With Bilibuddy, parents can easily monitor their child's health
            </p>
            <Button className="text-2xl bg-primary-foreground text-primary px-8 py-6 hover:text-primary-foreground">
              Get the App Now
            </Button>
          </div>
        </div>
        <div className="flex-grow relative h-full">
          <Image
            objectFit="cover"
            src="/images/neonatal_care_hospital.jpg"
            alt="Smiling baby with mother"
            fill
          />
          <div className="w-full h-full bg-black/50 absolute top-0 left-0 flex flex-col gap-4 justify-center items-center text-primary-foreground">
            <h3 className="text-4xl font-semibold">Hospitals and Clinics</h3>
            <p className="text-2xl max-w-100 font-light text-center">
              With BiliBuddy, healthcare workers can give more confident
              diagnosis
            </p>
            <Link
              href="/facility/register"
              className={cn(
                buttonVariants(),
                "text-2xl bg-primary-foreground text-primary px-8 py-6 hover:text-primary-foreground"
              )}
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
      {/**contacts */}
      <section id="contact" className="pt-20 pb-8">
        <div className="container mx-auto px-4 flex flex-col items-center gap-8  md:flex-row md:justify-center">
          <div className="md:max-w-[420] md:flex-1">
            <h2 className="text-4xl mb-10  text-start">
              Get in <span className="font-semibold">touch</span>
            </h2>
            <p className="mb-8">
              Use the details below to contact us directly, or fill out the form
              and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col gap-8 items-start">
              {/** contact item */}
              <div className="flex gap-4">
                <MapPin className="size-7 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold">Address</h3>
                  <p>
                    Faculty of Electrical and Computer Engineering
                    <br />
                    KNUST - Kumasi
                    <br />
                    Ghana
                  </p>
                </div>
              </div>
              {/** contact item */}
              <div className="flex gap-4">
                <Mail className="size-7 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold">Email</h3>
                  <p>dipperlabknust@gmail.com</p>
                </div>
              </div>
              {/** contact item */}
              <div className="flex gap-4">
                <Phone className="size-7 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold">Phone</h3>
                  <p>(233)-32-249-3435</p>
                </div>
              </div>
              {/** Follow Us */}
              <div>
                <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
                <div className="flex flex-row gap-4">
                  <Link href="https://www.linkedin.com/company/distributed-iot-platforms-privacy-and-edge-intelligence-research/posts/?feedView=all">
                    <Linkedin className="size-10" />
                  </Link>
                  <Link href="https://github.com/Dipper-Lab">
                    <Github className="size-10" />
                  </Link>
                  <Link href="https://twitter.com/dipperlabknust">
                    <Twitter className="size-10" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-0.5 bg-black"></div>
          <div className=" w-full md:max-w-[420] md:flex-1">
            <h2 className="text-4xl mb-10  text-start">
              Send us a <span className="font-semibold">message</span>
            </h2>
            <form action="" className="div flex flex-col gap-4">
              <Input name="name" placeholder="Name" />
              <Input name="email" placeholder="Email" />
              <Input name="subject" placeholder="Subject" />
              <Textarea placeholder="Message" className="min-h-80"></Textarea>
              <Button className="text-xl py-6">Send Messsage</Button>
            </form>
          </div>
        </div>
      </section>
      <footer className="bg-secondary text-white">
        <div className="w-full py-8">
          <div className="px-4 container mx-auto w-full flex flex-col gap-8 justify-between items-start md:flex-row md:gap-4">
            <div className="flex flex-col gap-4">
              <div>QUICK LINKS</div>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="#hero">Home</Link>
                </li>
                <li>
                  <Link href="#how-it-works">How it works</Link>
                </li>
                <li>
                  <Link href="#our-mission">Our Mission</Link>
                </li>
                <li>
                  <Link href="#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h4>CONTACT</h4>
              <div className="flex flex-row gap-2">
                <Link href="https://www.linkedin.com/company/distributed-iot-platforms-privacy-and-edge-intelligence-research/posts/?feedView=all">
                  <Linkedin className="size-10" />
                </Link>
                <Link href="https://github.com/Dipper-Lab">
                  <Github className="size-10" />
                </Link>
                <Link href="https://twitter.com/dipperlabknust">
                  <Twitter className="size-10" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-5xl">
                <strong>BILI</strong>BUDDY
              </div>
              <p className="text-sm">&copy; 2025. All rights reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
