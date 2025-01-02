// import content
import { content } from "../Content";
// import Link from "react-scroll";
import { Link as ScrollLink } from "react-scroll";



const Hero = () => {
  const { hero } = content;
  return (
    <section id="home">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
          <h1 className="rotate-90 absolute top-[10%] right-[-15%] text-center text-[#EAF2FA] md:top-[47%]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">
              {hero.LastName}
            </span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" >
          <h2 className ="text-[50px] leading-loose">{hero.title}</h2><br />
          <div className="flex justify-end">
            
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500} // Adjust scroll duration (ms)
              className="btn border-inherit cursor-pointer"
            >
              {hero.btnText}
            </ScrollLink>

          </div>
          <div className="flex flex-col gap-10 mt-10">
            {
              hero.hero_content.map((content, i) => (
                <div
                  key={i}
                  data-aos="fade-down"
                  data-aos-delay={i * 300}
                  className={`flex items-center w-80 gap-5 ${i === 1 && "flex-row-reverse text-right"}`}
                >
                  <h3 className="font-semibold">{content.count}</h3>
                  <p>{content.text}</p>
                </div>
              ))
            }
          </div>
        </div>


        {/* sec col */}
        <div className="md:h-[37rem] h-96">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="hero's image"
            className="h-full object-cover w-full max-w-full font-bold" />
        </div>
      </div>
    </section>
  )
};

export default Hero;




