/* global google */
import React, { useEffect } from 'react';

const IndiaMap = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/jsapi';
    script.async = true;
    script.onload = () => {
      google.load('visualization', '1', { packages: ['geochart'] });
      google.setOnLoadCallback(drawVisualization);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State', 'Projects'],     
        [ 'IN-UP','Uttar Pradesh', 30],
  ['IN-MH','Maharashtra', 20],
  ['IN-BR','Bihar', 10],
  ['IN-WB','West Bengal', 20],
  ['IN-MP','Madhya Pradesh', 70],
  ['IN-TN','Tamil Nadu', 50],
  ['IN-RJ','Rajasthan', 30],
  ['IN-KA','Karnataka', 12],
  ['IN-GJ','Gujarat', 13],
  ['IN-AP','Andhra Pradesh', 32],
  ['IN-OR','Orissa', 13],
  ['IN-TG','Telangana', 23],
  ['IN-KL','Kerala', 31],
  ['IN-JH','Jharkhand', 29],
  ['IN-AS','Assam', 28],
  ['IN-PB','Punjab', 30],
  ['IN-CT','Chhattisgarh', 30],
  ['IN-HR','Haryana', 30],
  ['IN-JK','Jammu and Kashmir', 20],
  ['IN-UT','Uttarakhand', 28],
  ['IN-HP','Himachal Pradesh', 10],
  ['IN-TR','Tripura', 31],
  ['IN-ML','Meghalaya', 20],
  ['IN-MN','Manipur', 22],
  ['IN-NL','Nagaland', 21],
  ['IN-GA','Goa', 11],
  ['IN-AR', 'Arunachal Pradesh', 33],
  ['IN-MZ','Mizoram', 42],
  ['IN-SK','Sikkim', 23],
  ['IN-DL','Delhi', 21],
  ['IN-PY','Puducherry', 23],
  ['IN-CH','Chandigarh', 20],
  ['IN-AN','Andaman and Nicobar Islands',20],
  ['IN-DN','Dadra and Nagar Haveli', 20],
  ['IN-DD','Daman and Diu', 29],
  ['IN-LD','Lakshadweep', 21]
    ]);

    var options = {
      region: 'IN',
      domain: 'IN',
      displayMode: 'regions',
      colorAxis: { colors: ['#7C93C3', '#9EB8D9', '#EEF5FF'] },
      resolution: 'provinces',
      backgroundColor: '#81d4fa',
      defaultColor: '#f5f5f5',
      width: 940,
      height: 680,
    };

    var geochart = new google.visualization.GeoChart(
      document.getElementById('visualization')
    );
    geochart.draw(data, options);
  }

  return (
    <div>
      <main id="main">
        <div align="center">
          <div id="visualization"></div>
        </div>
      </main>
    </div>
  );
};

export default IndiaMap;
