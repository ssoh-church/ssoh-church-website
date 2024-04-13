import Hero from "@/components/pages/Hero"
import BigButtonLinks from "@/components/elements/BigButttonLinks";
import FlyerBox from "@/components/elements/FlyerBox";
import WordFlyer from "@/components/elements/WordFlyer";
import WordFlyerWithTextIcon from "@/components/elements/WordFlyerWithTextIcon";
import FlyerImageWithText from "@/components/elements/FlyerImageWithText";

export default function Home() {
  const familyPackage = {
    title: "Major Groups",
    description: "See what God can do through our children and family",
    links: [
      {title: "Children Ministry", href: '#', 'iconClass': "fi fi-rr-teddy-bear"},
      {title: "Teenager Ministry", href: '#', 'iconClass': "fi fi-rr-user-headset"},
      {title: "Youth Ministry", href: '#', 'iconClass': "fi fi-rr-running"},
      {title: "Gracious Women", href: '#', 'iconClass': "fi fi-rr-people-dress"},
      {title: "The MIVs", href: '#', 'iconClass': "fi-rr-handshake"},
    ]
  }

  const socialPlatforms = {
    title: "Follow us on Social Media",
    description: "",
    links: [
      {title: "Facebook", href: '#', iconClass: "fi-brands-facebook text-facebook hover:text-facebook-hover"},
      {title: "Instagram", href: '#', iconClass: "fi-brands-instagram bg-gradient-to-r from-instagram to-instagram-hover hover:bg-gradient-to-l"},
      {title: "Youtube", href: '#', iconClass: "fi-brands-youtube text-youtube hover:text-youtube-hover"},
      {title: "Telegram", href: '#', iconClass: "fi-brands-telegram"},
    ]
  }

  const onlineChurch = {
    title: "Join offline or Online",
    description: "You can join our services offline or online",
    links: [
      {title: "Tuesday 4:30 WAT", href: '', iconClass: "fi-rr-calendar"},
      {title: "Thursday 4:30 WAT", href: '',  iconClass: "fi-rr-calendar"},
      {title: "Sunday First Service 8am", href: '',  iconClass: "fi-rr-calendar"},
      {title: "Sunday Second Service 10am", href: '',  iconClass: "fi-rr-calendar"},
      {title: "Join us Online", href: 'https://www.youtube.com/sanctuaryofhopechurch/live',  iconClass: "fi-rr-play"},
    ]
  }

  const podcastInfo = {
    title: "Latest Podcast",
    buttontext: "Watch on Youtube",
    link: "https://youtu.be/i0O8pfnAbPU?si=Tvgo9NOT_ny8rFp1",
    imgSrc: "/podcast.png"
  }
  return (
    <main className="flex gap-y-4 flex-col item-start justify-between w-full sm:w-full mx-auto">
      <div className="my-2"></div>



      <div className="flex flex-wrap w-full item-start">

        <div className="md:w-7/12 pl-2 w-11/12">
          <Hero />
        </div>
        <div className="md:w-5/12 px-2 w-11/12 px-10">
          <BigButtonLinks href="#" text="New here?" />
          <BigButtonLinks href="#" text="Be an Hope Ambassador" />
          <BigButtonLinks href="#" text="Join an activity unit" />
          <BigButtonLinks href="#" text="Join a Whatsapp Group" />
          <BigButtonLinks href="#" text="Get baptized" />
          <BigButtonLinks href="#" text="You need counselling ?" />
        </div>
      </div>

      <div className="my-2"></div>

      <div className="flex flex-wrap w-full item-start">

        <div className="md:w-7/12 pl-2 w-11/12">
          <FlyerBox imgSrc="./event.jpg" href="#" />
          <div className="my-2"></div>
          <FlyerImageWithText data={podcastInfo} />
        </div>
        <div className="md:w-5/12 px-2 w-11/12">
          <WordFlyerWithTextIcon data = {onlineChurch}/>
          <WordFlyerWithTextIcon data = {familyPackage}/>
          <WordFlyerWithTextIcon data= {socialPlatforms}/>
        </div>
      </div>

    </main>
  );
}
