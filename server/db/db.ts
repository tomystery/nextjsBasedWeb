import 'dotenv/config';
import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

// 读取环境变量中的连接串
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql,{schema});

