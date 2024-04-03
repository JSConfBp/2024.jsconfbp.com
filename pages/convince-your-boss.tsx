import Link from "next/link";
import Divider from "../ui/divider";
import ColoredSection from "../ui/colored-section";
import SocialShare from "../ui/social-share";

function CallForPapers() {
  return (
    <>
      <SocialShare
        title="Convince your boss!"
        description="Your employer have doubts why this conference worth attending? Let's prepare to convince your boss so you can visit us in June!"
        socialShareImage="social-share/convince-your-boss.png"
      />
      <Divider>
        <h1 className="center-title">
          Convincing Your Employer to Invest in Your Development
        </h1>
      </Divider>

      <ColoredSection>
        <p>
          As the date for JSConf Budapest 2024 approaches, you might find
          yourself eager to{" "}
          <Link href="https://ti.to/jsconf-bp/jsconf-budapest-2024">
            secure your ticket
          </Link>{" "}
          for this exciting event taking place on the 26th-28th of June 2024.
          Perhaps you are captivated by the exceptional{" "}
          <Link href="/#speakers">speaker lineup</Link> but are daunted by the
          ticket prices. Nevertheless, fear not, for there are ways to convince
          your employer that investing in your attendance at this conference is
          a strategic move worth considering.
        </p>
      </ColoredSection>

      <ColoredSection background="light-section">
        <h2>The first step: preparing your case</h2>

        <p>
          Before you approach your employer, arm yourself with a compelling case
          for attending JSConf Budapest 2024:
        </p>

        <ul>
          <li>
            <strong>Contract review:</strong> explore if there is a conference
            budget provision in your employment contract that could cover your
            attendance.
          </li>
          <li>
            <strong>Peer discussion:</strong> inquire among your colleagues
            about their past experiences attending conferences on company funds.
            This could lend credibility to your request.
          </li>
          <li>
            <strong>Broaden horizons:</strong> most employers benefit most from
            attending specialized conferences in their domain. While a
            frameworks-specific event offers direct knowledge, a more general
            conference - like JSConf Budapest - can broaden perspectives and
            enhance professional awareness.
          </li>
          <li>
            <strong>Speaker line-up assessment:</strong> delve deeper into the
            speaker lineup to identify relevant topics that align with your
            professional development goals and your team’s projects.
          </li>
          <li>
            <strong>Ticket pricing clarification:</strong> highlight to your
            employer that the ticket price includes VAT, which may be
            tax-deductible for the company, thus reducing the financial impact.
          </li>
          <li>
            <strong>Financial transparency:</strong> clearly outline the cost
            benefits and affordability of attending the conference, including
            accommodations. Highlight that JSConf Budapest is one of the most
            affordable conferences in Europe while still representing an
            outstanding lineup.
          </li>
          <li>
            Being a part of the JSConf family, JSConf Budapest upholds elevated
            levels of <strong>professionalism and ethical principles.</strong>
          </li>
        </ul>
        <p>
          Additionally, consider exploring accommodation options and travel
          costs, emphasizing the benefits of participating in June to seize a
          strategic opportunity before the summer holidays.
        </p>
      </ColoredSection>

      <ColoredSection>
        <h2>The second step: presenting your proposal</h2>

        <p>
          Once you have laid the groundwork, it’s time to present a compelling
          argument for why JSConf Budapest 2024 is a valuable investment for
          both you and your employer:
        </p>

        <ul>
          <li>
            <strong>Knowledge sharing:</strong> stress the potential for
            knowledge dissemination to benefit the team and propose sharing
            insights through blog posts or internal tech talks.
          </li>
          <li>
            <strong>Skill enhancement:</strong> connect conference topics to
            areas where your team or tech stack can improve, demonstrating the
            value in the learning opportunities provided.
          </li>
          <li>
            <strong>Networking opportunities:</strong> emphasize the potential
            for business connections and recruitment prospects that could
            enhance the company’s visibility and talent pool.
          </li>
          <li>
            <strong>Professional development:</strong> highlight the role of
            conferences in preventing burnout, inspiring creativity, and
            fostering a refreshed mindset vital for sustained productivity.
          </li>
        </ul>
      </ColoredSection>

      <ColoredSection background="light-section">
        <h2>Final notes before you seal the deal</h2>

        <p>As you make your case, remember to:</p>

        <ul>
          <li>
            <strong>Present a comprehensive argument:</strong> emphasize why
            JSConf Budapest 2024 is a worthwhile investment for your
            professional growth and the company’s benefit.
          </li>
          <li>
            <strong>Financial transparency:</strong> clearly outline the cost
            benefits and affordability of attending the conference, including
            accommodations.
          </li>
          <li>
            <strong>Professional intent:</strong> assure your employer of your
            commitment to sharing knowledge gained and leveraging networking
            opportunities.
          </li>
          <li>
            <strong>Persevere:</strong> if met with initial reluctance, explore
            sponsorship opportunities or scholarship programs to demonstrate
            your determination to attend.
          </li>
        </ul>
      </ColoredSection>

      <ColoredSection>
        <p>
          For those not affiliated with a company, freelancers, job seekers, and
          individuals interested in attending, there are also avenues available
          to make your participation possible, from networking opportunities to
          scholarship programs.
        </p>
        <p>
          In summary, JSConf Budapest 2024 offers a platform for learning,
          networking, and personal development that can bring advantages to both
          you and your team. Best of luck, and we look forward to welcoming you
          at Budapest in June 2024!
        </p>
      </ColoredSection>
    </>
  );
}

export default CallForPapers;
