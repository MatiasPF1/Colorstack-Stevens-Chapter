-- Add explicit opportunity classification and campus imagery for hackathon cards.
-- Idempotent: safe to run more than once.

alter table public.programs
  add column if not exists opportunity_type text not null default 'program',
  add column if not exists college_image text,
  add column if not exists host_name text,
  add column if not exists location text,
  add column if not exists proximity_rank integer not null default 999;

-- Classify and enrich the existing hackathons. proximity_rank is relative to
-- Stevens: smaller values are closer and are used after application status.
update public.programs as p
set
  opportunity_type = 'hackathon',
  college_image = v.college_image,
  host_name = v.host_name,
  location = v.location,
  proximity_rank = v.proximity_rank,
  sort_order = v.sort_order
from (
  values
    ('GirlHacks', '/resources/campuses/njit.jpg', 'New Jersey Institute of Technology', 'Newark, NJ', 1, 20),
    ('Cal Hacks 13.0', '/resources/campuses/uc-berkeley.jpg', 'University of California, Berkeley', 'San Francisco, CA', 92, 33),
    ('DivHacks', '/resources/campuses/columbia.jpg', 'Columbia University', 'New York, NY', 4, 24),
    ('HackHarvard', '/resources/campuses/harvard.jpg', 'Harvard University', 'Cambridge, MA', 8, 27),
    ('Hack Knight', '/resources/campuses/queens-college.jpg', 'Queens College, CUNY', 'Flushing, NY', 5, 34),
    ('SBUHacks', '/resources/campuses/stony-brook.jpg', 'Stony Brook University', 'Stony Brook, NY', 6, 25),
    ('MakeCU', '/resources/campuses/columbia.jpg', 'Columbia University', 'New York, NY', 4, 35),
    ('BigRed//Hacks', '/resources/campuses/cornell.jpg', 'Cornell University', 'Ithaca, NY', 9, 28),
    ('HackRPI 2026', '/resources/campuses/rpi.jpg', 'Rensselaer Polytechnic Institute', 'Troy, NY', 10, 36),
    ('HackHERS', '/resources/campuses/rutgers.jpg', 'Rutgers University-New Brunswick', 'New Brunswick, NJ', 2, 38),
    ('WiCHacks', '/resources/campuses/rit.jpg', 'Rochester Institute of Technology', 'Rochester, NY', 11, 39),
    ('ShellHacks', '/resources/campuses/fiu.jpg', 'Florida International University', 'Miami, FL', 52, 31),
    ('Knight Hacks IX', '/resources/campuses/ucf.jpg', 'University of Central Florida', 'Orlando, FL', 50, 30),
    ('SwampHacks XII', '/resources/campuses/uf.jpg', 'University of Florida', 'Gainesville, FL', 48, 29),
    ('Gator Quant Hacks', '/resources/campuses/uf.jpg', 'University of Florida', 'Gainesville, FL', 48, 30),
    ('LA Hacks AI Hackathon', '/resources/campuses/ucla.jpg', 'University of California, Los Angeles', 'Los Angeles, CA', 91, 32),
    ('TreeHacks', '/resources/campuses/stanford.jpg', 'Stanford University', 'Stanford, CA', 90, 40),
    ('SF Hacks', '/resources/campuses/sfsu.png', 'San Francisco State University', 'San Francisco, CA', 92, 41),
    ('Diamondhacks', '/resources/campuses/ucsd.jpg', 'University of California, San Diego', 'La Jolla, CA', 93, 42),
    ('LA Hacks 27', '/resources/campuses/ucla.jpg', 'University of California, Los Angeles', 'Los Angeles, CA', 91, 43),
    ('Hack the North', '/resources/campuses/waterloo.jpg', 'University of Waterloo', 'Waterloo, Ontario', 20, 44),
    ('HackMIT', '/resources/campuses/mit.jpg', 'Massachusetts Institute of Technology', 'Cambridge, MA', 8, 45)
) as v(title, college_image, host_name, location, proximity_rank, sort_order)
where p.title = v.title;

-- Add the nearby events requested by the chapter. Status and timeline wording
-- only claim what is currently published by each organizer.
insert into public.programs (
  title, description, tag, eligibility, image, college_image, host_name,
  location, link, timeline_status, timeline, previous_timeline, opens_on,
  closes_on, sort_order, deadline, source_checked_on, opportunity_type,
  proximity_rank
)
select
  v.title, v.description, v.tag, v.eligibility, v.image, v.college_image,
  v.host_name, v.location, v.link, v.timeline_status, v.timeline,
  v.previous_timeline, v.opens_on, v.closes_on, v.sort_order, v.timeline,
  date '2026-09-02', 'hackathon', v.proximity_rank
from (
  values
    (
      'HackRU Fall 2026',
      'Rutgers University''s free 24-hour hackathon welcomes beginner and experienced students to build software and hardware projects with mentors and workshops.',
      'Hackathon',
      'Undergraduate & Graduate Students; High School Students 18+',
      '/resources/campuses/rutgers.jpg',
      '/resources/campuses/rutgers.jpg',
      'Rutgers University-New Brunswick',
      'Piscataway, NJ',
      'https://www.hackru.org/',
      'Open now',
      'Registration open; event runs Oct 10-11, 2026',
      'The official HackRU site says admission is first-come, first-served and the event is at the Busch Student Center.',
      null::date,
      null::date,
      22,
      2
    ),
    (
      'HackPrinceton Fall 2026',
      'Princeton University''s free 36-hour hackathon brings undergraduate and graduate students together for workshops, mentorship, and project building.',
      'Hackathon',
      'Undergraduate & Graduate Students Worldwide',
      '/resources/campuses/princeton.jpg',
      '/resources/campuses/princeton.jpg',
      'Princeton University',
      'Princeton, NJ',
      'https://www.hackprinceton.com/',
      'Open now',
      'Applications open; deadline Sep 28; event runs Nov 13-15, 2026',
      'The official event page publishes the Sep 28 deadline and links to the application portal.',
      null::date,
      date '2026-09-28',
      23,
      3
    ),
    (
      'HackNJIT 2026',
      'NJIT''s free 24-hour student hackathon welcomes beginners and experienced builders for an in-person weekend at the Campus Center.',
      'Hackathon',
      'Students / All Skill Levels',
      '/resources/campuses/njit.jpg',
      '/resources/campuses/njit.jpg',
      'New Jersey Institute of Technology',
      'Newark, NJ',
      'https://hacknjit.org/',
      'Opens soon',
      'Event runs Nov 14-15, 2026; registration opening not published',
      'The official HackNJIT site confirms the dates and Campus Center Ballrooms location, but does not publish a registration deadline.',
      null::date,
      null::date,
      21,
      1
    ),
    (
      'Stevens QuackHacks',
      'Stevens Institute of Technology''s student-run hackathon welcomes university students of every experience level for a weekend of building in Hoboken.',
      'Hackathon',
      'Undergraduate & Graduate Students',
      '/resources/campuses/stevens.jpg',
      '/resources/campuses/stevens.jpg',
      'Stevens Institute of Technology',
      'Hoboken, NJ',
      'https://stevensquackhacks.org/',
      'Expected',
      'Next cycle not announced; watch for a spring 2027 update',
      'QuackHacks II ran Feb 28-Mar 1, 2026 at Stevens, with applications due Jan 31. The next dates are not yet published.',
      null::date,
      null::date,
      37,
      0
    )
) as v(
  title, description, tag, eligibility, image, college_image, host_name,
  location, link, timeline_status, timeline, previous_timeline, opens_on,
  closes_on, sort_order, proximity_rank
)
where not exists (
  select 1 from public.programs p where p.title = v.title
);

-- Keep re-runs synchronized if dates or wording change.
update public.programs as p
set
  description = v.description,
  tag = v.tag,
  eligibility = v.eligibility,
  image = v.image,
  college_image = v.college_image,
  host_name = v.host_name,
  location = v.location,
  link = v.link,
  timeline_status = v.timeline_status,
  timeline = v.timeline,
  deadline = v.timeline,
  previous_timeline = v.previous_timeline,
  opens_on = v.opens_on,
  closes_on = v.closes_on,
  sort_order = v.sort_order,
  source_checked_on = date '2026-09-02',
  opportunity_type = 'hackathon',
  proximity_rank = v.proximity_rank
from (
  values
    ('HackRU Fall 2026', 'Rutgers University''s free 24-hour hackathon welcomes beginner and experienced students to build software and hardware projects with mentors and workshops.', 'Hackathon', 'Undergraduate & Graduate Students; High School Students 18+', '/resources/campuses/rutgers.jpg', '/resources/campuses/rutgers.jpg', 'Rutgers University-New Brunswick', 'Piscataway, NJ', 'https://www.hackru.org/', 'Open now', 'Registration open; event runs Oct 10-11, 2026', 'The official HackRU site says admission is first-come, first-served and the event is at the Busch Student Center.', null::date, null::date, 22, 2),
    ('HackPrinceton Fall 2026', 'Princeton University''s free 36-hour hackathon brings undergraduate and graduate students together for workshops, mentorship, and project building.', 'Hackathon', 'Undergraduate & Graduate Students Worldwide', '/resources/campuses/princeton.jpg', '/resources/campuses/princeton.jpg', 'Princeton University', 'Princeton, NJ', 'https://www.hackprinceton.com/', 'Open now', 'Applications open; deadline Sep 28; event runs Nov 13-15, 2026', 'The official event page publishes the Sep 28 deadline and links to the application portal.', null::date, date '2026-09-28', 23, 3),
    ('HackNJIT 2026', 'NJIT''s free 24-hour student hackathon welcomes beginners and experienced builders for an in-person weekend at the Campus Center.', 'Hackathon', 'Students / All Skill Levels', '/resources/campuses/njit.jpg', '/resources/campuses/njit.jpg', 'New Jersey Institute of Technology', 'Newark, NJ', 'https://hacknjit.org/', 'Opens soon', 'Event runs Nov 14-15, 2026; registration opening not published', 'The official HackNJIT site confirms the dates and Campus Center Ballrooms location, but does not publish a registration deadline.', null::date, null::date, 21, 1),
    ('Stevens QuackHacks', 'Stevens Institute of Technology''s student-run hackathon welcomes university students of every experience level for a weekend of building in Hoboken.', 'Hackathon', 'Undergraduate & Graduate Students', '/resources/campuses/stevens.jpg', '/resources/campuses/stevens.jpg', 'Stevens Institute of Technology', 'Hoboken, NJ', 'https://stevensquackhacks.org/', 'Expected', 'Next cycle not announced; watch for a spring 2027 update', 'QuackHacks II ran Feb 28-Mar 1, 2026 at Stevens, with applications due Jan 31. The next dates are not yet published.', null::date, null::date, 37, 0)
) as v(
  title, description, tag, eligibility, image, college_image, host_name,
  location, link, timeline_status, timeline, previous_timeline, opens_on,
  closes_on, sort_order, proximity_rank
)
where p.title = v.title;

-- Repair UTF-8 punctuation that was previously decoded as Windows-1252.
-- Construct the sequences from code points so the migration stays safe when
-- copied through terminals or SQL clients with a different text encoding.
update public.programs
set
  description = replace(replace(description, chr(226) || chr(8364) || chr(8482), chr(8217)), chr(226) || chr(8364) || chr(8221), chr(8212)),
  timeline = replace(replace(timeline, chr(226) || chr(8364) || chr(8482), chr(8217)), chr(226) || chr(8364) || chr(8221), chr(8212)),
  deadline = replace(replace(deadline, chr(226) || chr(8364) || chr(8482), chr(8217)), chr(226) || chr(8364) || chr(8221), chr(8212)),
  previous_timeline = replace(replace(previous_timeline, chr(226) || chr(8364) || chr(8482), chr(8217)), chr(226) || chr(8364) || chr(8221), chr(8212)),
  eligibility = replace(replace(eligibility, chr(226) || chr(8364) || chr(8482), chr(8217)), chr(226) || chr(8364) || chr(8221), chr(8212))
where
  strpos(description, chr(226)) > 0 or strpos(timeline, chr(226)) > 0 or
  strpos(deadline, chr(226)) > 0 or strpos(previous_timeline, chr(226)) > 0 or
  strpos(eligibility, chr(226)) > 0;
