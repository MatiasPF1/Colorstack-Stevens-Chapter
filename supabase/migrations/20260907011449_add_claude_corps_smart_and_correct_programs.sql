-- Requested opportunity additions and corrections, reviewed September 6, 2026.
-- Jane Street's overview still shows notification signup, but its official
-- programs directory says IN FOCUS is accepting applications and the NYC form
-- explicitly accepts applications for January 11-16, 2027:
-- https://www.janestreet.com/join-jane-street/programs-and-events/
-- https://www.janestreet.com/apply-in-focus-nyc/
-- Idempotent: existing additions are updated by title, never duplicated.

begin;

update public.programs
set timeline_status = 'Open now',
    timeline = 'Agentic AI opened Sep 4; AI Program opens Sep 11, 2026',
    deadline = 'Agentic AI opened Sep 4; AI Program opens Sep 11, 2026',
    source_checked_on = date '2026-09-06'
where title = 'Break Through Tech' and opportunity_type = 'program';

update public.programs
set eligibility = 'Undergraduates who have experienced barriers to advanced STEM opportunities',
    timeline_status = 'Open now',
    timeline = 'Applications are open for Jan 11-16, 2027 in New York',
    deadline = 'Applications are open for Jan 11-16, 2027 in New York',
    previous_timeline = 'The January 2027 application form is live; the program overview still shows notification signup. No deadline is confirmed on the application form.',
    link = 'https://www.janestreet.com/apply-in-focus-nyc/',
    source_checked_on = date '2026-09-06'
where title = 'Jane Street IN FOCUS' and opportunity_type = 'program';

update public.programs
set eligibility = 'High School through Graduate; U.S. citizenship required.',
    source_checked_on = date '2026-09-06'
where title = 'NASA OSTEM Internships' and opportunity_type = 'program';

update public.programs
set title = 'Department of Energy SULI'
where title = 'Department Of Energy SULI' and opportunity_type = 'program';

-- Make room immediately after the existing open programs. Absolute positions
-- keep repeat runs from shifting the order again.
update public.programs as p
set sort_order = v.sort_order
from (values
    ('Duolingo Thrive', 8),
    ('Microsoft Explore Program', 9),
    ('Nvidia Ignite Internship', 10),
    ('Dropbox Emerging Talent Internship', 11),
    ('SEO Tech Developer', 12),
    ('NSF REU', 13),
    ('Jane Street FOCUS', 14),
    ('Google Summer of Code', 15)
) as v(title, sort_order)
where p.title = v.title and p.opportunity_type = 'program';

with additions (
    title, description, tag, eligibility, link, timeline,
    previous_timeline, closes_on, sort_order
) as (values
    (
        'CodePath Claude Corps',
        'Paid, full-time, 12-month fellowship where early-career professionals help organizations adopt and build with AI.',
        'Fellowship',
        'Any education level; two or fewer years of full-time experience and U.S. work authorization required.',
        'https://www.codepath.org/claude-corps',
        'Applications are rolling for the first cohort',
        null::text,
        null::date,
        6
    ),
    (
        'DoW SMART Scholarship-for-Service',
        'Department of War program providing full tuition, an annual stipend, summer internships, and guaranteed employment after graduation.',
        'Scholarship & Internship',
        'Undergraduate and graduate STEM students; citizenship restrictions apply.',
        'https://www.smartscholarship.org/smart/en',
        'Applications close Dec. 4, 2026',
        'Requires an employment commitment equal to the funded period.',
        date '2026-12-04',
        7
    )
), updated as (
    update public.programs as p
    set description = a.description,
        tag = a.tag,
        eligibility = a.eligibility,
        link = a.link,
        timeline_status = 'Open now',
        timeline = a.timeline,
        deadline = a.timeline,
        previous_timeline = a.previous_timeline,
        opens_on = null,
        closes_on = a.closes_on,
        sort_order = a.sort_order,
        source_checked_on = date '2026-09-06'
    from additions as a
    where p.title = a.title and p.opportunity_type = 'program'
    returning p.title
)
insert into public.programs (
    title, description, tag, eligibility, image, link,
    timeline_status, timeline, deadline, previous_timeline,
    opens_on, closes_on, sort_order, source_checked_on, opportunity_type
)
select a.title, a.description, a.tag, a.eligibility,
    '/mainPhotos/ColorstackStevensLogo.png', a.link,
    'Open now', a.timeline, a.timeline, a.previous_timeline,
    null, a.closes_on, a.sort_order, date '2026-09-06', 'program'
from additions as a
where not exists (select 1 from updated as u where u.title = a.title);

commit;
