const fs = require('fs').promises; 

async function activityTable(day) {
  try {
  
    let logFileList = await fs.readFile("C:\\Users\\Vaishali Thota\\OneDrive\\Desktop\\FSD\\camera_logs.txt", "utf-8");
    console.log("Contents of camera_logs.txt:", logFileList); 
    
    let logFiles = logFileList.split("\n").map(file => file.trim()).filter(Boolean);
 
    console.log("Log files array:", logFiles); 

    if (logFiles.length === 0) {
      console.log("No log files found.");
      return new Array(24).fill(0); }
    let hourCounts = new Array(24).fill(0); 


    for (let logFile of logFiles) {
      console.log(`Reading file: ${logFile}`);
      let logData = await fs.readFile(logFile, "utf-8");
      console.log(`Contents of ${logFile}:`, logData); 
      
      let timestamps = logData.split("\n").map(ts => ts.trim()).filter(Boolean);

      console.log("Timestamps:", timestamps); 

      
      for (let timestamp of timestamps) {
        let date = new Date(Number(timestamp));
        if (date.getDay() === day) {
          let hour = date.getHours();
          hourCounts[hour]++;
        }
      }
    }

    console.log("Hour counts:", hourCounts); 
    return hourCounts;

  } catch (error) {
    console.error("Error reading files:", error);
    return new Array(24).fill(0); 
  }
}


activityTable(1) 
  .then(table => console.log(table));
