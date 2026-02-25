import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jamshid",
  lastName: "Normatov",
  name: `Normatov Jamshid`,
  role: " Freelancer va graphics,motion,web designer",
  avatar: "/images/men.jpg",
  email: "normatoff_bro@gmail.com",
  location: "Asia/Tashkent", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Uzbek", "Tadjik"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Email orqali bog'lanish </>,
  description: <>Barcha fikr,xatoliklarni yoki boshqa ishlar boyicha murojaat etishingiz mumkun</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/ignor.sv",
  },
  {
    name: "telegram",
    icon: "telegram",
    link: "https://t.me/justnormatoff",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:nomatoff_bro@gmail.com}`,
  },
];

const home: Home = {
  path: "/about",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}ning Portfoliosi`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Normatov Jamshid portfolio</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Men  {hh.uz} saytida 100+ loyihalarimni bajarganman
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/normatoffjama",
  },
  intro: {
    display: true,
    title: "Tanishtiruv",
    description: (
      <>
       2020-yildan beri dasturlash va ko'p turli dizaynerlik bilan shug'ullanib kelaman.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Mahoratlar",
    experiences: [
      {
        company: "",
        timeframe: "",
        role: "Senior Dasturlovchi",
        achievements: [
          <>
            Tepada aytib o'tganimdek, 2020-yilda ushbu sohaga qiziqish uygonib uni mukammal o'rganib chiqdm. HH.uz saytlarida 100dan ortiq proektlarimni muvaffaqiyatli bajarganman.
          </>,
         
        ],
        images: [
          // optional: leave the array empty if you don't want to display image
        ],
      },

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Ta'lim olgan joylarim",
    institutions: [
      {
        name: "IT CENTER Ferghana",
        description: <>Atiga 4oyda Senior-Professional  ustozlar tomonidan dasturlash darslarini o'qib muammolarsiz website va ilovalar tuzishni o'rganganman.</>,
      },
        ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <></>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
