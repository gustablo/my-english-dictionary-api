import 'dotenv/config';
import './config/aliases';

import { app } from '@/main/config/app';

const PORT = process.env.PORT || 3333;

app.listen(PORT || 3333, () => console.log(`Server running at port ${PORT}`));
