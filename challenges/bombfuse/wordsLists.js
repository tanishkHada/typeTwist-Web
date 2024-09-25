const typingWords = {
    A: [
        "apple", "anchor", "ancient", "apricot", "attic", "arrow", "animal", "avenue", "artist", "atlas",
        "amber", "adopt", "avocado", "aspect", "alley", "agency", "arcade", "arrival", "article", "arrange",
        "airport", "almond", "apology", "adventure", "adjust", "alphabet", "astronaut", "assembly", "aquarium", "approve",
        "appointment", "autumn", "attend", "appliance", "attitude", "attempt", "amazing", "available", "advantage", "analysis",
        "addition", "assistant", "absence", "afford", "amusement", "athlete", "arrangement", "attraction", "achievement", "approval",
        "admission", "agenda", "allergy", "aluminum", "animation", "appetite", "archive", "artwork", "athletic", "argument",
        "arrest", "assignment", "assistance", "assembly", "adventure", "allowance", "ambition", "abandon", "adore", "agency",
        "agriculture", "amplify", "apparent", "approach", "artificial", "assessment", "attempt", "attention", "adjective", "allegory",
        "almanac", "ambassador", "analyst", "anticipate", "archery", "arithmetic", "assessment", "atmosphere", "application", "adjustment"
    ],

    B: [
        "banana", "breeze", "butter", "blanket", "basket", "button", "bridge", "bubble", "battery", "bottle",
        "bargain", "beauty", "beacon", "beetle", "belief", "biscuit", "bizarre", "blessing", "blizzard", "blossom",
        "bounce", "boundary", "bracelet", "broccoli", "budget", "builder", "burden", "butterfly", "background", "backpack",
        "balance", "balloon", "barrier", "baseball", "bedroom", "behavior", "benefit", "bicycle", "biology", "bizarre",
        "blacksmith", "blender", "boardwalk", "bookstore", "breathtaking", "bricklayer", "brilliant", "broadcast", "brochure", "bullfrog",
        "business", "buttercup", "buttons", "bystander", "babysitter", "backfire", "backyard", "bacteria", "ballroom", "bandwidth",
        "bankrupt", "barbecue", "barnacle", "barricade", "bathroom", "battleground", "beachfront", "beanstalk", "belonging", "beneficial",
        "beside", "betterment", "biography", "birthplace", "blackboard", "blindfold", "bloodstream", "blueprint", "boiling", "bookkeeper",
        "brainstorm", "breakfast", "breathtaking", "brickwork", "brilliance", "broadsword", "businessman", "butterfingers", "bystander", "buzzword"
    ],

    C: [
        "candle", "camera", "castle", "cereal", "circle", "cousin", "cradle", "curtain", "cyclist", "cabinet",
        "cabbage", "calendar", "calculator", "campus", "canary", "capable", "carpet", "cartoon", "catalog", "category",
        "celebrate", "ceremony", "champion", "chapter", "charity", "cheese", "chicken", "chimney", "chocolate", "cigarette",
        "clarity", "classic", "cleaner", "clever", "climate", "clothes", "clothing", "cluster", "coating", "coconut",
        "collar", "college", "colorful", "comedy", "comfort", "compact", "company", "complain", "composer", "compound",
        "computer", "concrete", "confident", "congress", "constant", "control", "convenient", "cookie", "corridor", "cosmetic",
        "courage", "courtesy", "craving", "creature", "credit", "criminal", "criticism", "crystal", "cupboard", "curiosity",
        "currency", "customer", "cyclone", "civilian", "conclude", "contain", "correct", "creative", "century", "capacity",
        "carbon", "collision", "column", "conversation", "contribute", "contrast", "cricket", "celebrity", "collection", "conductor"
    ],

    D: [
        "daisy", "damage", "danger", "database", "debate", "decade", "decide", "declare", "decorate", "decrease",
        "dedicate", "defeat", "defense", "define", "degree", "deliver", "demand", "density", "deposit", "describe",
        "desert", "design", "desktop", "desire", "destroy", "develop", "diagnose", "diamond", "dilemma", "dimension",
        "dining", "dinosaur", "director", "disagree", "disaster", "discover", "discuss", "disease", "dismiss", "display",
        "distance", "diverse", "division", "document", "domestic", "dominant", "donation", "doorbell", "double", "doubtful",
        "download", "downward", "dragonfly", "drainage", "dramatic", "drawing", "dreamer", "dressing", "drifting", "driver",
        "drought", "duplicate", "duration", "dusty", "dynamic", "dynasty", "dangerous", "dedication", "definition", "dehydration",
        "delegation", "democracy", "demonstrate", "department", "depression", "description", "desperation", "destination", "determination", "development",
        "diagnostic", "different", "difficulty", "dimension", "disappointment", "discipline", "discussion", "distribute", "diversity", "documentary"
    ],

    E: [
        "eagle", "earth", "eclipse", "education", "effort", "elastic", "elegant", "element", "elevator", "emerge",
        "emotion", "empire", "emphasis", "employer", "enable", "enchant", "energy", "engineer", "enhance", "enough",
        "enrich", "envelope", "episode", "equation", "equip", "eraser", "escape", "essence", "establish", "eternal",
        "ethical", "evaluate", "evening", "evergreen", "evidence", "example", "exceed", "exchange", "excite", "exclude",
        "exercise", "exhibit", "expand", "expect", "expense", "expert", "explain", "explore", "express", "extend",
        "extra", "extreme", "eyelet", "eyewear", "exquisite", "equal", "effect", "effortless", "elite", "entertain",
        "environment", "essential", "etiquette", "evaporate", "eventual", "evolution", "exaggerate", "examination", "exception", "exclamation",
        "execution", "exhaust", "exhibit", "existence", "expansion", "experiment", "expertise", "explanation", "exploration", "expression",
        "extension", "extensive", "eternal", "effectiveness", "elimination", "enthusiasm", "equivalent", "estimate", "excellence", "experiment"
    ],
    F: [
        "falcon", "fabric", "fable", "fascinate", "famine", "federal", "festival", "fertile", "fiction",
        "fiddle", "field", "fierce", "figure", "filter", "flame", "flash", "flavor", "flexible", "flicker",
        "flight", "floral", "flower", "fluid", "focus", "foliage", "follow", "foolish", "football", "forecast",
        "forest", "forget", "formal", "fortune", "forward", "fossil", "fragile", "fragment", "framework", "freedom",
        "frequency", "fresh", "friction", "friend", "fright", "frontier", "frozen", "fruitful", "fulfill", "fumble",
        "function", "fundamental", "funnel", "furnish", "fusion", "future", "futile", "fuzzy", "fabricate", "facade",
        "factor", "faculty", "fade", "faint", "fair", "faith", "false", "fancy", "fantasy", "farmer", "fatal", "fatigue",
        "favor", "fearful", "feature", "february", "federal", "fee", "feedback", "feel", "fellow", "female", "fence",
        "festival", "fever", "fiber", "fictional", "fifteen", "fight", "film", "final", "finance", "find", "finger",
        "finish", "firefly", "fiscal", "fitness", "flawless", "flexibility"
    ],
    G: [
        "galaxy", "garden", "gather", "gaze", "gesture", "giant", "gifted", "ginger", "glance", "glare", "glass",
        "glaze", "gleam", "glimpse", "glisten", "global", "glorious", "glow", "goal", "goat", "goddess", "gold",
        "golden", "goodness", "goose", "gorilla", "gossip", "govern", "gown", "grace", "gradient", "grain", "grammar",
        "grand", "grape", "graph", "gravity", "greatness", "greed", "greenhouse", "greet", "grid", "grief", "grin",
        "grind", "grip", "groove", "ground", "group", "growth", "guard", "guest", "guide", "guilt", "guitar", "gulf",
        "gumption", "gust", "gymnast", "gypsy", "gallery", "gadget", "gain", "gale", "gamble", "game", "gang", "gap",
        "garlic", "gasoline", "gate", "gathering", "gear", "genius", "gentle", "genuine", "geology", "gesture",
        "giant", "giddy", "gingerbread", "giraffe", "girlfriend", "give", "glamour", "glide", "glorify", "glossy",
        "glue", "go", "gorgeous", "gorilla", "gossip", "govern", "grateful"
    ],
    H: [
        "habit", "hair", "half", "hall", "halt", "hammer", "hand", "handle", "happen", "happy", "harbor", "hard",
        "harm", "harmony", "harsh", "harvest", "hat", "have", "hawk", "hazard", "head", "heal", "health", "heap",
        "hear", "heart", "heat", "heaven", "heavy", "heel", "height", "helicopter", "help", "hen", "herb", "here",
        "hero", "hesitate", "hidden", "hide", "high", "hill", "hint", "hip", "hire", "history", "hit", "hold",
        "hole", "holiday", "hollow", "home", "honey", "honor", "hook", "hope", "horizon", "hormone", "horn",
        "horrible", "horse", "hospital", "host", "hot", "hotel", "hour", "house", "hover", "how", "huge", "human",
        "humble", "hunger", "hunt", "hurry", "hurt", "husband", "hush", "hybrid", "hydrogen", "hygiene", "hymn",
        "hyper", "hypnotic", "hypothesis", "hysterical", "habitual", "hacienda", "hack", "hail", "haircut", "halcyon",
        "halfway", "hallucinate", "halo", "hamlet", "handbook"
    ],
    I: [
        "icon", "idea", "ideal", "identify", "idle", "idol", "ignite", "ignorant", "illusion", "image", "imagine",
        "imitate", "immense", "impact", "imperfect", "import", "impress", "improve", "impulse", "inch", "include",
        "income", "increase", "indeed", "indicate", "indoor", "industry", "infant", "inform", "inhale", "initial",
        "inject", "injure", "inland", "innate", "inner", "innovate", "input", "inquiry", "insight", "inside",
        "inspire", "install", "instance", "instant", "instruct", "insult", "intact", "intend", "interest",
        "interfere", "interior", "internal", "interrupt", "interval", "intimate", "introduce", "invent",
        "invest", "invite", "involve", "iron", "island", "isolate", "issue", "item", "ivory", "ivy", "ice",
        "ignore", "illustrate", "immediate", "immune", "impact", "imperial", "important", "improve", "inch",
        "include", "increase", "industrial", "infection", "influence", "inform", "inject", "innocent",
        "inquiry", "insight", "inside", "install", "instance", "instruct", "integral"
    ],
    J: [
        "jacket", "jaguar", "jail", "jam", "jar", "jasmine", "jazz", "jealous", "jeep", "jelly", "jewel",
        "jiffy", "jigsaw", "jingle", "jog", "join", "joke", "journal", "journey", "joyful", "judge",
        "juggle", "juice", "jumble", "jump", "jungle", "junior", "junk", "jury", "just", "justice",
        "justify", "jovial", "jigsaw", "jeopardy", "jagged", "jeans", "jiffy", "jiffy", "jobless",
        "joiner", "joint", "jolly", "journalist", "joviality", "joyride", "jubilee", "judgment",
        "juicy", "jumbo", "junior", "justify", "juvenile", "jazzy", "javelin", "jaunt", "jazz",
        "jackal", "jaded", "jargon", "jawbone", "jellyfish", "jiffy", "jinx", "jitters", "joist",
        "jovial", "jumble", "junction", "jury", "just", "justice", "juvenile", "jumbled", "jumpsuit",
        "juniper", "juxtapose", "jubilant", "judicious", "jittery", "jocular", "journalist", "joyous",
        "jet", "journey", "jargon", "jellybean", "jerk", "jetlag", "jaunty", "jigsaw", "jeering"
    ],
    K: [
        "kangaroo", "karma", "kayak", "keen", "keeper", "kernel", "kettle", "keyboard", "kick", "kidnap",
        "kiln", "kindle", "kingdom", "kitchen", "kitten", "kiwi", "kneel", "knife", "knight", "knit",
        "knob", "knock", "knot", "knowledge", "known", "kudos", "kebab", "keel", "keenly", "keepsake",
        "kennel", "kerosene", "kettle", "keyboard", "kidney", "kilogram", "kilometer", "kindness", "kingfisher",
        "kiosk", "knee", "knack", "knapsack", "kneecap", "knickknack", "knickers", "knighthood", "knoll",
        "knotty", "known", "koala", "krypton", "krill", "kettleful", "kerchief", "kinetic", "knack",
        "knavery", "knightly", "knead", "knelt", "knobby", "knowledgeable", "kooky", "kernel", "ken",
        "keepsake", "kiln", "kilobyte", "knuckle", "knurled", "kindergarten", "knight", "kingpin", "keyhole",
        "kingly", "klutz", "keypad", "kitchenette", "kettledrum", "kilter", "kindliness", "kiddie", "kipper",
        "kitbag", "keynote", "knell", "knick", "knowing", "kneeled", "keystone", "kneecap", "kudos", "knoll",
        "kickoff", "kinship", "kit", "kith", "knockout", "kingfish", "kerb", "karate"
    ],
    L: [
        "label", "labor", "ladder", "ladybug", "lagoon", "lamb", "lament", "lamp", "landscape", "language",
        "lantern", "laptop", "large", "laser", "last", "late", "lather", "launch", "lava", "lavender",
        "lawn", "layer", "lazy", "leader", "leaflet", "league", "leap", "learn", "leather", "lecture",
        "legend", "lemon", "length", "leopard", "lesson", "letter", "level", "lever", "library", "license",
        "lid", "lifetime", "lift", "light", "lightning", "lilac", "limb", "limit", "lineage", "linen",
        "linger", "lion", "liquid", "listen", "literature", "little", "live", "lively", "lizard", "loan",
        "local", "location", "lock", "logbook", "logic", "logo", "lonely", "long", "lookout", "loop",
        "loose", "lounge", "loyal", "lucky", "lullaby", "lumber", "luminous", "lunch", "lung", "luxury",
        "lyric", "labyrinth", "ladle", "lair", "lament", "lance", "landlord", "landmark", "landslide",
        "landmine", "landscape", "latitude", "laughable", "lavish", "lax", "lean", "ledger"
    ],
    M: [
        "machine", "macro", "magazine", "magic", "magnet", "maid", "mailbox", "main", "major", "makeup",
        "malaria", "mallet", "mammal", "manager", "mandate", "maneuver", "mango", "manifest", "manner", "mantle",
        "manual", "maple", "marathon", "marble", "march", "margin", "marine", "market", "marriage", "marvel",
        "mash", "mask", "master", "match", "material", "math", "matrix", "matter", "maximum", "mayor",
        "meadow", "meal", "meaning", "measure", "mechanic", "medal", "media", "medical", "medium", "meeting",
        "melody", "member", "memory", "mention", "mentor", "merchant", "mercury", "merge", "merit", "message",
        "metal", "method", "metric", "microbe", "microscope", "midnight", "might", "migration", "mild",
        "military", "milk", "mill", "million", "mimic", "mineral", "minimal", "minimum", "minister", "minute",
        "miracle", "mirror", "miserable", "mission", "mistake", "mixture", "mobile", "model", "modern",
        "modify", "module", "moment", "money", "monitor", "monster", "month", "moonlight", "morning", "motion",
        "mountain", "mouse", "movement", "movie"
    ],
    N: [
        "nail", "name", "napkin", "narrow", "nation", "native", "natural", "nature", "navigate", "navy",
        "nearby", "necessary", "necklace", "need", "negative", "neglect", "negotiate", "neon", "nervous", "nest",
        "network", "neutral", "never", "newborn", "nickname", "night", "noble", "noise", "nomad", "nonsense",
        "noodle", "normal", "north", "notable", "note", "notice", "notion", "novel", "nucleus", "number",
        "numeral", "numerous", "nurture", "nutmeg", "nylon", "naive", "nap", "narrate", "national", "native",
        "naval", "navigation", "neat", "nebula", "nectar", "needy", "neglect", "neighbour", "nerve", "neutral",
        "neutron", "nickname", "nightmare", "nimble", "ninth", "noble", "nobody", "nocturnal", "nominal", "nominee",
        "nonchalant", "none", "noodle", "normalcy", "notation", "noteworthy", "notify", "notorious", "novice",
        "noxious", "nucleus", "nullify", "numeric", "nutrition", "nutty", "nylon", "nautical", "nebulous", "nectar",
        "neighborly", "newsroom", "nighttime", "nonstop", "northern"
    ],
    O: [
        "oasis", "oatmeal", "obedient", "object", "oblige", "obscure", "observe", "obsession", "obtain", "occasion",
        "occupy", "ocean", "octopus", "odyssey", "offend", "offer", "office", "official", "offset", "often",
        "oil", "ointment", "okay", "oldest", "olive", "omit", "onion", "online", "only", "onset",
        "opening", "operate", "opinion", "opponent", "oppose", "option", "orange", "orbit", "order", "ordinary",
        "organ", "organize", "orient", "origin", "ornament", "orphan", "other", "outcome", "outdoor", "outer",
        "outfit", "outgoing", "outline", "outlook", "output", "outrage", "outside", "outspoken", "outward", "oval",
        "oven", "overall", "overcome", "overlap", "overlook", "overseas", "overview", "owl", "oxygen", "oyster",
        "obesity", "objection", "observation", "occupation", "occurrence", "octagonal", "offense", "officer", "official",
        "offset", "ominous", "omission", "omnipotent", "opportunity", "oppressive", "optimism", "optimal", "optional",
        "orator", "ordinary", "organism", "ornamental", "outright", "overload", "overrule", "overwhelm", "ownership"
    ],
    P: [
        "package", "paddle", "page", "paint", "palace", "palm", "panel", "panic", "papa", "paper",
        "parade", "parcel", "parent", "park", "parrot", "party", "passion", "pastel", "patent", "path",
        "patient", "pattern", "pause", "pavement", "payment", "peace", "peanut", "pearl", "pedal", "peek",
        "penalty", "pencil", "pendulum", "penguin", "people", "pepper", "perfect", "perform", "perhaps", "period",
        "permit", "person", "persuade", "petal", "phone", "photo", "phrase", "physical", "piano", "picture",
        "piece", "pier", "pigeon", "pile", "pill", "pilot", "pine", "pink", "pioneer", "pipe",
        "pirate", "pitch", "pivot", "place", "plague", "plain", "plan", "planet", "plant", "plaster",
        "plastic", "plate", "platform", "play", "please", "plenty", "pliers", "plot", "plow", "plug",
        "plunge", "pocket", "poem", "poet", "point", "poison", "polar", "polish", "politics", "poll",
        "pond", "pool", "popular", "portal", "portion", "portrait", "position", "positive", "post", "potato"
    ],
    Q: [
        "quack", "quail", "quake", "quality", "quantity", "quarantine", "quarrel", "quarter", "quartz", "queen",
        "query", "quest", "question", "queue", "quick", "quiet", "quill", "quilt", "quit", "quiz",
        "quota", "quotation", "quote", "quiver", "quibble", "quench", "quorum", "quirk", "quasar", "quintet",
        "quicksand", "quintessential", "quadrant", "quasi", "quagmire", "quail", "quarantine", "quarry", "quench", "queueing",
        "quilted", "quotable", "quadratic", "quadcopter", "quadruped", "quaint", "quality", "quarterback", "questionable", "quicklime",
        "quicksilver", "quickstart", "quietly", "quintuplet", "quizzical", "quodlibet", "quasar", "quantify", "quiescent", "quinine",
        "quenchless", "quotient", "quicksand", "quadrilateral", "quadruple", "quantum", "queasy", "quenched", "questing", "quizzing",
        "quietness", "quicksilver", "quadrillion", "quintessential", "quintupling", "quadriceps", "quasar", "quivering", "quasar", "quahog",
        "quakeproof", "quaintly", "quintain", "quicksighted", "quomodo", "quipster", "quixotic", "quadriga", "quintain", "quicksand"
    ],
    R: [
        "rabbit", "race", "radar", "radiate", "radio", "rage", "rail", "rain", "rainbow", "raise",
        "rally", "ramp", "random", "range", "rapid", "rare", "rate", "ratio", "rattle", "raven",
        "razor", "reach", "react", "read", "real", "reason", "rebel", "receipt", "receive", "record",
        "red", "reduce", "reef", "referee", "reflect", "refresh", "refuse", "region", "register", "regret",
        "regular", "reject", "relate", "release", "relief", "remark", "remind", "remove", "render", "renew",
        "rent", "repair", "repeat", "replace", "report", "request", "rescue", "research", "resemble", "resist",
        "resource", "respect", "rest", "result", "retail", "retain", "retire", "return", "reveal", "review",
        "revise", "reward", "rhythm", "ribbon", "rice", "rich", "ride", "ridge", "rifle", "right",
        "ring", "riot", "ripple", "rise", "risk", "ritual", "river", "road", "roar", "robot"
    ],
    S: [
        "saddle", "safe", "sail", "salad", "salary", "sale", "salt", "salute", "sample", "sand",
        "satisfy", "save", "scale", "scan", "scarf", "scatter", "scene", "schedule", "scheme", "school",
        "science", "scissors", "score", "scout", "scratch", "screen", "screw", "script", "scroll", "seal",
        "search", "season", "seat", "second", "secret", "section", "secure", "seed", "seek", "seem",
        "segment", "select", "self", "sell", "seminar", "senior", "sense", "sentence", "sequence", "series",
        "serve", "service", "session", "settle", "seven", "shadow", "shaft", "shape", "share", "sharp",
        "sheep", "shelf", "shell", "shift", "shine", "ship", "shirt", "shock", "shoe", "shoot",
        "shop", "short", "should", "shoulder", "shout", "shrink", "shut", "side", "sight", "sign",
        "signal", "silent", "silver", "simple", "single", "sister", "site", "six", "size", "skill"
    ],
    T: [
        "table", "tablet", "tag", "tail", "take", "talk", "tall", "tank", "tap", "target",
        "task", "taste", "taxi", "teach", "team", "tear", "tech", "telephone", "television", "tell",
        "temper", "temple", "tenant", "tend", "tennis", "tense", "term", "test", "text", "thank",
        "theater", "theme", "then", "theory", "therapy", "there", "thermometer", "thick", "thin", "thing",
        "think", "thirst", "thirty", "this", "thought", "thousand", "thread", "threat", "throat", "throw",
        "thumb", "thunder", "ticket", "tide", "tidy", "tie", "tiger", "tight", "tile", "till",
        "time", "timid", "tint", "tiny", "tip", "tire", "tissue", "title", "toast", "today",
        "together", "toilet", "token", "tomato", "tone", "tongue", "tonight", "tool", "tooth", "top",
        "topic", "torch", "tornado", "total", "touch", "tour", "towel", "tower", "town", "toy",
        "trace", "track", "trade", "trail", "train", "transfer", "trap", "travel", "treat", "tree"
    ],
    U: [
        "umbrella", "unable", "uncle", "under", "undergo", "understand", "unfold", "unicorn", "uniform", "union",
        "unique", "unit", "unite", "universal", "unknown", "unlock", "until", "unusual", "update", "upgrade",
        "uphill", "uphold", "upon", "upper", "upright", "upset", "upside", "uptown", "urban", "urge",
        "urgent", "usage", "useful", "user", "usual", "utility", "utilize", "utmost", "utopia", "utter",
        "ugly", "ultimate", "ultra", "umbrella", "unanimous", "uncertain", "uncle", "uncover", "underage", "underarm",
        "underbelly", "underclass", "underdog", "undergrowth", "underline", "underpass", "underside", "underwear", "undone", "undoubtedly",
        "uneasy", "uneducated", "unequal", "unfair", "unfold", "unhappy", "unify", "unimportant", "unionize", "unique",
        "unison", "universe", "unknown", "unlock", "unmanned", "unmarked", "unnatural", "unopened", "unpack", "unplug",
        "unprepared", "unrelated", "unrest", "unsure", "untidy", "unusual", "unveil", "unwanted", "unwrap", "upbeat",
        "upgrade", "uplift", "upload", "upright", "uproar", "upset", "upstream", "upward", "urgent", "usher"
    ],
    V: [
        "vacant", "vacation", "vaccine", "vacuum", "vague", "valid", "valley", "valuable", "value", "vampire",
        "vanish", "vanity", "vapor", "variable", "variant", "variation", "variety", "various", "vase", "vast",
        "vector", "vehicle", "veil", "vein", "velocity", "velvet", "vendor", "venom", "venture", "verbal",
        "verdict", "verify", "version", "vertical", "vessel", "veteran", "viable", "vibrant", "victim", "victory",
        "video", "view", "village", "violate", "violet", "violin", "virtual", "virus", "visible", "vision",
        "visit", "visitor", "visual", "vital", "vivid", "vocal", "voice", "volcano", "volume", "volunteer",
        "vote", "vowel", "voyage", "vulture", "vaccine", "vanilla", "variant", "varnish", "vault", "vegetable",
        "vein", "velocity", "velvet", "vendor", "vengeance", "venture", "verdict", "verify", "version", "vessel",
        "veteran", "vibrate", "vicar", "vicious", "victim", "victorious", "victory", "video", "view", "vigilant"
    ],
    W: [
        "wage", "waist", "wait", "wake", "walk", "wall", "wallet", "walnut", "wander", "want",
        "warrior", "wash", "waste", "watch", "water", "wave", "wealth", "weapon", "wear", "weather",
        "weave", "web", "wedding", "weekend", "weigh", "weight", "welcome", "welfare", "west", "western",
        "wet", "whale", "what", "wheat", "wheel", "when", "where", "which", "while", "whisper",
        "white", "whole", "why", "wicked", "wide", "widely", "widen", "wider", "widget", "wife",
        "wild", "will", "win", "wind", "window", "wine", "wing", "winner", "winter", "wipe",
        "wire", "wise", "wish", "witness", "wizard", "wolf", "woman", "wonder", "wood", "wool",
        "word", "work", "world", "worm", "worry", "worship", "worth", "wound", "wrap", "wreck",
        "wrestle", "wrist", "write", "writer", "writing", "wrong", "wrote", "wrought", "wry", "waddle"
    ],
    X: [
        "x-ray", "xenon", "xerox", "xylophone", "xylem", "xenolith", "xerophyte", "xenia", "xenial", "xylitol",
        "xenogeneic", "xenograft", "xeroderma", "xenogenesis", "xenogamy", "xenonarcotic", "xenotropic", "xenobiotic", "xerophthalmia", "xerothermic",
        "xiphoid", "xylograph", "xylocarp", "xenolithic", "xanthate", "xanthic", "xenophobia", "xenophobe", "xenocracy", "xerophilous",
        "xeric", "xanthophyll", "xenobiology", "xenogenesis", "xenoblast", "xenogeneic", "xanthate", "xenotropic", "xerographic", "xenogeny",
        "xenoplastic", "xylophone", "xenograft", "xenobiotic", "xerophyte", "xenolith", "xylophone", "xenonarcotic", "xenophobia", "xenoglossy",
        "xenophilic", "xerophilous", "xylophagous", "xerox", "xanadu", "xenogenesis", "xenogamous", "xenocryst", "xenogeny", "xenomorph",
        "xenobiotic", "xylem", "xerox", "xenon", "xylophone", "xeroderma", "xerophilous", "xanthoma", "xenonarcotic", "xenocryst",
        "xenogenesis", "xenogenic", "xenogamous", "xenonarcotic", "xerophyte", "xerothermic", "xiphoid", "xylograph", "xylocarp", "xylophagous"
    ],
    Y: [
        "yacht", "yahoo", "yak", "yam", "yankee", "yard", "yarn", "yawn", "year", "yellow",
        "yelp", "yes", "yesterday", "yet", "yield", "yoga", "yogurt", "yolk", "young", "youth",
        "yummy", "yarn", "yearly", "yeast", "yellowish", "yen", "yoga", "youngster", "yours", "yourself",
        "yonder", "youthful", "yucca", "yuppie", "yearbook", "yearling", "yearn", "youthfulness", "yielding", "yammer",
        "yachting", "yapping", "yardage", "yawning", "yachtsman", "yogic", "yellowtail", "yellowstone", "yeoman", "yippee",
        "yobbish", "yogic", "yokel", "youthfully", "yucking", "yukata", "yummy", "yeast", "yummiest", "yurt",
        "yardstick", "yielder", "yellowy", "yellowish", "yeshiva", "yodeller", "youths", "yuppie", "yeomanry", "yellowtail",
        "yesteryear", "yodel", "yogic", "yachtswoman", "yellowhammer", "yellowfin", "youngish", "yellowtop", "yellow-bellied", "yogini"
    ],
    Z: [
        "zebra", "zeal", "zealous", "zenith", "zero", "zest", "zigzag", "zinc", "zipper", "zone",
        "zoo", "zoology", "zoom", "zucchini", "zygote", "zephyr", "zeppelin", "zany", "zap", "zebrafish",
        "zenith", "zephyr", "zeroing", "zigzagged", "zillion", "zincing", "zippered", "zit", "zoetic", "zodiac",
        "zombify", "zookeeper", "zoography", "zoologist", "zooplankton", "zoophyte", "zoophobia", "zooplankton", "zooplanktonic", "zoogeography",
        "zoomorphic", "zoonosis", "zootechnics", "zygoma", "zygotic", "zymogram", "zylon", "zwitterion", "zygoid", "zymotic",
        "zephyr", "ziggurat", "zoological", "zoologist", "zoology", "zoophagy", "zoster", "zucchini", "zygospore", "zwitterionic",
        "zephyranth", "zoogenesis", "zoography", "zoogeography", "zootechnical", "zygosity", "zany", "zygomorphic", "zoophytic", "zoomancy"
    ]
};

const keys = Object.keys(typingWords);
let keyInd = 0;
// Function to get a random word from each letter
function getWord() {
    const currKey = keys[keyInd];
    const words = typingWords[currKey];
    const randomInd = Math.floor(Math.random() * words.length);
    const selectedWord = words[randomInd];

    keyInd = (keyInd + 1) % keys.length;
    return selectedWord;
}