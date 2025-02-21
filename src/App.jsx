import { useState } from "react";
import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";

function App() {
  const [edit, setEdit] = useState(true);

  return (
    <>
      <GeneralInformation {...{ edit }} />
      <Education {...{edit}} />
      <WorkExperience {...{edit}} />
      <div className='btn-container'>
        <div className='container'>
          {edit ? (
            <button className='btn--submit' key='btn--submit' onClick={() => setEdit(false)}>
              Submit
            </button>
          ) : (
            <button className='btn--edit' key='btn--edit' onClick={() => setEdit(true)}>
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
