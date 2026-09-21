import 'dotenv/config';
import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.DATABASE_URL ?? 'postgres://placeholder:placeholder@localhost:5432/placeholder';

// 读取环境变量中的连接串
const sql = neon(connectionString);
export const db = drizzle(sql,{schema});

