# Database Schema

This directory contains documentation for the current database schema.

## Current Tables

### Auth Tables (Managed by Supabase)
- `auth.users` - User authentication records
- `auth.sessions` - Active user sessions
- `auth.refresh_tokens` - Token management

### Application Tables

*No custom tables created yet.*

## Adding New Tables

When adding new tables, document them here:

```sql
-- Example: profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```
