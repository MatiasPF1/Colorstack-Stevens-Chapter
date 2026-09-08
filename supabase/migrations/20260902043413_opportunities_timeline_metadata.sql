alter table public.programs
  add column if not exists timeline_status text not null default 'Expected',
  add column if not exists timeline text not null default 'Dates not announced',
  add column if not exists previous_timeline text,
  add column if not exists opens_on date,
  add column if not exists closes_on date,
  add column if not exists sort_order integer not null default 999,
  add column if not exists source_checked_on date not null default current_date;

alter table public.programs
  drop constraint if exists programs_timeline_status_check;

alter table public.programs
  add constraint programs_timeline_status_check
  check (timeline_status in ('Open now', 'Opens soon', 'Expected', 'Watch'));

create index if not exists programs_sort_order_idx
  on public.programs (sort_order);

update public.programs as p
set
  description = v.description,
  deadline = v.timeline,
  tag = v.tag,
  eligibility = v.eligibility,
  link = v.link,
  timeline_status = v.timeline_status,
  timeline = v.timeline,
  previous_timeline = v.previous_timeline,
  opens_on = v.opens_on,
  closes_on = v.closes_on,
  sort_order = v.sort_order,
  source_checked_on = date '2026-09-02'
from (
  values
    (
      'NASA OSTEM Internships',
      'Paid, project-based NASA internships that let students contribute to real missions with a NASA mentor.',
      'Internship',
      'High School through Graduate',
      'https://www.nasa.gov/learning-resources/internship-programs/',
      'Open now',
      'Spring 2027 applications close Sep 14, 2026',
      'Summer 2027 applications close Feb 26, 2027; opportunities are posted progressively.',
      null::date,
      date '2026-09-14',
      1
    ),
    (
      'Department Of Energy SULI',
      'Paid research placements at participating DOE national laboratories: 10 weeks in summer or 16 weeks during a semester.',
      'Research',
      'Undergraduate & Recent Graduate',
      'https://science.osti.gov/wdts/suli',
      'Open now',
      'Spring 2027 applications close Sep 30, 2026',
      'Summer 2026 applications opened Oct 23, 2025 and closed Jan 7, 2026; Summer 2027 dates are not announced.',
      date '2026-07-08',
      date '2026-09-30',
      2
    ),
    (
      'MLH Fellowship',
      'Remote 12-week internship alternative where fellows build real software with a small team and technical mentors.',
      'Fellowship',
      '18+ / Any Education Level',
      'https://fellowship.mlh.com/programs/software-engineering',
      'Open now',
      'Fall 2026 applications are rolling; cohort starts Sep 14',
      'MLH runs batches year-round and says applications close a few weeks before each start date.',
      null::date,
      date '2026-09-13',
      3
    ),
    (
      'Jane Street IN FOCUS',
      'A short immersive program covering software engineering, trading, and strategy and product at Jane Street.',
      'Program',
      'Undergraduate & Graduate',
      'https://www.janestreet.com/join-jane-street/programs-and-events/in-focus/',
      'Open now',
      'Applications are open for Jan 11-16, 2027 in New York',
      'Jane Street has not published a deadline for this session; apply early.',
      null::date,
      null::date,
      4
    ),
    (
      'Break Through Tech',
      'Virtual AI and agentic-AI programs combining technical coursework, live labs, industry projects, mentorship, and career coaching.',
      'Fellowship',
      'All Undergraduate Years',
      'https://breakthroughtechadmissions.zendesk.com/hc/en-us/articles/54057675102235-2026-2027-Key-Admissions-Dates-and-Deadlines',
      'Opens soon',
      'Agentic AI opens Sep 4; AI Program opens Sep 11, 2026',
      'Both Winter/Spring 2027 application windows close Oct 18, 2026.',
      date '2026-09-04',
      date '2026-10-18',
      5
    ),
    (
      'Duolingo Thrive',
      'A 10-week paid early-talent internship with software engineering, product, design, and creative roles that vary by cycle.',
      'Internship',
      'Rising Juniors',
      'https://careers.duolingo.com/?type=Thrive+Program',
      'Expected',
      'Expected late Sep-Oct 2026; Summer 2027 is not announced',
      'Duolingo says SWE Thrive opens yearly at the end of September; APM Thrive opened Oct 8, 2024.',
      null::date,
      null::date,
      6
    ),
    (
      'Microsoft Explore Program',
      'A 12-week U.S. summer internship where early undergraduates rotate through software design, development, and quality.',
      'Internship',
      '1st & 2nd Year',
      'https://careers.microsoft.com/v2/global/en/exploremicrosoft',
      'Expected',
      'Expected Sep-Nov 2026; Summer 2027 is not announced',
      'A prior cycle launched Sep 30 for second-years and Nov 11 for first-years.',
      null::date,
      null::date,
      7
    ),
    (
      'Nvidia Ignite Internship',
      'NVIDIA early-career internship experience for first- and second-year undergraduates working alongside technical teams.',
      'Internship',
      '1st & 2nd Year',
      'https://www.nvidia.com/en-us/about-nvidia/careers/university-recruiting/',
      'Expected',
      'Expected Sep-Oct 2026; Summer 2027 is not announced',
      'The Summer 2025 Ignite application window closed Oct 18, 2024 and was open only briefly.',
      null::date,
      null::date,
      8
    ),
    (
      'Dropbox Emerging Talent Internship',
      'A 12-week summer internship with meaningful projects, dedicated mentorship, and multiple summer start dates.',
      'Internship',
      'Undergraduate through PhD',
      'https://www.dropbox.jobs/en/emerging-talent/',
      'Expected',
      'Expected fall 2026; Summer 2027 posting is not live',
      'Summer 2026 SWE applications were live by Sep 2025 and closed Oct 6, 2025.',
      null::date,
      null::date,
      9
    ),
    (
      'SEO Tech Developer',
      'Free technical training and internship preparation, including a paid six-week summer residency for the core program.',
      'Program',
      '1st & 2nd Year',
      'https://tech.seo-usa.org/',
      'Expected',
      'First-Year Academy expected Nov 2026; core program expected Jan 2027',
      'First-Year Academy opened Nov 12, 2025; the 2026 core application window ran Jan-Mar 2026.',
      null::date,
      null::date,
      10
    ),
    (
      'NSF REU',
      'Paid undergraduate research experiences at independent NSF-funded sites; benefits and application rules vary by location.',
      'Research',
      'Undergraduates / Site-Specific',
      'https://www.nsf.gov/funding/initiatives/reu/students',
      'Expected',
      'Sites typically begin posting Nov 2026-Jan 2027',
      'There is no national opening date; most prior summer-site deadlines fell between January and March.',
      null::date,
      null::date,
      11
    ),
    (
      'Jane Street FOCUS',
      'A funded multi-day program introducing first-year students to software engineering, trading, and strategy and product.',
      'Program',
      '1st Year Only',
      'https://www.janestreet.com/join-jane-street/programs-and-events/focus/',
      'Watch',
      'Next application date is not announced; notification signup is open',
      'The previous New York session ran May 19-22, 2026.',
      null::date,
      null::date,
      12
    ),
    (
      'Google Summer of Code',
      'A global, stipend-supported open-source mentorship program; participants are contributors, not Google employees.',
      'Program',
      '18+ / New OSS Contributors',
      'https://summerofcode.withgoogle.com/',
      'Expected',
      '2027 contributor applications expected mid-March',
      'The confirmed 2026 contributor application window ran Mar 16-31, 2026.',
      null::date,
      null::date,
      13
    )
) as v(
  title,
  description,
  tag,
  eligibility,
  link,
  timeline_status,
  timeline,
  previous_timeline,
  opens_on,
  closes_on,
  sort_order
)
where p.title = v.title;
