# Backend - Serverless Functions

This directory contains serverless edge functions that handle backend logic.

## Structure

```
supabase/
├── functions/                    # Edge Functions
│   └── [function-name]/          # Each function in its own directory
│       └── index.ts              # Function entry point
│
├── config.toml                   # Supabase project configuration
└── README.md                     # This file
```

## Creating a New Function

1. Create a new directory under `functions/`:
   ```
   supabase/functions/my-function/index.ts
   ```

2. Basic function template:
   ```typescript
   import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

   const corsHeaders = {
     "Access-Control-Allow-Origin": "*",
     "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
   };

   serve(async (req) => {
     // Handle CORS preflight
     if (req.method === "OPTIONS") {
       return new Response(null, { headers: corsHeaders });
     }

     try {
       const { data } = await req.json();
       
       // Your logic here
       
       return new Response(
         JSON.stringify({ success: true, data }),
         { headers: { ...corsHeaders, "Content-Type": "application/json" } }
       );
     } catch (error) {
       return new Response(
         JSON.stringify({ error: error.message }),
         { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
       );
     }
   });
   ```

## AWS Migration Notes

### Converting to AWS Lambda

Each function can be converted to an AWS Lambda handler:

**Current (Deno/Supabase):**
```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(async (req) => {
  const body = await req.json();
  return new Response(JSON.stringify({ result }));
});
```

**AWS Lambda (Node.js):**
```typescript
export const handler = async (event) => {
  const body = JSON.parse(event.body);
  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ result }),
  };
};
```

### API Gateway Configuration

1. Create REST API or HTTP API in API Gateway
2. Create routes matching your function paths
3. Integrate with Lambda functions
4. Enable CORS

### Environment Variables

Move secrets from Supabase to AWS Secrets Manager or Lambda environment variables.

## Calling Functions from Frontend

```typescript
// Current (Supabase)
import { supabase } from "@/integrations/supabase/client";

const { data, error } = await supabase.functions.invoke("function-name", {
  body: { param: "value" },
});

// Future (AWS)
const response = await fetch(`${API_URL}/function-name`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ param: "value" }),
});
const data = await response.json();
```
