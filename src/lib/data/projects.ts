// ------------------------- TYPES --------------------------------

export enum ProjectCategory {
	Game = "game",
	Web = "web",
	BuildMyOwn = "build-my-own",
	Default = "default"
}

interface BaseProject {
	id: string;
	title: string;
	short_description: string;
	primary_language: string;
	technologies: string[];
	github_url: string;
}

export interface GameProject extends BaseProject {
	category: ProjectCategory.Game;
	game_engine: string;
	can_play_on_web: boolean;
	playable_platform?: string;
	playable_url?: string;
}

export interface WebProject extends BaseProject {
	category: ProjectCategory.Web;
	website_url?: string;
}

export interface BuildMyOwnProject extends BaseProject {
	category: ProjectCategory.BuildMyOwn;
}

export interface DefaultProject extends BaseProject {
	category: ProjectCategory.Default;
}

export type Project = GameProject | WebProject | BuildMyOwnProject | DefaultProject;

// ------------------------- DATA ---------------------------------

export const projects: Project[] = [
	// Games
	{
		category: ProjectCategory.Game,
		id: "agent-of-chaos",
		title: "Agent of Chaos",
		short_description: "A timed 3D collectathon made in 7 days for GMTK Game Jam 2026.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/agent-of-chaos",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/agent-of-chaos",
	},
	{
		category: ProjectCategory.Game,
		id: "fish-hunter",
		title: "Fish Hunter",
		short_description: "A cozy 3D platformer collectathon made in 2 days for Kenney Jam 2026.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/fish-hunter",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/fish-hunter",
	},
	{
		category: ProjectCategory.Game,
		id: "strange-places",
		title: "Bizarre Critter World",
		short_description: "A 3D platformer made in 7 days for Brackeys Game Jam 2026.1 around the theme Strange Places.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/strange-places",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/bizarre-critter-world",
	},
	{
		category: ProjectCategory.Game,
		id: "hg-jam-godot",
		title: "Untitled ADHD Game",
		short_description: "A side-scrolling shooter exploring time dilation, made in 30 days for HealthyGamer Game Jam 2025.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/hg-jam-godot",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/untitled-adhd-game",
	},
	{
		category: ProjectCategory.Game,
		id: "risk-it-for-the-biscuit",
		title: "Lightspeed Bob",
		short_description: "A 3D platformer made in one week for Brackeys Game Jam 2025.2 around the theme Risk it for the Biscuit.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/risk-it-for-the-biscuit",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/lightspeed-bob",
	},
	{
		category: ProjectCategory.Game,
		id: "ultimate-punch-godot",
		title: "Ultimate Punch",
		short_description: "A 3D action game made in 2 days for Kenney Jam 2025 around the theme Power.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		github_url: "https://github.com/t3snake/ultimate-punch-godot",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/ultimate-punch",
	},
	{
		id: "you-are-the-weapon",
		title: "Blade and Blast",
		short_description: "An action speedrunning game made in 2 weeks for Pirate Software Game Jam 16 in 2025.",
		game_engine: "Godot",
		primary_language: "GDScript",
		technologies: ["Godot", "GDScript", "WebGL"],
		category: ProjectCategory.Game,
		github_url: "https://github.com/t3snake/you-are-the-weapon",
		can_play_on_web: true,
		playable_platform: "Itch.io",
		playable_url: "https://t3snake.itch.io/blade-and-blast",
	},
	{
		category: ProjectCategory.Game,
		id: "practice-shooter",
		title: "Practice Shooter",
		short_description: "A first-person shooter with player movement and block targets to shoot.",
		game_engine: "Unity",
		primary_language: "C#",
		technologies: ["Unity", "C#"],
		github_url: "https://github.com/t3snake/Practice-Shooter",
		can_play_on_web: true,
		playable_platform: "T3snake.dev",
		playable_url: "https://t3snake.itch.io/blade-and-blast",
	},
	{
		id: "roller-madness",
		title: "Roller Madness",
		short_description: "A ball-rolling game about collecting coins while avoiding blocks and enemies.",
		github_url: "https://github.com/t3snake/Roller-Madness",
		primary_language: "C#",
		technologies: ["Unity", "C#"],
		category: ProjectCategory.Game,
		can_play_on_web: false,
		game_engine: "Unity"
	},
	{
		id: "solar-system-sim",
		title: "Solar System Sim",
		short_description: "An interactive solar system simulation with orbiting planets and switchable camera targets.",
		github_url: "https://github.com/t3snake/Solar-System-Sim",
		primary_language: "C#",
		technologies: ["Unity", "C#"],
		category: ProjectCategory.Game,
		can_play_on_web: false,
		game_engine: "Unity"
	},
	{
		id: "ssbpp",
		title: "Super Sparty Brothers++",
		short_description: "A 2D platformer with coins, enemies, moving platforms, and a main menu.",
		github_url: "https://github.com/t3snake/SSBpp",
		primary_language: "C#",
		technologies: ["Unity", "C#"],
		category: ProjectCategory.Game,
		can_play_on_web: false,
		game_engine: "Unity"
	},
	{
		id: "pygame-snake",
		title: "Pygame Snake",
		short_description: "A traditional Snake game written in Python using Pygame.",
		github_url: "https://github.com/t3snake/pygame_Snake",
		primary_language: "Python",
		technologies: ["Python", "Pygame"],
		category: ProjectCategory.Game,
		can_play_on_web: false,
		game_engine: "Pygame"
	},
	{
		id: "slickhead-ue",
		title: "Slickhead",
		short_description: "An Unreal Engine game prototype implemented in C++.",
		github_url: "https://github.com/t3snake/slickhead_ue",
		primary_language: "C++",
		technologies: ["Unreal Engine 5", "C++"],
		category: ProjectCategory.Game,
		can_play_on_web: false,
		game_engine: "Unreal Engine"
	},

	// Web projects
	{
		id: "portfolio",
		title: "t3snake.dev - Portfolio and Blogs",
		short_description: "A personal portfolio and blog built as a static site with SvelteKit and TypeScript.",
		github_url: "https://github.com/t3snake/portfolio",
		primary_language: "TypeScript",
		technologies: ["Svelte", "SvelteKit", "TypeScript", "Tailwind CSS", "Vite"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.dev"
	},
	{
		id: "calculator-js",
		title: "JavaScript Calculator",
		short_description: "A browser-based calculator built with vanilla JavaScript for The Odin Project.",
		github_url: "https://github.com/t3snake/calculator-js",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "HTML", "CSS"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/calculator-js/"
	},
	{
		id: "etch-a-sketch",
		title: "Etch-a-Sketch",
		short_description: "A browser drawing grid built with vanilla JavaScript for The Odin Project.",
		github_url: "https://github.com/t3snake/etch-a-sketch",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "HTML", "CSS"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/etch-a-sketch/"
	},
	{
		id: "fso-part3",
		title: "Full Stack Open: Phonebook API",
		short_description: "A phonebook REST API with MongoDB persistence, validation, and a bundled frontend for Full Stack Open part 3.",
		github_url: "https://github.com/t3snake/FSO-Part3",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Mongoose"],
		category: ProjectCategory.Web
	},
	{
		id: "fso-typescript",
		title: "Full Stack Open: TypeScript",
		short_description: "TypeScript exercises including a flight diary and Patientor, with React frontends and Express backends.",
		github_url: "https://github.com/t3snake/FSO-typescript",
		primary_language: "TypeScript",
		technologies: ["TypeScript", "React", "Node.js", "Express", "Zod", "Material UI", "Vite"],
		category: ProjectCategory.Web
	},
	{
		id: "fullstackopen-exercises",
		title: "Full Stack Open Exercises",
		short_description: "Full-stack course projects covering React, REST APIs, state management, authentication, and automated testing.",
		github_url: "https://github.com/t3snake/FullStackOpen-Exercises",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "React", "Redux", "React Query", "Node.js", "Express", "MongoDB", "Vitest", "Playwright"],
		category: ProjectCategory.Web
	},
	{
		id: "js-playground",
		title: "JavaScript Playground",
		short_description: "Small browser projects from The Odin Project, including Rock Paper Scissors and a shopping list.",
		github_url: "https://github.com/t3snake/js-playground",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "HTML", "CSS"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/js-playground/rock-paper-scissor/index.html"
	},
	{
		id: "library-odin",
		title: "Odin Library",
		short_description: "An unfinished library app exercise from The Odin Project, with an HTML/CSS page and JavaScript scaffolding.",
		github_url: "https://github.com/t3snake/library-odin",
		primary_language: "HTML",
		technologies: ["HTML", "CSS", "JavaScript"],
		category: ProjectCategory.Web
	},
	{
		id: "mooc-webdev",
		title: "Web Development MOOC",
		short_description: "Web development course assignments covering responsive layouts, Bootstrap, and a restaurant website.",
		github_url: "https://github.com/t3snake/mooc-webdev",
		primary_language: "JavaScript",
		technologies: ["JavaScript", "HTML", "CSS", "Bootstrap", "jQuery"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/mooc-webdev/module5-solution/"
	},
	{
		id: "odin-recipes",
		title: "Odin Recipes",
		short_description: "A recipe website built with HTML and CSS as part of The Odin Project foundations course.",
		github_url: "https://github.com/t3snake/odin-recipes",
		primary_language: "HTML",
		technologies: ["HTML", "CSS"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/odin-recipes/"
	},
	{
		id: "odin-sign-up-form",
		title: "Odin Sign-up Form",
		short_description: "A styled sign-up form built with HTML, CSS, and JavaScript for The Odin Project.",
		github_url: "https://github.com/t3snake/odin-sign-up-form",
		primary_language: "HTML",
		technologies: ["HTML", "CSS", "JavaScript"],
		category: ProjectCategory.Web,
		website_url: "https://t3snake.github.io/odin-sign-up-form/"
	},
	{
		id: "adhd-toolkit",
		title: "ADHD Toolkit (Fork)",
		short_description: "A fork of an attention-support toolkit, currently containing a React and TypeScript workspace-manager starter.",
		github_url: "https://github.com/t3snake/adhd-toolkit",
		primary_language: "TypeScript",
		technologies: ["TypeScript", "React", "Vite"],
		category: ProjectCategory.Web
	},

	// Build-my-own projects
	{
		id: "gocode",
		title: "GoCode",
		short_description: "A terminal AI coding assistant with tool calls, streaming responses, and a TUI, designed to work with local models.",
		github_url: "https://github.com/t3snake/gocode",
		primary_language: "Go",
		technologies: ["Go", "Bubble Tea", "Lip Gloss", "Glamour", "OpenAI Go SDK", "Ollama"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "csqlite",
		title: "CSQLite",
		short_description: "A SQLite reader built from scratch in C, supporting basic SELECT queries, table scans, and index scans.",
		github_url: "https://github.com/t3snake/csqlite",
		primary_language: "C",
		technologies: ["C", "SQL", "SQLite file format 3", "B-trees", "CMake"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "gogit",
		title: "GoGit",
		short_description: "A Git implementation built from scratch in Go, supporting repository initialization, blobs, trees, and commit objects.",
		github_url: "https://github.com/t3snake/gogit",
		primary_language: "Go",
		technologies: ["Go", "Git object format", "SHA-1", "zlib"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "golox",
		title: "GoLox",
		short_description: "A tree-walk interpreter for Lox with lexical resolution, functions, and classes, following Crafting Interpreters.",
		github_url: "https://github.com/t3snake/golox",
		primary_language: "Go",
		technologies: ["Go", "Lox", "Recursive-descent parsing", "Abstract syntax trees"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "goshell",
		title: "GoShell",
		short_description: "A shell built from scratch in Go with built-in commands, redirection, tab completion, history, and custom line editing.",
		github_url: "https://github.com/t3snake/goshell",
		primary_language: "Go",
		technologies: ["Go", "POSIX", "ANSI escape sequences", "Raw terminal mode"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "http-go-codecrafters",
		title: "HTTP Server in Go",
		short_description: "An HTTP/1.1 server built on TCP sockets, with request parsing, file endpoints, and gzip compression.",
		github_url: "https://github.com/t3snake/http-go-codecrafters",
		primary_language: "Go",
		technologies: ["Go", "TCP sockets", "HTTP/1.1", "gzip"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "handmade-t3",
		title: "Handmade T3",
		short_description: "An early game-engine project built from scratch in C++, with a Win32 platform layer, software rendering, controller input, and audio.",
		github_url: "https://github.com/t3snake/handmade-t3",
		primary_language: "C++",
		technologies: ["C++", "Win32 API", "XInput", "WASAPI", "Software rendering"],
		category: ProjectCategory.BuildMyOwn
	},
	{
		id: "nand2tetris",
		title: "Nand2Tetris",
		short_description: "A computer built from logic gates through RAM and a CPU, with Hack assembly programs and an assembler written in Go.",
		github_url: "https://github.com/t3snake/nand2tetris",
		primary_language: "HDL",
		technologies: ["HDL", "Hack assembly", "Digital logic", "Go"],
		category: ProjectCategory.BuildMyOwn
	},

	// Other projects and collections
	{
		id: "aoc24",
		title: "Advent of Code 2024",
		short_description: "Solutions to Advent of Code 2024 puzzles written in Go.",
		github_url: "https://github.com/t3snake/aoc24",
		primary_language: "Go",
		technologies: ["Go"],
		category: ProjectCategory.Default
	},
	{
		id: "aoc25",
		title: "Advent of Code 2025",
		short_description: "Advent of Code 2025 puzzle solutions written in a C-style subset of C++.",
		github_url: "https://github.com/t3snake/aoc25",
		primary_language: "C++",
		technologies: ["C++"],
		category: ProjectCategory.Default
	},
	{
		id: "task-timer-android",
		title: "Task Timer",
		short_description: "An Android task-timer proof of concept with a visual countdown and pause/resume controls, made for the Mayke-it Hackathon.",
		github_url: "https://github.com/t3snake/Task_Timer_Android",
		primary_language: "Kotlin",
		technologies: ["Kotlin", "Android", "Jetpack Compose", "Material 3", "Gradle"],
		category: ProjectCategory.Default
	},
	{
		id: "unity-games",
		title: "Unity Games: WebGL Builds",
		short_description: "Published WebGL builds of Unity games made while following Michigan State University's Game Development Specialization.",
		github_url: "https://github.com/t3snake/Unity-Games",
		primary_language: "HTML",
		technologies: ["Unity", "WebGL", "WebAssembly", "HTML", "GitHub Pages"],
		category: ProjectCategory.Default
	}
];
