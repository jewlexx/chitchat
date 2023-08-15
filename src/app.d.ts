import type { SupabaseClient, Session } from '@supabase/supabase-js';
import type { Database } from './database.types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
    }
    interface PageData  {
      supabase: SupabaseClient<Database>;
      session: Session | null;
    }
    // interface Platform {}
  }
}

export {};
