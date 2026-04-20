export interface ShortPrompt {
  id: string;
  prompt: string;
  description?: string;
}

export interface LongPrompt {
  id: string;
  title: string;
  prompt: string;
  useCase: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PromptPost {
  slug: string;
  title: string;
  keyword: string;
  description: string;
  date: string;
  category: string;
  image?: string;
  content?: string;
  shortPrompts: ShortPrompt[];
  longPrompts: LongPrompt[];
  faqs: FAQ[];
  platformTips?: string[];
}

export const promptPosts: PromptPost[] = [
  {
    slug: 'midjourney-prompts-free',
    title: 'Midjourney Prompts Free: 50+ Ready-to-Use Prompts (2026)',
    keyword: 'midjourney prompts free',
    description: 'Download 50+ free Midjourney prompts for stunning AI art. Includes landscapes, portraits, cyberpunk, fantasy, product photography, and more. Copy and use instantly.',
    date: '2026-04-20',
    category: 'Image Generation',
    image: '/images/midjourney-prompts-free.jpg',
    content: `<p>Get <strong>50+ free Midjourney prompts</strong> optimized for V6. Each prompt is tested and ready to use — just copy, paste, and generate stunning AI art instantly.</p>
<ul>
<li><strong>25+</strong> quick copy prompts for instant results</li>
<li><strong>20+</strong> advanced prompts for professional projects</li>
<li><strong>Tips</strong> for --ar, --stylize, and --v 6 parameters</li>
<li><strong>FAQ</strong> covering common Midjourney questions</li>
</ul>
<p>All prompts are free to use. Add <code>--v 6</code> for best 2026 results. Use <code>--stylize 750</code> for artistic interpretation or <code>--stylize 250</code> for strict adherence. Copy any prompt after <code>/imagine prompt:</code> to generate 4 image variations.</p>`,
    shortPrompts: [
      {
        id: 'mj-free-1',
        prompt: '/imagine prompt: majestic mountain at sunset, golden hour lighting, dramatic clouds, ultra detailed, 8k, unreal engine 5 rendering --ar 16:9 --v 6',
        description: 'Epic mountain landscape at golden hour'
      },
      {
        id: 'mj-free-2',
        prompt: '/imagine prompt: cyberpunk samurai portrait, neon lights, holographic armor, cinematic lighting, by Greg Rutkowski --ar 3:4 --v 6',
        description: 'Cyberpunk character portrait'
      },
      {
        id: 'mj-free-3',
        prompt: '/imagine prompt: cozy coffee shop interior, warm lighting, rainy window, vintage furniture, photorealistic, 8k --ar 4:5 --v 6',
        description: 'Cozy coffee shop interior'
      },
      {
        id: 'mj-free-4',
        prompt: '/imagine prompt: celestial nebula, cosmic dust, vibrant colors, spiral galaxy, space photography, nasa inspired --ar 16:9 --v 6',
        description: 'Space nebula photography'
      },
      {
        id: 'mj-free-5',
        prompt: '/imagine prompt: japanese zen garden, cherry blossoms, koi pond, stone lantern, morning mist, serene --ar 16:9 --v 6',
        description: 'Japanese zen garden'
      },
      {
        id: 'mj-free-6',
        prompt: '/imagine prompt: steampunk airship, brass gears, Victorian era, dramatic sky, intricate details --ar 16:9 --v 6',
        description: 'Steampunk airship'
      },
      {
        id: 'mj-free-7',
        prompt: '/imagine prompt: bioluminescent forest, glowing plants, magical atmosphere, fantasy art, by Alan Lee --ar 16:9 --v 6',
        description: 'Bioluminescent fantasy forest'
      },
      {
        id: 'mj-free-8',
        prompt: '/imagine prompt: underwater city, coral architecture, transparent domes, tropical fish, ray tracing --ar 16:9 --v 6',
        description: 'Underwater fantasy city'
      },
      {
        id: 'mj-free-9',
        prompt: '/imagine prompt: retro 1980s Miami, palm trees, neon signs, synthwave, sunset, classic car --ar 16:9 --v 6',
        description: '1980s Miami aesthetic'
      },
      {
        id: 'mj-free-10',
        prompt: '/imagine prompt: minimal geometric abstract, soft gradients, pastel colors, modern art --ar 1:1 --v 6',
        description: 'Minimal geometric abstract'
      },
      {
        id: 'mj-free-11',
        prompt: '/imagine prompt: ancient library, floating books, dust rays, mystical atmosphere, academic aesthetic --ar 16:9 --v 6',
        description: 'Magical ancient library'
      },
      {
        id: 'mj-free-12',
        prompt: '/imagine prompt: desert oasis, palm trees, turquoise water, golden sands, sunset reflection --ar 16:9 --v 6',
        description: 'Desert oasis'
      },
      {
        id: 'mj-free-13',
        prompt: '/imagine prompt: gothic cathedral, stained glass, dramatic lighting, ray of light, spiritual atmosphere --ar 3:4 --v 6',
        description: 'Gothic cathedral interior'
      },
      {
        id: 'mj-free-14',
        prompt: '/imagine prompt: futuristic vehicle, sleek design, neon lights, cyberpunk city, concept car --ar 16:9 --v 6',
        description: 'Futuristic concept vehicle'
      },
      {
        id: 'mj-free-15',
        prompt: '/imagine prompt: northern lights, aurora borealis, snowy mountains, starry night, long exposure photography --ar 16:9 --v 6',
        description: 'Northern lights'
      },
      {
        id: 'mj-free-16',
        prompt: '/imagine prompt: tropical beach, crystal clear water, white sand, palm trees, paradise --ar 16:9 --v 6',
        description: 'Tropical beach paradise'
      },
      {
        id: 'mj-free-17',
        prompt: '/imagine prompt: medieval blacksmith forge, glowing metal, sparks, dramatic lighting, epic fantasy --ar 3:4 --v 6',
        description: 'Medieval blacksmith forge'
      },
      {
        id: 'mj-free-18',
        prompt: '/imagine prompt: floating castle, clouds, Magical atmosphere, Studio Ghibli style, fantasy art --ar 16:9 --v 6',
        description: 'Floating castle like Studio Ghibli'
      },
      {
        id: 'mj-free-19',
        prompt: '/imagine prompt: macro flower, dew drops, vibrant colors, soft lighting, garden photography --ar 3:4 --v 6',
        description: 'Macro flower photography'
      },
      {
        id: 'mj-free-20',
        prompt: '/imagine prompt: abandoned spaceship, sci-fi, rusted metal, debris, dramatic lighting --ar 16:9 --v 6',
        description: 'Abandoned spaceship'
      },
      {
        id: 'mj-free-21',
        prompt: '/imagine prompt: autumn forest path, golden leaves, soft light, misty morning, warm colors --ar 16:9 --v 6',
        description: 'Autumn forest path'
      },
      {
        id: 'mj-free-22',
        prompt: '/imagine prompt: ice cave, crystals, blue lighting, frozen atmosphere, ethereal --ar 16:9 --v 6',
        description: 'Blue ice cave'
      },
      {
        id: 'mj-free-23',
        prompt: '/imagine prompt: dragon eye close-up, realistic, detailed scales, amber eye, epic --ar 3:4 --v 6',
        description: 'Realistic dragon eye'
      },
      {
        id: 'mj-free-24',
        prompt: '/imagine prompt: vintage record store, vinyl records, warm lighting, nostalgia, music --ar 4:5 --v 6',
        description: 'Vintage record store'
      },
      {
        id: 'mj-free-25',
        prompt: '/imagine prompt: alien market, exotic goods, bustling, sci-fi, futuristic --ar 16:9 --v 6',
        description: 'Alien marketplace'
      },
      {
        id: 'mj-free-26',
        prompt: '/imagine prompt: lighthouse in storm, dramatic waves, lightning, heroic scale --ar 16:9 --v 6',
        description: 'Lighthouse in storm'
      }
    ],
    longPrompts: [
      {
        id: 'mj-long-free-1',
        title: 'Cinematic Film Poster - Epic Fantasy',
        prompt: `/imagine prompt: Create a cinematic movie poster for an epic fantasy film titled "The Last Kingdom." A lone warrior stands on a cliff, gazing at a massive dragon circling above a medieval castle. The sky is dramatic with orange and purple sunset clouds. Hyper-detailed, film grain, 35mm cinematography, golden ratio composition, dramatic lighting, epic scale, by Greg Rutkowski --ar 2:3 --stylize 750 --v 6`,
        useCase: 'Film Poster Design'
      },
      {
        id: 'mj-long-free-2',
        title: 'Premium Product Photography',
        prompt: `/imagine prompt: Minimalist product photography on a clean gradient background. A premium mechanical keyboard with custom artisan keycaps sits on a sleek white surface with soft studio lighting. RGB backlight glows softly. Professional commercial photography, clean, high-end tech aesthetic, shot with Canon R5, bokeh, sharp focus on product, white background --ar 4:5 --stylize 250 --v 6`,
        useCase: 'E-commerce Product Photos'
      },
      {
        id: 'mj-long-free-3',
        title: 'Alien World Concept Art',
        prompt: `/imagine prompt: Concept art for an alien biomes planet featuring crystalline structures rising from floating islands with waterfalls cascading into the void. Two moons hang in a purple sky. Bioluminescent alien vegetation glows with internal light. Unreal Engine 5 concept art style, massive scale, epic vista, highly detailed, by Craig Mullins and Feng Zhu --ar 16:9 --stylize 750 --v 6`,
        useCase: 'Game Concept Art'
      },
      {
        id: 'mj-long-free-4',
        title: 'Fashion Magazine Cover',
        prompt: `/imagine prompt: High fashion magazine cover shot. A model in elegant haute couture stands in an urban rooftop setting. Natural golden hour lighting, wind in hair, confident pose. Vogue-style photography, 85mm f/1.4, sharp focus on eyes, professional retouching, fashion editorial, by Mario Testino and Annie Leibovitz --ar 2:3 --stylize 500 --v 6`,
        useCase: 'Fashion Photography'
      },
      {
        id: 'mj-long-free-5',
        title: 'Architectural Exterior - Modern villa',
        prompt: `/imagine prompt: Modern luxury villa exterior at dusk. Cantilevered design with floor-to-ceiling glass walls. Infinity pool overlooking ocean. Ambient interior lighting glows warmly. Landscape architect designed grounds with native plants. Architectural photography, wide angle, golden hour, by Frank Lloyd Wright inspired --ar 16:9 --stylize 500 --v 6`,
        useCase: 'Architectural Visualization'
      },
      {
        id: 'mj-long-free-6',
        title: 'Children Book Illustration',
        prompt: `/imagine prompt: Whimsical children's book illustration showing a curious fox in a magical forest. Soft, friendly art style like Quentin Blake or Roald Dahl illustrations. Warm colors, not scary, suitable for ages 3-7. The fox peeks from behind a mushroom. Sweet, enchanting, storybook aesthetic --ar 5:4 --stylize 1000 --v 6`,
        useCase: 'Children Book Illustrations'
      },
      {
        id: 'mj-long-free-7',
        title: 'Restaurant Menu Food Photo',
        prompt: `/imagine prompt: Professional food photography for a gourmet restaurant menu. Chef's signature dish - perfectly plated pasta with truffle and fresh herbs. Styled on rustic wooden table with wine glass. Natural window light, shallow depth of field, food styling by professional, appetizing, mouth-watering, by Food Network style --ar 4:5 --stylize 250 --v 6`,
        useCase: 'Restaurant Marketing'
      },
      {
        id: 'mj-long-free-8',
        title: 'Sci-Fi Character Portrait',
        prompt: `/imagine prompt: Sci-fi character portrait of a female space explorer in full EVA suit. Helmet visor reflects distant nebula. Technical suit details, NASA-inspired but futuristic. Cinematic lighting, dramatic shadows, close-up chest portrait, Star Wars concept art style, by Ryan Reynolds and Doug Chiang --ar 3:4 --stylize 750 --v 6`,
        useCase: 'Character Design'
      },
      {
        id: 'mj-long-free-9',
        title: 'Book Cover - Thriller Novel',
        prompt: `/imagine prompt: Thriller novel book cover design. Dark, moody atmosphere. Silhouette of a figure walking through foggy city streets at night. Street lights create pools of light. Minimalist but powerful, Stephen King book cover style, typography space at top, bestselling thriller aesthetic, by Aaron McGruder --ar 2:3 --stylize 500 --v 6`,
        useCase: 'Book Cover Design'
      },
      {
        id: 'mj-long-free-10',
        title: 'Wedding Photography',
        prompt: `/imagine prompt: Elegant wedding photograph. Bride in stunning white gown stands in sunlit garden. Soft natural light, bokeh of flowers in background, timeless romance, captured by renowned wedding photographer, like Y和方法in or Jose Villa --ar 3:4 --stylize 500 --v 6`,
        useCase: 'Wedding Marketing'
      },
      {
        id: 'mj-long-free-11',
        title: 'Album Cover - Electronic Music',
        prompt: `/imagine prompt: Electronic music album cover. Abstract digital art, neon colors, glitch aesthetic, pulsing energy, dark background with bright accents, minimal but striking, club banger vibes, Daft Punk album energy --ar 1:1 --stylize 1000 --v 6`,
        useCase: 'Music Album Art'
      },
      {
        id: 'mj-long-free-12',
        title: 'Travel Instagram Post',
        prompt: `/imagine prompt: Wanderlust travel photo of an influencer standing at sunrise on viral Bali swing. Tropical jungle behind, rice terraces below. Golden hour magic, professional travel photography, Instagram square quality, National Geographic adventure style --ar 1:1 --stylize 500 --v 6`,
        useCase: 'Social Media Content'
      },
      {
        id: 'mj-long-free-13',
        title: 'Real Estate Listing Photo',
        prompt: `/imagine prompt: Professional real estate listing photograph. Modern open concept living room with floor-to-ceiling windows, stunning city views. Staged with contemporary furniture, warm lighting, aspirational lifestyle, wide angle lens, by Sotheby's real estate photography --ar 16:9 --stylize 250 --v 6`,
        useCase: 'Real Estate Marketing'
      },
      {
        id: 'mj-long-free-14',
        title: 'Logo Concept - Tech Startup',
        prompt: `/imagine prompt: Tech startup logo concept. Minimalist owl mascot for security company. Geometric shapes, gradient blue and green, modern, scalable, vector-friendly, works in dark and light backgrounds, clever design, by famous logo designers --ar 1:1 --stylize 500 --v 6`,
        useCase: 'Logo Design'
      },
      {
        id: 'mj-long-free-15',
        title: 'Comic Book Panel - Action Scene',
        prompt: `/imagine prompt: Comic book action panel. Hero in mid-leap, cape flowing, facing off against villain city skyline. Marvel comics style, dynamic pose, inked linework, dramatic panel, comic book printing quality, Frank Miller and Jim Lee inspired --ar 2:3 --stylize 750 --v 6`,
        useCase: 'Comic Book Art'
      },
      {
        id: 'mj-long-free-16',
        title: 'Texture Pattern for Design',
        prompt: `/imagine prompt: Seamless texture pattern for fabric or packaging. Moroccan geometric tile pattern in gold on navy blue. Elegant, timeless, luxury brand aesthetic, vector quality, repeating pattern, design resource --ar 1:1 --stylize 250 --v 6`,
        useCase: 'Design Resources'
      },
      {
        id: 'mj-long-free-17',
        title: 'Social Media Icon Set',
        prompt: `/imagine prompt: Social media icon set in consistent minimalist style. 6 popular app icons, uniform design language, works at small sizes, clean vector aesthetic, iOS app icon quality --ar 1:1 --stylize 250 --v 6`,
        useCase: 'App Design'
      },
      {
        id: 'mj-long-free-18',
        title: 'Poster Design - Music Festival',
        prompt: `/imagine prompt: Music festival poster design. Bold typography, electric energy, neon and black color scheme, lineup displayed artistically, high contrast, poster print quality, Electric Daisy Carnival meets Coachella vibes --ar 2:3 --stylize 750 --v 6`,
        useCase: 'Event Marketing'
      },
      {
        id: 'mj-long-free-19',
        title: 'Infographic Illustration',
        prompt: `/imagine prompt: Business infographic illustration style. Flat design, modern palette, clean vectors, data visualization concept, pie charts and graphs as art elements, corporate presentation quality, suitable for annual reports --ar 16:9 --stylize 250 --v 6`,
        useCase: 'Business Presentations'
      },
      {
        id: 'mj-long-free-20',
        title: 'T-Shirt Design - Vintage sports',
        prompt: `/imagine prompt: Vintage sports t-shirt design. Retro athletic logo, classic team aesthetic, 1970s design, bold typography, works as DTG print, limited color palette --ar 3:4 --stylize 250 --v 6`,
        useCase: 'Merchandise Design'
      }
    ],
    faqs: [
      {
        question: 'Are these Midjourney prompts really free to use?',
        answer: 'Yes, absolutely! All prompts in this article are completely free. Just copy and paste them into Midjourney. You don\'t need any subscription to use basic prompts, though a subscription gives you more generation time. These prompts work with both free trials and paid plans.'
      },
      {
        question: 'What Midjourney version should I use in 2026?',
        answer: 'Use Midjourney V6 for the best results in 2026. V6 offers the most photorealistic outputs, best text rendering in images, and improved prompt understanding. Add --v 6 to any prompt to ensure V6 is used. V6.1 is the latest but V6 remains the stable choice for production work.'
      },
      {
        question: 'How do I get consistent results with these prompts?',
        answer: 'To get consistent results, always include the --seed parameter if you want to reproduce a similar style. Adding artist references (like --by Greg Rutkowski) helps maintain style consistency. Also, use the same --stylize value - lower (250) means more strict adherence to your prompt, higher (750) means more artistic interpretation.'
      },
      {
        question: 'Why do some prompts not work the way I expected?',
        answer: 'There are a few common issues: (1) Very long prompts can confuse the model - keep focused on 2-3 key elements; (2) Conflicting parameters like using --no while asking for something; (3) Some styles require specific artist references; (4) The aspect ratio --ar affects composition significantly.'
      },
      {
        question: 'Can I use these images commercially?',
        answer: 'If you have a Midjourney subscription, you generally own the images you create and can use them commercially. However, check Midjourney\'s current Terms of Service for any restrictions. High-profile trademark uses may have issues. For most commercial use cases like marketing materials, social media, and client work, you\'re covered with a paid subscription.'
      },
      {
        question: 'What is the --ar parameter and which should I use?',
        answer: '--ar sets the aspect ratio. Use --ar 16:9 for cinematic landscape/YouTube thumbnails, --ar 9:16 for Instagram/TikTok, --ar 1:1 for Instagram feed posts, --ar 3:4 for portraits, --ar 2:3 for film posters. The wrong ratio can significantly change composition.'
      },
      {
        question: 'How do Iupscaling and variations work?',
        answer: 'After generating, you\'ll see U1-U4 buttons (upscale) and V1-V4 buttons (variations). Use U1-U4 to enlarge an image you like. Use V1-V4 to create 4 new variations of an image. You can also use Remix mode to modify a prompt before generating variations.'
      },
      {
        question: 'What is --stylize and what value should I use?',
        answer: '--stylize controls how artistic Midjourney\'s interpretation is. --stylize 250 gives you results that closely follow your prompt. --stylize 750 (default) adds artistic interpretation. --stylize 1000+ is very experimental. For commercial work, stick with 250-500 for predictable results.'
      }
    ],
    platformTips: [
      'Use V6 by adding --v 6 to your prompts for best 2026 results',
      'Add --ar before generating to set aspect ratio: --ar 16:9 (cinematic), --ar 1:1 (Instagram), --ar 9:16 (social)',
      'Use --stylize 250 for strict prompt following, --stylize 750 for artistic interpretation',
      'Reference artists like Greg Rutkowski, Alphonse Mucha, Studio Ghibli for specific styles',
      'Add --seed [number] for reproducibility when you find a style you like',
      'Use --no to remove unwanted elements, e.g., --no text to avoid text in images',
      'For consistent results, keep prompts under 100 words and focus on key elements',
      'Combine --iw with reference image URL to blend your style with the prompt'
    ]
  },
  {
    slug: 'dalle-3-prompts',
    title: 'DALL-E 3 Prompts: 50+ Ready-to-Use Prompts (2026)',
    keyword: 'dall e 3 prompts',
    description: 'Master DALL-E 3 with our comprehensive prompt guide. Includes 25+ short prompts and 20+ advanced long-form prompts for stunning AI art. Copy and use instantly.',
    date: '2026-04-20',
    category: 'Image Generation',
    image: '/images/dalle-3-prompts.jpg',
    content: `<p>If you're looking for <strong>dall e 3 prompts</strong> that actually work, you've found the right resource. OpenAI's DALL-E 3 (and 3.5) has become the go-to for businesses and creators who need consistent, high-quality AI-generated images.</p>

<p>What makes DALL-E 3 special in 2026:</p>
<ul>
<li><strong>Superior text rendering</strong> - Finally, AI can generate readable text in images</li>
<li><strong>Better prompt understanding</strong> - Follows complex prompts more accurately than ever</li>
<li><strong>Improved coherence</strong> - Consistent lighting, shadows, and composition</li>
<li><strong>ChatGPT integration</strong> - Generate images directly from conversations</li>
</ul>

<p>In this guide, you'll find:</p>
<ul>
<li>25+ quick copy prompts ready to use immediately</li>
<li>20+ advanced prompts for professional projects</li>
<li>DALL-E 3 and 3.5 specific tips</li>
<li>Complete FAQ section</li>
</ul>

<h2>How to Use DALL-E 3</h2>

<p>There are two ways to access DALL-E 3:</p>
<ol>
<li><strong>Via ChatGPT</strong> - Go to chatgpt.com, start a conversation, and ask for an image</li>
<li><strong>Via API</strong> - Use OpenAI's image generation API with gpt-image-1 model</li>
</ol>

<p>All prompts in this article work with both methods. Just copy and paste into ChatGPT or your API request.</p>

<h2>Why DALL-E 3 Over Midjourney?</h2>

<p>While both are excellent, DALL-E 3 excels at:</p>
<ul>
<li><strong>Text in images</strong> - Perfect for marketing materials, logos, packaging</li>
<li><strong>Brand consistency</strong> - Easier to maintain style across generations</li>
<li><strong>Integration</strong> - Works seamlessly with ChatGPT for contextual generation</li>
<li><strong>Commercial safety</strong> - Better content policies for business use</li>
</ul>

<p>That said, Midjourney still leads in artistic/creative outputs. Many professionals use both.</p>`,
    shortPrompts: [
      {
        id: 'dalle-1',
        prompt: 'A majestic mountain range at golden hour, dramatic clouds, warm orange and purple sky, ultra realistic photography, 8k quality',
        description: 'Epic mountain landscape'
      },
      {
        id: 'dalle-2',
        prompt: 'Modern minimalist living room with floor-to-ceiling windows, city view, warm ambient lighting, contemporary furniture, architectural photography',
        description: 'Modern interior'
      },
      {
        id: 'dalle-3',
        prompt: 'Cyberpunk city street at night, neon signs, wet pavement reflections, futuristic vehicles, cinematic lighting, Blade Runner aesthetic',
        description: 'Cyberpunk city'
      },
      {
        id: 'dalle-4',
        prompt: 'Japanese zen garden with cherry blossoms, koi pond, stone lantern, morning mist, peaceful atmosphere, Studio Ghibli style',
        description: 'Japanese garden'
      },
      {
        id: 'dalle-5',
        prompt: 'Product photography of a luxury watch on marble, soft studio lighting, premium, aspirational, commercial advertising',
        description: 'Luxury product photo'
      },
      {
        id: 'dalle-6',
        prompt: 'Futuristic electric car in a studio, sleek design, promotional photography, white background, automotive advertising',
        description: 'Car photography'
      },
      {
        id: 'dalle-7',
        prompt: 'Delicious gourmet burger, food photography, restaurant menu style, natural lighting, appetizing, professional food styling',
        description: 'Food photography'
      },
      {
        id: 'dalle-8',
        prompt: 'Cute cartoon owl mascot, vector art, flat design, white background, modern logo style',
        description: 'Cartoon mascot'
      },
      {
        id: 'dalle-9',
        prompt: 'Northern lights over snowy mountains, starry night, aurora borealis, landscape photography, breathtaking',
        description: 'Northern lights'
      },
      {
        id: 'dalle-10',
        prompt: 'Fashion portrait of a model in chic outfit, golden hour lighting, magazine cover, Vogue style, professional photography',
        description: 'Fashion portrait'
      },
      {
        id: 'dalle-11',
        prompt: 'Abstract geometric pattern, blue and gold, luxury brand aesthetic, seamless tileable texture, minimalist design',
        description: 'Abstract pattern'
      },
      {
        id: 'dalle-12',
        prompt: 'Whimsical children illustration, friendly dragon in a forest, colorful, storybook style, suitable for kids book',
        description: 'Children illustration'
      },
      {
        id: 'dalle-13',
        prompt: 'Tech startup logo, minimalist bird mascot, gradient blue and teal, modern, scalable, works on dark and light backgrounds',
        description: 'Tech logo concept'
      },
      {
        id: 'dalle-14',
        prompt: 'Social media post template, motivational quote design, modern typography, gradient background, instagram ready',
        description: 'Social media template'
      },
      {
        id: 'dalle-15',
        prompt: 'Coffee shop interior, warm lighting, rustic vibe, vintage furniture, plants, cozy atmosphere, lifestyle photography',
        description: 'Coffee shop'
      },
      {
        id: 'dalle-16',
        prompt: 'Wedding photo, bride in white gown, garden setting, romantic, golden hour, professional wedding photography',
        description: 'Wedding photography'
      },
      {
        id: 'dalle-17',
        prompt: 'Fitness app icon, dumbbell and heart, modern flat design, energetic, mobile app aesthetic',
        description: 'Fitness icon'
      },
      {
        id: 'dalle-18',
        prompt: 'Desert oasis with palm trees, turquoise water, golden sand, paradise, tropical travel photo, aspirational',
        description: 'Tropical destination'
      },
      {
        id: 'dalle-19',
        prompt: 'Conference room interior, modern office, professional corporate, business photography, clean and bright',
        description: 'Office interior'
      },
      {
        id: 'dalle-20',
        prompt: 'Vintage record store, vinyl records, warm lighting, nostalgia, music retail, retro aesthetic',
        description: 'Vintage record store'
      },
      {
        id: 'dalle-21',
        prompt: 'Yoga and wellness brand logo, lotus flower, calming colors, minimal, organic shapes, meditation app style',
        description: 'Wellness logo'
      },
      {
        id: 'dalle-22',
        prompt: 'Gaming setup desk setup, RGB lighting, futuristic, tech YouTuber thumbnail style, epic gaming',
        description: 'Gaming setup'
      },
      {
        id: 'dalle-23',
        prompt: 'Book cover design, thriller novel, dark moody atmosphere, foggy city, professional book cover style',
        description: 'Book cover'
      },
      {
        id: 'dalle-24',
        prompt: 'Floral arrangement, fresh flowers, elegant, gift shop, commercial photography, soft pastel colors',
        description: 'Floral arrangement'
      },
      {
        id: 'dalle-25',
        prompt: 'Mobile app wireframe mockup, clean UI design, modern interface, fintech app aesthetic',
        description: 'App mockup'
      },
      {
        id: 'dalle-26',
        prompt: 'Podcast cover art, microphone and sound waves, modern, vibrant colors, audio visualizer, creative podcast brand',
        description: 'Podcast artwork'
      }
    ],
    longPrompts: [
      {
        id: 'dalle-long-1',
        title: 'E-Commerce Product Photo - Skincare',
        prompt: `Product photography for a premium skincare line. Luxurious serum bottles with gold caps sitting on a marble counter. Soft natural window lighting, subtle reflections, clean minimalist aesthetic. Includes botanical leaves for natural feel. Professional commercial photography suitable for Sephora or Ulta. White background option available. Aspirational lifestyle brand feeling.`,
        useCase: 'E-commerce Product Photos'
      },
      {
        id: 'dalle-long-2',
        title: 'Restaurant Menu Photography',
        prompt: `Gourmet restaurant dish presentation. Perfectly plated signature pasta with fresh truffle and herbs. Styled on rustic wooden table with wine glass and silver cutlery. Natural window light, shallow depth of field, professional food styling. Appetizing, mouth-watering quality like Michelin-starred restaurants. Dark wood background for contrast.`,
        useCase: 'Restaurant Marketing'
      },
      {
        id: 'dalle-long-3',
        title: 'Fashion Magazine Cover',
        prompt: `High fashion magazine cover. Model in designer haute couture, elegant evening gown, confident pose in urban rooftop setting. Natural golden hour lighting, wind in flowing hair. Vogue or Harper's Bazaar style. Professional editorial photography. 85mm f/1.4 portrait style. Chic urban backdrop with city lights.`,
        useCase: 'Fashion Photography'
      },
      {
        id: 'dalle-long-4',
        title: 'Modern Logo Concept - Coffee Brand',
        prompt: `Minimalist coffee shop logo design. Abstract coffee cup with steam rising, forming natural cloud shapes. Warm brown gradient palette. Clean, vector-friendly design. Works at small sizes. Modern, hipster aesthetic. Suitable for coffee shop, cafe, or coffee subscription box. Includes both light and dark background versions.`,
        useCase: 'Logo Design'
      },
      {
        id: 'dalle-long-5',
        title: 'Real Estate Listing Photo',
        prompt: `Professional real estate photography. Modern open concept living room with floor-to-ceiling windows showing stunning city or ocean views. Staged with contemporary designer furniture. Warm ambient lighting, reading nook with books. Architectural photography, wide angle, aspirational lifestyle. Brighter and darker versions. Sotheby's or Compass listing quality.`,
        useCase: 'Real Estate Marketing'
      },
      {
        id: 'dalle-long-6',
        title: 'Tech Product Photography',
        prompt: `Product photography of premium wireless earbuds. Sleek charging case with earbuds, on clean white background. Soft studio lighting, professional commercial photography. Apple or Samsung advertising style. Clear product focus, bokeh background. Works for tech marketing, website, or e-commerce. White background and lifestyle shot included.`,
        useCase: 'Tech Product Photos'
      },
      {
        id: 'dalle-long-7',
        title: 'Social Media Carousel Template',
        prompt: `Modern social media carousel template for business. Clean minimal design with space for text and images. Gradient background in brand colors. Instagram and LinkedIn ready. Slide markers included. Professional SaaS or corporate aesthetic. 5-slide template design visible. Modern typography.`,
        useCase: 'Social Media Content'
      },
      {
        id: 'dalle-long-8',
        title: 'Children Book Illustration',
        prompt: `Whimsical children's book illustration. Curious fox in magical forest, soft friendly style like Roald Dahl books or Quentin Blake. Warm colors, not scary, suitable for ages 3-7. Fox peeking from behind mushroom, forest friends nearby. Sweet, enchanting, storybook aesthetic. Full color illustration.`,
        useCase: 'Children Book Illustrations'
      },
      {
        id: 'dalle-long-9',
        title: 'Event Poster Design',
        prompt: `Music festival poster. Bold electric typography, neon color scheme on dark background. High energy, Electric Daisy Carnival meets Coachella vibes. Lineup space at bottom. Poster print quality. Works for electronic, EDM, or indie festivals. Confetti and light effects.`,
        useCase: 'Event Marketing'
      },
      {
        id: 'dalle-long-10',
        title: 'Packaging Design - Chocolate',
        prompt: `Premium chocolate packaging design. Elegant gold foil box with window showing artisan chocolates inside. Luxury brand aesthetic. DeLaMarie or Godiva inspired. Includes ribbon and bow. Gift-ready presentation. Dark chocolate, truffles shown. Sophisticated and premium.`,
        useCase: 'Packaging Design'
      },
      {
        id: 'dalle-long-11',
        title: 'YouTube Thumbnail',
        prompt: `YouTube thumbnail for tech review or unboxing. Clean design with space for title. Product prominently displayed. Bold colors that stand out in feed. Modern tech YouTuber style. Includes emoji and text placeholders. Eye-catching at small sizes.`,
        useCase: 'YouTube Content'
      },
      {
        id: 'dalle-long-12',
        title: 'Travel Photo for Blog',
        prompt: `Wanderlust travel photo. Influencer at iconic Bali swing or infinity pool. Tropical luxury resort behind. Sunrise or golden hour magic. Professional travel photography. National Geographic adventure style. Instagram square and portrait versions. Aspirational travel content.`,
        useCase: 'Travel Marketing'
      },
      {
        id: 'dalle-long-13',
        title: 'Album Cover - Electronic Music',
        prompt: `Electronic music album cover. Abstract digital art, neon colors, glitch aesthetic, pulsing energy. Dark background with bright accents. Minimal but striking. Daft Punk or Calvin Harris album style. Club banger vibes. Square format, works as streaming cover.`,
        useCase: 'Music Album Art'
      },
      {
        id: 'dalle-long-14',
        title: 'Business Presentation Slide',
        prompt: `Clean business presentation slide template. Minimalist infographic style. Data viz elements visible. Corporate blue and white palette. Suitable for annual reports or pitch decks. Modern, professional. Multiple chart types visible. Microsoft PowerPoint or Keynote ready.`,
        useCase: 'Business Presentations'
      },
      {
        id: 'dalle-long-15',
        title: 'Instagram Ad - Fashion',
        prompt: `Instagram post advertisement for fashion brand. Model wearing brand clothing, shopping bag in hand. Clean white background option. Carousel ready. Swipe and shop indicators visible. Fashion week style. Influencer marketing aesthetic. Works for Meta advertising.`,
        useCase: 'Instagram Advertising'
      },
      {
        id: 'dalle-long-16',
        title: 'T-Shirt Mockup Design',
        prompt: `T-shirt design mockup shown on hanger. Modern graphic tee, visible wrinkles and fabric texture. Clean white t-shirt. Streetwear brand aesthetic like Supreme or Off-White. Street style fashion. Product photography quality. Works for merchandise stores.`,
        useCase: 'Merchandise Design'
      },
      {
        id: 'dalle-long-17',
        title: 'Email Newsletter Header',
        prompt: `Email newsletter header for tech startup. Clean modern design, space for headline. Subtle gradient background. Productivity app aesthetic like Notion or Slack. Mobile and desktop preview. Professional newsletter header.`,
        useCase: 'Email Marketing'
      },
      {
        id: 'dalle-long-18',
        title: 'Podcast Episode Artwork',
        prompt: `Podcast cover art for business or entrepreneurship show. Professional host photo with branding. Modern microphone setup. Square format, works in Apple Podcasts and Spotify. LinkedIn presence ready. Thought leader aesthetic.`,
        useCase: 'Podcast Artwork'
      },
      {
        id: 'dalle-long-19',
        title: 'App Store Screenshots',
        prompt: `iOS app store screenshot mockup. Clean UI showing app features. Fitness or meditation app aesthetic. Home screen and in-app photos visible. Apple marketing style. Premium app presentation. Works for App Store and Play Store.`,
        useCase: 'App Marketing'
      },
      {
        id: 'dalle-long-20',
        title: 'Annual Report Cover',
        prompt: `Corporate annual report cover. Professional business setting, CEO or team photo optional. Clean corporate design. Blue or green brand colors. Investor-ready. McKinsey or Goldman Sachs report aesthetic. Includes spine and back cover variations.`,
        useCase: 'Corporate Marketing'
      }
    ],
    faqs: [
      {
        question: 'Are these DALL-E 3 prompts free to use?',
        answer: 'Yes! All prompts in this article are completely free. You can use them with any DALL-E 3 access method. Note that OpenAI credits may apply depending on your subscription, but the prompts themselves cost nothing to create.'
      },
      {
        question: 'What is the difference between DALL-E 3 and DALL-E 3.5?',
        answer: 'DALL-E 3.5 is an improved version with better quality, faster generation, and more accurate prompt following. It was released in late 2024. Both versions use the same prompt format, but 3.5 generally produces better results. Use "gpt-image-1" in the API for the latest version.'
      },
      {
        question: 'Can DALL-E 3 generate text in images?',
        answer: 'Yes! DALL-E 3 significantly improved text rendering compared to previous versions. You can now generate readable text, logos, signs, and packaging with text. For best results, specify the text explicitly in your prompt and keep it short (under 5 characters works best).'
      },
      {
        question: 'How does DALL-E 3 compare to Midjourney?',
        answer: 'DALL-E 3 excels at text rendering and brand-consistent imagery. Midjourney better understands creative/artistic prompts and offers more stylistic control. Many professionals use both: DALL-E 3 for marketing materials requiring text, Midjourney for creative/artistic projects.'
      },
      {
        question: 'Can I use DALL-E 3 images commercially?',
        answer: 'Yes, with a paid OpenAI subscription, you generally own the images and can use them commercially. This includes marketing, products, and client work. Check the current Terms of Service for any restrictions on high-profile uses.'
      },
      {
        question: 'How do I get consistent results?',
        answer: 'DALL-E 3 is generally more consistent than previous versions. For reproducibility, keep prompts detailed and specific. Reference styles by mentioning artists or brands. The "reference" feature allows using your own images as style references.'
      },
      {
        question: 'Why does my prompt generate something different than expected?',
        answer: 'DALL-E 3 may interpret ambiguous prompts creatively. Be specific about: subject, style, lighting, composition, colors, and mood. Remove conflicting terms. If something isn\'t working, simplify and add elements incrementally.'
      },
      {
        question: 'What aspect ratios does DALL-E 3 support?',
        answer: 'DALL-E 3 supports: square (1:1), landscape (16:9, 4:3), portrait (9:16, 3:4). Different ratios suit different use cases - choose based on where the image will be used (social media, website, print, etc.).'
      }
    ],
    platformTips: [
      'Use "gpt-image-1" in API calls for DALL-E 3.5 (latest version)',
      'Mention "high quality", "professional", or "commercial photography" for better realism',
      'Reference specific artists or brands for style: "Vogue style", "Apple advertising", "Studio Ghibli"',
      'DALL-E 3 handles text best with short, simple words - test and iterate',
      'Use --no flag via API to remove unwanted elements like text or logos',
      'Combine with ChatGPT for contextual generations - describe your idea conversationally',
      'For brand consistency, create a style guide prompt and reuse key phrases',
      'Start with the "Describe" feature to see how DALL-E interprets an image, then reverse-engineer prompts'
    ]
  }
];

export default promptPosts;