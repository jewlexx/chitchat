import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('messages').select("*");
  console.log(data);

  return {
    messages: data ?? [],
  };
}