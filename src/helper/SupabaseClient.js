import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://pjqnvfspgasacxobwvrc.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqcW52ZnNwZ2FzYWN4b2J3dnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMjc5NzUsImV4cCI6MjA2MzYwMzk3NX0.rGJ0I39RR7Nrn0paYLJCL5qZNrTxXZp9FGCFwdzqX7Y"

const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;


