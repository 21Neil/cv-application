import { useState } from "react";
import briefcaseIcon from "../assets/img/briefcase.svg";
import Input from "./Input";
import "../styles/WorkExperience.css";
import plusIcon from "../assets/img/plus.svg";
import trashIcon from "../assets/img/trash.svg";

const WorkExpContent = ({ edit, dataKey, handleDeleteOnClick }) => {
  const [workExpField, setWorkExpField] = useState({
    company: "",
    job: "",
    desc: "",
    start: "",
    end: "",
  });

  return (
    <div className='work-exp__content'>
      <div className='work-exp__content-date'>
        {edit ? (
          <Input
            className='work-exp__content-date-start-input'
            type='text'
            value={workExpField.start}
            onChange={(e) =>
              setWorkExpField({ ...workExpField, start: e.target.value })
            }
            placeholder='Start'
            initWidth={37}
          />
        ) : (
          <p className='work-exp__content-date-start'>{workExpField.start}</p>
        )}
        <span>-</span>
        {edit ? (
          <Input
            className='work-exp__content-date-end-input'
            type='text'
            value={workExpField.end}
            onChange={(e) =>
              setWorkExpField({ ...workExpField, end: e.target.value })
            }
            placeholder='End'
            initWidth={30}
          />
        ) : (
          <p className='work-exp__content-date-end'>{workExpField.end}</p>
        )}
      </div>
      <div className='work-exp_content_divider' />
      <div className='work-exp__content-company'>
        {edit ? (
          <Input
            className='work-exp__content-company-name-input h3-input'
            type='text'
            value={workExpField.company}
            onChange={(e) =>
              setWorkExpField({ ...workExpField, company: e.target.value })
            }
            placeholder='Company'
            initWidth={80}
          />
        ) : (
          <h3 className='work-exp__content-company-name'>
            {workExpField.company}
          </h3>
        )}
        {edit ? (
          <Input
            className='work-exp__content-company-job-input'
            type='text'
            value={workExpField.job}
            onChange={(e) =>
              setWorkExpField({ ...workExpField, job: e.target.value })
            }
            placeholder='Job title'
            initWidth={55}
          />
        ) : (
          <p className='work-exp__content-company-job'>{workExpField.job}</p>
        )}
        {edit ? (
          <Input
            className='work-exp__content-company-desc-input'
            type='textarea'
            value={workExpField.desc}
            onChange={(e) =>
              setWorkExpField({ ...workExpField, desc: e.target.value })
            }
            placeholder='Responsibilities of your jobs'
            initWidth={187}
          />
        ) : (
          <p className='work-exp__content-company-desc'>{workExpField.desc}</p>
        )}
      </div>
      {edit ? (
        <button
          className='trash-btn'
          onClick={() => handleDeleteOnClick(dataKey)}
        >
          <img src={trashIcon} alt='delete' />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

const WorkExperience = ({ edit }) => {
  const [contentNum, setContentNum] = useState([crypto.randomUUID()]);

  const handlePlusOnClick = () => {
    setContentNum([...contentNum, crypto.randomUUID()]);
  };

  const handleDeleteOnClick = (key) => {
    setContentNum(contentNum.filter((item) => item !== key));
  };

  return (
    <section className='work-exp content__sect'>
      <div className='work-exp__title title'>
        <img src={briefcaseIcon} alt='briefcase' />
        <h2>Work Experience</h2>
      </div>
      {contentNum.map((i) => (
        <WorkExpContent
          key={i}
          dataKey={i}
          {...{ edit, handleDeleteOnClick }}
        />
      ))}
      <div className='work-exp__control'>
        <button className='plus-btn' onClick={handlePlusOnClick}>
          <img src={plusIcon} alt='plus' />
        </button>
      </div>
    </section>
  );
};

export default WorkExperience;
