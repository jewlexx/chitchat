
import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/public';

const { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY } = env;

if (PUBLIC_SUPABASE_URL === undefined || PUBLIC_SUPABASE_ANONKEY === undefined) {
    throw new Error("Missing Supabase url or key");
}

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANONKEY)