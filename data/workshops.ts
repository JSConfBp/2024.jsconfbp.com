import RisingStackLogo from "../public/partner-logos/risingstack.svg";
import SuperChargeLogo from "../public/partner-logos/supercharge.svg";
import CrabNebulaLogo from "../public/partner-logos/crabnebula.svg";

const WORKSHOPS = [
  {
    slug: "desktop-app-with-tauri",
    published: true,
    title: "Tauri: Build, Debug, and Ship a Desktop App with Web Tech",
    summary: `Create a desktop app with your web framework of choice using Tauri!`,
    abstract: `
      In this workshop we will create a Tauri app with our web framework of choice. Tauri exposes native APIs so
      it’s possible to communicate with the system straight from the Frontend of our app. Lastly, we global distribution
      and Auto-Updates with CrabNebula Cloud. Taking bundling and drafting releases straight from a GitHub Action.
    `,
    startTime: "14:00", 
    endTime: "17:00",
    mentors: [
      {
        name: "Atila Fassina",
        link: "https://twitter.com/AtilaFassina",
      },
    ],
    venue: {
      address: "4. Révay köz, 1065 Budapest",
      name: "KAPTÁR - room WS 2",
      link: "https://maps.app.goo.gl/irikn7vAhjR3sYeC6",
    },
    sponsor: {
      logo: CrabNebulaLogo,
      name: "CrabNebula",
      link: "https://crabnebula.dev/",
    },
    socialShareImage: "social-share/workshop-crabnebula.png",
  },
  {
    slug: "aha-stack",
    published: true,
    title: "AHA stack: Make web development easy again!",
    summary: `Meet the AHA stack, combining Astro, htmx, and Alpine.js to deliver rich, interactive sites in a surprisingly easy way. `,
    abstract: `
      Meet the AHA stack, combining Astro, htmx, and Alpine.js to deliver rich,
      interactive sites in a surprisingly easy way.

      Alpine is a small component-based library with a Vue-like declarative syntax that integrates simply into HTML,
      while htmx is a superset of HTML designed specifically for fetching partials
      from the backend and swapping them on the UI as a response to HTTP requests.
      Both of them can be quickly dropped into any site using a &lt;script&gt; tag,
      forgoing the need for complex build systems, while they both can be explained
      by their commendably short documentation. Still, together they provide the
      same expressiveness and look for 90% of use cases as Next does. The site's
      template and the partials are served by Astro, the only server-side rendering
      JS solution on the market that you can get started with without feeling you're
      learning a completely new trade.

      Join us in exploring these tools if you also feel it's time to take a step back
      and see how we can simplify our lives without forfeiting the ability to create
      modern Single-Page Applications, using the techniques we got used to.
    `,
    startTime: "10:00",
    endTime: "18:00",
    mentors: [
      {
        name: "Tamás Kadlecsik",
        link: "",
      },
    ],
    venue: {
      address: "Budapest, Rákóczi út 42, 1072",
      name: "EMKE office building",
      link: "https://maps.app.goo.gl/shxMqiULExsbYEW18",
    },
    sponsor: {
      logo: RisingStackLogo,
      name: "RisingStack",
      link: "https://risingstack.com/",
    },
    socialShareImage: "social-share/workshop-risingstack.png",
  },
  {
    slug: "api-first-stack",
    published: true,
    title: "API-first approach with no-code stack for fullstack development",
    summary: `Learn the principles of the API-first approach, and how to implement API contracts using ChatGPT or Copilot and GitLab CI.`,
    abstract: `
    If you are new to the API-first approach, this workshop will help you learn
    the principles of this method and provide a practical implementation strategy.
    With the stack we will present, we automate as many parts as possible to enhance
    efficiency and reduce errors, allowing our team to focus on the business cases
    they are working on.

    After a high-level presentation about the approach, you’ll
    learn how to use ChatGPT or Copilot to define the API contract, how to use
    GitLab CI to automate code generation for both backend and frontend libraries
    that implement the contract, and then you’ll start using these libraries to
    build your own real-world application.
    `,
    startTime: "13:00",
    endTime: "17:00",
    mentors: [
      {
        name: "Attila Olah",
        link: "",
      },
    ],
    venue: {
      address: "Budapest, Károly krt. 9, 1075 Hungary",
      name: "SuperCharge Event space",
      link: "https://maps.app.goo.gl/rxmbHyf3AUFc1N618",
    },
    sponsor: {
      logo: SuperChargeLogo,
      name: "SuperCharge",
      link: "https://supercharge.io/",
    },
    socialShareImage: "social-share/workshop-supercharge.png",
  },
  {
    slug: "aha-stack-2",
    published: false,
    title: "AHA stack: Make web development easy again!",
    summary: `Meet the AHA stack, combining Astro, htmx, and Alpine.js to deliver rich, interactive sites in a surprisingly easy way. `,
    abstract: `
      Meet the AHA stack, combining Astro, htmx, and Alpine.js to deliver rich, interactive
      sites in a surprisingly easy way. Alpine is a small component-based library
      with a Vue-like declarative syntax that integrates simply into HTML, while
      htmx is a superset of HTML designed specifically for fetching partials from
      the backend and swapping them on the UI as a response to HTTP requests. Both
      of them can be quickly dropped into any site using a &lt;script&gt; tag, forgoing
      the need for complex build systems, while they both can be explained by their
      commendably short documentation. Still, together they provide the same expressiveness
      and look for 90% of use cases as Next does. The site's template and the partials
      are served by Astro, the only server-side rendering JS solution on the market
      that you can get started with without feeling you're learning a completely
      new trade. Join us in exploring these tools if you also feel it's time to take
      a step back and see how we can simplify our lives without forfeiting the ability
      to create modern Single-Page Applications, using the techniques we got used to.
    `,
    startTime: "10:00",
    endTime: "16:00",
    mentors: [
      {
        name: "Tamás Kadlecsik",
        link: "",
      },
    ],
    venue: {
      address: "1031 Budapest, Záhony u 7.",
      name: "TBA Offices",
      link: "http://jsconfbp.com",
    },
    sponsor: {
      logo: "/partner-logos/codecool.svg",
      name: "CodeCool",
      link: "https://codecool.hu",
    },
    socialShareImage: "",
  },
];

export default WORKSHOPS;
