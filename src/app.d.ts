import type { SupabaseClient } from '@supabase/supabase-js';
import type { GenericSchema } from '@supabase/supabase-js/dist/module/lib/types';

type Database = any;
type SchemaName = {} extends string & 'public' & keyof Database ? 'public' : string & keyof Database;
type Schema = {} & GenericSchema;

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: SupabaseClient<Database, SchemaName, Schema>,
			getSession: () => Promise<any>

		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
