import { useState } from "react";
import bookIcon from "../assets/img/book.svg";
import Input from "./Input";
import '../styles/Education.css'

const Education = ({ edit }) => {
  const [eduField, setEduField] = useState({
    school: "",
    study: "",
    start: "",
    end: "",
  });
  return (
    <section className='edu content__sect'>
      <div className='edu__title title'>
        <img src={bookIcon} alt='book' />
        <h2>Education</h2>
      </div>
      <div className='edu__content'>
        {edit ? (
          <Input
            className='edu__content-school-input h3-input'
            type='text'
            value={eduField.school}
            onChange={(e) =>
              setEduField({ ...eduField, school: e.target.value })
            }
            placeholder='School'
            initWidth={56}
          />
        ) : (
          <h3 className="edu__content-school">{eduField.school}</h3>
        )}
        {edit ? (
          <Input
            className='edu__content-study-input'
            type='text'
            value={eduField.study}
            onChange={(e) =>
              setEduField({ ...eduField, study: e.target.value })
            }
            placeholder='Title of study'
            initWidth={87}
          />
        ) : (
          <p className="edu__content-study">{eduField.study}</p>
        )}
        <div className="edu__content-date-container">
          {edit ? (
            <Input
              className='edu__content-start-input'
              type='text'
              value={eduField.start}
              onChange={(e) =>
                setEduField({ ...eduField, start: e.target.value })
              }
              placeholder='Start'
              initWidth={32}
            />
          ) : (
            <p className="edu__content-start">{eduField.start}</p>
          )}
          <span>-</span>
          {edit ? (
            <Input
              className='edu__content-end-input'
              type='text'
              value={eduField.end}
              onChange={(e) =>
                setEduField({ ...eduField, end: e.target.value })
              }
              placeholder='End'
              initWidth={25}
            />
          ) : (
            <p className="edu__content-end">{eduField.end}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
