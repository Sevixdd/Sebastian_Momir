import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-[family-name:var(--font-geist-sans)]">
      {/* Header/Navigation */}
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Sebastian Momir</h1>
          <ul className="flex space-x-4 items-center">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
            <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/sebastian-momir/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">LinkedIn</a></li>
            <li><a href="https://github.com/sebastml" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">GitHub</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto p-8">

        {/* About Me Section */}
        <section id="about" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/placeholder-profile.png" // Replace with your actual profile picture path
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
              priority // Load profile picture early
            />
            <div className="text-lg leading-relaxed">
              <p className="mb-2">
                Welcome! I'm an Artificial Intelligence Engineer with a strong academic background (MSc Artificial Intelligence from University of Surrey, BSc Computer Science and AI from Loughborough University) and hands-on experience in developing innovative AI solutions.
              </p>
              <p className="mb-2">
                My expertise lies in Machine Learning, Generative AI, Large Language Models (LLMs), LangChain for RAG, and various development tools and frameworks. I'm passionate about leveraging AI to create impactful applications.
              </p>
              <p>
                Currently working as an AI Engineer Lead at Schooly, developing the Owly AI agent. Previously interned at Reality AI, contributing to AI teaching assistants and flight management tools.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Encode AI Hackathon */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Encode AI Hackathon Project (ConGen)</h3>
                <p className="text-gray-600 mb-4">Won 1st sponsor prize. Developed ConGen, a content generation app with auto-posting. Tech stack: Azure cloud, hosting, AI endpoints with NextJS FE, RabbitMQ middleware, .Net BE.</p>
              </div>
              {/* <a href="#" className="text-blue-500 hover:underline mt-auto">Link (if available)</a> */}
            </div>
            {/* Encode club AI Hackathon */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Encode club AI Hackathon Project (SolGenAI)</h3>
                <p className="text-gray-600 mb-4">Developed SolGenAI, a music generation web app on EC2 VM in AWS, importing MusicGen (Meta/Hugging Face). Created audio summary contract as NFT. Tech: React FE, Express.js BE, Flask for endpoint.</p>
              </div>
              {/* <a href="#" className="text-blue-500 hover:underline mt-auto">Link (if available)</a> */}
            </div>
            {/* TruEra Challenge LabLabAI */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">TruEra Challenge LabLabAI (Term aware Guard)</h3>
                <p className="text-gray-600 mb-4">Developed a Terms and Conditions summarization web app using text-bison002 (Google Vertex AI). Created a Python VM REST API on Digital Ocean. Used Apify for web scraping, Pinecone vector DB, LangChain for RAG.</p>
              </div>
              {/* <a href="#" className="text-blue-500 hover:underline mt-auto">Link (if available)</a> */}
            </div>
             {/* Llama 2 Hackathon with Clarifai */}
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Llama 2 Hackathon with Clarifai (Code Helper VSCode Extension)</h3>
                <p className="text-gray-600 mb-4">Developed a code GPT helper VSCode extension in Typescript using Llama2's LLM (CodeLlama2-7B API by Clarifai). Top 8 finalist out of 240 teams. 1.2k+ downloads.</p>
              </div>
              <a href="https://clarifai.com/clarifai/llama2/models/llama2-7b-chat" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-auto">View API Info</a> {/* Assuming 'here' link points here */}
            </div>
            {/* Text-to-Image Synthesis App */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Text-to-Image Synthesis App</h3>
                <p className="text-gray-600 mb-4">Independent research inspired by OpenAI's Dalle-2 and Google's Imagen. Implemented and trained a U-net neural network in PyTorch for high-quality 2d image generation based on text. Used CLIP and Diffusion Model technologies.</p>
              </div>
              {/* <a href="#" className="text-blue-500 hover:underline mt-auto">Link (if available)</a> */}
            </div>
            {/* Knife Detection Image Classification */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Knife Detection Image Classification</h3>
                <p className="text-gray-600 mb-4">Independent computer vision work. Trained and compared 4 different image classification networks (EfficientNetB0, EfficientNetV2, Resnet18, Resnet50) with Feature boosting on a 32k image dataset. Performed mAP and Hyperparameter optimisation. Improved training speed by 301%.</p>
              </div>
              {/* <a href="#" className="text-blue-500 hover:underline mt-auto">Link (if available)</a> */}
            </div>
             {/* GDSC 2021 */}
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">GDSC 2021 Challenge</h3>
                <p className="text-gray-600 mb-4">Collaborated in a team of three to find solution for reducing CO2 emissions (one of 17 sustainable goals). Built with Java and Kotlin using Firebase Google and GCP Maps API.</p>
              </div>
              <a href="https://github.com/sebastml/GDSC-2021-Solution-Challenge" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-auto">View Badge/Repo</a> {/* Assuming 'here' link points here */}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16 scroll-mt-16">
           <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Experience</h2>
           <div className="space-y-6">
             {/* Schooly */}
             <div>
               <h3 className="text-xl font-semibold">Artificial Intelligence Engineer Lead</h3>
               <p className="text-gray-700">Schooly | Full-Time, May 2024 – October 2024</p>
               <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
                 <li>Developing Schooly's AI agent, Owly: multimodal system generating quizzes, lesson summaries, flashcards.</li>
                 <li>Successfully attracted sponsors & users, making it the sell point of the education platform.</li>
                 <li>Used GCP (gecko embedding & gemini 1.5), LangChain for RAG, Langsmith for monitoring/testing, Qdrant vector DB, some testing with Llama3-7B.</li>
               </ul>
             </div>
             {/* Reality AI */}
             <div>
               <h3 className="text-xl font-semibold">Artificial Intelligence Engineer</h3>
               <p className="text-gray-700">Reality AI | Internship, March 2024 – May 2024</p>
               <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
                 <li>Worked on Kai's teaching assistant tools (quiz/flashcard generation from PDFs/YouTube URLs using GCP).</li>
                 <li>Created AI flight management assistant for searching/booking flights via natural language.</li>
               </ul>
             </div>
             {/* Volunteer Experience */}
              <div>
               <h3 className="text-xl font-semibold">Technical Director</h3>
               <p className="text-gray-700">CodeLab Society | Volunteer, Loughborough, UK, 2021-2022</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
                  <li>Created and administered Discord servers.</li>
                  <li>Taught first-year students data structures and algorithms in Python.</li>
                </ul>
             </div>
              <div>
               <h3 className="text-xl font-semibold">Media and Communication</h3>
               <p className="text-gray-700">International Students' Network | Volunteer, Loughborough, UK, 2022-2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 ml-4 space-y-1">
                 <li>Collaborated with a team of fifteen people, improving soft skills.</li>
                </ul>
             </div>
           </div>
         </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-16">
          <h2 className="text-3xl font-semibold mb-6 border-b-2 border-blue-500 pb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "ML", "Gen AI", "LLMs", "Langchain RAG", "PyTorch", "Flask", "Kubernetes",
              "Docker", "NumPy", "Pandas", "Communication", "Problem-solving", "Teamwork",
              "Adaptability", "Time Management", "C/C++", "Python", "Java", "Typescript",
              "SQL", "CSS", "HTML", "LaTeX", "Linux", "Git"
            ].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-16">
          <h2 className="text-3xl font-semibold mb-4 border-b-2 border-blue-500 pb-2">Contact</h2>
          <p className="text-lg mb-4">
            Feel free to reach out! You can contact me via email at <a href="mailto:sebi.momir@gmail.com" className="text-blue-500 hover:underline">sebi.momir@gmail.com</a> or connect with me on:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><a href="https://www.linkedin.com/in/sebastian-momir/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></li>
            <li><a href="https://github.com/sebastml" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></li>
          </ul>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4 mt-16">
        <p>&copy; {new Date().getFullYear()} Sebastian Momir. All rights reserved.</p>
      </footer>
    </div>
  );
}
