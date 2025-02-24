import phoneIcon from "../assets/img/phone.svg";
import mailIcon from "../assets/img/mail.svg";
import { useState } from "react";
import "../styles/GeneralInformation.css";
import Input from "./Input";

const GeneralInformation = ({ edit }) => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    phone: "",
    mail: "",
  });

  return (
    <section className='general-info'>
      <div className='general-info-container'>
        {edit ? (
          <Input
            className='general-info__name-input'
            type='text'
            value={generalInfo.name}
            onChange={(e) =>
              setGeneralInfo({ ...generalInfo, name: e.target.value })
            }
            placeholder='Name'
            initWidth={115}
          />
        ) : (
          <h1 className='general-info__name'>{generalInfo.name}</h1>
        )}
        <div className='general-info__phone-container general-info__row'>
          <img src={phoneIcon} alt='phone' />
          {edit ? (
            <Input
              type='text'
              className='general-info__phone-input'
              value={generalInfo.phone}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, phone: e.target.value })
              }
              placeholder='Phone'
              initWidth={47}
            />
          ) : (
            <p className='general-info__phone'>{generalInfo.phone}</p>
          )}
        </div>
        <div className='general-info__email-container general-info__row'>
          <img src={mailIcon} alt='mail' />
          {edit ? (
            <Input
              type='text'
              className='general-info__mail-input'
              value={generalInfo.mail}
              onChange={(e) =>
                setGeneralInfo({ ...generalInfo, mail: e.target.value })
              }
              placeholder='Mail'
              initWidth={31}
            />
          ) : (
            <p className='general-info__mail'>{generalInfo.mail}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeneralInformation;
