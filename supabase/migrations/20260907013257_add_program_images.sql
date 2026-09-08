-- Official program artwork is served from the app's public assets.
update public.programs
set image = '/resources/programs/claude-corps.png'
where title = 'CodePath Claude Corps'
  and opportunity_type = 'program';

update public.programs
set image = '/resources/programs/dow-smart.png'
where title = 'DoW SMART Scholarship-for-Service'
  and opportunity_type = 'program';
