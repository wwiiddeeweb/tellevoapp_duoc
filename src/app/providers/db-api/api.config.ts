import { HttpHeaders } from '@angular/common/http';

export const supabaseHeaders = new HttpHeaders()
  .set(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzY3Ric2p1a3RpbW51enRmbGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0NTEyODcsImV4cCI6MjAwOTAyNzI4N30.miJsHbLQo8wtRnywsE8cFYJuY9D9wjyMkqn7PmJJoUg'
  )
  .set(
    'apikey',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzY3Ric2p1a3RpbW51enRmbGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM0NTEyODcsImV4cCI6MjAwOTAyNzI4N30.miJsHbLQo8wtRnywsE8cFYJuY9D9wjyMkqn7PmJJoUg0'
  );
