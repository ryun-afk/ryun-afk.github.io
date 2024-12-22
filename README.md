of #ryun-afk.github.io


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./assets/style.css">
    <title>Ryan Ngu's Portfolio</title>
  </head>
  <body>
    <header id="top">
      <h1>The Odin Project Notes</h1>
      <p>"theodinproject.com" as the primary learning platform for full-stack web development. </p>
      <!-- <img src="./assets/bowtie-cat.png" alt="Profile image of cat wearing a bow tie." /> -->
    </header>
    <main>
      <section class="card" id="html-section">
        <h2>HTML</h2>
        <ul>
          <li>The head element contains information about the webpage.</li>
          <li>The body element represents the visible content shown to the user.</li>
          <li>The head element contains the metadata, that helps the browser render the page correctly. </li>
          <li>Elements within the header are not visible when a user looks at a webpage. </li>
        </ul>
      </section>
      <section class="card" id="css-section">
        <h2>CSS</h2>
        <ul>
          <li>A margin indicates how much space we want around the outside of an element.</li>
          <li>A padding indicates how much space we want around the content inside an element.</li>
          <li>Look at style.css as reference</li>
          <li>DRY: Don't Repeat Yourself and try to reuse code</li>
          <li>Add linking to css after meta but before title</li>
          <li>Create css file in assets folders</li>
          <li>Class attribute "card" was created in style.css by creating ".card"</li>
        </ul>
      </section>
      <section class="card" id="git-section">
        <h2>Git</h2>
        <ul>
          <li>git status: checks what branch we are currently on</li>
          <li>git checkout -b branch-name: creates a new branch and switches to it</li>
          <li>git add -A: adds modifications in the current working branch</li>
          <li>git commit -m: captures a snapshot of current staged changes and updates repo with the change</li>
          <li>git pull origin main: command to recieve a branch's modification into the local enviroment. </li>
          <li>git push origin feature/starter-code: push changes we have locally to our remote GitHub branch. </li>
        </ul>
      </section>
      <section class="card" id="javascript-section">
        <h2>JavaScript</h2>
        <ul>
          <li>touch  script.js: create js file in current directory</li>
          <li>Linking js is near the bottom of index.html between footer and closing body. </li>
          <li>Declaring functions: function helloWorld(){\\code block here}</li>
          <li>Comment code by using /* */</li>
        </ul>
      </section>
    </main>
    <footer>
      <p>End of HTML notes</p>
    </footer>
    <script src="./assets/script.js"></script>
  </body>
</html>
