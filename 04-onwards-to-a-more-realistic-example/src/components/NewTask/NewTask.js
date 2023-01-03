import useFetch from "../../hooks/use-fetch";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const processingDataFn = (dataObj) => {
    const { data, taskText } = dataObj;
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const {
    error,
    isLoading,
    fetchReq: enterTaskHandler,
  } = useFetch(processingDataFn, "POST");

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
