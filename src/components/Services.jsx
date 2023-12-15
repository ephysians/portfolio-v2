import { content } from '../Content';

const Services = () => {
  const { services } = content;
  return (
    <section id='services'>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">{services.title}</h2>
        <h4 className="subtitle" data-aos="face-down">{services.subtitle}</h4>
        <br />

        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div 
            key={i}
            data-aos="fade-down"
            data-aos-delay={i * 500}
              className="min-w-[14rem] duration-300 bg-green-30 cursor-pointer border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none">
              <img src={content.logo} alt="logo" className='mx-auto mix-blend-multiply font w-[100px] h-[100px]' />
              <h6 className="my-3">{content.title}</h6>
              <p>{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>);
};
 
export default Services;









