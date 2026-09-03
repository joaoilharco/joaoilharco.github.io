// State the home page carries across route changes (but not across a page
// reload — a fresh visit always starts at the intro).
//
// `played` records that the intro has been scrolled through. It is a small
// store rather than a plain flag because the header and the home page both
// read it and both have to react the moment it flips: the intro is taken out
// of the document as soon as you have scrolled past it, so scrolling back up
// returns you to the work rather than replaying the greeting.
//
// `homeScroll` is where to land when coming back from another page. It is
// stored already adjusted for the intro's removal, so you return to the cards
// you were looking at rather than that many pixels lower down the page.
let played = false
let homeScroll = 0

const listeners = new Set()

export function subscribeIntro(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function introPlayed() {
  return played
}

export function setIntroPlayed(value) {
  if (played === value) return
  played = value
  listeners.forEach((listener) => listener())
}

export function getHomeScroll() {
  return homeScroll
}

export function setHomeScroll(value) {
  homeScroll = value
}
