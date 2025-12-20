# Database Migrations

This directory will contain SQL migration files for database schema changes.

## Migration Naming Convention

```
XXX_description.sql
```

Where `XXX` is a sequential number (001, 002, etc.) and `description` describes the change.

## Example Migrations

When you add database features, create migration files here:

- `001_create_profiles.sql` - User profiles table
- `002_create_saved_calculations.sql` - Saved calculations table
- `003_add_calculation_history.sql` - Calculation history feature

## Notes

Migrations are applied through Lovable's migration tool or directly via Supabase dashboard.
