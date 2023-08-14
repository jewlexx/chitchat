
import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

if (PUBLIC_SUPABASE_URL === undefined || PUBLIC_SUPABASE_ANON_KEY === undefined) {
    throw new Error("Missing Supabase url or key");
}

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)