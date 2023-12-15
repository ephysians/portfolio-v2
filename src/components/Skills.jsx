import { createElement, useState } from "react";
import { content } from "../Content";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxwidth: "23rem",
    width: "50%",
  },
  overlay: {
    padding: "2rem",
  }
};

Modal.setAppElement('#root');

const Skills = () => {
  const { skills } = content;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectSkill, setSelectSkill] = useState(null);
  const [showAllSkills, setShowAllSkills] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function toggleShowAllSkills() {
    setShowAllSkills(!showAllSkills);
  }

  return (
    <section id="skills" className="min-h-fit bg-bg_light_primary">
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} className="">
        <div className="flex item-cemter gap-2">
          <img className="h-10" src={selectSkill?.logo} alt="..." />
          <h6>{selectSkill?.name}</h6>
        </div>
        <br />
        <ul className="list-decimal px-4 font-poppins sm:text-sm text-xs !leading-7">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
          <li>amet consectetur Lorem ipsum dolor sit ame.</li>
          <li>ipsum dolo Lorem ipsum dolor sit amet consectetur .</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit,adipisicing elit. Odio voluptatibus sequi amet?.</li>
          <li>dolor sit amet consectetur adipisicing elit. Facere voluptas?.</li>
        </ul>
        <br />
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn bg-teal-200 border-none ">
            Close
          </button>
        </div>
      </Modal>
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>
        <br />
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.slice(0, showAllSkills ? skills.skills_content.length : 6).map((skill, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 400}
              className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <div>
                <img src={skill.logo} alt="skill image" className="w-10 group-hover:scale-125 duration-200" />
              </div>
              <div>
                <h6>{skill.name}</h6>
                <p className="italic">{skill.para}</p>
                <div onClick={() => {
                  setSelectSkill(skill);
                  openModal();
                }}
                  className="text-xl absolute top-3 right-3">
                  {createElement(skills.icon)}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Add "View More" button at the bottom */}
        {!showAllSkills && (
          <div className="flex justify-center">
            <button
              onClick={toggleShowAllSkills}
              className="btn bg-teal-200 border-none mt-5 "
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills;
