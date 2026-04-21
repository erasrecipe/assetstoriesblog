import { PromptPost } from './types';

export const midjourneyPromptsForBeginners: PromptPost = {
  slug: 'midjourney-prompts-for-beginners',
  title: 'Midjourney Prompts for Beginners: 50+ Easy Prompts (2026)',
  keyword: 'midjourney prompts for beginners',
  description: 'New to Midjourney? Start here with 50+ beginner-friendly prompts. Simple, effective, and ready to copy. Perfect for learning AI art.',
  date: '2026-04-21',
  category: 'Image Generation',
  image: '/images/midjourney-prompts-for-beginners.jpg',
  content: `<p>Welcome to <strong>Midjourney prompts for beginners</strong>! If you're just starting with AI image generation, these simple prompts will help you create amazing artwork while learning how Midjourney works.</p>
<ul>
<li><strong>25+</strong> simple prompts for beginners</li>
<li><strong>20+</strong> slightly advanced for practice</li>
<li><strong>Beginner tips</strong> explained simply</li>
<li><strong>FAQ</strong> for common questions</li>
</ul>
<p>All prompts work with /imagine. Just copy, paste, and generate! Add --v 6 for best results in 2026.</p>`,
  shortPrompts: [
    { id: 'mj-beg-1', prompt: '/imagine prompt: a cat --ar 1:1 --v 6', description: 'Simple cat' },
    { id: 'mj-beg-2', prompt: '/imagine prompt: sunset over ocean --ar 16:9 --v 6', description: 'Sunset landscape' },
    { id: 'mj-beg-3', prompt: '/imagine prompt: a flower --ar 1:1 --v 6', description: 'Simple flower' },
    { id: 'mj-beg-4', prompt: '/imagine prompt: a dog in a park --ar 4:5 --v 6', description: 'Dog in park' },
    { id: 'mj-beg-5', prompt: '/imagine prompt: mountain landscape --ar 16:9 --v 6', description: 'Mountain view' },
    { id: 'mj-beg-6', prompt: '/imagine prompt: a cup of coffee --ar 1:1 --v 6', description: 'Coffee cup' },
    { id: 'mj-beg-7', prompt: '/imagine prompt: starry night --ar 16:9 --v 6', description: 'Starry sky' },
    { id: 'mj-beg-8', prompt: '/imagine prompt: a bird --ar 3:4 --v 6', description: 'Bird portrait' },
    { id: 'mj-beg-9', prompt: '/imagine prompt: beach scene --ar 16:9 --v 6', description: 'Beach' },
    { id: 'mj-beg-10', prompt: '/imagine prompt: a tree --ar 3:4 --v 6', description: 'Single tree' },
    { id: 'mj-beg-11', prompt: '/imagine prompt: city buildings --ar 16:9 --v 6', description: 'Cityscape' },
    { id: 'mj-beg-12', prompt: '/imagine prompt: a butterfly --ar 1:1 --v 6', description: 'Butterfly' },
    { id: 'mj-beg-13', prompt: '/imagine prompt: forest path --ar 16:9 --v 6', description: 'Forest trail' },
    { id: 'mj-beg-14', prompt: '/imagine prompt: a candle --ar 1:1 --v 6', description: 'Candle' },
    { id: 'mj-beg-15', prompt: '/imagine prompt: waterfall --ar 16:9 --v 6', description: 'Waterfall' },
    { id: 'mj-beg-16', prompt: '/imagine prompt: a book --ar 1:1 --v 6', description: 'Book' },
    { id: 'mj-beg-17', prompt: '/imagine prompt: desert landscape --ar 16:9 --v 6', description: 'Desert' },
    { id: 'mj-beg-18', prompt: '/imagine prompt: moon and stars --ar 16:9 --v 6', description: 'Moon and stars' },
    { id: 'mj-beg-19', prompt: '/imagine prompt: a fruit bowl --ar 1:1 --v 6', description: 'Fruit bowl' },
    { id: 'mj-beg-20', prompt: '/imagine prompt: ocean waves --ar 16:9 --v 6', description: 'Ocean waves' },
    { id: 'mj-beg-21', prompt: '/imagine prompt: a sunset flower --ar 1:1 --v 6', description: 'Flower at sunset' },
    { id: 'mj-beg-22', prompt: '/imagine prompt: snow mountains --ar 16:9 --v 6', description: 'Snowy mountains' },
    { id: 'mj-beg-23', prompt: '/imagine prompt: a cute puppy --ar 1:1 --v 6', description: 'Cute puppy' },
    { id: 'mj-beg-24', prompt: '/imagine prompt: autumn leaves --ar 16:9 --v 6', description: 'Autumn leaves' },
    { id: 'mj-beg-25', prompt: '/imagine prompt: a rainbow --ar 16:9 --v 6', description: 'Rainbow' },
    { id: 'mj-beg-26', prompt: '/imagine prompt: fire and smoke --ar 3:4 --v 6', description: 'Fire effect' }
  ],
  longPrompts: [
    { id: 'mj-beg-long-1', title: 'Simple Portrait', prompt: '/imagine prompt: A simple portrait of a person, soft lighting, neutral background, photography style --ar 3:4 --v 6', useCase: 'Portrait Practice' },
    { id: 'mj-beg-long-2', title: 'Basic Landscape', prompt: '/imagine prompt: Beautiful landscape with hills and a river, golden hour lighting, calm atmosphere, nature photography --ar 16:9 --v 6', useCase: 'Landscape Practice' },
    { id: 'mj-beg-long-3', title: 'Cute Animal', prompt: '/imagine prompt: Cute fluffy kitten playing, bright eyes, soft fur, adorable expression, photography --ar 1:1 --v 6', useCase: 'Animal Photography' },
    { id: 'mj-beg-long-4', title: 'Food Photo', prompt: '/imagine prompt: Delicious pizza on wooden table, fresh ingredients, steam rising, food photography, appetizing --ar 4:5 --v 6', useCase: 'Food Photography' },
    { id: 'mj-beg-long-5', title: 'Simple Building', prompt: '/imagine prompt: Small cozy cottage with red roof, surrounded by flowers, charming, storybook style --ar 4:5 --v 6', useCase: 'Architecture' },
    { id: 'mj-beg-long-6', title: 'Nature Close-up', prompt: '/imagine prompt: Close-up of a rose with water droplets, soft natural lighting, macro photography --ar 1:1 --v 6', useCase: 'Macro Photography' },
    { id: 'mj-beg-long-7', title: 'Simple Car', prompt: '/imagine prompt: Classic vintage car on a street, retro style, warm lighting, automotive photography --ar 16:9 --v 6', useCase: 'Car Photography' },
    { id: 'mj-beg-long-8', title: 'Easy Abstract', prompt: '/imagine prompt: Simple abstract art with soft gradients, pastel colors, minimal design, modern --ar 1:1 --v 6', useCase: 'Abstract Art' },
    { id: 'mj-beg-long-9', title: 'Fashion Photo', prompt: '/imagine prompt: Fashion model in casual clothes, outdoor setting, natural lighting, magazine style --ar 3:4 --v 6', useCase: 'Fashion Photography' },
    { id: 'mj-beg-long-10', title: 'Interior Shot', prompt: '/imagine prompt: Cozy living room with comfortable furniture, warm lamps, inviting atmosphere, interior photography --ar 16:9 --v 6', useCase: 'Interior Photography' },
    { id: 'mj-beg-long-11', title: 'Product Simple', prompt: '/imagine prompt: Simple product photo of a perfume bottle, elegant, white background, studio lighting --ar 4:5 --v 6', useCase: 'Product Photography' },
    { id: 'mj-beg-long-12', title: 'Street Scene', prompt: '/imagine prompt: Busy street in a small town, shops and people, warm afternoon light, documentary style --ar 16:9 --v 6', useCase: 'Street Photography' },
    { id: 'mj-beg-long-13', title: 'Easy Character', prompt: '/imagine prompt: Friendly cartoon character, simple design, bright colors, mascot style --ar 1:1 --v 6', useCase: 'Character Design' },
    { id: 'mj-beg-long-14', title: 'Sky Photo', prompt: '/imagine prompt: Dramatic clouds at sunset, orange and purple sky, cinematic, epic landscape --ar 16:9 --v 6', useCase: 'Sky Photography' },
    { id: 'mj-beg-long-15', title: 'Simple Logo', prompt: '/imagine prompt: Simple minimalist logo for a bakery, bread or croissant icon, clean design --ar 1:1 --v 6', useCase: 'Logo Design' },
    { id: 'mj-beg-long-16', title: 'Beach Scene', prompt: '/imagine prompt: Tropical beach with palm trees, crystal clear water, white sand, paradise --ar 16:9 --v 6', useCase: 'Beach Photography' },
    { id: 'mj-beg-long-17', title: 'Easy Pattern', prompt: '/imagine prompt: Simple geometric pattern, repeating shapes, clean design, seamless texture --ar 1:1 --v 6', useCase: 'Pattern Design' },
    { id: 'mj-beg-long-18', title: 'Wedding Photo', prompt: '/imagine prompt: Beautiful wedding couple holding hands, romantic setting, golden hour, photography --ar 3:4 --v 6', useCase: 'Wedding Photography' },
    { id: 'mj-beg-long-19', title: 'Forest Photo', prompt: '/imagine prompt: Dense green forest with sunlight filtering through trees, peaceful, nature photography --ar 16:9 --v 6', useCase: 'Forest Photography' },
    { id: 'mj-beg-long-20', title: 'Simple Icon', prompt: '/imagine prompt: Simple icon for a fitness app, dumbbell shape, modern design --ar 1:1 --v 6', useCase: 'Icon Design' }
  ],
  faqs: [
    { question: 'How do I use these prompts?', answer: 'Simply copy any prompt and paste it after /imagine in Discord. Midjourney will generate 4 image variations. Use U1-U4 to upscale the one you like, or V1-V4 to create more variations.' },
    { question: 'What does --ar mean?', answer: '--ar sets the aspect ratio. --ar 1:1 is square, --ar 16:9 is wide like TV, --ar 9:16 is tall like phone. This changes the shape of your image.' },
    { question: 'What is --v 6?', answer: '--v 6 tells Midjourney to use version 6, which is the best quality in 2026. Always add --v 6 to your prompts for the best results.' },
    { question: 'Why do my images look different?', answer: 'AI uses randomness. Even the same prompt creates different results each time. This is normal! Use the seed number or try variations to get what you want.' },
    { question: 'Can I change one part of an image?', answer: 'Yes! Use the /describe command to get prompt ideas from an image, or use Remix mode to edit a prompt before regenerating.' },
    { question: 'How do I get consistent style?', answer: 'For consistent style: (1) Add artist names like "by Greg Rutkowski"; (2) Use the same --stylize number; (3) Reference an image you like with --iw.' },
    { question: 'What is --stylize?', answer: '--stylize controls how creative Midjourney is. Lower numbers (250) follow your prompt more closely. Higher numbers (750) add more artistic interpretation.' },
    { question: 'Do I need to pay for Midjourney?', answer: 'You can try Midjourney for free with limited generations. For unlimited use and commercial rights, you need a paid subscription.' }
  ],
  platformTips: [
    'Start with simple prompts to learn how Midjourney works',
    'Add --v 6 for best quality results in 2026',
    'Use --ar to choose your image shape: 1:1, 16:9, 9:16, etc.',
    'Start with --stylize 250 for more predictable results',
    'Reference artists: "by Greg Rutkowski", "by Studio Ghibli"',
    'Use --iw to blend your image with the prompt',
    'Try V buttons for variations, U buttons to upscale',
    'Keep prompts simple at first, add complexity gradually'
  ]
};
