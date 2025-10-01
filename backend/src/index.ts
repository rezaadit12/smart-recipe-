import "dotenv/config";
import app from "./servers/index.js";

const PORT = process.env.PORT || 3000;
const APP_URL = process.env.APP_URL || 'http://localhost';
app.listen(PORT, () => console.log(`backend running on ${APP_URL}:${PORT}`));
