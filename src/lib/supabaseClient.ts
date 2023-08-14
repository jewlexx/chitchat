import { createClient } from '@supabase/supabase-js';
import { writable, type Unsubscriber, type Writable } from 'svelte/store';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

if (PUBLIC_SUPABASE_URL === undefined || PUBLIC_SUPABASE_ANON_KEY === undefined) {
  throw new Error('Missing Supabase url or key');
}

interface SvelteStorageKeys {
  [key: string]: string | null;
}

class SvelteStorage {
  svelteWritable: Writable<SvelteStorageKeys>;

  writableValue: SvelteStorageKeys;

  unsubscriber: Unsubscriber;

  constructor() {
    this.svelteWritable = writable({});
    this.writableValue = {};

    this.getItem = this.getItem.bind(this);
    this.setItem = this.setItem.bind(this);
    this.removeItem = this.removeItem.bind(this);

    this.unsubscriber = this.svelteWritable.subscribe(this.subscriber.bind(this));
  }

  private subscriber(updatedValue: SvelteStorageKeys) {
    this.writableValue = updatedValue;
  }

  getItem(key: string): string | null {
    return this.writableValue[key];
  }

  setItem(key: string, value: string): void {
    const updated = this.writableValue;

    updated[key] = value;

    this.svelteWritable.set(updated);
  }

  removeItem(key: string): void {
    const updated = this.writableValue;

    delete updated[key];

    this.svelteWritable.set(updated);
  }
}

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
  db: {
    schema: 'public',
  },
  auth: {
    persistSession: true,
    storage: new SvelteStorage(),
  },
});
