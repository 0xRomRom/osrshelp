import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdktrgusrdusrpuerhyd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdka3RyZ3VzcmR1c3JwdWVyaHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyMTk1OTMsImV4cCI6MjAxODc5NTU5M30.kmUQ8RsqXdaIqch-xz-wP81TmNqaDrjPc6v1M-I7F1w";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
