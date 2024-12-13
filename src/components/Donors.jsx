import React, { useState } from "react";
import "./Donors.css"; // Add your custom CSS if needed

const donorsData = [
    { name: "PATHIK RAMESH JUTHANI", amount: 10000 },
    { name: "RAHUL V JAIN", amount: 5000 },
    { name: "SANDEEP GUPTA", amount: 5000 },
    { name: "HITESH KANUBHAI PAGHADAL", amount: 21000 },
    { name: "YOGESH SURESH AROTE", amount: 5000 },
    { name: "CHETAN SAILESH MEHTA", amount: 2000 },
    { name: "RAJESH CONTRO TRADING COMPANY PVT. LTD", amount: 11000 },
    { name: "KADAVAKUTI SWARNA", amount: 10000 },
    { name: "RAMESHBHAI NARSINHBHAI CHAUDHARY", amount: 2500 },
    { name: "ATISH CHAKRABORTY", amount: 1000 },
    { name: "Mr. RUDRANATH BHATTACHARYA", amount: 1000 },
    { name: "JATIN SAHGAL", amount: 1500 },
    { name: "SHIBAJI DEY", amount: 500 },
    { name: "SHUBHAM RAISONI", amount: 2100 },
    { name: "JAY DELIWALA", amount: 8250 },
    { name: "DEVANG VORA", amount: 5000 },
    { name: "DIVYANSH SONI", amount: 2000 },
    { name: "KSHITISH KUMAR JANA", amount: 2000 },
    { name: "INDU SINGH", amount: 2000 },
    { name: "PUSHYAMITHRA SANTHANAM", amount: 5500 },
    { name: "SHRINIVAS DAKAPPAGARI", amount: 2000 },
    { name: "OMBIR SINGH(OM TEMPO SERVICE)", amount: 3000 },
    { name: "TANMAY PRABHUTENDOLKAR", amount: 2000 },
    { name: "D. V. RAJESHWARI DEVI", amount: 2000 },
    { name: "SUNNAM PADMA", amount: 2000 },
    { name: "Mr. SANJAY KUMAR SAXENA", amount: 2000 },
    { name: "PUSHPA", amount: 3000 },
    { name: "SHUBHASHEESH BAGCHI", amount: 4000 },
    { name: "REVTISUDHAKAR FUNDE", amount: 2100 },
    { name: "RAGHAV METALS TRADE PVT. LTD.", amount: 5000 },
    { name: "MAKARAND M PANDIT", amount: 2000 },
    { name: "SRI JAY DURGA NUTRI SOYA FOOD PRODUCTS", amount: 2000 },
    { name: "DVN ARUN KUMAR", amount: 2000 },
    { name: "DANNANA JANKI RAMANA", amount: 2000 },
    { name: "ANIL BHATT", amount: 2100 },
    { name: "ANJALI SHARAN", amount: 5000 },
    { name: "HARJINDER KAUR", amount: 6000 },
    { name: "YADUVANSHI ENTERPRISES", amount: 2000 },
    { name: "GEETA PODDAR", amount: 3000 },
    { name: "ASHOK SHIVHARE", amount: 2000 },
    { name: "RAJKUMAR BODWANE", amount: 2000 },
    { name: "MOHAMMAD ARSHAD", amount: 2000 },
    { name: "TADEPALLI RAMAKRISHNA", amount: 2100 },
    { name: "CHARULATA MHATRE", amount: 5000 },
    { name: "TAPAN SAMANTA", amount: 3000 },
    { name: "HENRY KASHYAP", amount: 3000 },
    { name: "USHA DEVI", amount: 3000 },
    { name: "ARJUN RAJU P", amount: 2000 },
    { name: "AMIT VERMA", amount: 2000 },
    { name: "MALEPATI NIRANJANA BABU", amount: 2000 },
    { name: "AMRITA TONK", amount: 2000 },
    { name: "VIKAS KSHIRSAGAR", amount: 2000 },
    { name: "ENTERMONDE POLYCOATEN LIMITED", amount: 12000 },
    { name: "ASHISH PATEL", amount: 5000 },
    { name: "KEYUR PATEL", amount: 2000 },
    { name: "PATEL VINUBHAI GORDHANBHAI", amount: 2000 },
    { name: "NILAM R PATEL", amount: 2000 },
    { name: "SUNEET KUMAR AWASTHI", amount: 2000 },
    { name: "NAGHMA ALTAF", amount: 2000 },
    { name: "PANKIT ALPESHKUMAR DESAI", amount: 2000 },
    { name: "SIDHRAJ SINGH", amount: 2000 },
    { name: "PRANAV", amount: 3000 },
    { name: "ANEES CASIM", amount: 3000 },
    { name: "SITARAMARAJU VUNDAMATLA", amount: 2000 },
    { name: "SATTI RAMA GANGA REDDY", amount: 2000 },
    { name: "AKASH H", amount: 2000 },
    { name: "NITHESH N", amount: 2000 },
    { name: "LAKSHMI PATIL", amount: 2000 },
    { name: "POOJA BL", amount: 3000 },
    { name: "GYAN PRAKASH", amount: 3001 },
    { name: "ADITYA PAWASKAR", amount: 5000 },
    { name: "SRINIVASAN VISHWAS", amount: 2000 },
    { name: "ANJANA BALAJI", amount: 2000 },
    { name: "NOOTHI VENKATESHAM", amount: 3000 },
    { name: "PRITHVIRAJ SARJERAO CHAVAN", amount: 10000 },
    { name: "RANDEEP KHARYAL", amount: 5000 },
    { name: "GONDU SREENIVASA RAO", amount: 2000 },
    { name: "SAJIDA SHAHNUM", amount: 3000 },
    { name: "AJAYKUMAR KALLAI", amount: 2000 },
    { name: "PRAKASH KADTAN", amount: 5000 },
    { name: "SNEHALATHA KANAKAGIRI", amount: 5000 },
    { name: "SRISTY RUNGATA", amount: 2000 },
    { name: "SAI TULASA D", amount: 3000 },
    { name: "NANDAMURI SOMASHEKAR RAO", amount: 5000 },
    { name: "ARYAN RAJPARA", amount: 3000 },
    { name: "ANSHU JAIN", amount: 3000 },
    { name: "NIKITA SAINI", amount: 2000 },
    { name: "ADITYA JAYASWAL", amount: 2000 },
    { name: "DR. NEELAM SHUKLA", amount: 2000 },
    { name: "JAYANTIBHAI SAVALIA", amount: 2000 },
    { name: "THANTLA CHINNAPAREDDY", amount: 2000 },
    { name: "ANNIE SHIBU", amount: 2000 },
    { name: "N SUBBAIH NAIDU", amount: 2000 },
    { name: "MALLIKARJUNA. M.", amount: 2000 },
    { name: "MICHEL ANDRADE", amount: 5000 },
    { name: "ASWIN UDAY BHATKAL", amount: 2000 },
    { name: "PRAKASH DEOCHAND WANKAR", amount: 3000 },
    { name: "SHUBHASHEESH BAGCHI", amount: 2000 },
    { name: "GURMEET SINGH", amount: 2000 },
    { name: "VANDANA AGARWAL", amount: 1000 },
    { name: "PARAMITA SARKAR", amount: 2000 },
    { name: "SUJATHA SIVASANKAR", amount: 5005 },
    { name: "AKSHAY MOURIA", amount: 2001 },
    { name: "PRASHANT KUTRE", amount: 2000 },
    { name: "ABBAS MURTAZA KARACHIWALA", amount: 2100 },
    { name: "VAIBHAV VERMA", amount: 5000 },
    { name: "HIMANSHU SAXENA", amount: 2000 }
  ];
  

const Donors = () => {
  const [visibleDonors, setVisibleDonors] = useState(10); // Show only 10 donors initially

  const handleSeeMore = () => {
    setVisibleDonors(visibleDonors + 10); // Load 10 more donors each time
  };

  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="mb-4 display-5 fw-bold text-warning">Meet Our Donors</h1>
        <p className="lead">
          <em>"Every contribution brings us closer to our goals"</em>
        </p>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover shadow-sm">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Amount Donated (₹)</th>
            </tr>
          </thead>
          <tbody>
            {donorsData.slice(0, visibleDonors).map((donor, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{donor.name}</td>
                <td>{donor.amount.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visibleDonors < donorsData.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-warning btn-lg"
            onClick={handleSeeMore}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Donors;
