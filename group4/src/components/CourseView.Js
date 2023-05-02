import React from "react";

import { useParams } from "react-router-dom";

function CourseView() {
  const { id } = useParams();
 
  return (
    <div className="App-header">
      {/* Course 1 */}
      {id === "11" && (
      <h1>HTML Documents, Heading,Paragraph </h1>
      )}
      {/* Course 2 */}
      {id === "2" && (
        <h1> HTML Links & Image</h1>
      )}
      {/* Course 3 */}
      {id === "3" && (
        <h1>HTML Forms</h1>
      )}
      ;
    </div>
  );
}
export default CourseView;
