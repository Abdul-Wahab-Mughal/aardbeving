import React from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { ArrowUp } from "lucide-react";

export default function Footer({ navItems }) {
  function scrollup() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer>
      <div className=" bg-gray-200 py-12 px-5 lg:px-20 relative">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 container m-auto max-md:text-center">
          <div>
            <img
              src={logo}
              alt="Aardbeving Adviesbureau"
              className="h-40 w-auto max-md:m-auto"
            />
          </div>
          <div>
            <h4 className=" text-lg font-semibold mb-4 text-black">Algemeen</h4>
            <ul className="space-y-1.5 text-sm text-[--muted-foreground] ">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className=" text-lg font-semibold mb-4 text-black">
              <a href="/contact">Contact</a>
            </h4>
            <div className=" text-sm text-[--muted-foreground] space-y-1.5">
              <p className="md:max-w-32">Ulgersmaweg 47-A 9731BK Groningen</p>
              <p className="pt-2">
                <a
                  href="mailto:info@aardbeving-adviesbureau.nl"
                  className="hover:text-black transition-colors underline"
                >
                  info@aardbeving-adviesbureau.nl
                </a>
              </p>
              <p>
                <a
                  href="tel:050"
                  className="hover:text-black transition-colors underline"
                >
                  050 – …..
                </a>
              </p>
            </div>
          </div>
        </div>
        <div
          className="bg-[--background_box] w-fit h-fit p-2.5 absolute right-5 md:right-10 bottom-5 md:bottom-10 rounded cursor-pointer"
          onClick={() => scrollup()}
        >
          <ArrowUp size={20} />
        </div>
      </div>
      <div className="bg-[--background_box] h-8" />
    </footer>
  );
}
