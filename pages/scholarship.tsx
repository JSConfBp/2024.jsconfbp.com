import Link from "next/link";
import Divider from "../ui/divider";
import SocialShare from "../ui/social-share";
import CenteredButton from "../ui/centered-button";
import ColoredSection from "../ui/colored-section";

function Scholarship() {
    return (
        <>
            <SocialShare
                title="Scholarship"
                description="Scholarship application is open until 24th March 2024!"
                socialShareImage="social-share/scholarship.png"
            />

            <Divider>
                <h1>
                    Scholarship
                </h1>
            </Divider>

            <ColoredSection>
                <p>
                    2024 will be the 6th time when we're running our Scholarship Program! As
                    every year so far, we'll provide several free, Scholarship tickets to
                    help underrepresented groups in tech to attend the conference.
                </p>

                <p>
                    Anyone from an underrepresented group in tech is invited to apply for a
                    scholarship. This includes but isn't limited to: women, people of color,
                    LGBTQIA+ people, disabled people, and people facing economic or social
                    hardships. We want to give them a chance.
                </p>

                <p>
                    This Scholarship is made for you if you wished to attend JSConf
                    Budapest, but you could not afford it for some reason.
                </p>

                <h2>Travel Support</h2>

                <p>
                    During the evaluation of applications, the jury will select some
                    Scholarship awardees for travel support. This means we'll cover their
                    travel and stay in Budapest. This is also funded by our Scholarship
                    Budget, which is limited. If you can arrange your trip or stay in
                    Budapest, let us know, and more people will have the opportunity to
                    receive a Scholarship.
                </p>

                <p className="text-center mt-2">
                    <strong>The application period is closed on March 24th, Sunday midnight.</strong>
                </p>
                <CenteredButton href="https://forms.gle/iJnzqp4mXMuf8x3V7">
                    Apply for a Scholarship now!
                </CenteredButton>
            </ColoredSection>


            <ColoredSection background="light-section">
                <h2>Where is the Scholarship Budget coming from?</h2>

                <p>
                    The budget is filled by generous donors, both from the Attendees and our
                    Partners.
                </p>

                <p>
                    Attendees can sponsor the Program with buying Supported tickets. Both
                    Early Bird and Regular tickets are available in a Scholarship Supporting
                    variant. This means that the ticket price includes a percent of a
                    supported ticket that will be given to someone in need.
                </p>

                <p>Let's see this ticket for example:</p>

                <p>
                    <strong>Regular JS Ticket + 50% Scholarship Support = €675</strong>
                    <br />
                    450 EUR + 225 EUR + Fees
                </p>

                <p>
                    This means, if you buy this ticket, you support the Scholarship Budget
                    with an extra 50% of your ticket price.
                </p>

                <p>We've set several levels of sponsorship: 25%, 50%, and 75%.</p>

                <p>
                    <strong>
                        10% of every Partnership package goes directly into the Scholarship
                        Budget.{' '}
                    </strong>
                    So all of our partners become donors to the Program. If your company is
                    interested in participating, check out our{' '}
                    <Link href="/partners/">Partnership opportunities</Link>.
                </p>
            </ColoredSection>

            <ColoredSection>
                <h2>
                    Why is this good?
                </h2>

                <p>
                    Scholarship Support is not money for a party, nor for fancy catering, or
                    a nice booth.
                </p>

                <p>It is a chance for someone.</p>

                <p>
                    We try to reach as many people as possible in the community around the
                    region, and we are working hard, to make this event available for
                    everyone who is interested. But we know many in the region would, but
                    cannot attend such a conference, for various reasons. They can get a
                    ticket to the event, through the Scholarship.
                </p>

                <p>
                    This is a chance for them, to meet people they can learn from, see talks
                    they can benefit from, a chance to step forward.
                </p>

                <p>
                    A chance for you to help someone in an excellent way for a reasonable
                    price.
                </p>

                <p>
                    The past years, after we started this Program, we've{' '}
                    <Link target="_blank" href="https://medium.com/@_nec/how-can-a-conference-help-someone-5a4fff2623af#.gw1ni84hj">
                        actually changed someone's life for good!
                    </Link>
                    Imagine what is possible by helping with even more people!
                </p>
            </ColoredSection >

            <ColoredSection background="light-section">
                <h2>How does the scholarship awarding works?</h2>

                <p>
                    All applicants for the Scholarship Program has to go through an
                    application procedure. Along with personal details for the tickets
                    itself, we ask applicants a few questions about what they do in tech or
                    what they wish to learn on the event. These answers are helpful for the
                    jury, who will evaluate the applications and award the tickets.
                </p>

                <p>
                    We, the organizers, do not take part in the jury process. Every
                    year we work with organizations that are specialized in career
                    development and education in tech. They help us to evaluate the
                    applications and select the awardees.

                    {/* In the past
                years, we asked Green Fox Academy in Budapest to help us evaluate the
                applications and select the awardees. */}
                </p>

                {/* 
            <h4>Green Fox Academy</h4>

            <p>
                Green Fox Academy is a school of technology in Budapest where students
                are provided with marketable knowledge. Their philosophy is reflected in
                the education principles they apply during the courses. They genuinely
                believe in mentoring based education and the integration of hard tech
                knowledge and soft skills development. For the Green Fox team, teaching
                is about inspiring people to focus on self-improvement and
                problem-solving. Education is their passion.
                <br />
                <br />
                More information:{' '}
                <Link target="_blank" href="http://www.greenfoxacademy.com/">
                    http://www.greenfoxacademy.com/
                </Link>
            </p> 
*/}
            </ColoredSection>
            <ColoredSection>
                <p className="text-center">
                    <strong>The application period is closed on March 24th, Sunday midnight.</strong>
                </p>
                <CenteredButton href="https://forms.gle/iJnzqp4mXMuf8x3V7">
                    Apply for a Scholarship now!
                </CenteredButton>
            </ColoredSection>

        </>
    );
}

export default Scholarship;