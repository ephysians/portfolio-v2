import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  const handleReadMore = (link) => {
    window.open(link, "_blank");
  };



  return (
    <section className="  bg-bg_light_primary" id="projects">
      <div className="md:container  px-5 pt-14 min-h-screen ">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="   flex items-center justify-center lg:flex-row flex-col-reverse gap-2 p-10">
          {/* <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] relative sm:left-12 bottom-20 min-w-[22rem] sm:ml-18  "
          /> */}
          {/* 
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={10}
            modules={[Pagination]}
            className="  rounded-3xl pb-12 max-w-[40vw] min-w-[22rem] drop-shadow-primary self-start relative top-10 sm: bg-400-green"
          > */}

          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={10}
            modules={[Pagination]}
            className="  rounded-md pb-12 w-full min-w-[22rem] drop-shadow-primary self-start relative sm: bg-400-green"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-md   border-[#D5E3F1] h-fit"
              >
                <img src={content.image} alt="..." className="" />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <p className="text-[12px]">{content.description}</p>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => handleReadMore(content.link)}
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
