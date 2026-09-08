-- Opportunity-card corrections requested September 7, 2026.
-- This migration is intentionally idempotent so it is safe to rerun.

begin;

update public.programs
set timeline = 'Applications are open for Jan 11-16, 2027 in New York; applications close Oct. 25, 2026, at 11:59 p.m. ET.',
    deadline = 'Applications are open for Jan 11-16, 2027 in New York; applications close Oct. 25, 2026, at 11:59 p.m. ET.',
    previous_timeline = 'The January 2027 application form is live.',
    closes_on = date '2026-10-25'
where title = 'Jane Street IN FOCUS' and opportunity_type = 'program';

update public.programs
set timeline_status = 'Open now',
    timeline = 'London program runs Jan. 13–16, 2027; applications close Nov. 8, 2026, at 11:59 p.m. GMT.',
    deadline = 'London program runs Jan. 13–16, 2027; applications close Nov. 8, 2026, at 11:59 p.m. GMT.',
    previous_timeline = 'This opening is for London, not New York.',
    link = 'https://www.janestreet.com/apply-focus-ldn/',
    closes_on = date '2026-11-08'
where title = 'Jane Street FOCUS' and opportunity_type = 'program';

update public.programs
set timeline = 'Agentic AI is open now; the AI Program opens Sep. 11, 2026. Both close Oct. 18, 2026.',
    deadline = 'Agentic AI is open now; the AI Program opens Sep. 11, 2026. Both close Oct. 18, 2026.',
    previous_timeline = null
where title = 'Break Through Tech' and opportunity_type = 'program';

update public.programs
set description = 'Remote, approximately 20-hour-per-week Fall 2026 fellowship where fellows build real software with a small team and technical mentors.',
    eligibility = 'Over 18; programming experience and time-zone eligibility required.'
where title = 'MLH Fellowship' and opportunity_type = 'program';

update public.programs
set eligibility = 'High School through Graduate; eligibility varies by opportunity; applicants must generally be 16+, U.S. citizens, and meet GPA requirements.'
where title = 'NASA OSTEM Internships' and opportunity_type = 'program';

update public.programs
set eligibility = 'Applicants must be 18+, have a minimum 3.0 GPA, and be U.S. citizens or permanent residents. Recent graduates must generally be within two years of graduation.'
where title = 'Department of Energy SULI' and opportunity_type = 'program';

update public.programs
set previous_timeline = 'Placement format varies; many host organizations are hybrid or in person.'
where title = 'CodePath Claude Corps' and opportunity_type = 'program';

update public.programs
set description = 'A 12-week U.S. summer internship where early undergraduates experience the design, development, and quality phases of product development.'
where title = 'Microsoft Explore Program' and opportunity_type = 'program';

update public.programs
set eligibility = 'Eligibility varies by individual internship posting.'
where title = 'Dropbox Emerging Talent Internship' and opportunity_type = 'program';

update public.programs
set description = 'Free technical training and internship preparation. The core program includes a paid six-week summer residency; First-Year Academy is a separate first-year track.'
where title = 'SEO Tech Developer' and opportunity_type = 'program';

update public.programs
set eligibility = 'Undergraduates / Site-Specific; NSF-funded participants must be pursuing an associate or bachelor’s degree and be U.S. citizens, nationals, or permanent residents.'
where title = 'NSF REU' and opportunity_type = 'program';

update public.programs
set timeline_status = 'Watch',
    timeline = 'Cycle closed / check for late availability; the published general deadline was Sep. 1, 2026.',
    deadline = 'Cycle closed / check for late availability; the published general deadline was Sep. 1, 2026.',
    previous_timeline = 'No coding experience or CS major required.',
    closes_on = date '2026-09-01'
where title = 'DivHacks' and opportunity_type = 'hackathon';

update public.programs
set timeline = 'Applications close Sep. 28, 2026; event runs Oct 16-18, 2026.',
    deadline = 'Applications close Sep. 28, 2026; event runs Oct 16-18, 2026.',
    closes_on = date '2026-09-28'
where title = 'HackHarvard' and opportunity_type = 'hackathon';

update public.programs
set timeline_status = 'Watch',
    timeline = 'Late applications/check availability; priority deadline was Jul. 24 and general deadline was Aug. 28, 2026.',
    deadline = 'Late applications/check availability; priority deadline was Jul. 24 and general deadline was Aug. 28, 2026.',
    previous_timeline = 'Event runs Oct 17-18, 2026.',
    closes_on = date '2026-08-28'
where title = 'LA Hacks AI Hackathon' and opportunity_type = 'hackathon';

update public.programs
set eligibility = '18+ students at traditional or nontraditional institutions, plus people who graduated within the past year.',
    previous_timeline = 'No cutoff date published.'
where title = 'SBUHacks' and opportunity_type = 'hackathon';

update public.programs
set eligibility = 'College students / all skill levels; non-NJIT participants must be over 18, while NJIT students may participate even if minors.'
where title = 'GirlHacks' and opportunity_type = 'hackathon';

-- The actual application portal is live despite an outdated homepage label.
update public.programs
set timeline_status = 'Open now',
    timeline = 'Applications open; deadline Sep. 28, 2026; event runs Nov 13-15, 2026.',
    deadline = 'Applications open; deadline Sep. 28, 2026; event runs Nov 13-15, 2026.',
    previous_timeline = 'The live application portal controls the status; the homepage may still show an outdated “coming soon” label.',
    closes_on = date '2026-09-28'
where title = 'HackPrinceton Fall 2026' and opportunity_type = 'hackathon';

-- MLH schedule listings alone do not establish that a hacker form is live.
update public.programs
set timeline_status = 'Watch',
    timeline = 'Check the event site for hacker application or registration availability.',
    deadline = 'Check the event site for hacker application or registration availability.'
where title in ('BigRed//Hacks', 'SwampHacks XII', 'Gator Quant Hacks', 'Knight Hacks IX', 'ShellHacks')
  and opportunity_type = 'hackathon';

-- Preserve the program-wide “Expected” status for dates not officially announced.
update public.programs
set timeline_status = 'Expected'
where title in ('Duolingo Thrive', 'Microsoft Explore Program', 'Nvidia Ignite Internship', 'Dropbox Emerging Talent Internship', 'SEO Tech Developer', 'Google Summer of Code')
  and opportunity_type = 'program';

update public.programs
set source_checked_on = date '2026-09-07';

commit;
