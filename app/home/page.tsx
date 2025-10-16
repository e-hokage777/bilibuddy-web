import { Button } from "@/components/ui/button";
import Navbar from "../_components/navbar";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  const sectionStyles = "py-20 px-10";
  const sectionTitleStyles = "text-4xl mb-25 text-center";
  return (
    <main>
      <header>
        <Navbar />
      </header>
      {/*Hero*/}
      <section className="relative h-screen">
        <Image
          objectFit="cover"
          src="/images/hero-bg.jpg"
          alt="hero image"
          className="w-full h-full left-0 top-0 absolute"
          fill
        />
        <div className="relative w-full h-full bg-black/50 flex flex-col gap-3 justify-center items-start ps-20">
          <span className="text-7xl text-primary">
            <span className="font-semibold">Bili</span>Buddy
          </span>
          <p className="text-4xl max-w-lg text-secondary">
            Save newborns from the severe effects of neonatal jaundice
          </p>
          <Button variant={"outline"} className="text-2xl px-8 py-6">
            Get the App
          </Button>
        </div>
      </section>
      <section className={cn(sectionStyles, "bg-gray-300")}>
        <h2 className={sectionTitleStyles}>
          <span className="font-semibold">How</span> BiliBuddy Works
        </h2>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col items-center gap-4  max-w-[270]">
            <img
              //   className="static"
              src="/images/how_it_works/take-image.svg"
              alt="How it works, take image"
            />
            <p className="text-lg">Take region of specified body part</p>
          </div>
          <div className="flex flex-col items-center gap-4  max-w-[270]">
            <p className="text-lg">
              Verify that the given patches have been identified
            </p>
            <img
              //   className="static"
              src="/images/how_it_works/confirm-patches.svg"
              alt="How it works, take image"
            />
          </div>
          <div className="flex flex-col items-center gap-4  max-w-[270]">
            <img
              //   className="static"
              src="/images/how_it_works/preview.svg"
              alt="How it works, take image"
            />
            <p className="text-lg">
              Preview the patches after all images have been taken
            </p>
          </div>
          <div className="flex flex-col items-center gap-4  max-w-[270]">
            <p className="text-lg">Submit images and view results</p>
            <img
              //   className="static"
              src="/images/how_it_works/results.svg"
              alt="How it works, take image"
            />
          </div>
        </div>
      </section>
      {/** Our mission */}
      <section className={cn(sectionStyles, "bg-primary px-0")}>
        <div className=" text-primary-foreground">
          <h2 className={sectionTitleStyles}>
            Our <span className="font-semibold">Mission</span>
          </h2>
          <div className="flex justify-center items-center max-w-6xl mx-auto gap-8 py-14">
            <div className="h-[400px] max-w-[600px] w-full relative">
              <Image
                src="/images/cerebral_palsy.jpg"
                alt="Child with cerebral palsy receiving injection from nurse"
                fill
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
          <div className="bg-secondary py-14">
            <div className="flex flex-row-reverse justify-center items-center max-w-6xl mx-auto gap-8">
              <div className="h-[400px] max-w-[600px] w-full relative">
                <Image
                  src="/images/cerebral_palsy.jpg"
                  alt="Child with cerebral palsy receiving injection from nurse"
                  fill
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
          <div className="flex justify-center items-center max-w-6xl mx-auto gap-8 py-14">
            <div className="h-[400px] max-w-[600px] w-full relative">
              <Image
                src="/images/cerebral_palsy.jpg"
                alt="Child with cerebral palsy receiving injection from nurse"
                fill
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
      </section>
      {/** who can use */}
      <section className="h-screen flex relative">
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
              With Bilibuddy, parents can easily monitory theic
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
              With Bilibuddy, parents can easily monitory theic
            </p>
            <Button className="text-2xl bg-primary-foreground text-primary px-8 py-6 hover:text-primary-foreground">
              Register Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
