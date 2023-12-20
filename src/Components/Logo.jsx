import React, { useEffect } from "react";

import "./Logo.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const Logo = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        'CONSTRUCTION',
                'PROGRESS',
                'FRAUD DETECTION',
                'REPORT',
                '3D MODEL',
                'AR',
                'VR',
                'MESH',
                'LAND',
                'SIH',
                'HACKATHON',
                'BHARAT',
      ];

      const options = {
        radius: 300,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
    <h1 className="mb-4 heading">Welcome to I3D-WAS</h1>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Logo;