import React, { useEffect } from "react";
import { handleMinus, handlePlus } from "./redux/slices/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { testAPIget, testAPIPost } from "./redux/slices/apiSlices";

const Toolkit = () => {
  const dispatch = useDispatch();
  const { loader, data1, data2, error } = useSelector((state) => state.api);

  console.log(loader, error, data1, data2);

  useEffect(() => {
    dispatch(testAPIget());
  }, []);

  return (
    <>
      {/* <button onClick={() => dispatch(handlePlus(5))}>+</button>
      <button onClick={() => dispatch(handleMinus(5))}>-</button> */}
      <button onClick={() => dispatch(testAPIget())}>APIGET</button>
      <button
        onClick={() =>
          dispatch(
            testAPIPost({
              test: "test",
            })
          )
        }
      >
        APIPOST
      </button>
    </>
  );
};

export default Toolkit;
