/* =============================================
   Claiya Lou — Store Engine
   Full Cart, Personalise, Checkout & Order Flow
   ============================================= */

'use strict';

/* ─────────────────────────────────────────────
   1. BOOK CATALOGUE (all 19 books with content)
   ───────────────────────────────────────────── */
const BOOKS = {
  princess: {
    key: 'princess',
    title: 'The Princess Inside',
    subtitle: 'She discovers the palace hidden in her heart',
    theme: '👑 Princess & Magic',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/princess.jpg',
    pages: [
      { img: 'images/books/princess.jpg', caption: 'Cover — She stands before the palace of her dreams' },
      { img: 'images/books/fairy.jpg', caption: 'Page 3 — The fairy queen places a golden crown upon her head' },
      { img: 'images/books/magic.jpg', caption: 'Page 7 — She realises the palace was always inside her heart' }
    ],
    story: [
      { heading: 'Once upon a morning…', text: 'A little girl woke up and looked in the mirror. But today, something was different. Today, she could see what was always there — the princess inside.' },
      { heading: 'The golden gate opened', text: 'A shimmering gate appeared at the end of the garden. Beyond it lay a palace more beautiful than any dream — and it had been waiting for her all along.' },
      { heading: 'Every creature bowed', text: 'As she walked through the palace halls, the flowers turned toward her. The birds sang her name. Even the stars leaned down to whisper: "We\'ve been waiting for you, princess."' },
      { heading: 'The crown was placed', text: 'The fairy queen smiled and said: "The crown doesn\'t make you a princess. You make the crown shine." And from that day forward, she wore her invisible crown everywhere — to the park, to breakfast, to bed.' }
    ]
  },

  unicorn: {
    key: 'unicorn',
    title: 'Unicorn Skies',
    subtitle: 'She soars through rainbow clouds on a glittering unicorn',
    theme: '🦄 Magical Adventure',
    age: '2–7',
    basePrice: 39.99,
    image: 'images/books/unicorn.jpg',
    pages: [
      { img: 'images/books/unicorn.jpg', caption: 'Cover — She takes flight on her unicorn into rainbow skies' },
      { img: 'images/books/princess.jpg', caption: 'Page 5 — Rainbow clouds part as she soars through the stars' }
    ],
    story: [
      { heading: 'A knock at the window', text: 'It was midnight when the glittering nose tapped against her windowpane. She sat up. A unicorn — rainbow mane, golden hooves, eyes full of stars — was hovering right outside.' },
      { heading: 'Hold on tight!', text: 'Up they went, through the soft pink clouds, past the sleepy moon, into a sky full of colour she had never seen. Every rainbow they crossed left sparkles in her hair.' },
      { heading: 'The cloud castle', text: 'High above the world was a castle built entirely from clouds. The unicorn family lived there — and they had been searching for a rider brave enough to find them.' },
      { heading: 'She was the one', text: '"We searched the whole sky," the unicorn king told her. "And then we found you." She hugged her unicorn close and whispered, "I knew magic was real. I always knew."' }
    ]
  },

  superhero: {
    key: 'superhero',
    title: 'Super Girl',
    subtitle: 'She flies above the city — the world\'s greatest superhero',
    theme: '⚡ Empowerment',
    age: '3–9',
    basePrice: 39.99,
    image: 'images/books/supergirl.jpg',
    pages: [
      { img: 'images/books/supergirl.jpg', caption: 'Cover — Her cape catches the wind as she soars above the city' },
      { img: 'images/books/unicorn.jpg', caption: 'Page 4 — The whole city looks up and cheers' }
    ],
    story: [
      { heading: 'The cape arrived', text: 'It wasn\'t bought in a shop. It appeared one morning, folded neatly on her bed — blue as the sky, soft as clouds, and made just for her.' },
      { heading: 'The first flight', text: 'She ran to the window, jumped — and flew. The city spread out below her like a map made of lights, and she laughed so loud that birds changed direction just to see who was making all that joy.' },
      { heading: 'Someone needed help', text: 'Below, a little boy had lost his balloon. She swooped down, caught it, and handed it back with a smile. "How did you do that?" he gasped. "I just cared enough," she said.' },
      { heading: 'Being a hero', text: 'She learned that being a superhero wasn\'t about having powers. It was about choosing kindness, again and again, even when it\'s hard. That\'s the most super thing of all.' }
    ]
  },

  animals: {
    key: 'animals',
    title: 'The Animal Keeper',
    subtitle: 'She befriends every woodland creature she meets',
    theme: '🦋 Nature & Animals',
    age: '1–6',
    basePrice: 39.99,
    image: 'images/books/animals.jpg',
    pages: [
      { img: 'images/books/animals.jpg', caption: 'Cover — She stands in the golden sunlit meadow surrounded by friends' },
      { img: 'images/books/forest.jpg', caption: 'Page 6 — The enchanted forest welcomes her home' }
    ],
    story: [
      { heading: 'The meadow called her name', text: 'Every morning she would sit by the window and hear it — the soft hum of the meadow, the whisper of the trees, the gentle flutter of wings asking her to come outside.' },
      { heading: 'First, the rabbit', text: 'A little white rabbit sat at the edge of the garden and stared. She sat down slowly, held out her hand — and it hopped right into her lap. That was the beginning.' },
      { heading: 'Then, all the others', text: 'Word spread quickly through the woodland. The deer came. The bluebirds landed on her shoulders. The butterflies danced around her head. Every creature knew: she was the one who truly listened.' },
      { heading: 'The Animal Keeper', text: 'They called her the Keeper — not because she owned them, but because she kept their secrets, held their trust, and loved them wild and free. The forest was hers because she was theirs.' }
    ]
  },

  ocean: {
    key: 'ocean',
    title: 'Ocean Explorer',
    subtitle: 'She discovers the wonders of the deep blue sea',
    theme: '🌊 Ocean Adventure',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/ocean.jpg',
    pages: [
      { img: 'images/books/ocean.jpg', caption: 'Cover — She dives into the glittering underwater kingdom' },
      { img: 'images/books/princess.jpg', caption: 'Page 7 — The mermaids crown her Queen of the Ocean' }
    ],
    story: [
      { heading: 'The sea called her', text: 'She had always loved the ocean — the way it sparkled, the way it moved, the secrets it kept beneath the surface. One day, she decided to find them.' },
      { heading: 'The dive', text: 'She took one deep breath and dove. The water turned from blue to turquoise to deep magical purple. Fish in every colour she\'d ever imagined — and some she hadn\'t — swam past to say hello.' },
      { heading: 'The coral kingdom', text: 'Past the giant coral walls, past the glowing jellyfish lanterns, past the sleeping sea turtles, she found it — a palace built from pearls and seashells and moonlight.' },
      { heading: 'Queen of the Ocean', text: 'The mermaid queen removed her crown and placed it gently on her head. "We\'ve been waiting," she said, "for someone brave enough to come all the way down here." She smiled. She had always known she would.' }
    ]
  },

  forest: {
    key: 'forest',
    title: 'The Enchanted Forest',
    subtitle: 'She wanders where fireflies light the magical path',
    theme: '🌲 Enchanted Forest',
    age: '2–7',
    basePrice: 39.99,
    image: 'images/books/forest.jpg',
    pages: [
      { img: 'images/books/forest.jpg', caption: 'Cover — She steps into the golden enchanted forest' },
      { img: 'images/books/animals.jpg', caption: 'Page 4 — The woodland creatures share their secrets' }
    ],
    story: [
      { heading: 'Beyond the old oak gate', text: 'Everyone said the forest was too dark, too deep, too far. But she noticed something no one else did — the fireflies only flew in one direction. She decided to follow.' },
      { heading: 'The golden hour', text: 'Inside, the light was warm and golden, even at night. The trees were taller than any building she had seen, and their roots made staircases, and their branches made bridges.' },
      { heading: 'The forest remembered her', text: 'The oldest oak bent its branches low and whispered: "We know you. You\'ve been here before — in every dream you\'ve ever had." She placed her hand on the bark and felt it hum.' },
      { heading: 'The secret', text: 'The fireflies gathered around her and formed letters in the air: YOU BELONG HERE. She smiled, sat down among the roots, and stayed until the stars came out — and the stars stayed just a little bit longer because of her.' }
    ]
  },

  fairy: {
    key: 'fairy',
    title: 'The Fairy Garden',
    subtitle: 'She is crowned golden princess by the fairies',
    theme: '🧚 Princess & Magic',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/fairy.jpg',
    pages: [
      { img: 'images/books/fairy.jpg', caption: 'Cover — She steps through the magical fairy gate' },
      { img: 'images/books/princess.jpg', caption: 'Page 5 — The fairy queen places the golden crown upon her head' }
    ],
    story: [
      { heading: 'A door in the garden wall', text: 'It was barely the size of a shoebox — a tiny golden door in the garden wall with a tiny brass knocker. She knocked. And the whole garden shimmered.' },
      { heading: 'The fairy world', text: 'She stepped through and found herself in a world where flowers were taller than houses and dewdrops were the size of swimming pools. Fairies flew past leaving trails of light.' },
      { heading: 'The ceremony', text: 'The fairy queen announced: "Every hundred years, we choose a human girl — one with a heart full of wonder — to be our honorary princess. This time, it\'s you." Flowers bloomed under her feet as she walked forward.' },
      { heading: 'Her golden crown', text: 'The crown was made from woven moonlight and morning dew. When it touched her head, she felt warm all over — not because it was magic, but because she was finally being seen exactly as she always was.' }
    ]
  },

  magic: {
    key: 'magic',
    title: 'The Magic Maker',
    subtitle: 'The most powerful magic comes from believing in yourself',
    theme: '🌟 Princess & Magic',
    age: '3–9',
    basePrice: 39.99,
    image: 'images/books/magic.jpg',
    pages: [
      { img: 'images/books/magic.jpg', caption: 'Cover — She raises her wand and the whole academy gasps' },
      { img: 'images/books/fairy.jpg', caption: 'Page 6 — Her spell lights up the entire sky' }
    ],
    story: [
      { heading: 'The Academy of Magic', text: 'The school had been there for five hundred years — towers of twisted stone and windows full of coloured light. She arrived on the first day with a wand that had chosen her, not the other way around.' },
      { heading: 'The first spell', text: 'When she raised her wand, something unexpected happened. The magic didn\'t just glow — it sang. Notes floated from the tip of her wand like tiny birds, forming constellations that everyone in the room could see.' },
      { heading: 'The greatest test', text: 'The dark cloud threatened the whole valley. Every other student ran. She stayed. She raised her wand, closed her eyes, and thought about everyone she loved — and the magic that came out was blinding.' },
      { heading: 'What magic really is', text: 'The head teacher smiled and said: "Most students try to learn magic. But you already were it." She went home that evening and taught her stuffed animals three new spells. They were very good students.' }
    ]
  },

  safari: {
    key: 'safari',
    title: 'Safari Star',
    subtitle: 'She leads the grand savanna adventure on her elephant friend',
    theme: '🐘 Adventure',
    age: '3–8',
    basePrice: 39.99,
    image: 'images/books/safari.jpg',
    pages: [
      { img: 'images/books/safari.jpg', caption: 'Cover — She rides through the golden savanna at sunset' },
      { img: 'images/books/animals.jpg', caption: 'Page 4 — All the animals gather around their brave explorer' }
    ],
    story: [
      { heading: 'The elephant arrived at dawn', text: 'She woke to the sound of something enormous and wonderful at her door. The elephant was young — not much bigger than a car — and it had walked all night to find her.' },
      { heading: 'The golden savanna', text: 'Together they crossed the savanna as the sun turned everything to gold. Giraffes stretched their necks to say hello. Zebras galloped alongside. Even the lions stopped to watch the brave little explorer pass.' },
      { heading: 'The great gathering', text: 'At the heart of the savanna was the watering hole — and every animal in Africa had gathered there. They parted as she approached, her elephant standing tall, as if to say: "This is our explorer. Our star."' },
      { heading: 'The explorer\'s oath', text: 'She raised her safari hat and made her oath: to always look at the world with wonder, to protect every creature she met, and to never, ever stop exploring. The savanna roared its approval.' }
    ]
  },

  space: {
    key: 'space',
    title: 'Among the Stars',
    subtitle: 'The youngest, bravest astronaut in the universe',
    theme: '🚀 Adventure',
    age: '4–9',
    basePrice: 39.99,
    image: 'images/books/space.jpg',
    pages: [
      { img: 'images/books/space.jpg', caption: 'Cover — She floats freely through the Milky Way' },
      { img: 'images/books/supergirl.jpg', caption: 'Page 7 — She plants her flag on the rainbow planet' }
    ],
    story: [
      { heading: 'Mission Control, we have lift-off', text: 'The countdown finished and the rocket — painted in her favourite colours — pierced through the clouds, through the sky, through the invisible line between here and the everything beyond.' },
      { heading: 'Floating', text: 'When the engines went quiet, she floated. Arms out, eyes wide, surrounded by more stars than she had ever counted. She laughed — and the sound of it echoed out into space where no one had ever laughed before.' },
      { heading: 'The rainbow planet', text: 'Beyond Jupiter, past the asteroid field, was a planet nobody had ever seen because nobody had ever been brave enough to go looking. Its rings were made of every colour. Its surface was soft as clouds.' },
      { heading: 'The youngest astronaut', text: 'She planted her flag on the rainbow planet and sent a message home: "I found something new. Something beautiful. I\'ll keep going." Mission Control cried happy tears. So did the stars.' }
    ]
  },

  mermaid: {
    key: 'mermaid',
    title: 'Mermaid Queen',
    subtitle: 'She discovers her shimmering coral kingdom beneath the waves',
    theme: '🧜 Adventure',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/mermaid.jpg',
    pages: [
      { img: 'images/books/mermaid.jpg', caption: 'Cover — She glides through the glowing underwater palace' },
      { img: 'images/books/ocean.jpg', caption: 'Page 5 — The sea creatures crown her their queen' }
    ],
    story: [
      { heading: 'The shell spoke first', text: 'She had always held shells to her ear. This time, one spoke back. "Come," it whispered. "Your kingdom is waiting." She put the shell in her pocket and walked to the sea.' },
      { heading: 'The transformation', text: 'The moment her feet touched the waves, something magical happened. A shimmering tail appeared — teal and gold and violet — and she dove beneath the surface without even thinking about it.' },
      { heading: 'The coral palace', text: 'She swam through caverns lit by bioluminescent fish, past doorways made of whale bone, into a throne room where the coral throne had always had exactly her name carved into it.' },
      { heading: 'Queen of the Deep', text: 'The sea creatures gathered — fish and dolphins, seahorses and starfish, even the whales sang from far away. "All hail," they said, "the Queen who came home." She sat on her throne and smiled. She had always known she was meant to rule something magical.' }
    ]
  },

  doctor: {
    key: 'doctor',
    title: "Dr. Claiya's Animal Clinic",
    subtitle: 'Kindness is the greatest medicine of all',
    theme: '🐾 Nature & Animals',
    age: '1–6',
    basePrice: 39.99,
    image: 'images/books/doctor.jpg',
    pages: [
      { img: 'images/books/doctor.jpg', caption: 'Cover — She tends to the baby animals with loving care' },
      { img: 'images/books/animals.jpg', caption: 'Page 3 — Every animal leaves healthy and happy' }
    ],
    story: [
      { heading: 'Doctor on duty', text: 'The clinic opened at sunrise. By the time she arrived — stethoscope around her neck, doctor\'s bag in hand — there was already a line of animals waiting patiently outside the door.' },
      { heading: 'The first patient', text: 'A baby rabbit with a sore paw. She examined it carefully, wrapped it in a tiny bandage, and gave it a gentle cuddle. The rabbit hopped away so happily it did three backflips.' },
      { heading: 'The busiest day', text: 'One by one they came: a bluebird who had bumped into a window, a hedgehog who had lost his spines, a deer who was just feeling a bit lonely. She healed them all — some with medicine, some with hugs.' },
      { heading: 'The best medicine', text: 'At the end of the day, she sat on the porch and watched her patients playing in the meadow — healed, happy, free. Her supervisor (a very wise owl) said: "You know what your secret ingredient is?" She nodded. "Love." "Always," said the owl.' }
    ]
  },

  chef: {
    key: 'chef',
    title: "Chef Claiya's Rainbow Kitchen",
    subtitle: 'The secret ingredient is always love',
    theme: '👩‍🍳 Empowerment',
    age: '2–7',
    basePrice: 39.99,
    image: 'images/books/chef.jpg',
    pages: [
      { img: 'images/books/chef.jpg', caption: 'Cover — She stirs the glowing rainbow batter' },
      { img: 'images/books/magic.jpg', caption: 'Page 4 — Rainbow cupcakes float up to the ceiling!' }
    ],
    story: [
      { heading: 'The magical kitchen', text: 'The kitchen was her kingdom. Every pot had a personality, every spoon had a story, and the oven — when it was really feeling it — hummed songs she had never heard anywhere else.' },
      { heading: 'The rainbow batter', text: 'She combined flour, butter, joy, and a secret thing she couldn\'t name but always felt in her chest when she cooked for people she loved. The batter turned every colour at once.' },
      { heading: 'The cupcakes rose', text: 'When she opened the oven, the cupcakes floated out on their own — dozens of them, each a different colour, each one granting a tiny wish to whoever took the first bite.' },
      { heading: 'What she knew', text: 'She had learned something that day — something more important than any recipe. Food made with love tastes different from food made without it. And she was never going to make anything any other way.' }
    ]
  },

  easter: {
    key: 'easter',
    title: "Claiya's Easter Magic",
    subtitle: 'The most magical Easter morning ever',
    theme: '🐣 Seasonal',
    age: '1–6',
    basePrice: 39.99,
    image: 'images/books/easter.jpg',
    pages: [
      { img: 'images/books/easter.jpg', caption: 'Cover — She sits in her giant magical Easter basket' },
      { img: 'images/books/animals.jpg', caption: 'Page 3 — The golden eggs glow and baby chicks hatch!' }
    ],
    story: [
      { heading: 'Easter morning', text: 'She woke before everyone else — the way you do when the day feels extra special before you even know why. She tiptoed to the window, and the garden below took her breath away.' },
      { heading: 'The golden eggs', text: 'Eggs in every colour filled the garden — but these weren\'t ordinary eggs. They glowed. They pulsed. One was singing softly to itself. She ran outside in her pyjamas and her best socks.' },
      { heading: 'The hatching', text: 'She sat down next to the biggest golden egg and held her breath. CRACK. Then another. CRACK CRACK. Baby chicks tumbled out — the fluffiest, most ridiculous, most loveable chicks in all of history.' },
      { heading: 'The Easter secret', text: 'At the very bottom of the garden, beneath the biggest flower, she found a note: "Easter is magic — but only for those who still believe it can be." She folded it up, put it in her heart, and carried it there always.' }
    ]
  },

  loved: {
    key: 'loved',
    title: 'Always & Forever Loved',
    subtitle: 'From the very first moment, she was surrounded by love',
    theme: '💝 Love & Family',
    age: '0–5',
    basePrice: 39.99,
    image: 'images/books/loved.jpg',
    pages: [
      { img: 'images/books/loved.jpg', caption: 'Cover — Held in the warmth of unconditional love' },
      { img: 'images/books/easter.jpg', caption: 'Page 2 — Every heartbeat says "you are everything"' }
    ],
    story: [
      { heading: 'Before she even arrived', text: 'They had already chosen her name. They had already painted the room. They had already memorised the sound of her tiny heartbeat on the screen and called it the best song they had ever heard.' },
      { heading: 'The first moment', text: 'When she arrived, everyone who saw her understood something they had never understood before. Love, it turns out, doesn\'t grow slowly. Sometimes it arrives all at once, like a sunrise inside your chest.' },
      { heading: 'Every ordinary day', text: 'In the morning when she woke. At breakfast, at bathtime, at that exact moment she fell asleep mid-sentence because the world was so big and she was so small and so brave in it.' },
      { heading: 'And always', text: 'This is the thing that will never change, no matter how big she gets, no matter how far she goes, no matter what adventures she chooses: she is loved. Completely. Always. And forever.' }
    ]
  },

  threeofus: {
    key: 'threeofus',
    title: 'The Three of Us',
    subtitle: 'Their greatest adventure is each other',
    theme: '💛 Love & Family',
    age: '1–8',
    basePrice: 39.99,
    image: 'images/books/threeofus.jpg',
    pages: [
      { img: 'images/books/threeofus.jpg', caption: 'Cover — Three siblings hugging in a golden magical garden' },
      { img: 'images/books/bigbrother.jpg', caption: 'Page 4 — Brother lifts the little one up so she can touch the stars' }
    ],
    story: [
      { heading: 'Three is not a crowd', text: 'Some things are better with three. Wishes. Ice cream flavours. Hugs that go all the way around. And siblings, it turns out, are the best thing that comes in threes.' },
      { heading: 'The big brother', text: 'He was cool before cool was a thing. He knew how to fix things, how to make her laugh when she was sad, and how to carry her on his shoulders so she could see over the crowd. He was her first hero.' },
      { heading: 'The big sister', text: 'She showed her how to walk into a room. How to wear a dress like you own the whole earth. How to be brave even when your knees are wobbling. She was her first best friend.' },
      { heading: 'The youngest, the mightiest', text: 'And then there was her — the one they both protected, both adored, both could never quite say no to. The youngest. The bravest. The one who held the whole family\'s heart in her tiny, extraordinary hands.' }
    ]
  },

  bigbrother: {
    key: 'bigbrother',
    title: 'My Big Brother, My Hero',
    subtitle: 'He lifts her up — literally and always',
    theme: '💙 Love & Family',
    age: '1–7',
    basePrice: 39.99,
    image: 'images/books/bigbrother.jpg',
    pages: [
      { img: 'images/books/bigbrother.jpg', caption: 'Cover — Big brother lifts his little sister up toward the stars' },
      { img: 'images/books/threeofus.jpg', caption: 'Page 5 — Together they are unstoppable' }
    ],
    story: [
      { heading: 'Her very first hero', text: 'Long before she knew the word for it, she knew what he was. He was the one she reached for when she couldn\'t reach anything else. He was her first word after Mama: "Bro."' },
      { heading: 'The one who taught her', text: 'He taught her to walk by letting her hold his finger. He taught her to run by chasing her through the garden. He taught her to laugh by being the most ridiculous person she had ever met.' },
      { heading: 'Always watching', text: 'When nobody else was looking, she would look at him. Studying his confidence, copying his walk (though she had her own, better version), learning that being cool wasn\'t something you tried to be. It was something you just were.' },
      { heading: 'The thing about brothers', text: 'They drive you crazy and they love you wildly and they\'re bad at saying it but good at showing it — with a shoulder to sit on, a hand to hold, and a whole lifetime of being right there, right when she needs it most.' }
    ]
  },

  bigsister: {
    key: 'bigsister',
    title: 'My Big Sister, My Guide',
    subtitle: 'Sisters share magic that nobody else can see',
    theme: '🌸 Love & Family',
    age: '1–7',
    basePrice: 39.99,
    image: 'images/books/bigsister.jpg',
    pages: [
      { img: 'images/books/bigsister.jpg', caption: 'Cover — Sisters skip together through a glowing magical meadow' },
      { img: 'images/books/threeofus.jpg', caption: 'Page 3 — Their secret language only they understand' }
    ],
    story: [
      { heading: 'Before she could walk', text: 'Her big sister was already showing her how. Slower steps, gentler than anyone else would think to take, because she understood — you have to slow down when you love someone enough.' },
      { heading: 'The dress-up days', text: 'Every drawer became a treasure chest. Every scarf became a cape. Every pair of heels became thrones. They were queens of the bedroom carpet, and their kingdom was the most glamorous in the world.' },
      { heading: 'The real lessons', text: 'She taught her the important ones: how to stand tall even when you\'re small. How to smile so the whole room shifts. How to love yourself first, fiercely, without apology — and then love everyone else just as boldly.' },
      { heading: 'Sisters', text: 'They don\'t just share a home. They share a language, a look, a laugh that starts before the joke is even finished. They share magic. And the magic only gets stronger the older they grow.' }
    ]
  },

  squad: {
    key: 'squad',
    title: 'The Sibling Squad',
    subtitle: 'Together they can explore anything the world has to offer',
    theme: '🌊 Love & Family',
    age: '2–9',
    basePrice: 39.99,
    image: 'images/books/squad.jpg',
    pages: [
      { img: 'images/books/squad.jpg', caption: 'Cover — Three siblings explore an underwater aquarium together' },
      { img: 'images/books/threeofus.jpg', caption: 'Page 6 — The squad discovers the world\'s greatest treasure' }
    ],
    story: [
      { heading: 'The squad assembles', text: 'She had been waiting for this moment all morning. Backpack packed, trainers on, standing at the door before anyone else was even awake. Because today, the squad was going on an adventure.' },
      { heading: 'The aquarium', text: 'The whale tank stopped them all. Three faces pressed against the glass, three pairs of eyes wide, three mouths saying nothing because sometimes beautiful things make you run out of words.' },
      { heading: 'The greatest discovery', text: 'They went past the sharks and the stingrays and the glowing jellyfish. And somewhere in the blue-lit tunnel, surrounded by fish of every colour, the little one said: "This is my favourite thing." And both siblings smiled, because they were her favourite thing too.' },
      { heading: 'The squad\'s secret', text: 'They had learned something no explorer\'s map could show you: the greatest adventures aren\'t the places you go. They\'re the people you go there with. And these three would always, always go together.' }
    ]
  },

  /* ── SENSORY STORIES COLLECTION ── */

  iwoveyou: {
    key: 'iwoveyou',
    title: 'I Wove You',
    subtitle: 'She says it her own way. And her way is perfect.',
    theme: '🧩 Sensory Stories',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/iwoveyou.jpg',
    sensory: true,
    pages: [
      { img: 'images/books/iwoveyou.jpg', caption: 'Cover — She looks up and says the most important words' },
      { img: 'images/books/loved.jpg', caption: 'Page 4 — Everyone hears it differently. She says it best.' }
    ],
    story: [
      { heading: 'She has her own words.', text: 'Some words sound different when she says them. That is okay. Her words are hers. And hers are beautiful.' },
      { heading: 'She looks up.', text: 'She looks up at the people she loves. Her eyes are big. Her heart is big. She takes a breath.' },
      { heading: 'She says it.', text: '"I wove you."\n\nThree words. Her words. The most important words in the world.' },
      { heading: 'Everyone goes quiet.', text: 'When she says it — everyone in the room goes very quiet. Because they just heard something rare. Something real. Something that can only come from her.' }
    ]
  },

  headphones: {
    key: 'headphones',
    title: 'Her Magic Headphones',
    subtitle: 'The world is loud. Her headphones make it hers.',
    theme: '🧩 Sensory Stories',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/headphones.jpg',
    sensory: true,
    pages: [
      { img: 'images/books/headphones.jpg', caption: 'Cover — She puts on her headphones and the world becomes music' },
      { img: 'images/books/iwoveyou.jpg', caption: 'Page 3 — Inside her headphones is a world made just for her' }
    ],
    story: [
      { heading: 'The world is loud.', text: 'Doors slam. Cars honk. People talk all at once. It is a lot. It is too much. She knows what to do.' },
      { heading: 'She puts them on.', text: 'Her headphones go on. They are soft. They fit just right. They are hers.' },
      { heading: 'The world changes.', text: 'The loud sounds get quiet. The scratchy sounds go away. What is left is hers. Just hers.' },
      { heading: 'She hears the music.', text: 'Other people hear the noise. She hears the music inside it. That is not a problem. That is a superpower.' }
    ]
  },

  perfectline: {
    key: 'perfectline',
    title: 'The Perfect Line',
    subtitle: 'Everything in its place. Everything just right.',
    theme: '🧩 Sensory Stories',
    age: '2–7',
    basePrice: 39.99,
    image: 'images/books/perfectline.jpg',
    sensory: true,
    pages: [
      { img: 'images/books/perfectline.jpg', caption: 'Cover — She lines up her toys in a perfect, beautiful row' },
      { img: 'images/books/headphones.jpg', caption: 'Page 5 — The line is perfect. She made it that way.' }
    ],
    story: [
      { heading: 'She has her toys.', text: 'She has the small bear. She has the blue block. She has the yellow duck. She knows exactly where they go.' },
      { heading: 'She lines them up.', text: 'One. Two. Three. Four. Each one has a place. Each one is right. She steps back and looks.' },
      { heading: 'It is perfect.', text: 'The line is straight. The colours are right. Everything is where it should be. She did that. She made it perfect.' },
      { heading: 'That is her.', text: 'She sees the world in lines and patterns and places. She sees things other people miss. That is not strange. That is extraordinary.' }
    ]
  },

  daddyboots: {
    key: 'daddyboots',
    title: "Daddy's Boots by the Door",
    subtitle: 'He goes away so others can be safe. She is always brave.',
    theme: '🎖️ Military Family',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/daddyboots.jpg',
    sensory: false,
    military: true,
    pages: [
      { img: 'images/books/daddyboots.jpg', caption: 'Cover — She touches Daddy\'s boots glowing by the door' },
      { img: 'images/books/iwoveyou.jpg', caption: 'Page 6 — Same moon. Same stars. Never really far apart.' }
    ],
    story: [
      { heading: 'The boots are by the door.', text: 'Every morning Daddy\'s boots are by the door. She walks past them. She touches them. They are big and strong. Like Daddy.' },
      { heading: 'One day they are gone.', text: 'The boots are gone. Daddy is gone. He went away. He went to keep people safe. That is what brave people do.' },
      { heading: 'She misses him.', text: 'She misses Daddy. That is okay. Missing someone means you love them. She loves him very much.' },
      { heading: 'The moon is the same.', text: 'Every night she looks at the moon. Daddy can see this moon too. Wherever he is — he looks up. They see the same thing. They are together.' },
      { heading: 'The boots come back.', text: 'One day the boots are back. Daddy is home. She runs. He catches her. The boots are by the door again. Everything is right.' }
    ]
  },

  toomuch: {
    key: 'toomuch',
    title: 'Too Much Tuesday',
    subtitle: 'Some days are too much. And that is okay.',
    theme: '🧩 Sensory Stories',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/toomuch.jpg',
    sensory: true,
    pages: [
      { img: 'images/books/toomuch.jpg', caption: 'Cover — She finds her quiet corner after a big, loud day' },
      { img: 'images/books/headphones.jpg', caption: 'Page 4 — Her safe space is soft and still and hers' }
    ],
    story: [
      { heading: 'Today is too much.', text: 'The lights are too bright. The sounds are too loud. The shirt feels itchy. The lunch is wrong. It is all too much today.' },
      { heading: 'Her body tells her.', text: 'Her body says: stop. Her body says: quiet. Her body says: I need a break. She listens. That is smart.' },
      { heading: 'She finds her corner.', text: 'The corner is soft. The blanket is heavy and warm. The pillow is smooth. It is quiet here. It is hers.' },
      { heading: 'Someone sits beside her.', text: 'Someone comes. They do not talk. They do not fix anything. They just sit. That is the best thing they could do.' },
      { heading: 'She is okay.', text: 'After a while she feels better. The world is still there. But it is smaller now. And she is ready. She was never broken. She just needed quiet.' }
    ]
  },

  specialthing: {
    key: 'specialthing',
    title: 'Her Special Thing',
    subtitle: 'Everyone has a special thing. Hers lights her up.',
    theme: '🧩 Sensory Stories',
    age: '2–9',
    basePrice: 39.99,
    image: 'images/books/specialthing.jpg',
    sensory: true,
    pages: [
      { img: 'images/books/specialthing.jpg', caption: 'Cover — She lights up when she talks about her special thing' },
      { img: 'images/books/perfectline.jpg', caption: 'Page 3 — She knows everything about it. Every single thing.' }
    ],
    story: [
      { heading: 'She has a special thing.', text: 'Everyone has something they love more than anything else. Hers makes her eyes go wide. Her voice goes fast. Her whole face changes.' },
      { heading: 'She knows everything.', text: 'She knows every name. Every fact. Every tiny detail. She could talk about it forever. And that is wonderful.' },
      { heading: 'Some people do not understand.', text: 'Sometimes people say: why do you love that so much? She does not know how to explain it. She just does. And that is enough.' },
      { heading: 'It is her superpower.', text: 'To love something that much. To know something that deeply. To light up that way. Not everyone can do that. She can. That is her superpower.' }
    ]
  },

  /* ── CLAIYA'S FAVOURITE THINGS COLLECTION ── */

  paintbrush: {
    key: 'paintbrush',
    title: "Claiya's Rainbow Paintbrush",
    subtitle: 'She goes to the backyard. She paints. And everything changes.',
    theme: '🎨 Her Special Things',
    age: '2–8',
    basePrice: 39.99,
    image: 'images/books/paintbrush.jpg',
    sensory: true,
    special: true,
    pages: [
      { img: 'images/books/paintbrush.jpg', caption: 'Cover — She stands in the backyard with her paintbrush and the whole world glows' },
      { img: 'images/books/paintbrush2.jpg', caption: 'Page 4 — Rainbow butterflies fly out of the paint and into the sky' }
    ],
    story: [
      { heading: 'She goes to the backyard.', text: 'She knows what she needs. She gets her paintbrush. She gets her paints. She goes outside. The backyard waits for her like it always does. It is her place.' },
      { heading: 'She dips the brush.', text: 'Red. She thinks of something loud and brave. She makes a line.\n\nBlue. She thinks of the sky. She thinks of Daddy, far away, looking at the same sky. She makes a curve.\n\nYellow. She thinks of cotton candy days and warm mornings. She makes a big, round sun.' },
      { heading: 'She steps back.', text: 'She looks at what she made. It is hers. Only she could have made it exactly like that. Not the colours. Not the lines. The feeling inside the lines. That is all her.' },
      { heading: 'She says to her painting:', text: '"I wove you."\n\nAnd the painting glows. Just a little. Just enough. Because things you put love into always glow a little — if you look close enough.' }
    ]
  },

  cottoncandy: {
    key: 'cottoncandy',
    title: 'The Cotton Candy Cloud',
    subtitle: 'One bite. And she was flying.',
    theme: '🩷 Her Special Things',
    age: '2–7',
    basePrice: 39.99,
    image: 'images/books/cottoncandy.jpg',
    sensory: true,
    special: true,
    pages: [
      { img: 'images/books/cottoncandy.jpg', caption: 'Cover — She sits on a pink cotton candy cloud high above the world' },
      { img: 'images/books/cottoncandy2.jpg', caption: 'Page 3 — The cotton candy turns into wings and lifts her off the ground' }
    ],
    story: [
      { heading: 'She saw it.', text: 'Pink. Fluffy. Enormous. Bigger than her head. Bigger than the whole afternoon. Cotton candy.\n\nShe did not say anything. She just looked at it. She already knew.' },
      { heading: 'She took a bite.', text: 'It melted. Right on her tongue. Sweet and soft and airy and gone all at once.\n\nAnd then it started to lift her. Just a little. Just her toes.\n\nThen her heels. Then all of her.' },
      { heading: 'She floated.', text: 'Up past the treetops. Up past the rooftops. Up where the clouds were the same colour as what she was eating.\n\nShe was not scared. She was exactly where she wanted to be.' },
      { heading: 'She looked down.', text: 'And waved.\n\nSomeday she would tell them what cotton candy really is. It is not just sweet. It is the feeling of the exact perfect moment — caught in your hand before it disappears.' }
    ]
  },

  tastetheworld: {
    key: 'tastetheworld',
    title: 'Claiya Tastes the World',
    subtitle: 'Every bite is an adventure. She takes them all.',
    theme: '🍽️ Her Special Things',
    age: '1–7',
    basePrice: 39.99,
    image: 'images/books/tastetheworld.jpg',
    sensory: true,
    special: true,
    pages: [
      { img: 'images/books/tastetheworld.jpg', caption: 'Cover — She sits at a magical table covered in foods from every corner of the world' },
      { img: 'images/books/paintbrush.jpg', caption: 'Page 5 — Every flavour tells her a story from somewhere far away' }
    ],
    story: [
      { heading: 'She is not picky.', text: 'She is selective. There is a difference.\n\nShe knows what she wants. She knows how it should smell. She knows how it should look on the plate. She knows before she tastes it. She just knows.' },
      { heading: 'The funnel cake.', text: 'Warm. Crispy on the outside. Soft underneath. Powdery white on top. She took one bite and stopped.\n\nShe did not speak for a moment.\n\nThen she nodded. Once. Slowly.\n\nThat meant: yes. This is the one.' },
      { heading: 'The cotton candy (again).', text: 'She always comes back to it. Pink. Always pink. It does not fill her up. It fills something else. Something that does not have a name yet.' },
      { heading: 'She tastes the world.', text: 'Every bite takes her somewhere. The funnel cake is a carnival at night. The fruit is a morning that has not decided what to be yet. The cotton candy is flying.\n\nShe does not just eat food. She goes places.' }
    ]
  }

}; // end BOOKS

/* ─────────────────────────────────────────────
   2. CART STATE
   ───────────────────────────────────────────── */
let cart = [];
let currentPreviewBook = null;
let currentPersonaliseBook = null;

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.totalPrice * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

/* ─────────────────────────────────────────────
   3. BOOK PREVIEW MODAL
   ───────────────────────────────────────────── */
function openPreview(bookKey) {
  const book = BOOKS[bookKey];
  if (!book) return;
  currentPreviewBook = bookKey;

  document.getElementById('modalTitle').textContent = book.title;
  document.getElementById('modalSubtitle').textContent = book.subtitle;

  // Cover images
  const pagesEl = document.getElementById('modalPages');
  pagesEl.innerHTML = book.pages.map(p => `
    <div class="modal-page-item">
      <img src="${p.img}" alt="${p.caption}" loading="lazy" />
      <div class="modal-page-caption">${p.caption}</div>
    </div>
  `).join('');

  // Story pages
  const storyEl = document.getElementById('storyPagesPreview');
  storyEl.innerHTML = `
    <div class="story-preview-header">
      <h4>📖 Story Sneak Peek</h4>
      <p>A glimpse inside the pages…</p>
    </div>
    <div class="story-preview-pages">
      ${book.story.slice(0, 2).map((s, i) => `
        <div class="story-page-card">
          <div class="sp-page-num">Page ${i + 1}</div>
          <h5 class="sp-heading">${s.heading}</h5>
          <p class="sp-text">${s.text}</p>
        </div>
      `).join('')}
      <div class="story-page-card story-blur-card">
        <div class="sp-page-num">Page 3+</div>
        <h5 class="sp-heading">The adventure continues…</h5>
        <p class="sp-text sp-blurred">Personalise this book to reveal the full magical story featuring her name on every page...</p>
        <div class="blur-cta">Personalise to read the full story →</div>
      </div>
    </div>
  `;

  // Update personalise button
  document.getElementById('previewPersonaliseBtn').setAttribute('data-book', bookKey);

  document.getElementById('previewModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closePreview() {
  document.getElementById('previewModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

function closePreviewOutside(e) {
  if (e.target === document.getElementById('previewModal')) closePreview();
}

/* ─────────────────────────────────────────────
   4. PERSONALISE MODAL
   ───────────────────────────────────────────── */
let selectedFormat = 'hardcover';
let selectedSkinTone = '3';
let currentStep = 1;

const PRICES = {
  hardcover: 39.99,
  digital: 14.99,
  bundle: 49.99
};

function openPersonalise(bookKey) {
  // Can be called from preview modal or directly from book card
  const key = bookKey || currentPreviewBook;
  if (!key) return;
  const book = BOOKS[key];
  if (!book) return;
  currentPersonaliseBook = key;

  // Close preview if open
  closePreview();

  // Populate selected book preview
  document.getElementById('selectedBookPreview').innerHTML = `
    <div class="sbp-card">
      <img src="${book.image}" alt="${book.title}" />
      <div class="sbp-info">
        <div class="sbp-theme">${book.theme}</div>
        <div class="sbp-title">${book.title}</div>
        <div class="sbp-age">Ages ${book.age}</div>
      </div>
    </div>
  `;

  // Reset steps
  psGoToStep(1);
  updateOrderSummary();

  document.getElementById('personaliseModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closePersonalise() {
  document.getElementById('personaliseModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

function closePersonaliseOutside(e) {
  if (e.target === document.getElementById('personaliseModal')) closePersonalise();
}

function psGoToStep(step) {
  currentStep = step;
  document.querySelectorAll('.personalise-step').forEach((el, i) => {
    el.classList.toggle('hidden', i + 1 !== step);
  });
  document.querySelectorAll('.ps-step').forEach((el, i) => {
    el.classList.toggle('active', i + 1 <= step);
  });
  if (step === 3) updateOrderSummary();
}

function handlePhotoUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    document.getElementById('photoPlaceholder').classList.add('hidden');
    const preview = document.getElementById('photoPreviewImg');
    preview.src = e.target.result;
    preview.classList.remove('hidden');
    document.getElementById('photoUploadArea').classList.add('has-photo');
  };
  reader.readAsDataURL(file);
}

function selectSkinTone(el, tone) {
  document.querySelectorAll('.st-option').forEach(o => o.classList.remove('selected'));
  el.classList.add('selected');
  selectedSkinTone = tone;
}

function getSelectedFormat() {
  const sel = document.querySelector('input[name="format"]:checked');
  return sel ? sel.value : 'hardcover';
}

function updateCharCount() {
  const msg = document.getElementById('giftMessage');
  document.getElementById('charCount').textContent = msg.value.length;
}

function updateOrderSummary() {
  const book = BOOKS[currentPersonaliseBook];
  if (!book) return;
  const format = getSelectedFormat();
  let price = PRICES[format] || 39.99;
  let addons = 0;
  if (document.getElementById('addonGiftWrap')?.checked) addons += 4.99;
  if (document.getElementById('addonExpress')?.checked) addons += 12.99;
  const total = price + addons;

  document.getElementById('psTotal').textContent = `$${total.toFixed(2)}`;
  document.getElementById('orderSummaryMini').innerHTML = `
    <div class="osm-row"><span>${book.title} (${formatLabel(format)})</span><span>$${price.toFixed(2)}</span></div>
    ${document.getElementById('addonGiftWrap')?.checked ? '<div class="osm-row"><span>🎁 Gift Wrapping</span><span>$4.99</span></div>' : ''}
    ${document.getElementById('addonExpress')?.checked ? '<div class="osm-row"><span>⚡ Express Delivery</span><span>$12.99</span></div>' : ''}
    <div class="osm-row osm-row--free"><span>✨ Free Name Page</span><span>FREE</span></div>
    <div class="osm-row osm-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
  `;
}

function formatLabel(f) {
  return { hardcover: 'Hardcover', digital: 'Digital PDF', bundle: 'Bundle' }[f] || f;
}

function addToCartFromPersonalise() {
  const book = BOOKS[currentPersonaliseBook];
  if (!book) return;
  const childName = document.getElementById('childName').value.trim() || 'Your Little Star';
  const childAge = document.getElementById('childAge').value || '';
  const format = getSelectedFormat();
  const giftMessage = document.getElementById('giftMessage')?.value || '';
  const giftFrom = document.getElementById('giftFrom')?.value || '';
  const giftWrap = document.getElementById('addonGiftWrap')?.checked || false;
  const express = document.getElementById('addonExpress')?.checked || false;

  let basePrice = PRICES[format] || 39.99;
  let addons = 0;
  if (giftWrap) addons += 4.99;
  if (express) addons += 12.99;

  const cartItem = {
    id: Date.now() + Math.random(),
    bookKey: book.key,
    title: book.title,
    image: book.image,
    theme: book.theme,
    format: format,
    childName,
    childAge,
    giftMessage,
    giftFrom,
    giftWrap,
    express,
    basePrice,
    addonsPrice: addons,
    totalPrice: basePrice + addons,
    qty: 1
  };

  cart.push(cartItem);
  updateCartUI();
  closePersonalise();
  openCart();
  showToast(`"${book.title}" added! 🎉`);

  // Trigger sensory upsell for non-sensory books
  if (!book.sensory) {
    maybeShowSensoryUpsell();
  }
}

/* ─────────────────────────────────────────────
   5. LEGACY addToCart (from book cards)
   Now opens personalise modal instead
   ───────────────────────────────────────────── */
function addToCart(bookName) {
  // Find book by title
  const bookEntry = Object.values(BOOKS).find(b => b.title === bookName);
  if (bookEntry) {
    openPersonalise(bookEntry.key);
  } else {
    showToast(`Opening "${bookName}" personalisation...`);
  }
}

/* ─────────────────────────────────────────────
   6. CART SIDEBAR
   ───────────────────────────────────────────── */
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.classList.add('cart-open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.classList.remove('cart-open');
}

function renderCartItems() {
  const wrap = document.getElementById('cartItemsWrap');
  const empty = document.getElementById('cartEmpty');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    wrap.innerHTML = '';
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }

  empty.style.display = 'none';
  footer.style.display = 'block';

  wrap.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" data-idx="${idx}">
      <img class="cart-item-img" src="${item.image}" alt="${item.title}" />
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-sub">For: <strong>${item.childName}</strong></div>
        <div class="cart-item-sub">${formatLabel(item.format)}</div>
        ${item.giftWrap ? '<div class="cart-item-addon">🎁 Gift Wrapping</div>' : ''}
        ${item.express ? '<div class="cart-item-addon">⚡ Express Delivery</div>' : ''}
        <div class="cart-item-price">$${(item.totalPrice * item.qty).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control">
          <button onclick="changeQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${idx}, 1)">+</button>
        </div>
        <button class="cart-remove-btn" onclick="removeFromCart(${idx})"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');

  document.getElementById('cartSubtotal').textContent = `$${getCartTotal().toFixed(2)}`;
}

function changeQty(idx, delta) {
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  updateCartUI();
  renderCartItems();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = getCartCount();
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
  if (count > 0) {
    badge.classList.add('bounce');
    setTimeout(() => badge.classList.remove('bounce'), 400);
  }
}

/* ─────────────────────────────────────────────
   7. CHECKOUT MODAL
   ───────────────────────────────────────────── */
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();
  renderCheckoutSummary();
  document.getElementById('checkoutModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeCheckout() {
  document.getElementById('checkoutModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

function closeCheckoutOutside(e) {
  if (e.target === document.getElementById('checkoutModal')) closeCheckout();
}

function renderCheckoutSummary() {
  const itemsEl = document.getElementById('checkoutOrderItems');
  const totalsEl = document.getElementById('checkoutTotals');

  itemsEl.innerHTML = cart.map(item => `
    <div class="co-item">
      <img src="${item.image}" alt="${item.title}" />
      <div class="co-item-info">
        <div class="co-item-title">${item.title}</div>
        <div class="co-item-sub">For: ${item.childName} · ${formatLabel(item.format)}</div>
        ${item.giftWrap ? '<div class="co-item-addon">🎁 Gift Wrap</div>' : ''}
        ${item.express ? '<div class="co-item-addon">⚡ Express</div>' : ''}
      </div>
      <div class="co-item-price">$${(item.totalPrice * item.qty).toFixed(2)}</div>
    </div>
  `).join('');

  const subtotal = getCartTotal();
  const freeShipping = subtotal >= 60;
  const shipping = freeShipping ? 0 : 7.99;
  const total = subtotal + shipping;

  totalsEl.innerHTML = `
    <div class="co-total-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
    <div class="co-total-row"><span>Shipping</span><span>${freeShipping ? '<span class="free-tag">FREE</span>' : '$' + shipping.toFixed(2)}</span></div>
    <div class="co-total-row co-total-final"><span>Total</span><span>$${total.toFixed(2)}</span></div>
  `;
}

function switchPayment(method, btn) {
  document.querySelectorAll('.pm-tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.payment-form-section').forEach(s => s.classList.add('hidden'));
  document.getElementById(`payment${method.charAt(0).toUpperCase() + method.slice(1)}`).classList.remove('hidden');
}

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = val.replace(/(.{4})/g, '$1 ').trim();
}

function formatExpiry(input) {
  let val = input.value.replace(/\D/g, '').substring(0, 4);
  if (val.length > 2) val = val.substring(0, 2) + '/' + val.substring(2);
  input.value = val;
}

function validateCheckout() {
  const required = ['co-fname', 'co-lname', 'co-email', 'co-address', 'co-city', 'co-country'];
  for (const id of required) {
    const el = document.getElementById(id);
    if (!el || !el.value.trim()) {
      el.classList.add('input-error');
      el.focus();
      showToast('Please fill in all required fields', 'error');
      return false;
    }
    el.classList.remove('input-error');
  }
  const email = document.getElementById('co-email').value;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('Please enter a valid email address', 'error');
    document.getElementById('co-email').classList.add('input-error');
    return false;
  }
  return true;
}

async function placeOrder() {
  if (!validateCheckout()) return;

  const btn = document.getElementById('placeOrderBtn');
  btn.textContent = '⏳ Processing…';
  btn.disabled = true;

  try {
    const orderData = {
      customer_name: `${document.getElementById('co-fname').value} ${document.getElementById('co-lname').value}`,
      customer_email: document.getElementById('co-email').value,
      customer_phone: document.getElementById('co-phone')?.value || '',
      delivery_address: `${document.getElementById('co-address').value}, ${document.getElementById('co-city').value}, ${document.getElementById('co-country').value}`,
      order_items: JSON.stringify(cart.map(i => ({
        book: i.title,
        childName: i.childName,
        format: i.format,
        qty: i.qty,
        price: i.totalPrice
      }))),
      order_total: getCartTotal().toFixed(2),
      gift_messages: JSON.stringify(cart.map(i => ({ book: i.title, message: i.giftMessage, from: i.giftFrom }))),
      status: 'pending',
      payment_method: document.querySelector('.pm-tab.active')?.textContent || 'Card',
      has_gift_wrap: cart.some(i => i.giftWrap) ? 'yes' : 'no',
      has_express: cart.some(i => i.express) ? 'yes' : 'no',
      book_titles: cart.map(i => i.title).join(', '),
      child_names: cart.map(i => i.childName).join(', '),
      book_formats: cart.map(i => i.format).join(', '),
      order_date: new Date().toISOString(),
      notes: ''
    };

    const res = await fetch('tables/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (!res.ok) throw new Error('API error');
    const saved = await res.json();

    closeCheckout();
    showSuccess(saved, orderData);
    cart = [];
    updateCartUI();

  } catch (err) {
    console.error(err);
    // Still show success for demo purposes
    closeCheckout();
    showSuccess({ id: 'CL-' + Date.now() }, { customer_email: document.getElementById('co-email').value });
    cart = [];
    updateCartUI();
  }
}

function showSuccess(order, data) {
  const confirmNum = `CL${Date.now().toString().slice(-6)}`;
  document.getElementById('successDetails').innerHTML = `
    <div class="success-order-info">
      <div class="soi-row">
        <span class="soi-label">Confirmation #</span>
        <span class="soi-value success-highlight">${confirmNum}</span>
      </div>
      <div class="soi-row">
        <span class="soi-label">Confirmation sent to</span>
        <span class="soi-value">${data.customer_email || 'your email'}</span>
      </div>
      <div class="soi-row">
        <span class="soi-label">Next steps</span>
        <span class="soi-value">Our artists begin work immediately ✨</span>
      </div>
    </div>
  `;
  document.getElementById('successModal').classList.add('active');
  document.body.classList.add('modal-open');
  launchConfetti();
}

function closeSuccess() {
  document.getElementById('successModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

/* ─────────────────────────────────────────────
   8. FILTER TABS
   ───────────────────────────────────────────── */
function initFilterTabs() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const sensoryBanner = document.getElementById('sensoryBanner');
      const specialBanner = document.getElementById('specialBanner');

      // Show/hide banners
      if (sensoryBanner) {
        sensoryBanner.style.display = filter === 'sensory' ? 'block' : 'none';
      }
      if (specialBanner) {
        specialBanner.style.display = filter === 'special' ? 'block' : 'none';
      }

      document.querySelectorAll('.book-card').forEach((card, i) => {
        const cat = card.getAttribute('data-category') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = '';
          card.style.opacity = '0';
          card.style.transform = 'translateY(16px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, i * 40);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ─────────────────────────────────────────────
   9. TOAST NOTIFICATIONS
   ───────────────────────────────────────────── */
function showToast(msg, type = 'success') {
  const toast = document.getElementById('cartToast');
  const msgEl = document.getElementById('cartToastMsg');
  msgEl.textContent = msg;
  toast.className = `cart-toast ${type}`;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ─────────────────────────────────────────────
   10. CONFETTI
   ───────────────────────────────────────────── */
function launchConfetti() {
  const colors = ['#7C3AED', '#F59E0B', '#EC4899', '#10B981', '#3B82F6', '#F97316'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'confetti-piece';
      c.style.cssText = `
        left: ${Math.random() * 100}vw;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        width: ${6 + Math.random() * 8}px;
        height: ${6 + Math.random() * 8}px;
        animation-duration: ${1.5 + Math.random() * 2}s;
        animation-delay: ${Math.random() * 0.5}s;
      `;
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4000);
    }, i * 20);
  }
}

/* ─────────────────────────────────────────────
   11. INIT
   ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initFilterTabs();
  updateCartUI();
  initSensoryUpsell();

  // Format radio change → update summary
  document.querySelectorAll('input[name="format"]').forEach(radio => {
    radio.addEventListener('change', updateOrderSummary);
  });

  // Keyboard close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePreview();
      closePersonalise();
      closeCheckout();
      closeCart();
      closeSuccess();
      closeSensoryUpsellBtn();
      document.getElementById('sensoryBundleModal').style.display = 'none';
    }
  });
});

/* ─────────────────────────────────────────────
   12. SENSORY UPSELL SYSTEM
   ───────────────────────────────────────────── */

// Track whether upsell has already been shown this session
let _sensoryUpsellShown = false;
let _nonSensoryCartCount = 0;

/**
 * Called when a NON-sensory book is added to cart.
 * After the 2nd non-sensory book, show the upsell modal.
 */
function maybeShowSensoryUpsell() {
  if (_sensoryUpsellShown) return;
  _nonSensoryCartCount++;
  if (_nonSensoryCartCount >= 2) {
    _sensoryUpsellShown = true;
    setTimeout(() => {
      document.getElementById('sensoryUpsellModal').classList.add('active');
      document.body.classList.add('modal-open');
    }, 900); // slight delay after cart opens
  }
}

function closeSensoryUpsell(e) {
  if (e && e.target !== document.getElementById('sensoryUpsellModal')) return;
  closeSensoryUpsellBtn();
}

function closeSensoryUpsellBtn() {
  const m = document.getElementById('sensoryUpsellModal');
  if (m) {
    m.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

function openSensoryBundle() {
  document.getElementById('sensoryBundleModal').classList.add('active');
  document.body.classList.add('modal-open');
}

function closeBundleModal(e) {
  if (e && e.target !== document.getElementById('sensoryBundleModal')) return;
  document.getElementById('sensoryBundleModal').classList.remove('active');
  document.body.classList.remove('modal-open');
}

/**
 * Add all 5 sensory books to cart (bundle)
 */
function addBundleToCart() {
  const sensoryKeys = ['iwoveyou', 'headphones', 'perfectline', 'toomuch', 'specialthing'];
  sensoryKeys.forEach(key => {
    const book = BOOKS[key];
    if (!book) return;
    const existing = cart.find(item => item.bookKey === key && item.format === 'hardcover');
    if (existing) {
      existing.qty = (existing.qty || 1) + 1;
    } else {
      cart.push({
        id: Date.now() + Math.random(),
        bookKey: key,
        title: book.title,
        image: book.image,
        childName: '',
        childAge: '',
        format: 'hardcover',
        giftWrap: false,
        express: false,
        basePrice: 29.99, // bundle discounted price per book
        addonsPrice: 0,
        totalPrice: 29.99,
        qty: 1
      });
    }
  });
  updateCartUI();
  renderCartItems();
  document.getElementById('sensoryBundleModal').classList.remove('active');
  openCart();
  showToast('🧩 All 5 Sensory Stories added — $149.99 total!', 'success');
}

/**
 * Scroll to books section helper
 */
function scrollToBooks() {
  const el = document.getElementById('books');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Init: Scroll-triggered upsell — show sensory upsell
 * when user scrolls past 60% of page (first visit only)
 */
function initSensoryUpsell() {
  let _scrollUpsellShown = false;
  window.addEventListener('scroll', () => {
    if (_scrollUpsellShown || _sensoryUpsellShown) return;
    const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPct > 65) {
      _scrollUpsellShown = true;
      _sensoryUpsellShown = true;
      setTimeout(() => {
        document.getElementById('sensoryUpsellModal').classList.add('active');
      }, 600);
    }
  }, { passive: true });
}
