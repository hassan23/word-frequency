import React, { useState } from "react";
import InputForm from "./InputForm";
import ListWords from "./ListWords";

const FrequecyContainer = () => {
  const [topWords, setTopWords] = useState([]);
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <InputForm setTopWords={setTopWords} setLoading={setLoading} />
      <ListWords topWords={topWords} isLoading={isLoading} />
    </>
  );
};

export default FrequecyContainer;
