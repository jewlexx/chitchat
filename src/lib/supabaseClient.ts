
import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';

export const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')