const jsonData = {
    "project": {
      "title": "Project",
      "location": "City ABC",
      "status": "In Progress",
      "supervisor": "John Doe",
      "auditors": ["Auditor1", "Auditor2"],
      "fieldTechnicians": ["Technician1", "Technician2"]
    },
    "fraud":'none',
    "geo":'passed',
    "abnormal":'nill',
    "stages": [
      {
        "stageNumber": 1,
        "date": "5/7/12",
        "workDoneTillNow": "Oeoewofjowejoiwejcowecjwd",
        "projectedExtraCost": 689,
        "totalActualCost": 340,
        "cumulativeActualPrice": 56789,
        "costDistribution": {
          "materials": [
            {
              "materialName": "Material1",
              "pricePerUnitVolume": 10,
              "actualVolumeUsed": 20,
              "actualCost": 200,
              "estimatedCost": 150
            },
            {
              "materialName": "Material2",
              "pricePerUnitVolume": 5,
              "actualVolumeUsed": 15,
              "actualCost": 75,
              "estimatedCost": 60
            }
          ],
          "manPower": {
            "numberOfPeople": 13,
            "costPerPerson": 3000
          }
        },
        "changeInValue": {
          "physicalQuantity": "Some Quantity",
          "change": "Positive",
        }
      },
      {
        "stageNumber": 2,
        "date": "6/1/12",
        "workDoneTillNow": "Another update for the project",
        "projectedExtraCost": 500,
        "totalActualCost": 400,
        "cumulativeActualPrice": 60000,
        "costDistribution": {
          "materials": [
            {
              "materialName": "Material3",
              "pricePerUnitVolume": 15,
              "actualVolumeUsed": 25,
              "actualCost": 375,
              "estimatedCost": 300
            },
            {
              "materialName": "Material4",
              "pricePerUnitVolume": 8,
              "actualVolumeUsed": 18,
              "actualCost": 144,
              "estimatedCost": 120
            }
          ],
          "manPower": {
            "numberOfPeople": 15,
            "costPerPerson": 3500
          }
        },
        "changeInValue": {
          "physicalQuantity": "Increased Quantity",
          "change": "Positive",
        }
      },
      {
        "stageNumber": 3,
        "date": "6/15/12",
        "workDoneTillNow": "Final stage of the project",
        "projectedExtraCost": 300,
        "totalActualCost": 250,
        "cumulativeActualPrice": 70000,
        "costDistribution": {
          "materials": [
            {
              "materialName": "Material5",
              "pricePerUnitVolume": 20,
              "actualVolumeUsed": 30,
              "actualCost": 600,
              "estimatedCost": 500
            },
            {
              "materialName": "Material6",
              "pricePerUnitVolume": 12,
              "actualVolumeUsed": 22,
              "actualCost": 264,
              "estimatedCost": 220
            }
          ],
          "manPower": {
            "numberOfPeople": 12,
            "costPerPerson": 3200
          }
        },
        "changeInValue": {
          "physicalQuantity": "Final Quantity",
          "change": "Positive",
        }
      }
    ]
  }

  export default jsonData;
  