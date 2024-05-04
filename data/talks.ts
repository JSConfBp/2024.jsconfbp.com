const TALKS = [
  {
    published: true,
    slug: "atila-fassina",
    speaker: {
      name: "Atila Fassina",
      pronouns: "he/him",
      profilePicturePath: "/speakers/atila.png",
      bio: "Atila is a DX Engineer, SolidJS team member, and Google Developer Expert for Web Technologies. He's been working with the web for over 10 years with multiple stacks and creating content either at speaking conferences, publishing youtube videos, or writing articles.",
      location: "Berlin, Germany",
      socialMediaHandle: "@AtilaFassina",
      socialMediaUrl: "https://x.com/AtilaFassina",
      socialMediaType: "twitter",
      website: "https://atila.io",
      work: "CrabNebula",
      role: "DX Engineer",
      workURL: "https://crabnebula.dev/",
      imageAlign: "right",
    },
    talk: {
      title: "Are Signals worth the hype?",
      abstract:
        "From basically every framework across the board to TC39, signals are all the rage nowadays. A lot has been said about the performance benefits, but that's not all it is. Let's talk about how signals provides a better mental model to render user interfaces, and how they make developing apps more predictable and, likely, error-free.",
      socialShareImage: "social-share/atila.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "aakansha-doshi",
    speaker: {
      name: "Aakansha Doshi",
      pronouns: "she/her",
      profilePicturePath: "/speakers/aakansha.png",
      bio: "Aakansha is passionate about Free and open-source software (FOSS) and loves deep diving into the internals of Javascript and React. Being one of the core maintainers of Excalidraw, she spends most of the time with Canvas. She leads the FOSS meetups in Bangalore, India. Beyond her tech interests, she is a big foodie, loves traveling, and spending quality time with her family.",
      location: "India, Bangalore",
      socialMediaHandle: "@aakansha1216",
      socialMediaUrl: "https://twitter.com/aakansha1216",
      socialMediaType: "twitter",
      website: "https://aakansha.dev/",
      work: "Open-source",
      role: "",
      workURL: "",
      imageAlign: "left",
    },
    talk: {
      title: "Encrypting data in the Browser - Exploring Web Crypto APIs",
      abstract: `Have you ever considered securing your app data within the browser? Let’s understand how encrypting your data in browser enhances overall security.

        How do Web Crypto APIs differ from the Crypto module in Node.js?

        In this talk I will be deep-diving into the world of Web Crypto APIs, starting from key generation, various encryption algorithms, implementation techniques, and more. The session will include live demos, coding examples, and a fun side project that I created as a result of learning about the Web Crypto APIs. Let’s set out on a collaborative learning adventure and delve into the functionalities of Web Crypto APIs.`,
      socialShareImage: "social-share/aakansha.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "kilian-valkhof",
    speaker: {
      name: "Kilian Valkhof",
      pronouns: "he/him",
      profilePicturePath: "/speakers/kilian.png",
      bio: "Kilian is a front-end developer with over 20 years of experience that switched from building websites to building apps to build websites with. He is interested in modern web development, desktop app development and new technologies, and regularly speaks about topics like responsive websites, design systems and Electron. Kilian is a frequent open source contributor.",
      location: "Zoetermeer in The Netherlands",
      socialMediaHandle: "@kilian",
      socialMediaUrl: "https://twitter.com/kilian",
      socialMediaType: "twitter",
      website: "https://kilianvalkhof.com",
      work: "",
      role: "",
      workURL: "",
      imageAlign: "left",
    },
    talk: {
      title: "Don't use JS for that: Moving features to CSS and HTML",
      abstract: `If you've been building websites for a while you ""know"" that some things require JS and that's just the way it is. Turns out, spec writers and browser makers both are working hard to find common JS patterns and implementing them in CSS and HTML. Things like accordions, auto-suggest, smooth scrolling, dialogs are all available without JS. Looking a little ahead, things like parallax scrolling, styleable selects and component-dependent styling are expected to make their CSS-debut as well.

In this talk I go through common patterns, explain how they can be implemented in CSS and HTML, how that's better and what accessibility implications they have, both for features available today and feature available soon™️.`,
      socialShareImage: "/social-share/kilian.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "francisca-beatriz-medina-concha",
    speaker: {
      name: "Francisca Beatriz Medina Concha",
      pronouns: "",
      profilePicturePath: "/speakers/francisca.png",
      bio: "Specialized in graphic design, UX/UI, media arte and web development, I have garnered experience in both corporate and educational sectors. As an active volunteer at JSConf Chile, Fundación Antonia, Technovation Girls, and Women Who Code, I am recognized for my communication skills, leadership, and commitment to inclusion in STEAM. I possess a proven track record in teaching and simplifying complex technical concepts. My active participation in tech communities and a unique perspective on user interaction design position me as an influential voice in merging algorithmic art with programming, particularly in JavaScript.",
      location: "Santiago, Chile",
      socialMediaHandle: "@frani.be",
      socialMediaUrl: "https://www.instagram.com/frani.be/",
      socialMediaType: "instagram",
      website: "https://frani.be/",
      work: "LATAM Airlines",
      role: "",
      workURL: "https://www.latamairlines.com/cl/es",
      imageAlign: "right",
    },
    talk: {
      title:
        "Infinite Patterns in the Digital Canvas: Unleashing Creativity with JavaScript in Algorithmic Art",
      abstract: `This talk highlights the transformative role of JavaScript in creating dynamic, self-generated artworks. Delve into how libraries like p5.js, Three.js, and Paper.js are empowering artists and programmers to push the boundaries of digital creativity.

We'll journey through the evolution of algorithmic art, showcasing how JavaScript enables the creation of intricate patterns and complex visual compositions. The presentation will feature engaging examples and demonstrations, illuminating the power of JavaScript in crafting interactive, ever-evolving art pieces. Concluding with practical insights and resources, this talk is a gateway for anyone eager to explore the fusion of art and code in the digital age.`,
      socialShareImage: "social-share/francisca.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "david-khourshid",
    speaker: {
      name: "David Khourshid",
      pronouns: "He/him",
      profilePicturePath: "/speakers/david.png",
      bio: "David is a software engineer who loves playing piano and is passionate about animations, state machines, cutting-edge user interfaces, and open-source. Previously at Microsoft, he is now the founder of Stately.ai, a startup focused on making even the most complex application logic visual and accessible to developers and non-developers alike.",
      location: "Orlando, Florida, USA",
      socialMediaHandle: "@davidkpiano",
      socialMediaUrl: "https://twitter.com/davidkpiano",
      socialMediaType: "",
      website: "",
      work: "",
      role: "",
      workURL: "",
      imageAlign: "right",
    },
    talk: {
      title: "The actor model, behind the scenes",
      abstract: `Let's set the stage. You have a complicated application with many parts that need to work together, and you want to avoid making your code an unscripted mess. Enter the Actor Model, a very old concept that is relevant now more than ever. In this talk, you'll learn how the actor model orchestrates tasks, ensuring each actor knows its part, communicates effectively, and remains isolated from potential mishaps. We'll rehearse with some practical, visual demos showing how actors can be useful in the frontend, backstage (er, backend), and everywhere in-between, so that your code can give its very best performance.`,
      socialShareImage: "social-share/david.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "ayoub-alouane",
    speaker: {
      name: "Mohamed Ayoub Alouane",
      pronouns: "He/Him",
      profilePicturePath: "/speakers/ayoub.png",
      bio: `I am Ayoub Alouane, working as a DevRel and TechLead in Adservio, Moroccan coming from Africa, starting a new journey in France, as a Speaker and Trainer, I'm trying to build a consciousness about web performance in our community.`,
      location: "Paris, France",
      socialMediaHandle: "@alouane_med",
      socialMediaUrl: "https://twitter.com/alouane_med",
      socialMediaType: "twitter",
      website: "https://dev.to/ayoub_alouane",
      work: "Adservio",
      role: "DevRel and TechLead",
      workURL: "https://www.adservio.fr/",
      imageAlign: "left",
    },
    talk: {
      title: "Web Performance: The African Case",
      abstract: `We often assume that everyone has a good internet connection and hardware with high specifications. While this might be false in some regions, it is not the case worldwide. I want to draw attention to Africa, where many countries struggle with poor 3G connections that are costly, depending on the amount of data consumed. This is due to the continent's limited infrastructure, leading to a reliance on mobile connections.

Given these circumstances, efficient data usage with a good web performance becomes a priority. So our session will focus on the challenges faced by African users and developers, and how downloading large amounts of JavaScript is exacerbating data consumption and performance issues. We will explore how existing frameworks tried to solve the problem and how Qwik did with its innovative approach to resumability, presents a transformative solution to these challenges. Unlike traditional SPAs, Qwik's resumability drastically reduces the initial JavaScript payload, enabling applications to become interactive more quickly, even on slow connections.`,
      socialShareImage: "social-share/ayoub.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "daria-caraway",
    speaker: {
      name: "Daria Caraway",
      pronouns: "She/her",
      profilePicturePath: "/speakers/daria.png",
      bio: `Daria is a Speaker and Senior Software Engineer at Netflix where she builds web applications for Netflix Content Strategists. She has been an avid lover of TypeScript for the past 9 years and enjoys helping people level up their React and TypeScript skills. When not coding, Daria is often found traveling, eating good food, and traveling to eat good food.`,
      location: "Denver, Colorado, USA",
      socialMediaHandle: "@dariacaraway",
      socialMediaUrl: "https://twitter.com/dariacaraway",
      socialMediaType: "twitter",
      website: "https://www.dariacaraway.com/",
      work: "Netflix",
      role: "Software Engineer",
      workURL: "https://www.netflix.com/",
      imageAlign: "left",
    },
    talk: {
      title: "Decoding Perplexing TypeScript",
      abstract: `Have you ever come across a TypeScript type that made you go “nope” and close the file? Have you ever seen a type definition that had so many generic letters and nested statements, it felt utterly incomprehensible? In this talk, I will break down and decode some of the most perplexing TypeScript type definitions I have found in real life. You will learn how to make sense of these complex types and the TypeScript building blocks that compose them.`,
      socialShareImage: "social-share/daria.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "ante-tomic",
    speaker: {
      name: "Ante Tomić",
      pronouns: "He/him",
      profilePicturePath: "/speakers/ante.png",
      bio: `Ante is a skilled and hearing-impaired Senior Software Engineer at Infobip with a strong interest in Web and the technical side of it. With permanent 55% hearing loss in both ears, he’s a testament to the power of determination and hard work which often speaks louder than words. He has a big love and soft spot for rubber ducks and excels at presenting and educating, React, JavaScript, Node.JS, build processes, automation and improving developer and customer experiences. He always shares his own experiences, especially in accessibility. Ante's goal is to always improve, making things more efficient and user-friendly.

When he steps away from coding, Ante enjoys discovering new music, long and scenic walks, and capturing the beauty of the world through his hobby of photography, traveling, and travel blogging. As a big extrovert at heart, he’s always up for sharing a laugh, interesting travel stories, or discussing the latest tech topics. Approachable and driven, Ante shows that hearing impairment is just a part of his journey, not the end of his story. If you have a moment, his doors are always open for a chat, so don't hesitate to start a discussion with him - he is more than happy to connect and talk with you!`,
      location: "Zagreb, Croatia",
      socialMediaHandle: "@antetmc2",
      socialMediaUrl: "https://twitter.com/antetmc2",
      socialMediaType: "twitter",
      website: "https://antetomic.hashnode.dev/",
      work: "Infobip",
      role: "Software Engineer",
      workURL: "https://www.infobip.com/",
      imageAlign: "right",
    },
    talk: {
      title:
        "Hear! Hear! An accessibility tale from a hearing-impaired Senior Software Engineer",
      abstract: `If someone is talking to you, you can hear them well, but what if you couldn’t? Explore the world of a hearing-impaired developers and understand the struggles, triumphs, and tips for inclusivity in this inspirational and experiential session. Join to hear an experiential story and an unique journey that shows that disability is no barrier to success in tech. Discover how to make your applications and content accessible to those with hearing loss, and learn how to collaborate effectively with hearing-impaired developers and support them. Don't miss this exciting opportunity to break down barriers and unlock the potential of inclusive development.`,
      socialShareImage: "social-share/ante.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "marcus-bointon",
    speaker: {
      name: "Marcus Bointon",
      pronouns: "He/him",
      profilePicturePath: "/speakers/marcus.png",
      bio: `I'm the maintainer of PHPMailer, possibly the most popular code for sending email in the world, a top-10 PHP project on GitHub (with over 9,900 forks and 21,000 stars, and 56 million downloads on packagist), and used in WordPress, Drupal, Yii, SugarCRM and many other projects. I have ansnwered over 1,000 questions about PHPMailer and email on StackOverflow (where I'm also the top answerer for the SPF and DKIM tags), so I'm very familiar with the kind of problems beginners in particular run into. PHPMailer is also at the heart of the privacy-first email marketing company I run, smartmessages.net.`,
      location: "Geneva, Switzerland",
      socialMediaHandle: "@SynchroM",
      socialMediaUrl: "https://twitter.com/SynchroM",
      socialMediaType: "twitter",
      website: "https://marcus.bointon.com/",
      work: "",
      role: "",
      workURL: "",
      imageAlign: "right",
    },
    talk: {
      title: "Picking the low-hanging fruit – easy pentest wins",
      abstract: `Penetration tests are a critical step in securing web services, but often much of their effort is wasted reporting simple things that can easily be avoided in advance.
We will look at security issues that are often found in pentests at all levels in the deployment stack, concentrating on those that can be resolved quickly and easily in one place (in any language), and show how to fix them, freeing up expensive pentester resources for tackling more complex challenges.`,
      socialShareImage: "social-share/marcus.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "keren-kenzi",
    speaker: {
      name: "Keren Kenzi",
      pronouns: "",
      profilePicturePath: "/speakers/keren.png",
      bio: "Keren is a senior software developer with over a decade of experience in the industry. She holds an M.Sc. in Computer Science and is passionate about React and learning new technologies. Keren volunteers as a program manager at Baot, a community that supports women in R&D in their professional growth. She instructs and inspires people to write blogs in her tech blogging workshops. Keren has experience as a dev community leader and a co-organizer of meetups and events. And in her not-so-spare time, she studies psychology. Her hobbies include drawing, photography, and singing.",
      location: "Israel, Tel-Aviv",
      socialMediaHandle: "Keren Kenzi",
      socialMediaUrl: "https://www.linkedin.com/in/keren-kenzi/",
      socialMediaType: "linkedin",
      website: "https://medium.com/@kkenzi",
      work: "",
      role: "",
      workURL: "",
      imageAlign: "left",
    },
    talk: {
      title: "Applied Psychology: Psychology-based UI improvements",
      abstract: `As frontend developers, we implement given UI designs. But wouldn’t it be great if we could provide input and suggest psychology-based improvement ideas? And thus, making the product better and taking a more proactive role in the development process. In this talk, I will share with you knowledge from the field of cognitive psychology that you can apply to UI designs to improve them.`,
      socialShareImage: "social-share/keren.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "isabela-moreira",
    speaker: {
      name: "Isabela Moreira",
      pronouns: "she/her",
      profilePicturePath: "/speakers/isabela.png",
      bio: `Isabela is a software engineer at Microsoft, building a design system and component library to bring coherence to internal products. Previously at Google and various startups, she's found her home wearing many hats at Microsoft - from engineering, to design work, to community support and outreach.

Isabela is a huge fan of the intersection of code and design and loves mechanical keyboards. As a Latina in tech, she's an advocate for other minorities and frequently speaks out and provides resources on Twitter.`,
      location: "Seattle, WA, USA",
      socialMediaHandle: "@isabelacmor",
      socialMediaUrl: "https://twitter.com/isabelacmor",
      socialMediaType: "twitter",
      website: "",
      work: "Microsoft",
      role: "Software Engineer",
      workURL: "https://www.microsoft.com/",
      imageAlign: "left",
    },
    talk: {
      title: "Building empathy and accessible apps",
      abstract: `Everyone knows accessibility is important, but even with the best of intentions, we still might not be achieving an accessible design in our apps. In this talk, I'll help the audience build their empathy for disabled users through the eyes of someone in the disabled community (myself), while giving them the tools they need to tackle accessibility both from a design and implementation standpoint.`,
      socialShareImage: "social-share/isabela.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "nicolo-ribaudo",
    speaker: {
      name: "Nicolò Ribaudo",
      pronouns: "He/him",
      profilePicturePath: "/speakers/nicolo.png",
      bio: "I’m a developer who loves open source and JavaScript. I work at Igalia, where I help push the web forward, and I maintain Babel — the JavaScript compiler. I’m also a TC39 delegate and I’ve helped developing different JavaScript proposals over the years.",
      location: "Turin, Italy",
      socialMediaHandle: "@NicoloRibaudo",
      socialMediaUrl: "https://twitter.com/NicoloRibaudo",
      socialMediaType: "twitter",
      website: "https://nicr.dev/",
      work: "Igalia",
      role: "",
      workURL: "https://www.igalia.com/",
      imageAlign: "right",
    },
    talk: {
      title: "What's coming next to JavaScript?",
      abstract: `JavaScript is continuously evolving, with new features coming every year. Some say that it happens to fast, but everybody wishes some specific proposal would be implemented by browser _right now_.

What new features can we use in 2024, and what can we expect soon? What are some more long-term proposed features that will have a potential huge impact of the ecosystem? We'll go together through these questions, while learning at the same time how JavaScript gets standardized!`,
      socialShareImage: "social-share/nicolo.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "leandro-ostera",
    speaker: {
      name: "Leandro Ostera",
      pronouns: "he/him/they/them",
      profilePicturePath: "/speakers/leandro.png",
      bio: "Leandro is a neurodivergent Latin engineer, writer, leader and founder, living in Sweden. In his 10+ years in the industry he's worked at companies like Klarna, Spotify, Walnut, and several startups. In their spare time, Leandro enjoys building compilers and doing street photography.",
      location: "Stockholm, Sweden",
      socialMediaHandle: "@leostera",
      socialMediaUrl: "https://twitter.com/leostera",
      socialMediaType: "twitter",
      website: "",
      work: "Abstract Machines",
      role: "Engineer",
      workURL: "https://www.abstractmachines.dev/",
      imageAlign: "right",
    },
    talk: {
      title: "Types as Accessibility",
      abstract: `Building software is hard, we all know that, but what exactly is hard about it? What cognitive load does it put on us?

Join me on a journey that started with the λ calculus and continues almost 10 decades later, inventing new ways to deal with complexity as we become more and more aware of our inherent cognitive limitations.

We'll learn about the history of programming languages, why type systems exist, how all typed languages have a lot more in common than we think, and how now I see Types as a Developer Accessibility tool that helps me keep complexity at bay when I work with complicated domains, growing teams, large codebases, and perhaps the most underestimated of enemies we have when building software products: time to market.`,
      socialShareImage: "social-share/leandro.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "aleksandra-sikora",
    speaker: {
      name: "Aleksandra Sikora",
      pronouns: "she/her",
      profilePicturePath: "/speakers/aleksandra.png",
      bio: "Aleksandra is an open-source developer at The Guild based in Wrocław, Poland. Previously a tech lead for the Hasura Console and a lead maintainer of Blitz.js. Deeply passionate about open-source, TypeScript and dedicated to staying up to date with the JavaScript ecosystem. In love with all things climbing — hiking, via ferratas, rock climbing.",
      location: "Poland, Wrocław",
      socialMediaHandle: "@aleksandrasays",
      socialMediaUrl: "https://twitter.com/aleksandrasays",
      socialMediaType: "twitter",
      website: "https://aleksandra.codes/",
      work: "EdgeDB",
      role: "",
      workURL: "https://www.edgedb.com/",
      imageAlign: "left",
    },
    talk: {
      title: "Backend Essentials for Frontend Developers",
      abstract: `With the rise of full-stack frameworks and the blurred line between frontend and backend, it's becoming more and more important to have a good understanding of backend mechanics. In this talk, we'll be diving into some key backend concepts like webhooks, background jobs, cron jobs, and more. These concepts are really important for front-end developers, especially as their applications start getting more complex. This talk will provide you with guidance on when, how, and why you should integrate these components into your projects.`,
      socialShareImage: "social-share/aleksandra.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "max-millington",
    speaker: {
      name: "Max Millington",
      pronouns: "",
      profilePicturePath: "/speakers/max.png",
      bio: "Max is the engineering manager at OsmosisLabs. He lives with his family in the mountains of Montana.",
      location: "Kalispell, Montana, USA",
      socialMediaHandle: "",
      socialMediaUrl: "",
      socialMediaType: "",
      website: "",
      work: "OsmosisLabs",
      role: "Engineering Manager",
      workURL: "https://osmosis.zone/",
      imageAlign: "left",
    },
    talk: {
      title:
        "The Platonic Paradox in Software Development: Ideal Forms vs. Practical Realities in JavaScript",
      abstract: `This talk explores the intriguing parallels between Plato’s Theory of Forms and modern JavaScript software development practices. It critically examines how the pursuit of 'ideal' coding practices and architectures, inspired by Platonic philosophy, can both enhance and hinder practical software engineering.`,
      socialShareImage: "social-share/max.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "shikhar-kapoor",
    speaker: {
      name: "Shikhar Kapoor",
      pronouns: "He/Him",
      profilePicturePath: "/speakers/shikhar.png",
      bio: "I am Shikhar, currently working as a Software Architect at PhonePe. I have been helping companies build and scale web applications for 14 years. When I’m not staring into the screen, I find solace in playing Bach on the piano and nurturing a tiny garden on my balcony.",
      location: "India",
      socialMediaHandle: "Shikhar Kapoor",
      socialMediaUrl: "https://www.linkedin.com/in/shikhar-kapoor-5a373815",
      socialMediaType: "linkedin",
      website: "",
      work: "PhonePe",
      role: "Software Architect",
      workURL: "https://www.phonepe.com",
      imageAlign: "right",
    },
    talk: {
      title:
        "Safeguarding web applications against token theft: Fortifying security and trust in web browsers",
      abstract: `While standards such as OAuth 2.0 have effectively established a robust framework for addressing the complexities of Authentication and Authorization, web developers all over the world often grapple with the challenge of securely storing and retrieving the tokens essential for these purposes, particularly in browsers.

In my talk, I aim to introduce a fresh approach for generating and storing tokens known as DPoP (Demonstrating Proof of Possession). DPoP is an emerging standard that extends the current OAuth 2.0 framework, offering an innovative solution to the challenges faced by web developers in token management. This approach is a potential game changer, that can significantly elevate the security of prevalent authentication and authorization mechanisms on the web today.
`,
      socialShareImage: "social-share/shikhar.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "amanda-martin",
    speaker: {
      name: "Amanda Martin",
      pronouns: "she/her",
      profilePicturePath: "/speakers/amanda.png",
      bio: "Amanda is a developer advocate for Wix and Open Source enthusiast supporting the EddieHub Community. She had worked previously in web and software development all over the stack. At her core, she is a creative problem solver and passionate about developer experience and success. In her free time you can find her spoiling her dogs, cycling, and testing new recipes.",
      location: "Baltimore, MD USA",
      socialMediaHandle: "@hey_amandam",
      socialMediaUrl: "https://twitter.com/hey_amandam",
      socialMediaType: "twitter",
      website: "",
      work: "Wix",
      role: "Developer Advocate",
      workURL: "https://www.wix.com/",
      imageAlign: "right",
    },
    talk: {
      title:
        "We're Not Robots: A Developer's Journey to Success, Creativity, and Avoiding Burnout",
      abstract: `Ever pondered what it takes to unlock your full potential as a developer? Venture into the realm where hiring managers' expectations and social media buzz intersect. In a world that seemingly demands developers to live and breathe code 24/7, we will challenge the notion that perpetual coding is the sole path to success.

      In this session Amanda will explore her personal dev journey, challenging the notion that being a successful developer requires non-stop dedication.  Drawing from research insights, she will delve into the cognitive needs of our brains, emphasizing the importance of creating space for creativity and passion in every pursuit. We will also explore the developer workday, proposing strategies for both developers and managers to foster an environment that nurtures creativity and ensures a balanced and fulfilling professional life. Join us in reshaping the narrative around developer productivity, creativity, and burnout.`,
      socialShareImage: "social-share/amanda.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "gyorgy-kovacs",
    speaker: {
      name: "György Kovács",
      pronouns: "",
      profilePicturePath: "/speakers/gyorgy.png",
      bio: "I'm Gyuri, originally from Hungary, currently living in Austria and trying to get people to pronounce my name correctly. Eternally curious about all things programming, whether it's web frontends, CPU architectures, or hardcore database optimization. When away from a computer, I enjoy board games, bouldering, and books.",
      location: "Graz, Austria",
      socialMediaHandle: "@pkt_zer0",
      socialMediaUrl: "https://twitter.com/pkt_zer0",
      socialMediaType: "twitter",
      website: "",
      work: "DynaTrace",
      role: "",
      workURL: "https://www.dynatrace.com/",
      imageAlign: "left",
    },
    talk: {
      title: "Frameworkless, frictionless, free",
      abstract: `You awaken in the barren wasteland of your mind. Released from the shackles of your NPM dependencies, you are alone, but free. With only your trusty TypeScript compiler at your side, how much can you build? How far can you go? And when you get there, will you find only despair... or joy?

Time to find out.`,
      socialShareImage: "social-share/gyorgy.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "toluwanimi-ajewole",
    speaker: {
      name: "Toluwanimi Ajewole",
      pronouns: "She",
      profilePicturePath: "/speakers/toluwanimi.png",
      bio: `Toluwanimi Ajewole is an engineer who aspires to share her knowledge of programming and collaboration within software engineering teams. She currently works at N26 Bank as a senior web engineer in Berlin, Germany.`,
      location: "",
      socialMediaHandle: "toluwanimi-ajewole",
      socialMediaUrl: "www.linkedin.com/in/toluwanimi-ajewole",
      socialMediaType: "linkedin",
      website: "",
      work: "N26",
      role: "Engineer",
      workURL: "https://n26.com",
      imageAlign: "left",
    },
    talk: {
      title: "Oh no I'm stuck! A guide to detangling a complex codebase",
      abstract: `Good news: You are a new joiner in your dream company or picking up an exciting new JS project.

Bad news: You are stuck trying to comprehend the whole system. Much like an actual spider web, complex codebases are intricate systems made up of lines of code, each telling their own story. Cue doubts and imposter syndrome.

But even better news: The great news is that we are comfortable with breaking down complex problems and systems into smithereens as engineers, with a codebase being no exception. In this talk, we will discuss some strategies that are essential to understanding and finding clarity in complex codebases.
`,
      socialShareImage: "social-share/toluwanimi.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "pratim-bhosale",
    speaker: {
      name: "Pratim Bhosale",
      pronouns: "She/Her",
      profilePicturePath: "/speakers/pratim.png",
      bio: "Pratim Bhosale is a Full Stack Developer and Developer advocate at SurrealDB. She is also the maintainer of the SurrealDB Go SDK. Pratim has worked with multiple DevTool companies and helped them with Developer Experience. She enjoys writing technical articles and building projects with SurrealDB. She actively supports Women in Tech and hosts multiple meetups/workshops for the community. Pratim enjoys baking and brewing kombucha in her leisure time. Pratim has spoken at conferences like GohperCon, Golab, DevBCN and JSconf.",
      location: "Bengaluru, India",
      socialMediaHandle: "@BhosalePratim",
      socialMediaUrl: "https://twitter.com/BhosalePratim",
      socialMediaType: "twitter",
      website: "https://github.com/hibernationTheory/",
      work: "SurrealDB",
      role: "Developer Advocate",
      workURL: "https://surrealdb.com/",
      imageAlign: "right",
    },
    talk: {
      title:
        "Building Privacy-Friendly Applications with Ollama, Vector Functions, and LangChainJS",
      abstract: `Today, most AI applications send data to LLM cloud providers, raising privacy concerns. This talk introduces a new way to build AI applications that keep everything local on your computer. By running LLMs locally with Ollama, we avoid transmitting sensitive information to external cloud providers. We will highlight LangChain's ability to create versatile agents capable of handling tasks autonomously while protecting sensitive data.
In this talk, we’ll see

1. Overview of cloud-based AI privacy issues and the importance of local AI.
2. Detailed insights into generating embeddings with Ollama for vector searches and demonstrating how LangChain agents can perform tasks such as document summarisation and API interactions, all while maintaining data privacy
3. A practical demonstration of these tools and discussion of real-world use cases.`,
      socialShareImage: "social-share/pratim.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
  {
    published: true,
    slug: "kevin-maes",
    speaker: {
      name: "Kevin Maes",
      pronouns: "He/him/his",
      profilePicturePath: "/speakers/kevin.png",
      bio: "Kevin started programming back when Flash animation was the new hotness, working at startups in Tel Aviv. He’s done development, consulting, and engineering management at NYC companies like Giant Machines, NBC Universal, and Thomson Reuters. He is currently building Stately Studio as an engineer at Stately.ai. Kevin moved to Spain last year with his family where he enjoys good food and sunshine.",
      location: "Malaga, Spain",
      socialMediaHandle: "@kvmaes",
      socialMediaUrl: "https://twitter.com/kvmaes",
      socialMediaType: "twitter",
      website: "https://stately.ai/blog",
      work: "Stately.ai",
      role: "Engineer",
      workURL: "https://stately.ai/",
      imageAlign: "right",
    },
    talk: {
      title:
        "Evolving JavaScript: Cultivating Genetic Algorithms for Creative Coding",
      abstract: `When was the moment you first realized that coding was pure joy? We all need a well-deserved break from feature releases, meetings, bug fixes, tech debt, and 10X burnout! Join me in exploring delightful, interactive experiences, inspired by nature, that we as JavaScript developers can create with our everyday coding skills. We’ll learn about genetic algorithms, what they’re good for, and how to code with them, including a demo. Adding state machines and generative art into the mix, our small step into the world of AI programming will enable us to produce problem solving agents that are as intelligent as they are beautiful!`,
      socialShareImage: "social-share/kevin.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },

  {
    published: true,
    slug: "artem-and-dmitry",
    speaker: {
      name: "Artem Kobzar and Dmitry Makhnev",
      pronouns: "He/Him",
      profilePicturePath: "/speakers/artem-dimtry.png",
      bio: `Artem is working for JetBrains on the compiler from Kotlin to WebAssembly. Also, he's helping with the SourceMap Specification as an invited expert in TC39.
      At night (if he's not fixing production), he likes lifting heavy weights in the gym or/and drinking good Chinese tea.

      Dmitry is a software developer at WebStorm. Before almost 14 years he was a frontend developer. Ex-member of HolyJS conference selection committee, co-organizer of JetBrains JavaScript Day.
      He loves his son, Chinese tea, South Holland, bicycle rides, great technical talks and art (Impressionism++).
      `,
      location: "Netherlands",
      socialMediaHandle: "",
      socialMediaUrl: "",
      socialMediaType: "twitter",
      website: "",
      work: "JetBrains",
      role: "Developer Advocate",
      workURL: "https://www.jetbrains.com",
      imageAlign: "left",
    },
    talk: {
      title:
        "Unexpected monad. Is safe error handling possible in JavaScript/TypeScript?",
      abstract: `Error handling is an extremely hard part of every JavaScript project that can produce a lot of bugs. Usually, developers use just the try/catch as a standard approach for the error handling, which is not so ideal solution because this statement catches anything which was thrown by the “throw” statement, as results developer:

      - need extra conditions for handling restricted classes of exceptions;
      - should rethrow errors or it can be eaten up;
      - can’t separate errors and exceptions;

      In this talk, you’ll learn how to implement safe error handling (without mentioned problems) in a project and with perks like typed errors inside handlers, errors documentation of functions/methods without JSDoc and comments, and the ability to log your errors without a break of the error handling flow.`,
      socialShareImage: "social-share/artemdmitry.png",
      youtubeId: "",
      flickrAlbumId: "",
    },
  },
];

export default TALKS;
