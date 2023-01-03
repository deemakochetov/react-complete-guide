import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

function App() {
  const [tasks, setTasks] = useState([]);
  const processingDataFn = (dataObj) => {
    const { data } = dataObj;
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  };
  const { isLoading, error, fetchReq: fetchTasks } = useFetch(processingDataFn);

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
