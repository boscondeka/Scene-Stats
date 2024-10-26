import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div className="bg-blue-900 min-h-screen text-white">
     
      <div className="flex justify-center p-3">
        <Header />
      </div>

      
      <div className="flex flex-col lg:flex-row">
       
       <div className="w-full lg:w-[40%] overflow-y-auto max-h-[500px] px-4 lg:pl-12 py-10 text-justify">
  <h2 className="text-3xl font-bold mb-6">Content</h2>

  <h3 className="text-xl font-semibold mb-4">Background</h3>
  <p className="mb-6">
    vhksjvhkjfdvbfkjbvkfjbvkdfjbvkdfjbvkfjdbkdjfbkdjfbkdfjbdkjfbkdfj
  </p>
  <p className="mb-6">
    In order to achieve a more regular and standardized monitoring of
    shocks at a district level, the Shocks Monitoring Index (SMI) was
    developed by REACH in collaboration with WFP and the Assessment and
    Analysis Working Group. The SMI aims to monitor shocks on a monthly
    basis, to improve the humanitarian community’s ability to timely
    identify districts at risk of a deteriorating humanitarian
    situation.
  </p>

  <h3 className="text-xl font-semibold mb-4">Kisumu</h3>
  <p>
    For each shock pillar relevant to the Afghanistan context, available
    data sources from assessments, monitoring systems, and remote
    sensing analysis are consolidated and analyzed each month. Shock
    thresholds are set accordingly based on consultations with technical
    experts, on a scale from 1 (No to minimal severity shock) to 4 (Very
    high severity shock). If these thresholds are surpassed in any
    indicator, a corresponding severity shock is considered to have
    occurred in the corresponding shock pillar.
  </p>
</div>
       
        <div className="w-full lg:w-[60%] px-6 py-10">
          <h3 className="text-xl font-semibold mb-4">
            Total count of shocks with a severity above moderate (2) on a scale
            of 1 to 4, where 4 represents the highest severity level.
          </h3>

{/* Filters */}
<div className="mt-8 mb-5 flex justify-between space-x-4">
            <div className="w-1/2">
              <label className="block text-white mb-2">
                Filter by County
              </label>
              <select className="w-full p-2 bg-blue-800 text-white rounded-lg">
                <option>All</option>
                <option>Kisumu</option>
                <option>Nakuru</option>
                <option>Makueni</option>
                
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-white mb-2">
                Filter by Target Group
              </label>
              <select className="w-full p-2 bg-blue-800 text-white rounded-lg">
                <option>All</option>
                <option>TG 1</option>
                <option>TG 2</option>
                
              </select>
            </div>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg text-blue-900">
            
            <p className="text-center">[Map Container]</p>
          </div>

          
        </div>
      </div>

     
      
    </div>
  );
}

export default Home;
