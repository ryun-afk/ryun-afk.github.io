of #ryun-afk.github.io


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ryan Ngu: Data Analysis</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
            background-color: #333;
            color: #fff;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        header h1 {
            margin: 0;
        }
        nav ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }
        nav ul li {
            margin-left: 20px;
        }
        nav ul li a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }
        section {
            padding: 2rem;
        }
        .projects {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .project {
            border: 1px solid #ddd;
            padding: 1rem;
            border-radius: 8px;
        }
        .project img {
            width: 100%;
            border-radius: 8px;
        }
        footer {
            text-align: center;
            padding: 1rem;
            background-color: #333;
            color: #fff;
            margin-top: 2rem;
        }
    </style>
</head>
<body>
    <header>
        <h1>Data Science Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section id="about">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am a data analyst with a passion for uncovering insights and driving decisions through data. Here you will find some of my best analysis projects and ways to get in touch with me.</p>
    </section>
    <section id="projects">
        <h2>My Projects</h2>
        <div class="projects">
            <div class="project">
                <h3>C# Color Analysis</h3>
                <p>A C# application designed for efficient image processing and statistical analysis, providing color percentage outputs. The program processes image data to quantify accuracy from input entries.</p>
            </div>
            <div class="project">
                <h3>VBA Report Automation</h3>
                <p>Leveraging Excel and VBA to automate report generation from spreadsheet data. Data is exported from the client database into Excel, and VBA scripts efficiently process the information into standardized email formats.</p>
            </div>
            <div class="project">
                <h3>Automated Gameplay Bot</h3>
                <p>The bot automates gameplay with pyautogui and keyboard, supporting basic directional controls and action sequences. Future updates will focus on multi-step actions, decision-making, and dynamic gameplay using AI.</p>
            </div>
        </div>
    </section>
    <section id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate on a data project, feel free to reach out!</p>
        <p>Email: <a href="mailto:rngu82@gmail.com">rngu82@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ryan-n-b3a9ba16a" target="_blank">linkedin.com/in/ryan-n-b3a9ba16a</a></p>
    </section>
    <footer>
        <p>&copy; 2024 Ryan Ngu. All rights reserved.</p>
    </footer>
</body>
</html>

