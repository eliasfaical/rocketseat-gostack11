const express = require('express');
const cors = require('cors');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(cors());
app.use(express.json());

/**
 * GET:
 * POST:
 * PUT/PATCH
 * DELETE
 */

 /**
  * Tipos de parâmetro
  * 
  * Query Params: Filtros e paginacão
  * Route Params: Identificar recursos (Atualizar/Deletar)
  * Request Body: Conteúdo na hr de criar ou editar um recurso (JSON)
  */

/**
 * Middleware:
 * 
 */

const projects = [];

function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.time(logLabel);

  next();

  console.timeEnd(logLabel);
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)) {
    return response.status(400).json({ error: 'Invalid Project ID' });
  }

  return next();
}

app.use(logRequests);
app.use('/projects/:id', validateProjectId);

// GET
app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
});


// POST
app.post('/projects', (request, response) => {
  const {title, owner} = request.body;

  const project = { id: uuid(), title, owner }

  projects.push(project);

  return response.json(projects);
});


// UPDATE
app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  const { title, owner } = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex) {
    return response.status(400).json({ error: 'Project not found' });
  }

  const project = {
    id,
    title,
    owner
  }

  projects[projectIndex] = project;

  return response.json(project);
});

// DELETE
app.delete('/projects/:id', (request, response) => {
  const { id } = request.params;
  
  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex) {
    return response.status(400).json({ error: 'Project not found' });
  }

  projects.splice(projectIndex, 1);
  
  return response.status(204).send();
});


app.listen(3333, () => {
  console.log('🚀 Back-end started!')
});