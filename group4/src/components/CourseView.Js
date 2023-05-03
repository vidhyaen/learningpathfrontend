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
        

            </div>
            
             

            <div className="col-md-4">
              
            <div className="row ">
                  <div className="col-md-8 ">
                    <h1 className="text-center">Sample document </h1>
                  </div>
                  <div className="col-md-4 mb-5 text-center">
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
                    <h2>
                    {`<!DOCTYPE html>
<html>
<body>
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>
<p>This is a paragraph.</p>
</body>
</html>`}
                    </h2>
                   
                  </pre>
                    <ouput className="text-white">
                    <h1 className="text-center">Output</h1>
                    <h1>This is heading 1</h1>
                    <h2>This is heading 2</h2>
                    <h3>This is heading 3</h3>
                    <h4 className="text-white">This is heading 4</h4>
                    <h5>This is heading 5</h5>
                    <h6>This is heading 6</h6>
                    <p>This is a paragraph.</p>
                  </ouput>
                </div>
             
              </div>
            </div>
            </div>
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
