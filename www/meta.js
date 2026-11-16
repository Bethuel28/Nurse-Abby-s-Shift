/* Visual + prioritization metadata for each case (ideal order = rank 1 is sickest). */
window.META = {
  stemi:   { r: 2.5, skin: '#c8966f', hair: '#2a2a2a', style: 'short', gown: '#6aa9ff', prop: 'sweat', ico: ['🫀', '💊', '💉', '😮‍💨'], rank: 1, v2: 'HR 128 · BP 90/58 · RR 26 · SpO₂ 91%',
    why: 'Crushing chest pain with sweating = possible STEMI. Minutes of delay mean dead heart muscle, and he can go into VF. Time is muscle.' },
  trauma:  { r: 1.4, skin: '#b9835c', hair: '#1c1c1c', style: 'short', gown: '#cfd8dc', prop: 'blood', ico: ['🩸', '🏥', '💉', '✂️'], rank: 2, v2: 'HR 140 · BP 74/50 · RR 32 · SpO₂ 92% · GCS 11',
    why: 'Active bleeding with a falling GCS and no collar. He is heading for hemorrhagic shock — control the bleed first.' },
  peds:    { r: 0.7, skin: '#e0a982', hair: '#3a2a1a', style: 'baby', gown: '#ffd6a5', prop: 'small', ico: ['😮‍💨', '🍼', '💉', '🌬️'], rank: 3, v2: 'HR 186 · RR 66 · SpO₂ 78% · T 39.3°',
    why: 'SpO₂ 89% in a toddler with chest indrawing. Children compensate until they suddenly don\'t. Oxygen first.' },
  stroke:  { r: 0.5, skin: '#d2a07c', hair: '#d9d9d9', style: 'bun', gown: '#c3b1e1', prop: 'droop', ico: ['🧠', '💊', '🛏️', '⏳'], rank: 4, v2: 'HR 86 · BP 214/120 · RR 16 · SpO₂ 93% · GCS 11',
    why: 'Face droop + arm weakness + slurred speech: "time is brain." The thrombolysis window is about 4.5 hours from last known well.' },
  ectopic: { r: 0.35, skin: '#cf9f7b', hair: '#241a14', style: 'long', gown: '#ffb3c1', prop: 'cramp', ico: ['🧪', '💊', '🩻', '🙂'], rank: 5, v2: 'HR 132 · BP 78/46 · RR 28 · SpO₂ 96%',
    why: 'Triage said ESI 3, but a young woman with pelvic pain and spotting is an ectopic until proven otherwise. Stable now — but she can rupture.' },
  dengue:  { r: 0.28, skin: '#d9a98a', hair: '#2b2118', style: 'long', gown: '#b5ead7', prop: 'flush', ico: ['🩸', '💊', '💧', '🏠'], rank: 6, v2: 'HR 134 · BP 82/68 · RR 28 · SpO₂ 96%',
    why: 'Day 4 dengue with warning signs. She needs a CBC and careful fluids, and has the most time of the six — but not unlimited.' }
};
