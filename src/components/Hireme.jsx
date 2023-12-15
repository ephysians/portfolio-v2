import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1ep2K0uwV4wFt6MFxDi-JtdIDNP2ltxjg/view', '_blank');
  };

  return (
    <section className="bg-bg_light_primary" id="hireme">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">{Hireme.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            data-aos-delay={500}
            className="max-w-sm md:block hidden"
          />
          {/* <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          /> */}
          <div
            data-aos="down left"
            className="border-2 border-dark_primary max-w-sm p-10 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] relative left-14">
            <p className="leading-7">
              {Hireme.para}
            </p>
            <br />
            <button
              className="btn bg-dark_primary text-white" >
              {Hireme.btnText}
            </button>

            <button className="btn bg-dark_primary text-white ml-3 " onClick={openResume}>
              Resume
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hireme;

