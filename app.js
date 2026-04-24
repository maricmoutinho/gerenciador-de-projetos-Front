const API = "https://gerenciador-de-projetos-59so.onrender.com/api/projects";
 
let editingId = null;
 
// Criar / editar
async function addProject() {
 const project = {
 title: document.getElementById("title").value,
 description: document.getElementById("description").value,
 technologies: document.getElementById("technologies").value,
 link: document.getElementById("link").value,
 date: new Date()
 };
 
 try {
 if (editingId) {
 await fetch(`${API}/${editingId}`, {
 method: "PUT",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(project)
 });
 
 editingId = null;
 
 } else {
 await fetch(API, {
 method: "POST",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify(project)
 });
 }
 
 loadProjects();
 
 // 🔥 LIMPAR CAMPOS
 document.getElementById("title").value = "";
 document.getElementById("description").value = "";
 document.getElementById("technologies").value = "";
 document.getElementById("link").value = "";
 
 // 🔥 ESCONDER FORMULÁRIO
 document.getElementById("formContainer").style.display = "none";
 
 } catch (error) {
 alert("⚠️ Você está offline. Não foi possível salvar.");
 }
}
 
// deletar
async function deleteProject(id) {
 try {
 await fetch(`${API}/${id}`, {
 method: "DELETE"
 });
 
 loadProjects();

 // 🔥 RESETAR CAMPOS E MOSTRAR FORMULÁRIO
 document.getElementById("title").value = "";
 document.getElementById("description").value = "";
 document.getElementById("technologies").value = "";
 document.getElementById("link").value = "";
 editingId = null;
 document.getElementById("formContainer").style.display = "block";
 
 } catch (error) {
 alert("⚠️ Offline. Não foi possível deletar.");
 }
}
 
// editar
function editProject(p) {
 document.getElementById("title").value = p.title;
 document.getElementById("description").value = p.description;
 document.getElementById("technologies").value = p.technologies;
 document.getElementById("link").value = p.link;
 
 editingId = p._id;
 
 // 🔥 MOSTRAR FORMULÁRIO
 document.getElementById("formContainer").style.display = "block";
}
 
// listar
async function loadProjects() {
 try {
 const res = await fetch(API);
 const data = await res.json();
 
 const list = document.getElementById("list");
 list.innerHTML = "";
 
 data.forEach(p => {
 list.innerHTML += `
 <li>
 <div>
 <b>${p.title}</b><br>
 <small>${p.technologies}</small>
 </div>
 
 <div class="actions">
 <button class="edit-btn" onclick='editProject(${JSON.stringify(p)})'>Editar</button>
 <button class="delete-btn" onclick="deleteProject('${p._id}')">Deletar</button>
 </div>
 </li>
 `;
 });
 
 } catch (error) {
 console.log("Offline ou erro na API");
 
 document.getElementById("list").innerHTML =
 "<p>⚠️ Você está offline ou o servidor não respondeu</p>";
 }
}
 
loadProjects();
 
// Service Worker
if ("serviceWorker" in navigator) {
 navigator.serviceWorker.register("./service-worker.js")
 .then(() => console.log("Service Worker registrado"));
}
