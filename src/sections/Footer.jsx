import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex-col flex items-start">
          <a href="/">
            <img
            src = {footerLogo}
            width={150}
            height={46}/>
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Just Do It.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon.name}>
                <img 
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                />

              </div>
            )
          )}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul className="mt-6 flex flex-col gap-2">
                {section.links.map((link) => (
                  <li className="cursor-pointer mt-3 text-white-400 text-base leading-normal font-montserrat hover:text-slate-gray" key={link.name
                  }>
                    <a> {link.name} </a>
                  </li>
                ))}
              </ul>
            </div>
            
          ))}
      </div>
      </div>

      <div className="flex text-white-400 justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center justify-start gap-2 cursor-pointer font-montserrat">
          <img
          src={copyrightSign}
          alt="Copyright Sign"
          width={20}
          height={20}
          className="rounded-full m-0"
          />
          <p> Copyright. 2024 Nike Inc. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer hover:text-slate-gray">Terms and Conditions</p>

      </div>
    </footer>
  )
}

export default Footer
