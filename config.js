const config = {};

config.host = process.env.HOST || "https://democosmosdbuser.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY || "4mKavXFw4sKWlbGEO3d0xy8oyR5GzdWYI0aHyxiwK5in8P5a36Xbayc6Ajx96aN0Fy1cFzaMnY0P9lAI6OgvUw==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;