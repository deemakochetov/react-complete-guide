import { useState } from "react";

const useFetch = (processingDataFn, method = "GET") => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchReq = async (taskText = null) => {
    setIsLoading(true);
    setError(null);
    const configObj = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (taskText) {
      const body = JSON.stringify({ text: taskText });
      if (body) configObj.body = body;
    }

    try {
      const response = await fetch(
        "https://react-course-8842d-default-rtdb.firebaseio.com/tasks.json",
        configObj
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const dataObj = { data };
      if (taskText) dataObj.taskText = taskText;
      processingDataFn(dataObj);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  return { isLoading, error, fetchReq };
};

export default useFetch;
