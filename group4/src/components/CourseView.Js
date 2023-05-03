import React from "react";
import "./Courseview.css";
import "./page.css";
import { useParams } from "react-router-dom";

function Courseview() {
  const { id } = useParams();
  const handleBack = () => {
    window.history.back();
  };
  return (
    <div className="App-header pt-5">
      {/* Course 1 */}
      <button
        className="back-button text-center pt-3"
        color="black"
        onClick={handleBack}
      >
        {"<"}
      </button>
      {id === "1" && (
        <div className="text-white">
         
         
          <div className="row">
            <div className="col-md-6">
            <div className="row">
                <div className="col-md-6 mb-5">
                <button className="btn btn-lg btn-success">Mark as Done</button>
                  </div>
                  <div className="col-md-5 mb-5 text-center">
                       <h1 className="text-center">HTML Introduction</h1>
                  </div>
                  </div>
                  
              <div className="border border-danger p-5 text-white">
                <h4 className="text-white">
                  HTML is the standard markup language for Web pages.
                </h4>
                <h4 className="text-white">
                  With HTML you can create your own Website.
                </h4>
                <h4 className="text-white">
                  {" "}
                  HTML is easy to learn - You will enjoy it!
                </h4>
              </div>
              </div>

            <div className="col-md-5">
              
            <div className="row ">
                  <div className="col-md-6 ">
                    <h1 className="text-center">Sample document </h1>
                  </div>
                  <div className="col-md-6 mb-5 text-center">
                    <button
                      className="btn btn-lg btn-warning"
                      onCopy="copyhandler"
                    >
                      Copy text
                    </button>
                  </div>
                </div>
           

              <div className=" shadow  text-white">
                

                <div className="bg-dark  shadow p-5">
                  <pre className="">
                    <h3>&lt;!DOCTYPE html&gt;</h3>
                    <h3>&lt;html&gt;</h3>
                    <h3> &lt;title&gt;Page Title </h3>
                    <h3> &lt;head&gt;</h3>
                    <h3> &lt;body&gt;</h3>
                    <h3> &lt;h1&gt;My First Heading&lt;/h1&gt; </h3>

                    <h3> &lt;p&gt;My First Paragraph &lt;/p&gt; </h3>
                    <h3> &lt;/body&gt; &lt;/html&gt; </h3>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
      {/* Course 2 */}
      {id === "2" && <h1> HTML Links & Image</h1>}
      {/* Course 3 */}
      {id === "3" && <h1>HTML Forms</h1>}; */
    </div>
  );
}
export default Courseview;
