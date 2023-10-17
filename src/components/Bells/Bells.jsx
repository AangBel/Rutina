import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Bells() {
  console.log("in the bells function");
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_BELLS" });
  }, []);

  const bells = useSelector((state) => state.bells);
  console.log("this is bells", bells);

  const bellStore = useSelector((state) => state.bellStore);
  console.log("this is the bellStore", bellStore);

  const bellReducer = useSelector((state) => state.bellReducer);
  console.log("this is the bellReducer", bellReducer);

  const handleBellSelect = (bell) => {
    console.log("this is bell under handleBellSelect", bell);
    dispatch({ type: "SET_ALL_BELLS", payload: bell });
  };

  function addBellOnClick() {
    console.log("clicked to add Bell");
    history.push("/AddBell");
  }

  function addPomodoro() {
    console.log("clicked to add Pomodoro");
    history.push("/Pomodoro");
  }

  function deleteBellOnClick(bellId) {
    console.log("the delete bell button has been clicked");
    dispatch({ type: "DELETE_BELL_REQUEST", payload: bellId });
    // dispatch({ type: "DELETE_BELL", payload: { id: bellId } });
  }

  return (
    <>
      <header style={{ background: "#CEE9f1" }}>
        <div className="toolbar">
          <button className="learn-more" onClick={addBellOnClick}>
            Add Bell
          </button>
          <button className="learn-more" onClick={addPomodoro}>
            Add Pomodoro
          </button>
        </div>
      </header>

      <div style={{ marginBottom: "90px", flexGrow: 1 }}>
        <div className="BellClassMap">
          {bellReducer.map((bell) => (
            <div className="card shadow" key={bell.id}>
              <h5>{bell.timer_name}</h5>
              <ul>
                <li>{`Time: ${bell.time}`}</li>
              </ul>
              <button className="learn-more">EDIT</button>
              <button
                className="learn-more"
                onClick={() => deleteBellOnClick(bell.id)}
              >
                DELETE
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bells;
