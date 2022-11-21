import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://mbxgjvzzghyfodggatmw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1ieGdqdnp6Z2h5Zm9kZ2dhdG13Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDg5NzQzNTksImV4cCI6MTk2NDU1MDM1OX0.y_AQjNlWOndHtSGOK5gyY00kWmaqvNQg0d3kTuempX4',
);
