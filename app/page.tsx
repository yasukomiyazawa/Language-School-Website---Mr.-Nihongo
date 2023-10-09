import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Footer, Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col box-border pb-10 pt-5">
      <div className="pb-3 px-40 flex justify-around w-full border-b-2 text-xs border-b-gray-300 max-lg:hidden">
        <div className="w-full flex gap-5">
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div>Tokyo, Japan</div>
          </div>
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div>+81 80 2340 5812</div>
          </div>
          <div className="flex items-center">
            <div className="w-3 mr-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-3"
                style={{ color: "red" }}
              />
            </div>
            <div>mreigo@gmail.com</div>
          </div>
        </div>

        <div className="flex items-center">
          <div>
            <FontAwesomeIcon
              icon={faFacebook}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faInstagram}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faTwitter}
              className="w-3 mr-4"
              style={{ color: "lightslategray" }}
            />
          </div>
        </div>
      </div>
      <Navbar />

      <Hero />

      <Footer />
    </main>
  );
}
