import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

// Store the detailed responses in an object for cleaner management
const commandResponses = {
  about: `
SHANKARA PERUMAL ARUNACHALAM
Web Developer

My objective as a web developer is to use my skills in both 
front-end and back-end development to create innovative and 
user-interactive websites.
  `,
  skills: `
SKILLS:

FRONT-END:
- ReactJS
- Tailwindcss
- HTML5
- CSS3
- SASS
- JavaScript
- NodeJS
- Bootstrap5
- Episerver CMS

BACK-END:
- SQLServer
- MYSQL

MISCELLANEOUS:
- Adobe Photoshop
- Git
- Adobe XD
  `,
  experience: `
WORK EXPERIENCE:

1. FRONT END DEVELOPER
   Asign, Chennai (Feb. 2024 - Present)
   - Converted PHP-based frontend to React.js with GIT version control.
   - Built a fully responsive design.
   - Ensured the application followed WCAG guidelines.

2. PROGRAMMER-II
   Unique Force Technology Solutions, Chennai (Jan. 2020 - Nov. 2023)
   - Designed layouts and wireframes.
   - Developed UIs using JavaScript, HTML5, CSS3, SASS, and Bootstrap5.
   - Managed databases with SQLServer.
  `,
  projects: `
PROJECT EXPERIENCE:

1. FRONT END DEVELOPER @ Asign (Feb. 2024)
   - Migrated legacy PHP frontend to a dynamic, component-based React.js architecture.
   - Implemented Tailwind CSS for utility-first styling.
   - Optimized performance and accessibility using React hooks and WCAG guidelines.

2. PROGRAMMER-II @ Unique Force Technology Solutions (Jan. 2020 - Nov. 2023)
   - Migrated ~20 websites from DNN CMS to EpiServer CMS.
   - Developed websites using HTML5, CSS3, SASS, JavaScript & JQuery.
   - Leveraged Bootstrap5 for liquid responsiveness.
  `,

  contact: `
CONTACT:

Email:      idofshankar@gmail.com
LinkedIn:   <a href="https://www.linkedin.com/in/shankara-perumal-arunachalam-1b40b6187/" target="_blank">linkedin.com/in/shankara-perumal-arunachalam</a>

  `,
};

// **NEW**: Create the 'all' command by combining the others
commandResponses.all = `
${commandResponses.about}
------------------------------------
${commandResponses.skills}
------------------------------------
${commandResponses.experience}
------------------------------------
${commandResponses.projects}
------------------------------------

------------------------------------
${commandResponses.contact}
`;


const Terminal  = () => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', text: "Type 'help' to see available commands." }
    ]);
    const [rightPaneContent, setRightPaneContent] = useState("Welcome to my portfolio! \n\nEnter a command on the left to see the details here.");
    const inputRef = useRef(null);
    const terminalEndRef = useRef(null);

    const scrollToBottom = () => {
        terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    const handleCommand = (command) => {
        const cmd = command.toLowerCase();
        let newHistory = [...history, { type: 'input', text: command }];
        
        if (cmd === 'clear') {
            setHistory([]);
            setRightPaneContent("Terminal cleared. \n\nEnter a 'help' command to begin.");
            return;
        }

        if (commandResponses[cmd]) {
            setRightPaneContent(commandResponses[cmd]);
            newHistory.push({ type: 'output', text: `Showing details for '${cmd}'...` });
        } else if (cmd === 'help') {
             // **UPDATED**: Added 'all' to the help message
             newHistory.push({ type: 'output', text: `Available commands: \n\n${Object.keys(commandResponses).join('\n')}\nclear` });
        } else {
            newHistory.push({ type: 'output', text: `Command not found: ${command}` });
        }

        setHistory(newHistory);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
            setInput('');
        }
    };

    return (
        <div className="portfolio-container">
            {/* Left Pane - The Terminal */}
            <div className="left-pane" onClick={() => inputRef.current.focus()}>
                <div className="output-area">
                    {history.map((line, index) => (
                        <div key={index}>
                            {line.type === 'input' ? (
                                <div className="input-line">
                                    <span className="prompt">ShankaraPerumal ~ $</span>
                                    <span>{line.text}</span>
                                </div>
                            ) : (
                               <pre className="output-line">{line.text}</pre>
                            )}
                        </div>
                    ))}
                    <div ref={terminalEndRef} />
                </div>
                <div className="input-line">
                    <span className="prompt">ShankaraPerumal ~ $</span>
                    <input
                        type="text"
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                </div>
            </div>

            {/* Right Pane - The Content Display */}
            <div className="right-pane">
                <pre className="content-display" dangerouslySetInnerHTML={{ __html: rightPaneContent }}></pre>
            </div>
        </div>
    );
};

export default Terminal ;