// Supabase configuration for the visitor globe.
// This is the PUBLISHABLE (anon) key — it is meant to be public. Row-Level
// Security on the `visitors` table restricts it to inserting and reading visits.
const SUPABASE_CONFIG = {
    url: 'https://cjvlmdyohqfgaizuclui.supabase.co',
    anonKey: 'sb_publishable_bfY31Jp8H1MhOEpwtzNQWg_GBnEhAIS',
    tableName: 'visitors'
};
