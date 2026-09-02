// Media entries are ordered the same way the original markup rendered them:
// video first when a block has one, then images.
const img = (src) => ({ type: 'image', src })
const video = (src) => ({ type: 'video', src })

export const projects = {
  one: {
    title: 'Quinta do Outeiro',
    date: 'November 2025',
    briefTitle: 'Bringing local events to the virtual landscape',
    briefText:
      'Quinta do Outeiro required a digital presence that mirrored the elegance of its physical space. My objective was to bridge the gap between the venue and its potential guests through a bespoke UI/UX design. The project scope encompassed two distinct experiences: a captivating public-facing website designed to convert visitors into clients, and a robust back-office system to streamline event management. The resulting interface harmonizes aesthetic appeal with functional clarity, ensuring that the digital journey is as seamless and inviting as the venue itself.',
    headerImage: 'assets/Quinta do Outeiro/Header.png',
    blocks: [
      {
        title: 'Website',
        text: 'The design centers on digital hospitality. I created an interface that feels spacious and unhurried, using refined typography and a warm palette. The layout prioritizes visual storytelling, guiding users effortlessly from discovery to booking without the clutter.',
        media: [img('assets/Quinta do Outeiro/Website.png')],
      },
    ],
  },
  two: {
    title: 'TicketWave',
    date: 'October 2025',
    briefTitle: 'Streamlining large-scale event credentials',
    briefText:
      'Ticketwave is a specialized internal management tool designed to handle the complex logistics of event accreditation. My role involved the end-to-end UI/UX design, with a strict focus on functionality and speed. The challenge was to organize high volumes of sensitive data into a system that allows event organizers to issue, track, and manage credentials efficiently during high-pressure scenarios.',
    headerImage: 'assets/Ticketwave/Header.png',
    blocks: [
      {
        title: 'Website',
        text: 'For this internal tool, utility was the primary metric of success. The interface was built to minimize cognitive load for operators managing thousands of entries. I prioritized a clean, high-contrast dark mode to reduce eye strain during long shifts and designed a layout that maximizes data visibility. The UX focuses on rapid scanning and quick actions, ensuring that critical tasks like verifying status or revoking access can be performed instantly without friction.',
        media: [img('assets/Ticketwave/Website.png')],
      },
      {
        title: 'Branding',
        text: 'While the platform is utilitarian, it needed a professional face. I developed a concise visual identity, including a geometric logo that combines the letter “T” with a wave motif. The branding is intentionally simple and modern, designed to sit quietly in the corner of the interface without distracting from the data at hand.',
        media: [img('assets/Ticketwave/Branding.png')],
      },
    ],
  },
  three: {
    title: 'Patudos',
    date: 'May 2025',
    briefTitle: 'Revitalizing the face of animal rescue',
    briefText:
      "For 'Os Patudos', our team of five undertook a complete 360-degree rebranding to modernize the association's image. We moved away from the traditional, somber aesthetic of animal shelters and introduced a vibrant, energetic identity. The project spanned the creation of a new logo and visual system, a custom WordPress website for adoptions, promotional posters, social media strategy, and a corporate video to tell their story.",
    headerImage: 'assets/Patudos/Header.png',
    blocks: [
      {
        title: 'Website',
        text: 'We developed a custom WordPress platform designed to simplify the adoption process. The UI features a clean, card-based layout that puts the animals front and center. By prioritizing intuitive navigation and clear calls to action, we ensured that finding a new best friend is a seamless and joyful experience for potential adopters.',
        media: [img('assets/Patudos/website.png')],
      },
      {
        title: 'Posters',
        text: 'To amplify the association’s voice in the physical world, we designed a series of high-impact posters. Utilizing the new brand’s bold typography and distinct color palette, these print assets were crafted to grab attention on the street, blending playful illustrations with urgent messaging to drive community support.',
        media: [img('assets/Patudos/posters.png')],
      },
      {
        title: 'Social Media',
        text: 'Consistency is key to building trust. We created a suite of flexible social media templates for Instagram and Facebook. These assets allow the association to share daily updates, adoption success stories, and urgent appeals while maintaining a cohesive and recognizable visual identity across all feeds.',
        media: [img('assets/Patudos/socialMedia.png')],
      },
      {
        title: 'Corporate Video',
        text: 'Beyond static visuals, we produced a corporate video to capture the heart of the organization, it’s creator. From scripting to final edit, we crafted a narrative that highlights the tireless dedication of the volunteers and the resilience of the animals, evoking an emotional connection that drives engagement and donations.',
        media: [img('assets/Patudos/corporateVideo.png')],
      },
      {
        title: 'Branding',
        text: "The core of the project was a comprehensive identity system. We developed a logo merging the concept of 'love' with animal silhouettes, paired with a warm, energetic color scheme. This included a full style guide, custom iconography, and stationery (business cards, letterheads) to ensure 'Os Patudos' looks professional and trustworthy at every touchpoint.",
        media: [
          img('assets/Patudos/Branding1.png'),
          img('assets/Patudos/Branding2.png'),
          img('assets/Patudos/Branding3.png'),
          img('assets/Patudos/Branding4.png'),
        ],
      },
    ],
  },
  four: {
    title: 'Squid Games',
    date: 'December 2024',
    briefTitle: 'A motion tribute to Squid Game',
    briefText:
      'As a team of five, we produced a comprehensive 2D animated opening title sequence as a homage to the hit series Squid Game. Our goal was to capture the show’s darker underlying themes through motion graphics. The project encompassed the entire production pipeline, from initial concept and visual identity to storyboarding, style frames, and the final execution in Adobe After Effects.',
    headerImage: 'assets/Squid Games/Header.png',
    blocks: [
      {
        title: 'Video',
        text: 'The final animation combines tension and rhythm. We use agressive movement to mimic the unsettling atmosphere of the series. By carefully timing the motion to the music, we created a sequence that feels both familiar to fans of the show and distinct as a standalone piece of motion design.',
        media: [video('assets/Squid Games/Video.mp4')],
      },
      {
        title: 'Visual Identity',
        text: "We established a visual language grounded in the show’s iconic aesthetic. The palette contrasts the stark 'Guard Pink' and 'Player Green' against a deep void, while the shapes (circle, triangle, square) serve as the primary graphic elements. This system ensured consistency across every frame of the animation.",
        media: [img('assets/Squid Games/VisualIdentity.png')],
      },
      {
        title: 'Storyboard',
        text: 'Before setting any keyframes, we mapped out the sequence to ensure a logical flow. These storyboards served as our blueprint, allowing us to experiment with camera movements, transitions, and composition. This planning phase was crucial for coordinating the workload among five designers.',
        media: [img('assets/Squid Games/Storyboard.png')],
      },
      {
        title: 'Style Frames',
        text: "To bridge the gap between the sketches and the final video, we developed high-fidelity style frames. These assets allowed us to lock in the lighting, texture, and typographic hierarchy. They served as the 'north star' for the animation phase, ensuring that the final render maintained a cohesive, cinematic look.",
        media: [
          img('assets/Squid Games/StyleFrames1.png'),
          img('assets/Squid Games/StyleFrames2.png'),
          img('assets/Squid Games/StyleFrames3.png'),
        ],
      },
    ],
  },
  five: {
    title: 'SAL',
    date: 'May 2024',
    briefTitle: 'Celebrating the Portuguese language',
    briefText:
      'SAL is a fictional festival dedicated to the rich diversity of the portuguese language and culture across the globe. As a team of three, we developed a comprehensive brand identity that honors the distinct roots of lusophone countries while celebrating their shared connection. The project spanned the creation of a dynamic logo system, large-scale advertising, environmental signage, and merchandise.',
    headerImage: 'assets/SAL/Header.png',
    blocks: [
      {
        title: 'Branding',
        text: 'The visual identity is built on a modular logo system. We designed distinct graphical elements representing each continent where portuguese is spoken, capturing their unique cultural visual codes. These individual symbols fuse together to form the master “SAL” logo, acting as a visual metaphor for how the language bridges different worlds into a single celebration.',
        media: [img('assets/SAL/Branding.png')],
      },
      {
        title: 'Outdoors/Posters/MUPI',
        text: "We applied the identity to a range of physical advertising formats, including billboards, posters, and MUPIs. The design utilizes the vibrant color palette and bold typography to create high-impact visuals. The goal was to communicate the festival's energy and cultural breadth instantly to passersby in an urban environment.",
        media: [
          img('assets/SAL/Outdoors1.png'),
          img('assets/SAL/Outdoors2.png'),
          img('assets/SAL/Outdoors3.png'),
        ],
      },
      {
        title: 'Signage',
        text: "A festival requires clear navigation. We developed a cohesive wayfinding system that includes directional signage and a custom icon set for specific zones like concerts, exhibitions, and amenities. The design ensures functional legibility while maintaining the festival's playful and organic aesthetic across the venue.",
        media: [
          img('assets/SAL/Signage1.png'),
          img('assets/SAL/Signage2.png'),
          img('assets/SAL/Signage3.png'),
        ],
      },
      {
        title: 'Merchandising',
        text: 'To complete the brand experience, we designed a line of merchandising. These items serve not just as souvenirs, but as tangible extensions of the visual identity, allowing attendees to carry the spirit of the festival with them long after the event ends.',
        media: [img('assets/SAL/Merchandising.png')],
      },
    ],
  },
  six: {
    title: 'Fingerprint',
    date: 'May 2025',
    briefTitle: 'Leaving a lasting impression',
    briefText:
      'Fingerprint is a concept brand for a premium Grande Reserva red wine. The project explores the idea that every vintage has a distinct identity, much like a human fingerprint. I developed the complete packaging design to convey exclusivity and craftsmanship, ensuring the bottle would stand out as a high-end choice for discerning connoisseurs.',
    headerImage: 'assets/Fingerprint/header.png',
    blocks: [
      {
        title: 'Label',
        text: 'The design leverages negative space and refined serif typography to create a sense of heritage and luxury. The central motif, a delicate fingerprint illustration, serves as the brand mark, suggesting a personal touch and the unique character of the terroir. I selected a textured beige background to add tactile depth and warmth to the visual experience.',
        media: [img('assets/Fingerprint/label.png')],
      },
      {
        title: 'Label Mockups',
        text: "To validate the design, I created high-fidelity realistic mockups. These renders demonstrate how the label interacts with the physical bottle shape, focusing on lighting and material accuracy. The visualization highlights the interplay between the matte paper texture and the gloss of the glass, showcasing the product's intended shelf presence.",
        media: [
          img('assets/Fingerprint/labelMockups1.png'),
          img('assets/Fingerprint/labelMockups2.png'),
          img('assets/Fingerprint/labelmockups3.png'),
        ],
      },
    ],
  },
}

// Order of the cards on the home grid.
export const projectOrder = ['one', 'two', 'three', 'four', 'five', 'six']
