import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ozjecnhwnlffguynjpil.supabase.co";
const supabaseApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96amVjbmh3bmxmZmd1eW5qcGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MDI0MTUsImV4cCI6MjAwMzk3ODQxNX0.NhI2hvUWzUmnPQriOT2GuG0fHIEP8iTkqYmpgbe-dMA";
const supabase = createClient(supabaseUrl, supabaseApiKey);

export default supabase;
