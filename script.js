
function openPage(page) {
  document.getElementById("home").style.display = "none";
  let c = document.getElementById("content");

  /* HTTP vs HTTPS */
  if (page === "http") {
    c.innerHTML = `
      <h2>🌐 HTTP vs HTTPS (Advanced)</h2>

      <h3>HTTP</h3>
      <p>❌ Not secure protocol</p>
      <p>Data travels in plain text → can be intercepted</p>

      <h3>HTTPS</h3>
      <p>🔒 Secure protocol using SSL/TLS encryption</p>
      <p>Protects passwords, payments, and data</p>

      <h3>Difference</h3>
      <ul>
        <li>HTTP → No encryption</li>
        <li>HTTPS → Encrypted</li>
        <li>HTTPS → Trust + safety</li>
      </ul>

      <button onclick="back()">⬅ Back</button>
    `;
  }

  /* ANALYZER */
  else if (page === "analyzer") {
    c.innerHTML = `
      <h2>🔍 Website Analyzer Tool</h2>

      <input id="url" placeholder="Enter URL (https://example.com)">

      <button onclick="analyze()">Analyze</button>

      <div id="result"></div>

      <button onclick="back()">⬅ Back</button>
    `;
  }

  /* TRAFFIC SIMULATOR */
  else if (page === "traffic") {
    c.innerHTML = `
      <h2>📡 Network Traffic Simulator</h2>

      <div id="netBox">Ready to send packet...</div>

      <button onclick="startSim()">Start Simulation</button>

      <button onclick="back()">⬅ Back</button>
    `;
  }

  /* QUIZ */
  else if (page === "quiz") {
    c.innerHTML = `
      <h2>❓ Cyber Security Quiz</h2>

      <div class="quiz-box">

        <div class="q">
          <p>1. HTTP is?</p>
          <label><input type="radio" name="q1" value="0"> Secure</label>
          <label><input type="radio" name="q1" value="1"> Not Secure</label>
        </div>

        <div class="q">
          <p>2. HTTPS uses?</p>
          <label><input type="radio" name="q2" value="1"> Encryption</label>
          <label><input type="radio" name="q2" value="0"> No security</label>
        </div>

        <div class="q">
          <p>3. 🔒 means?</p>
          <label><input type="radio" name="q3" value="1"> Safe connection</label>
          <label><input type="radio" name="q3" value="0"> Unsafe</label>
        </div>

        <button onclick="showResult()">Submit Quiz</button>

        <h3 id="score"></h3>

      </div>

      <button onclick="back()">⬅ Back</button>
    `;
  }

  /* CERTIFICATE */
  else if (page === "cert") {
    c.innerHTML = `
      <h2>🏆 Certificate Generator</h2>

      <input id="name" placeholder="Enter your name">

      <button onclick="generateCert()">Generate</button>

      <div id="cert"></div>

      <button onclick="back()">⬅ Back</button>
    `;
  }
}

/* BACK */
function back() {
  document.getElementById("content").innerHTML = "";
  document.getElementById("home").style.display = "flex";
}

/* ANALYZER */
function analyze() {
  let url = document.getElementById("url").value;
  let res = document.getElementById("result");

  if (!url) {
    res.innerHTML = "❌ Enter URL";
  }
  else if (url.startsWith("https://")) {
    res.innerHTML = "🔒 SAFE WEBSITE (HTTPS)";
  }
  else if (url.startsWith("http://")) {
    res.innerHTML = "⚠ UNSAFE WEBSITE (HTTP)";
  }
  else {
    res.innerHTML = "❓ INVALID URL";
  }
}

/* TRAFFIC SIMULATION */
function startSim() {
  let box = document.getElementById("netBox");

  box.innerHTML = "📦 Packet sending...";

  setTimeout(() => {
    box.innerHTML = "➡ Routing through network...";
  }, 1000);

  setTimeout(() => {
    box.innerHTML = "🔐 Encrypting data...";
  }, 2000);

  setTimeout(() => {
    box.innerHTML = "✅ Delivered safely!";
  }, 3000);
}

/* QUIZ RESULT */
function showResult() {
  let score = 0;

  let q1 = document.querySelector('input[name="q1"]:checked');
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q3 = document.querySelector('input[name="q3"]:checked');

  if (q1 && q1.value == "1") score++;
  if (q2 && q2.value == "1") score++;
  if (q3 && q3.value == "1") score++;

  document.getElementById("score").innerHTML =
    "🎯 Score: " + score + "/3";
}

/* CERTIFICATE */
function generateCert() {
  let name = document.getElementById("name").value;

  document.getElementById("cert").innerHTML = `
    <h3>🏆 Certificate of Completion</h3>
    <p>This is to certify that</p>
    <h2>${name}</h2>
    <p>completed Cyber Network Analyzer Project</p>
  `;
}
