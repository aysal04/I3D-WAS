import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import jsonData from '../assets/data/rData.js';

const Report = () => {
  const pdfContainerRef = useRef();

  const handleDownloadPDF = async () => {
    const input = pdfContainerRef.current;

    const options = {
      margin: 10,
      filename: 'report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    try {
      const pdfBlob = await html2pdf(input, options);
      const blobUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'report.pdf';
      link.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const generateHtmlContent = () => {
    return (
        <div style={{ padding: '5rem', pageBreakInside: 'avoid' }}>
        <h1 style={{ textAlign: 'center',paddingBottom: '15px', marginBottom: '10px',borderBottom: '2px solid #333' }}>{jsonData.project.title} Report</h1>

        <div>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px' }}>Project Information</h2>
          <table style={{ width: '100%', marginTop: '10px' }}>
            <tbody>
              <tr>
                <td><strong>Title:</strong></td>
                <td>{jsonData.project.title}</td>
              </tr>
              <tr>
                <td><strong>Location:</strong></td>
                <td>{jsonData.project.location}</td>
              </tr>
              <tr>
                <td><strong>Status:</strong></td>
                <td>{jsonData.project.status}</td>
              </tr>
              <tr>
                <td><strong>Supervisor:</strong></td>
                <td>{jsonData.project.supervisor}</td>
              </tr>
              <tr>
                <td><strong>Auditors:</strong></td>
                <td>{jsonData.project.auditors.join(', ')}</td>
              </tr>
              <tr>
                <td><strong>Field Technicians:</strong></td>
                <td>{jsonData.project.fieldTechnicians.join(', ')}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '20px',borderTop: '2px solid #333', paddingBottom: '5px' }}>
          <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '5px' }}>Cummulative Analysis</h2>
            <p><strong>Fraud Detected:</strong>  {jsonData.fraud}</p>
            <p><strong>Geo Tagging:</strong> {jsonData.geo}</p>
            <p><strong>Abnormalities:</strong> {jsonData.abnormal}</p>
          {jsonData.stages.map((stage, index) => (
            <div key={index} style={{ marginTop: '20px',pageBreakInside: 'avoid' }}>
              <h4 style={{paddingBottom: '5px', borderBottom:'2px solid #333' }}>Stage {stage.stageNumber}</h4>

              <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '20%' }}><strong>Date:</strong></td>
                    <td>{stage.date}</td>
                  </tr>
                  <tr>
                    <td><strong>Work Done Till Now:</strong></td>
                    <td>{stage.workDoneTillNow}</td>
                  </tr>
                  <tr>
                    <td><strong>Projected Extra Cost:</strong></td>
                    <td>{stage.projectedExtraCost}</td>
                  </tr>
                  <tr>
                    <td><strong>Total Actual Cost:</strong></td>
                    <td>{stage.totalActualCost}</td>
                  </tr>
                  <tr>
                    <td><strong>Cumulative Actual Price:</strong></td>
                    <td>{stage.cumulativeActualPrice}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginTop: '10px' }}>
                <h5 style={{paddingBottom: '5px' }}>Cost Distribution of Materials</h5>
                <table style={{ width: '100%', marginTop: '10px', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th>Material Name</th>
                      <th>Price Per Unit Volume</th>
                      <th>Actual Volume Used</th>
                      <th>Actual Cost</th>
                      <th>Estimated Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stage.costDistribution.materials.map((material, materialIndex) => (
                      <tr key={materialIndex}>
                        <td>{material.materialName}</td>
                        <td>{material.pricePerUnitVolume}</td>
                        <td>{material.actualVolumeUsed}</td>
                        <td>{material.actualCost}</td>
                        <td>{material.estimatedCost}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ marginTop: '10px' }}>
                  <h5>ManPower</h5>
                  <table style={{ width: '50%', marginTop: '10px', borderCollapse: 'collapse' }}>
                    <tbody>
                      <tr>
                        <td><strong>Number of People:</strong></td>
                        <td>{stage.costDistribution.manPower.numberOfPeople}</td>
                      </tr>
                      <tr>
                        <td><strong>Cost per Person:</strong></td>
                        <td>{stage.costDistribution.manPower.costPerPerson}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ marginTop: '10px',  paddingBottom:'15px' }}>
                <h5 style={{paddingBottom: '5px' }}>Change In Value</h5>
                <table style={{ width: '50%', marginTop: '10px', borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td><strong>Physical Quantity:</strong></td>
                      <td>{stage.changeInValue.physicalQuantity}</td>
                    </tr>
                    <tr>
                      <td><strong>Change:</strong></td>
                      <td>{stage.changeInValue.change}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleDownloadPDF} style={{ margin: '20px' }}>
        Download PDF
      </button>
      <div ref={pdfContainerRef}>{generateHtmlContent()}</div>
    </div>
  );
};

export default Report;
