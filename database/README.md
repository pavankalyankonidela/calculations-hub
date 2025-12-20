# Database - Schema & Migrations

This directory contains database schema documentation and migration files.

## Current Setup

The application uses PostgreSQL via Lovable Cloud (Supabase infrastructure).

## Schema Overview

### Authentication (Built-in)

Supabase Auth handles user authentication automatically:
- `auth.users` - User accounts (managed by Supabase)
- Sessions, tokens, and OAuth handled internally

### Application Tables

Currently, the application does not have custom tables. When tables are added:

```
database/
├── migrations/                   # SQL migration files
│   ├── 001_create_profiles.sql
│   ├── 002_create_calculations.sql
│   └── ...
│
├── schema/                       # Current schema documentation
│   ├── tables.sql               # Table definitions
│   ├── policies.sql             # RLS policies
│   └── functions.sql            # Database functions
│
├── seeds/                        # Seed data for development
│   └── development.sql
│
└── README.md                     # This file
```

## Migration File Template

```sql
-- Migration: 001_create_profiles
-- Description: Create user profiles table
-- Created: YYYY-MM-DD

-- Up Migration
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

-- Indexes
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);

-- Trigger for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
```

## AWS Migration Notes

### Migrating to RDS/Aurora PostgreSQL

1. **Export Current Schema:**
   - Use Lovable's database export or connect via psql
   - Export schema: `pg_dump --schema-only`

2. **Create RDS Instance:**
   - Choose PostgreSQL version matching current (14+)
   - Configure VPC, security groups, parameter groups

3. **Apply Migrations:**
   ```bash
   psql -h your-rds-endpoint -U postgres -d database -f migrations/*.sql
   ```

4. **Update Connection Strings:**
   - Lambda functions: Use AWS Secrets Manager
   - Environment variable: `DATABASE_URL`

### Connection Example

**Current (Supabase Client):**
```typescript
import { supabase } from "@/integrations/supabase/client";

const { data } = await supabase
  .from("profiles")
  .select("*")
  .eq("user_id", userId);
```

**AWS (Direct PostgreSQL via Lambda):**
```typescript
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const result = await pool.query(
  "SELECT * FROM profiles WHERE user_id = $1",
  [userId]
);
```

### Security Considerations

1. **RLS Equivalent:** Implement row-level security in application layer or use PostgreSQL RLS
2. **Connection Pooling:** Use RDS Proxy or PgBouncer for Lambda connections
3. **Encryption:** Enable encryption at rest and in transit
4. **Backup:** Configure automated backups and point-in-time recovery

## Database Types

TypeScript types are auto-generated in `src/integrations/supabase/types.ts`.

For AWS migration, consider using tools like:
- [Prisma](https://www.prisma.io/) - Type-safe ORM with migrations
- [Kysely](https://kysely.dev/) - Type-safe SQL query builder
- [Drizzle](https://drizzle.team/) - Lightweight TypeScript ORM
