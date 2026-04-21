import { PromptPost } from './types';

export const stableDiffusionPrompts: PromptPost = {
  slug: 'stable-diffusion-prompts',
  title: 'Stable Diffusion Prompts: 50+ Ready-to-Use Prompts (2026)',
  keyword: 'stable diffusion prompts',
  description: 'Master Stable Diffusion with 50+ proven prompts. Includes photorealistic, artistic, anime, and more. Works with SDXL and Base models.',
  date: '2026-04-21',
  category: 'Image Generation',
  image: '/images/stable-diffusion-prompts.jpg',
  content: `<p>Create amazing art with <strong>Stable Diffusion prompts</strong>. Whether you're using SDXL, Base, or custom models, these prompts deliver great results.</p>
<ul>
<li><strong>25+</strong> quick prompts</li>
<li><strong>20+</strong> advanced prompts</li>
<li><strong>SDXL optimized</strong> tips</li>
<li><strong>FAQ</strong> section</li>
</ul>
<p>These prompts work with Automatic1111, ComfyUI, and online platforms. Copy and generate!</p>`,
  shortPrompts: [
    { id: 'sd-1', prompt: 'portrait of a woman, detailed face, professional photography, soft lighting, 85mm', description: 'Portrait photo' },
    { id: 'sd-2', prompt: 'landscape, mountains at sunset, golden hour, epic, 8k, national geographic', description: 'Landscape' },
    { id: 'sd-3', prompt: 'cyberpunk city, neon lights, rain, reflections, blade runner style', description: 'Cyberpunk city' },
    { id: 'sd-4', prompt: 'anime girl, long hair, cute, colorful background, studio ghibli style', description: 'Anime girl' },
    { id: 'sd-5', prompt: 'product photo, watch on marble, studio lighting, commercial, advertising', description: 'Product photo' },
    { id: 'sd-6', prompt: 'fantasy landscape, floating islands, magic, epic, detailed, concept art', description: 'Fantasy landscape' },
    { id: 'sd-7', prompt: 'wildlife photo, lion, serengeti, national geographic, professional', description: 'Wildlife' },
    { id: 'sd-8', prompt: 'interior design, modern living room, minimalist, aspirational, architectural', description: 'Interior design' },
    { id: 'sd-9', prompt: 'fashion photography, model, editorial, vogue, professional lighting', description: 'Fashion editorial' },
    { id: 'sd-10', prompt: 'abstract art, colorful, modern, geometric, minimalist', description: 'Abstract art' },
    { id: 'sd-11', prompt: 'food photography, gourmet dish, restaurant style, appetizing', description: 'Food photo' },
    { id: 'sd-12', prompt: 'character design, warrior, fantasy, detailed armor, concept art', description: 'Character design' },
    { id: 'sd-13', prompt: 'car photography, sports car, studio, automotive advertising, sleek', description: 'Car photo' },
    { id: 'sd-14', prompt: 'book cover, thriller, dark, moody, professional design', description: 'Book cover' },
    { id: 'sd-15', prompt: 'logo design, minimalist, tech, vector, scalable', description: 'Logo design' },
    { id: 'sd-16', prompt: 'children illustration, cute, colorful, storybook, whimsical', description: 'Kids illustration' },
    { id: 'sd-17', prompt: 'architecture, modern building, wide angle, blue hour, stunning', description: 'Architecture' },
    { id: 'sd-18', prompt: 'concert photo, live music, stage lights, energetic, dynamic', description: 'Concert photo' },
    { id: 'sd-19', prompt: 'pet photography, dog portrait, cute, natural light, professional', description: 'Pet photo' },
    { id: 'sd-20', prompt: 'real estate photo, modern home, listing, professional, aspirational', description: 'Real estate' },
    { id: 'sd-21', prompt: 'movie poster, action, epic, hollywood, dramatic lighting', description: 'Movie poster' },
    { id: 'sd-22', prompt: 'album cover, electronic music, neon, abstract, modern', description: 'Album cover' },
    { id: 'sd-23', prompt: 'social media post, fitness, motivational, modern design, vibrant', description: 'Social post' },
    { id: 'sd-24', prompt: 'botanical illustration, flowers, detailed, scientific, elegant', description: 'Botanical art' },
    { id: 'sd-25', prompt: 'steampunk, mechanical, brass, Victorian, detailed, concept art', description: 'Steampunk' },
    { id: 'sd-26', prompt: 'space art, nebula, stars, cosmic, beautiful, 8k', description: 'Space art' }
  ],
  longPrompts: [
    { id: 'sd-long-1', title: 'Professional Headshot', prompt: 'Professional corporate headshot, business woman, 40 years old, confident smile, studio lighting, white background, professional photography, sharp focus on eyes, Canon 85mm f/1.4, commercial quality, LinkedIn ready, clean and modern', useCase: 'Corporate Headshot' },
    { id: 'sd-long-2', title: 'Cinematic Landscape', prompt: 'Cinematic landscape photograph, majestic mountain range at golden hour, warm orange and purple sky, dramatic clouds, reflection in lake, Ansel Adams style, 24mm wide angle lens, 8k resolution, national geographic quality, epic vista, breathtaking nature', useCase: 'Landscape Photography' },
    { id: 'sd-long-3', title: 'Fashion Editorial', prompt: 'Fashion editorial photograph, model in designer haute couture, elegant evening gown, dramatic pose, magazine cover quality, Vogue style, professional makeup, studio lighting, 85mm portrait lens, fashion photography, high-end editorial', useCase: 'Fashion Editorial' },
    { id: 'sd-long-4', title: 'Game Concept Art', prompt: 'Fantasy game concept art, ancient ruined temple in jungle, mysterious atmosphere, epic scale, Unreal Engine 5 quality, detailed architecture, mystical lighting, Craig Mullins and Feng Zhu inspired, concept art for video game, professional quality', useCase: 'Game Concept Art' },
    { id: 'sd-long-5', title: 'E-commerce Product', prompt: 'E-commerce product photography, premium wireless earbuds on clean white background, soft studio lighting, professional commercial photography, clean shadows, Amazon product listing quality, tech marketing, sharp focus, white background', useCase: 'Product Photography' },
    { id: 'sd-long-6', title: 'Anime Style Illustration', prompt: 'Anime illustration, beautiful girl with long flowing silver hair, magical girl aesthetic, sparkles and light effects, pastel color palette, Studio Ghibli and Makoto Shinkai inspired, Key animation style, colorful background, high quality anime art', useCase: 'Anime Illustration' },
    { id: 'sd-long-7', title: 'Architectural Visualization', prompt: 'Architectural visualization, modern luxury villa exterior, dusk lighting, warm interior glow, infinity pool, palm trees, dramatic sky, wide angle lens, architectural photography, luxury real estate, CG rendering quality, Unreal Engine', useCase: 'Archviz' },
    { id: 'sd-long-8', title: 'Food Photography', prompt: 'Professional food photography, gourmet restaurant dish, perfectly plated pasta with truffle, rustic wooden table, natural window light, shallow depth of field, professional food styling, Michelin star quality, appetizing and mouth-watering, menu ready', useCase: 'Food Photography' },
    { id: 'sd-long-9', title: 'Portrait Photography', prompt: 'Portrait photography, natural light from window, indoor portrait, warm and golden, relaxed expression, 50mm lens, shallow depth of field, film grain optional, lifestyle photography, professional quality, candid and authentic', useCase: 'Portrait Photography' },
    { id: 'sd-long-10', title: 'Wildlife Safari', prompt: 'Wildlife photography, African lion pride resting under acacia tree, golden hour light, Serengeti, documentary style, National Geographic quality, 400mm telephoto, natural habitat, epic wildlife moment, nature photography', useCase: 'Wildlife Photography' },
    { id: 'sd-long-11', title: 'Film Poster', prompt: 'Movie poster design, epic sci-fi film, hero standing on spaceship overlooking planet, dramatic lighting, theatrical release style, Hollywood quality, 2:3 aspect ratio, typography space, blockbuster aesthetic, film marketing quality', useCase: 'Film Poster' },
    { id: 'sd-long-12', title: 'Album Cover Art', prompt: 'Album cover art, electronic dance music, abstract neon shapes, pulsing energy, dark background with bright accents, Daft Punk aesthetic, square format, streaming service ready, club vibes, modern music design, festival poster style', useCase: 'Album Cover' },
    { id: 'sd-long-13', title: 'Interior Design', prompt: 'Interior design photography, modern minimalist living room, floor to ceiling windows, city view, contemporary furniture, neutral color palette, architectural digest style, wide angle, aspirational lifestyle, luxury home, professional interior photography', useCase: 'Interior Design' },
    { id: 'sd-long-14', title: 'Children Book Art', prompt: "Children's book illustration, curious bear cub in magical forest, soft friendly style, Quentin Blake inspired, warm colors, not scary, suitable for ages 3-7, whimsical and sweet, storybook aesthetic, full page illustration, children's publishing quality", useCase: 'Children Book' },
    { id: 'sd-long-15', title: 'Cosmetics Advertising', prompt: 'Cosmetics advertising photography, luxury perfume bottle, elegant glass, golden liquid, dramatic lighting, black background, high-end beauty advertising, Sephora quality, professional studio, aspirational lifestyle, beauty marketing', useCase: 'Cosmetics Advertising' },
    { id: 'sd-long-16', title: 'Car Photography', prompt: 'Automotive photography, luxury sports car in studio, dramatic lighting, reflective floor, sleek design, Porsche or Ferrari advertising style, automotive marketing, professional car photography, dealer ready, high-end automotive', useCase: 'Car Photography' },
    { id: 'sd-long-17', title: 'Comic Book Art', prompt: 'Comic book illustration, hero in action pose, cape flowing, fighting stance, Marvel comics style, dynamic composition, inked linework, Frank Miller inspired, comic panel quality, graphic novel art, superhero comic style', useCase: 'Comic Book Art' },
    { id: 'sd-long-18', title: 'Real Estate Listing', prompt: 'Real estate photography, modern open concept home, floor to ceiling windows, stunning city view, twilight magic, interior and exterior lights on, Sothebys listing quality, aspirational lifestyle, professional real estate marketing, wide angle lens', useCase: 'Real Estate' },
    { id: 'sd-long-19', title: 'Travel Photography', prompt: 'Travel photography, influencer at famous landmark, iconic Bali temple, golden hour, tropical setting, Instagram quality, National Geographic adventure style, wanderlust, aspirational travel content, professional travel blog, tourism marketing', useCase: 'Travel Photography' },
    { id: 'sd-long-20', title: 'Logo Concept', prompt: 'Logo design concept, tech startup, minimalist geometric owl mascot, blue gradient, modern, scalable vector, works at small sizes, clean design, famous logo designer quality, brand identity, corporate logo, professional business branding', useCase: 'Logo Design' }
  ],
  faqs: [
    { question: 'What is the best Stable Diffusion model in 2026?', answer: 'SDXL 1.0 is the best for general use - great quality and speed. For photorealism, use Juggernaut XL or Realistic Vision. For anime, use Animagine or Pony Diffusion. Choose based on your style needs.' },
    { question: 'How do I get consistent results?', answer: 'Use the same seed, similar prompts, and consistent settings. Create a prompt template with your preferred elements. Use LoRA models for specific styles. Keep settings consistent between generations.' },
    { question: 'What are the best settings for Stable Diffusion?', answer: 'Start with: 20-30 steps, CFG 7-8, sampler DPM++ 2M Karras. For more detail: increase steps. For less creativity: lower CFG. Adjust based on results.' },
    { question: 'How do negative prompts help?', answer: 'Negative prompts remove unwanted elements. Common: "low quality, blurry, ugly, distorted". Add based on common issues you see. Helps clean up generations significantly.' },
    { question: 'What are LoRA models?', answer: 'LoRAs are small model additions that add specific styles, characters, or concepts. They are lightweight and can be combined. Use them for consistent styles or specific looks.' },
    { question: 'Can I use SD commercially?', answer: 'Yes, generally you own what you create with SD. However, avoid copying copyrighted characters. Create original work. Check specific model licenses for any restrictions.' },
    { question: 'What VAE should I use?', answer: 'Usually the default VAE works fine. For more saturated colors: use VAE-ft-mse-840000-ema. For anime: anime VAE. Most SDXL models include VAE built in.' },
    { question: 'How do I improve image quality?', answer: 'Use high step count (30+), proper CFG scale, good prompts. Upscale with ESRGAN or AI upscalers. Use SDXL for better base quality. Add quality tags: "masterpiece, best quality".' }
  ],
  platformTips: [
    'Use SDXL 1.0 for best overall quality and speed',
    'Add quality tags: "masterpiece, best quality, highly detailed"',
    'Use negative prompts: "low quality, blurry, distorted"',
    'For photorealism: use Realistic Vision or Juggernaut XL',
    'For anime: use Animagine XL or Pony Diffusion',
    'Use LoRA models for specific styles or characters',
    'Try DPM++ 2M Karras or Euler a samplers',
    'Use CFG 7-8 for balance, 4-6 for more creativity'
  ]
};
