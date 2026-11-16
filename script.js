const PROJECTS_URL = 'projects.json'
const ALL_TAG = 'All'

const filters = document.querySelector('.filters')
const workGrid = document.querySelector('.work-grid')
const projectDialog = document.querySelector('.project-dialog')
const projectContent = projectDialog.querySelector('article')
const copyButton = document.querySelector('.copy-email')

main()

async function main() {
	setupDialog()
	copyButton.addEventListener('click', copyEmail)

	const projects = await getProjects()

	if (projects.length === 0) {
		workGrid.textContent = 'The projects could not be loaded. Please try again later.'
		return
	}

	renderFilters(getTags(projects))
	renderCards(projects)
}

async function getProjects() {
	try {
		const response = await fetch(PROJECTS_URL)
		return response.ok ? await response.json() : []
	} catch {
		return []
	}
}

function getTags(projects) {
	const tags = new Set(projects.flatMap(project => project.tags))
	return [ALL_TAG, ...tags]
}

function renderFilters(tags) {
	for (const tag of tags) {
		const button = createElement('button', 'filter', tag)
		button.addEventListener('click', () => filterCards(tag))
		filters.appendChild(button)
	}

	filters.firstChild.classList.add('active')
}

function renderCards(projects) {
	for (const project of projects) {
		const card = createElement('button', 'card')
		card.dataset.tags = project.tags.join(' ')
		card.addEventListener('click', () => openProject(project))

		card.append(
			createImage(project.cover, ''),
			createElement('span', 'eyebrow', getSubtitle(project)),
			createElement('span', 'card-title', project.title),
		)

		workGrid.appendChild(card)
	}
}

function filterCards(tag) {
	for (const button of filters.children)
		button.classList.toggle('active', button.textContent === tag)

	for (const card of workGrid.children)
		card.hidden = tag !== ALL_TAG && !card.dataset.tags.split(' ').includes(tag)
}

function openProject(project) {
	projectContent.replaceChildren(
		createElement('p', 'eyebrow', getSubtitle(project)),
		createElement('h2', 'project-title', project.title),
		createImage(project.cover, project.title),
		createElement('h3', 'project-brief-title', project.briefTitle),
		createElement('p', 'project-brief', project.briefText),
		...project.blocks.map(createBlock),
	)

	projectDialog.showModal()
	projectDialog.scrollTop = 0
}

function createBlock(block) {
	const section = createElement('section', 'project-block')
	section.append(
		createElement('h3', '', block.title),
		createElement('p', '', block.text),
		...block.images.map(image => createImage(image, block.title)),
	)
	return section
}

function setupDialog() {
	projectDialog.querySelector('.close-button').addEventListener('click', () => projectDialog.close())

	projectDialog.addEventListener('click', event => {
		if (event.target === projectDialog)
			projectDialog.close()
	})
}

async function copyEmail() {
	await navigator.clipboard.writeText(copyButton.dataset.email)
	copyButton.textContent = 'Copied!'
	setTimeout(() => copyButton.textContent = 'Copy email', 2000)
}

function getSubtitle(project) {
	return `${project.tags.join(' · ')} · ${project.date}`
}

function createImage(source, description) {
	const image = createElement('img')
	image.src = source
	image.alt = description
	image.loading = 'lazy'
	return image
}

function createElement(tag, className = '', text = '') {
	const element = document.createElement(tag)
	element.className = className
	element.textContent = text
	return element
}
