import { useRef, useState } from "react";
import { fieldsList } from "../AddWindow/constants";
import { useDispatch } from "react-redux";
import { add } from "../../redux/actions/actions";

function AddWindow() {
  const dispatch = useDispatch();
  const data = useRef({});
  const [closeWindow, setCloseWindow] = useState(false);

  const save = () => {
    const completeForm = fieldsList.every((field) => data.current[field]);
    if (completeForm) {
      dispatch(add(data.current));
      setCloseWindow(true);
    }
  };

  const onChange = (e, field) => {
    const value = e.target.value;
    data.current = { ...data.current, [field]: value };
  };

  const renderWindow = () => {
    return (
      <div>
        <div>
          {fieldsList.map((field) => {
            return (
              <div>
                <p>{field}</p>
                <input onChange={(e) => onChange(e, field)}></input>
              </div>
            );
          })}
        </div>
        <button onClick={save}>Save</button>
      </div>
    );
  };
  return <div>{renderWindow()}</div>;
}

export default AddWindow;
