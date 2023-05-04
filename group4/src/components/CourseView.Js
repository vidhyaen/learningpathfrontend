import React from "react";
import "./Courseview.css";
import { useState } from "react";


import { useParams } from "react-router-dom";

function Courseview() {
  const [active, setActive] = useState(false);
  const { id } = useParams();
  const handleBack = () => {
    window.history.back();
  };
  const [setIsHidden] = useState(true);
  //const location = useLocation();


  const handleClick = () => {
    setIsHidden(true);
  };

  const handleComplete=()=>{
    setActive(!active);
  }

  return (
    <div className="App-header pt-5">
      {/* Course 1 */}
      <input type="checkbox" id="check" hidden={setIsHidden}  onClick={handleClick}/>
     
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
            <div className="col-md-3">
              <div className="sidenav">
                <a href="#section1" className="btn">
                  HTML Introduction
                </a>
                <a href="#section2" className="btn">
                  HTML Document
                </a>
                <a href="#section3" className="btn">
                  HTML Heading
                </a>
                <a href="#section4" className="btn">
                  Sample Document
                </a>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="section one" id="section1">
                <div className="text-center pt-2">
                <div className="row ">
                  <div className="col-md-8 ">
                  <h1 className="text-center  p-3  text-white">
                    <b>HTML Introduction</b>
                  </h1>
                    </div>
                    <div className="col-md-4 mb-5 text-center">
                    <button
                      className="btn btn-lg btn-warning"
                      onClick={handleComplete}
                      style={{ backgroundColor: active ? "green" : "white" }}
                    >
                     Mark as Complete
                    </button>
                  </div>
                  </div>
                  
                </div>
                <div className=" shadow  text-white">
                    <div className="bg-dark  shadow p-5"
                    >

                    <h3 className="p-2">
                  HTML stands for Hyper Text Markup Language
                </h3>
                <h3 className="p-2">
                  {" "}
                  HTML is the standard markup language for creating Web pages
                </h3>
                <h3 className="p-2">
                  HTML describes the structure of a Web page
                </h3>
                      </div>
                      </div>
                
              </div>

              <div className="section two" id="section2">
              <div className="text-center">
                <div className="row mt-5 ">
                  <div className="col-md-8  ">
                  <h1 className="text-center  text-white">
                  <b>HTML Document</b>
                </h1></div>
                    <div className="col-md-4 mb-5 text-center">
                    <button
                      className="btn btn-lg btn-warning"
                      onClick={handleComplete}
                      style={{ backgroundColor: active ? "green" : "white" }}
                    >
                     Mark as Complete
                    </button>
                  </div>
                  
                  <div className=" shadow  text-white">
                    <div className="bg-dark  shadow p-5"
                    > <h3 className="p-2">
                    {`All HTML documents must start with a document type declaration:
                   <!DOCTYPE html>.`}
                  </h3>
                  <h3 className="p-2">
                    {`All HTML documents must start with a document type declaration:
                   <!DOCTYPE html>.`}
                  </h3>
                  <h3 className="p-2">
                    {`
  The HTML document itself begins with <html> and ends with </html>..`}
                  </h3>
                  <h3 className="p-2">
                    {" "}
                    {`The visible part of the HTML document is between <body> and </body>.`}{" "}
                  </h3>
                      </div>
                    </div>
                </div>
                

               
              </div>
              </div>

              <div className="section three" id="section3">
              <div className="text-center pt-2">
                <div className="row mt-5">
                  <div className="col-md-8 ">
                  <h1 className="text-center  p-3  text-white">
                    <b>HTML Heading</b>
                  </h1>
                    </div>
                    <div className="col-md-4 mb-5 text-center">
                    <button
                      className="btn btn-lg btn-warning"
                      onClick={handleComplete}
                      style={{ backgroundColor: active ? "green" : "white" }}
                    >
                     Mark as Complete
                    </button>
                  </div>

                  </div>
                  <div className=" shadow  text-white">
                    <div className="bg-dark  shadow p-5"
                    >

<h3 className="p-2">
                      {`HTML headings are defined with the <h1> to <h6> tags.`
                       }</h3>  
                    <h3 className="p-2">
                      {`<h1> defines the most important heading. `
                       }</h3>  
                       <h3 className="p-2">
                      {`<h6> defines the least important heading. `}
                       </h3>
                      </div>
                      </div>
                
              </div>
              </div>

             
              <div className="section four" id="section4">
                <div className="row mt-5">
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
                    </div>
                  </div>
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
