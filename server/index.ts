import app from "./src/server";
import { PORT } from "./src/config/envs";

app.listen(PORT, () => console.log(`server running on port: ${PORT}`));
