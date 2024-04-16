

import { createClient } from "@supabase/supabase-js"
const supabaseUrl = 'https://xdpaisyhdxkjdmehnmzp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkcGFpc3loZHhramRtZWhubXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODI1NDksImV4cCI6MjAyODg1ODU0OX0.gPrKKCVuhLOv-BsbmiyBLSml5DJrx8V5BFo603wgAp0'

export const supabase = createClient(supabaseUrl, supabaseKey)

