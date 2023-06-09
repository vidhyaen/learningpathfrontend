import React from "react";
import "./Courseviewside.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams, redirect } from "react-router-dom";

import axios from "axios";

export const Courseviewsidebar = ({ closeNav, allCourses }) => {
  const { id } = useParams();
  const [courses, setCourses] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  const [isdone, setIsdone] = useState(0);
  const navigate = useNavigate();

  const handleStyle = (currentSubtopicId, is_done) => {
    setIsdone(1);
    axios({
      method: "put",
      url: `http://localhost:8080/admin/subtopic/update/${currentSubtopicId}/done/${is_done}`,
      data: {},
    });

    // navigate
    refreshPage();

    // navigate(`/detail/${id}`);
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    detaildata();
  }, []);
  const detaildata = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/admin/topic/get/${id}`
      );
      setCourses(data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  const currentSubtopicId = localStorage.getItem("subTopicId");
  return (
    <>
      {courses?.map((course, index) => (
        <div key={index} id={`topic-${course?.id}`} className="sidenav1">
          {course?.subTopics?.map(
            (subTopic, index) =>
              subTopic?.id == currentSubtopicId && (
                <div className="row" key={index}>
                  <div className="text-right m-3">
                    <button
                      className={`btn btn-lg ${
                        subTopic.is_done ? "btn-success" : "btn-danger"
                      }`}
                      onClick={() =>
                        handleStyle(subTopic.id, subTopic.is_done ? 0 : 1)
                      }
                    >
                      {subTopic.is_done ? "Undo" : "Mark as Done"}
                    </button>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-8">
                    <a
                      href={`/detail/${id}`}
                      className="closebtn"
                      onClick={closeNav}
                    >
                      &times;
                    </a>
                    <div>
                      <h1 className="text-danger">{subTopic.sub_topic_name}</h1>

                      <p className="p-3">{subTopic.description}</p>

                      <h3 className=" text-danger m-3">
                        Visit the following resources to learn more:
                      </h3>
                      <div className="m-3">
                        <a href={subTopic.content_url} className="">
                          <li className="text-primary">{subTopic.sub_topic_name} offical link</li>
                        </a>
                        <a href="https://www.geeksforgeeks.org/">
                          <li className="text-primary">GeeksforGeeks</li>
                        </a>
                        <a href="https://www.tutorialspoint.com/index.htm">
                          <li className="text-primary">Tutorial Point</li>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-2"></div>
                </div>
              )
          )}
        </div>
      ))}{" "}
    </>
  );
};
export default Courseviewsidebar;
