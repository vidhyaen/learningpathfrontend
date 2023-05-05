import React from "react";
import "./page.css";
import "./video.css";
import { Dropdown } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import certiimg from "../image/certiflowchart.jpg";

function videos() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="courses-container"
    style={{
        backgroundColor: 'black',
        color: 'white'
    }}
    >
      <button className="back-button" onClick={handleBack}>
        {"<"}
      </button>
      <div className="text-center p-5">

      <h1 className="text-center text-danger mb-5">VIDEOS</h1>
      <div className="text-center">
      <h3>        Salesforce is releasing more certifications than ever before,</h3>
    <h3>  and it can be hard to keep track of them all.</h3>
      
      <h3>        Here’s a list of all the Salesforce certifications</h3>
          <h3> including the new Salesforce Architect certifications,  and how to get them.</h3>
      
</div>

      <div  className="pb-5 mt-5">
        
        <Dropdown title="ASSOCIATE EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=6zP_pzj8BoE"
          >
            Salesforce Certified Associate
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="ADMINSTRATOR EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=WcgCetEyLmM"
          >
            Salesforce Certified Adminstrator
          </Dropdown.Item>

          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=IcMV4yaCZJo"
          >
            Salesforce Certified Advanced Adminstrator
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=BuP6McSnrls"
          >
            Salesforce Certified Business Analyst
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="APP BUILDER EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=VV9gSnBknE0"
          >
            Salesforce Certified Platform App Builder
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="ARCHITECT EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=oXL2NOrR5S0"
          >
            Architect Review Board Evaluation
          </Dropdown.Item>

          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=aF7DzdYad2M"
          >
            Salesforce Certified B2B Solution Architect
          </Dropdown.Item>
          <Dropdown.Item as="a" href="https://youtu.be/C_bhokhPdm4">
            Salesforce Certified B2C Commerce Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=FaCsP-PqxbM"
          >
            Salesforce Certified B2C Solution Architect
          </Dropdown.Item>
          <Dropdown.Item as="a" href="https://youtu.be/1NkKukruJzM">
            Salesforce Certified Data Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=d3jSwICuYW0&list=PLS4RS647S_YaGuXRso-6ALi37FkAWEfBH"
          >
            Salesforce Certified Development Lifecycle and Deployement Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=Hr3cHCFhLLA&pp=ygUlU2FsZXNmb3JjZSBDZXJ0aWZpZWQgSGVyb2t1IEFyY2hpdGVjdA%3D%3D"
          >
            Salesforce Certified Heroku Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=kCr-3EHRDP8&list=PLaGX-30v1lh3A6eNOEdF1k3JTstTwqA0q"
          >
            Salesforce Certified Identity and Access Management Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=UWuPDc4DdYs&pp=ygUqU2FsZXNmb3JjZSBDZXJ0aWZpZWQgSW50ZWdyYXRpb24gQXJjaGl0ZWN0"
          >
            Salesforce Certified Integration Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=ktJFkWIR2xo&pp=ygU1U2FsZXNmb3JjZSBDZXJ0aWZpZWQgU2hhcmluZyBhbmQgVmlzaWJpbGl0eSBBcmNoaXRlY3Q%3D"
          >
            Salesforce Certified Sharing and Visibility Architect
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=n3kUjExB1-0&list=PLaGX-30v1lh0ECrHwbN3C4hZJ8Msudreh"
          >
            Salesforce Certified Technical Architect Review Board
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="CONSULTANT EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=rpeU47Cjtho&pp=ygUvU2FsZXNmb3JjZSBDZXJ0aWZpZWQgRWR1Y2F0aW9uIENsb3VkIENvbnN1bHRhbnQ%3D"
          >
            Salesforce Certified Education Cloud Consultant
          </Dropdown.Item>

          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=uO11MeGmmWg&pp=ygUwU2FsZXNmb3JjZSBDZXJ0aWZpZWQgRXhwZXJpZW5jZSBDbG91ZCBDb25zdWx0YW50"
          >
            Salesforce Certified Experience Cloud Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=XHN6qwjl_Yk&pp=ygUtU2FsZXNmb3JjZSBDZXJ0aWZpZWQgRmllbGQgU2VydmljZSBDb25zdWx0YW50"
          >
            Salesforce Certified Field Service Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=TLlO1wD1Gps&pp=ygUwU2FsZXNmb3JjZSBDZXJ0aWZpZWQgTm9ucHJvZml0IENsb3VkIENvbnN1bHRhbnRc"
          >
            Salesforce Certified Nonprofit Cloud Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=8765KSEBu2o&pp=ygUqU2FsZXNmb3JjZSBDZXJ0aWZpZWQgT21uaVN0dWRpbyBDb25zdWx0YW50"
          >
            Salesforce Certified OmniStudio Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=PjZJa4KSIL8&pp=ygUsCVNhbGVzZm9yY2UgQ2VydGlmaWVkIFNhbGVzIENsb3VkIENvbnN1bHRhbnQ%3D"
          >
            Salesforce Certified Sales Cloud Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=uB_tXqPsElg&pp=ygUtU2FsZXNmb3JjZSBDZXJ0aWZpZWQgU2VydmljZSBDbG91ZCBDb25zdWx0YW50"
          >
            Salesforce Certified Service Cloud Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=YmKQOpLH9s8&pp=ygVCU2FsZXNmb3JjZSBDZXJ0aWZpZWQgVGFibGVhdSBDUk0gYW5kIEVpbnN0ZWluIERpc2NvdmVyeSBDb25zdWx0YW50"
          >
            Salesforce Certified Tableau CRM and Einstein Discovery Consultant
          </Dropdown.Item>
        </Dropdown>
        <br></br>
        <br></br>
        <br></br>
       
        <Dropdown title="CPQ EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=f2XFMNFAV80"
          >
            Salesforce Certified CPQ Specialist
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="DESIGNER EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=3OaBMsUCibs&pp=ygUtU2FsZXNmb3JjZSBDZXJ0aWZpZWQgdXNlciBFeHBlcmllbmNlIERlc2lnbmVy"
          >
            Salesforce Certified user Experience Designer
          </Dropdown.Item>

          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=loYIuVoJqKE&pp=ygUnU2FsZXNmb3JjZSBDZXJ0aWZpZWQgU3RyYXRlcmd5IERlc2lnbmVy"
          >
            Salesforce Certified Stratergy Designer
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="DEVELOPER EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=C_bhokhPdm4&pp=ygUsIFNhbGVzZm9yY2UgQ2VydGlmaWVkIEIyQyBDb21tZXJjZSBEZXZlbG9wZXI%3D"
          >
            Salesforce Certified B2C Commerce Developer
          </Dropdown.Item>

          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=mbzSr_jQeTQ&pp=ygUtU2FsZXNmb3JjZSBDZXJ0aWZpZWQgSW5kdXN0cmllcyBDUFEgRGV2ZWxvcGVy"
          >
            Salesforce Certified Industries CPQ Developer
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=wfeKN0B8q0Q&pp=ygU8IFNhbGVzZm9yY2UgQ2VydGlmaWVkIEphdmFTY3JpcHQgRGV2ZWxvcGVyIDEtTXVsdGlwbGUgQ2hvaWNl"
          >
            Salesforce Certified JavaScript Developer 1-Multiple Choice
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=UMq-JGtoOz8&pp=ygUpU2FsZXNmb3JjZSBDZXJ0aWZpZWQgT21uaVN0dWRpbyBEZXZlbG9wZXI%3D"
          >
            Salesforce Certified OmniStudio Developer
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=oNjNmhC57kQ&pp=ygUpU2FsZXNmb3JjZSBDZXJ0aWZpZWQgUGxhdGZvcm0gRGV2ZWxvcGVyIDE%3D"
          >
            Salesforce Certified Platform Developer 1
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=UTzVqGRHfEY&pp=ygUpU2FsZXNmb3JjZSBDZXJ0aWZpZWQgUGxhdGZvcm0gRGV2ZWxvcGVyIDI%3D"
          >
            Salesforce Certified Platform Developer 2
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="MARKETING CLOUD EXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=PJ7VpiDSHkA&pp=ygUxU2FsZXNmb3JjZSBDZXJ0aWZpZWQgTWFya2V0aW5nIENsb3VkIEFkbWluc3RyYXRvcg%3D%3D"
          >
            Salesforce Certified Marketing Cloud Adminstrator
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=ELhGqCO9H3c&pp=ygUvU2FsZXNmb3JjZSBDZXJ0aWZpZWQgTWFya2V0aW5nIENsb3VkIGNvbnN1bHRhbnQ%3D"
          >
            Salesforce Certified Marketing Cloud Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=Gzf6CU2xAjI&pp=ygUuU2FsZXNmb3JjZSBDZXJ0aWZpZWQgTWFya2V0aW5nIENsb3VkIERldmVsb3Blcg%3D%3D"
          >
            Salesforce Certified Marketing Cloud Developer
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=8jExJWWXvS0&pp=ygU2IFNhbGVzZm9yY2UgQ2VydGlmaWVkIE1hcmtldGluZyBDbG91ZCBFbWFpbCBTcGVjaWFsaXN0"
          >
            Salesforce Certified Marketing Cloud Email Specialist
          </Dropdown.Item>
        </Dropdown>
        &nbsp; &nbsp; &nbsp;
        <Dropdown title="PARDOTEXAMS" style={{ color: "violet" }}>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=BzIHlWyhsdA&pp=ygUmU2FsZXNmb3JjZSBDZXJ0aWZpZWQgUGFyZG90IENvbnN1bHRhbnQ%3D"
          >
            Salesforce Certified Pardot Consultant
          </Dropdown.Item>
          <Dropdown.Item
            as="a"
            href="https://www.youtube.com/watch?v=OryUflT8UK0&pp=ygUmU2FsZXNmb3JjZSBDZXJ0aWZpZWQgUGFyZG90IFNwZWNpYWxpc3Q%3D"
          >
            Salesforce Certified Pardot Specialist
          </Dropdown.Item>
        </Dropdown>
      </div >

      <img
        src={certiimg}
        alt="certimg"
        class="center"

        style={{ alignSelf: "center", width: "600px", height: "300px" }}
      />
      </div>
      {/* <button className="back-button" onClick={handleBack}>{"<"}</button> */}
      <h1>Videos</h1>
      <p>content goes here</p>
    </div>
  );
};

export default videos;