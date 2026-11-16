/* Day 3 — Wednesday: Short-Staffed. Five beds, and a sixth patient who has not arrived yet. */
window.DAYDATA.push({
  id: 'day3', title: 'Day 3 — Wednesday: Short-Staffed', aide: 'Joy',
  intro: 'Brett called in sick. It\'s me, Joy, the student nurse. I will do my best, Nurse Abby!',
  events: [],
  cases: [
    { id: 'ugib', bed: 1, name: 'Danilo Agustin', age: 52, sex: 'M', tri: 'Vomiting blood, known liver disease · ESI 1',
      look: 'Gray and clammy. A basin of bright red blood beside him. His belly is swollen, his eyes yellow.',
      v: 'HR 124 · BP 94/58 · RR 24 · SpO₂ 95%', v2: 'HR 152 · BP 66/40 · RR 34 · SpO₂ 88% · GCS 10', late: 'He has stopped answering. Blood is pooling at his mouth.',
      sk: '#c8966f', hr: '#2a2a2a', st: 'short', gw: '#ffb3c1', pr: 'blood', rank: 1,
      why: 'Hematemesis in a cirrhotic with HR 124 and BP 94/58: variceal bleed with early shock. He is losing blood faster than anyone else.',
      S: [
        ['Danilo is vomiting fresh blood, HR 124, BP 94/58. First action?', [
          ['Airway first: turn him on his side, two large IVs', 5, 'Airway clear. Two good lines in. Blood sent for crossmatch.'],
          ['Give oral antacid and ask him to sip water', -40, 'He vomits more blood and nearly aspirates.'],
          ['Send him for an urgent upper endoscopy right now', -25, 'No access, no blood, no airway plan.'],
          ['Place an NGT to wash out the stomach with cold water', -35, 'Forced NGT in varices. The bleeding worsens.']]],
        ['Airway secure, access in, BP 90/54. What do you ask the doctor for?', [
          ['Crossmatched blood, GI for endoscopy', 5, 'Dr. Villanueva orders all of it. The GI team is called.'],
          ['IV fluids wide open until the BP is normal', -30, 'Over-transfusion with fluid raises portal pressure; bleeding increases.'],
          ['Only an antacid IV and observe him', -35, 'Antacids will not stop a variceal bleed.'],
          ['Wait for the CBC and clotting results first', -25, 'Another half hour of bleeding.']]],
        ['Blood is ordered. What do you confirm at the bedside?', [
          ['Two-nurse check, patient ID and crossmatch label match', 8, 'The pack matches. Transfusion starts safely.'],
          ['Hang the first available pack; he is dying for now', -45, 'Wrong blood type. Acute hemolytic reaction.'],
          ['Use a single-nurse check to save time as a first step', -25, 'Error-prone. The label is wrong; caught late.'],
          ['Start O-negative and skip the label check right away', -22, 'Defensible in a true emergency, but here the crossmatch was ready.']]],
        ['He is stable enough for endoscopy. How do you transfer him?', [
          ['Monitor on, airway ready, blood running', 5, 'The endoscopist bands the varices.'],
          ['Send him alone on the stretcher to save time', -40, 'He vomits again and arrests in the corridor.'],
          ['Pause the blood for transport and restart later', -30, 'His pressure drops in the corridor.'],
          ['Hand off verbally only, nothing written', -22, 'GI misses his coagulopathy.']]]],
      R: [
        ['He is vomiting more blood and getting drowsy. Act now.', [
          ['Side-lying, protect the airway', 6, 'Airway protected. The doctor is on the way.'],
          ['Lay him flat and give a sedative', -45, 'He aspirates.'],
          ['Give oral antacid and sips', -40, 'More vomiting.'],
          ['Wait; the bleeding will stop on its own', -35, 'It does not.']]],
        ['BP 78/46 and he is not answering well. Act now.', [
          ['Start blood per order, call for GI', 6, 'BP responds to the first unit.'],
          ['Run saline wide open and wait', -30, 'He is diluted, not resuscitated.'],
          ['Give oral rehydration and rest to start with', -40, 'He vomits it back with blood.'],
          ['Place an NGT for lavage', -35, 'It triggers more bleeding.']]],
        ['He shivers and his back hurts 10 minutes into the blood.', [
          ['Stop the transfusion, call the doctor', 6, 'The reaction is caught early.'],
          ['Slow the drip and give paracetamol', -35, 'The reaction continues.'],
          ['Continue; shivering is normal', -45, 'Full hemolytic reaction.'],
          ['Cover him with blankets and carry on while waiting', -40, 'He deteriorates quickly.']]]],
      end: ['Endoscopic banding stopped the bleed. He went to the ICU and recovered over a week.', 'He survived after several units of blood and a long ICU stay.', 'He survived but with liver failure and a prolonged stay.', 'Danilo bled out from his varices.'],
      deb: ['Variceal bleed: airway protection, two large-bore IVs, restrictive transfusion, octreotide and antibiotics, and early endoscopy.', 'Never force an NGT in suspected varices; avoid over-transfusion, which raises portal pressure.', 'Transfusion safety: two-person check of patient ID, blood type and pack label every time.'] },

    { id: 'hemop', bed: 2, name: 'Remedios Cabrera', age: 61, sex: 'F', tri: 'Coughing up blood, known TB · ESI 2',
      look: 'Sitting forward with a basin of bright blood. She has been coughing for two months and lost a lot of weight.',
      v: 'HR 116 · BP 104/64 · RR 26 · SpO₂ 90%', v2: 'HR 140 · BP 78/44 · RR 36 · SpO₂ 80%', late: 'She is gasping, drowning in her own blood.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'bun', gw: '#c3b1e1', pr: 'cough', rank: 2,
      why: 'Massive hemoptysis with SpO₂ 90%: the danger is drowning in blood, not blood loss. Protect the good lung.',
      S: [
        ['Remedios is coughing up bright blood, SpO₂ 90%. First action?', [
          ['Sit her up leaning toward the bleeding side', 5, 'Bleeding side identified. SpO₂ climbs to 93%.'],
          ['Lay her flat on her back and keep her calm for now', -40, 'She nearly drowns in blood.'],
          ['Give a strong cough suppressant', -25, 'She cannot clear the blood and desaturates.'],
          ['Give cough drops and a warm drink', -30, 'Nothing is done for the bleeding.']]],
        ['Blood loss ~200 mL in an hour. What do you ask the doctor for?', [
          ['IV access, crossmatch, airway plan', 5, 'Dr. Aquino orders them. The CXR shows a cavity.'],
          ['Start her on anti-TB drugs and send her home', -40, 'She keeps bleeding at home.'],
          ['Wait for sputum AFB results before acting', -30, 'Results take days; the bleeding does not.'],
          ['Give oral antibiotics and observe', -25, 'Antibiotics will not stop the bleeding.']]],
        ['She is tiring and her SpO₂ is 88%. What do you prepare?', [
          ['Call the doctor now; prepare intubation set and suction, more blood', 8, 'Intubation is prepared. She is protected.'],
          ['Encourage her to cough harder to clear her chest', -35, 'The bleeding worsens.'],
          ['Give a sedative to help her rest', -45, 'She stops protecting her airway.'],
          ['Wait for her to tire completely before calling anyone for the moment', -30, 'It is too late then.']]],
        ['Stabilised on a ventilator. What is the infection control step?', [
          ['Airborne precautions, isolation room', 5, 'Isolation arranged; the team is protected.'],
          ['Place her in a regular bed with a mask on her', -25, 'Other patients are exposed.'],
          ['Skip isolation to speed things up', -35, 'The ward is exposed to TB.'],
          ['Isolation can wait until the results are back', -30, 'Exposure continues for days.']]]],
      R: [
        ['She is coughing blood while flat on a stretcher. Act now.', [
          ['Sit her up, bleeding side down, suction, oxygen', 6, 'The airway clears and SpO₂ rises.'],
          ['Keep her lying flat for comfort', -40, 'She aspirates blood.'],
          ['Give a cough suppressant', -30, 'She cannot clear her airway.'],
          ['Let her rest until the doctor arrives', -25, 'The bleeding continues.']]],
        ['She is pale, HR 138, and the bleeding continues. Act now.', [
          ['Start IV fluids, crossmatch, call doctor', 6, 'She steadies.'],
          ['Only observe and wait for the sputum results', -30, 'She loses more blood.'],
          ['Give oral iron for her anemia', -35, 'Not for acute bleeding.'],
          ['Send her home with TB drugs', -45, 'She returns dying.']]],
        ['She is exhausted and SpO₂ is falling to 85%.', [
          ['Call the doctor, prepare intubation and oxygen at the bedside', 6, 'She is intubated safely.'],
          ['Give her a sedative to rest in the meantime', -45, 'She stops breathing.'],
          ['Let her cough harder for now', -35, 'The bleeding worsens.'],
          ['Wait for the shift change at the bedside', -40, 'She decompensates.']]]],
      end: ['Intubated early and bleeding controlled by interventional radiology. She went to the ICU and later to TB treatment.', 'She survived after intubation and many units of blood.', 'She survived with severe lung damage.', 'Remedios drowned in her own blood.'],
      deb: ['Massive hemoptysis: protect the airway, position bleeding side down, oxygen, suction, tranexamic acid, early airway control.', 'The main danger is asphyxia, not blood loss.', 'TB needs airborne precautions: isolation room and N95 for the team (DOH NTP).'] },

    { id: 'op', bed: 3, name: 'Tomas Pangilinan', age: 38, sex: 'M', tri: 'Drooling, pinpoint pupils, sprayed pesticide · ESI 2',
      look: 'Drooling, tearing, sweating heavily, twitching muscles. His clothes smell of chemicals. His wife says he was spraying all morning.',
      v: 'HR 52 · BP 150/94 · RR 28 · SpO₂ 90% · GCS 13', v2: 'HR 38 · BP 80/50 · RR 36 · SpO₂ 78% · GCS 8', late: 'Foam at his mouth, twitching, barely responsive.',
      sk: '#b9835c', hr: '#1c1c1c', st: 'short', gw: '#b5ead7', pr: 'sweat', rank: 3,
      why: 'Slow heart rate, pinpoint pupils, drooling and sweating: organophosphate poisoning. Atropine saves him; decontamination protects the team.',
      S: [
        ['Tomas smells of chemicals and is drooling with pinpoint pupils. First action?', [
          ['Protect yourself, remove his clothes, give oxygen', 5, 'Contaminated clothes are bagged. Skin washed. SpO₂ rises.'],
          ['Rush in and start CPR-style care without gloves right away', -30, 'You get exposed too, and the team is at risk.'],
          ['Make him vomit to get the poison out', -45, 'He aspirates.'],
          ['Wait for the doctor before touching him', -25, 'Ten more minutes of toxin absorption.']]],
        ['HR 50, wheezing, salivating. What do you ask for?', [
          ['IV atropine titrated until chest is dry', 5, 'Dr. Villanueva orders atropine. Secretions dry up.'],
          ['IV hydration only; he looks dehydrated right away', -35, 'The poison keeps working; his airway fills with fluid.'],
          ['Ask for an antibiotic for the wheezing', -30, 'It is poison, not infection.'],
          ['Ask for a chest X-ray first', -22, 'It will not change the treatment.']]],
        ['Atropine ordered. How do you titrate?', [
          ['Give atropine in repeated doses until the chest is dry', 8, 'Chest clears; HR 90. Dose adjusted by effect.'],
          ['Give a single dose and wait', -30, 'Not enough; secretions return.'],
          ['Give a very large single dose to be safe', -35, 'Atropine toxicity: flushing, agitation, fever.'],
          ['Give a standard small dose by IV every hour as a first step', -25, 'Too slow to keep up.']]],
        ['He is stable. What is the follow-up?', [
          ['Admit to ICU; watch for the intermediate syndrome and weakness', 5, 'Weak neck and breathing muscles appear on day 2 and are caught early.'],
          ['Discharge once the atropine has worn off to start with', -40, 'Muscle weakness appears at home.'],
          ['Move him to the ward with routine checks while waiting', -25, 'Weakness is missed.'],
          ['Send him home with the pesticide label for the moment', -35, 'He relapses in the night.']]]],
      R: [
        ['You and Joy are getting headaches and feel dizzy.', [
          ['Step back, glove up, bag his clothes', 6, 'Exposure stopped. The team is safe.'],
          ['Keep working; the patient comes first', -30, 'You become patients too.'],
          ['Open all windows and continue as before', -22, 'Still exposed.'],
          ['Ignore it and finish the shift', -35, 'The whole team is affected.']]],
        ['He is still wheezing and drooling after an hour.', [
          ['Titrate more atropine per order until the chest is dry', 6, 'Secretions dry; breathing eases.'],
          ['Wait; the first dose should be enough', -30, 'The secretions return.'],
          ['Give a bronchodilator only', -22, 'It does not treat the cause.'],
          ['Suction him and call it done', -35, 'He drowns in secretions.']]],
        ['He is flushed, agitated, and burning with fever after atropine.', [
          ['Hold atropine, monitor', 6, 'The toxicity settles.'],
          ['Give more atropine to calm him', -45, 'It worsens.'],
          ['Restrain him and wait', -35, 'He overheats.'],
          ['Give paracetamol and a sedative', -30, 'The cause is untreated.']]]],
      end: ['Atropine, decontamination and early ICU care saved him. The team stayed healthy. He went home in a week.', 'He survived after a long ICU stay.', 'He survived after prolonged ventilation.', 'Tomas died of respiratory failure from the poison.'],
      deb: ['Organophosphate poisoning: protect staff (gloves, gown), decontaminate, atropine titrated until the chest is dry, oximes where available.', 'Do not induce vomiting.', 'Watch for the intermediate syndrome 24–96 hours later: neck and respiratory muscle weakness.'] },

    { id: 'sepsis', bed: 4, name: 'Benito "Lolo Ben" Alcantara', age: 78, sex: 'M', tri: 'Fever, confused, cough · ESI 2',
      look: 'Hot to the touch, confused, mumbling. His daughter says he has been coughing for three days and stopped eating.',
      v: 'HR 112 · BP 92/54 · RR 28 · SpO₂ 91% · T 39.2°', v2: 'HR 136 · BP 70/40 · RR 38 · SpO₂ 84% · T 39.8°', late: 'Cold mottled hands, barely rousable.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'short', gw: '#cfd8dc', pr: 'sweat', rank: 4,
      why: 'Confused, fast breathing and low BP: sepsis from pneumonia. The first hour decides everything.',
      S: [
        ['Lolo Ben: confused, T 39.2°, RR 28, BP 92/54. First action?', [
          ['Oxygen, two IVs, lactate and cultures, and call the doctor', 5, 'Lactate 4. Cultures drawn. Sepsis recognised.'],
          ['Give paracetamol and reassure his daughter', -30, 'The fever falls but the sepsis does not.'],
          ['Wait for the chest X-ray before doing anything in the meantime', -25, 'Thirty minutes lost.'],
          ['Give oral antibiotics from the ward stock', -35, 'He is confused and cannot swallow safely.']]],
        ['Lactate 4, BP 88/50. What do you ask the doctor for?', [
          ['30 mL/kg fluid bolus, repeat lactate', 5, 'Dr. Aquino orders them. BP begins to lift.'],
          ['Oral antibiotics and fluids to drink', -35, 'Too slow, too weak.'],
          ['Admit him and give antibiotics tomorrow morning', -45, 'He will not be alive by morning.'],
          ['Wait for the culture result before antibiotics', -30, 'Cultures take days.']]],
        ['Antibiotics are ordered. When and how do you give them?', [
          ['Give the first dose right now after cultures', 8, 'Dose in at minute 35.'],
          ['Wait until the pharmacy sends the full course', -30, 'Another hour passes.'],
          ['Give it at the next scheduled medication round', -35, 'Two hours lost.'],
          ['Hang the antibiotic but run it very slowly', -22, 'Peak levels are late.']]],
        ['Fluids are in; BP still 82/48. What now?', [
          ['Call the doctor for vasopressors', 5, 'Norepinephrine starts; BP 98/60.'],
          ['Give more fluids until the BP is normal', -30, 'Fluid overload; SpO₂ drops.'],
          ['Place him in a warm bed and recheck in an hour', -35, 'The shock deepens.'],
          ['Stop the fluids, the BP will recover', -25, 'It does not.']]]],
      R: [
        ['He is more confused and BP is 78/44. Act now.', [
          ['Start the fluid bolus, repeat vitals every 15 minutes', 6, 'BP improves.'],
          ['Give paracetamol and let him rest', -35, 'The shock continues.'],
          ['Keep him in the waiting area for observation at the bedside', -30, 'He deteriorates unwatched.'],
          ['Offer oral fluids', -25, 'He cannot drink safely.']]],
        ['No antibiotics yet, two hours in. His lactate is rising.', [
          ['Give IV antibiotics now, tell the doctor about the delay', 6, 'The antibiotics are in.'],
          ['Wait for the culture result for now', -35, 'Cultures take days.'],
          ['Give oral antibiotics right away', -30, 'Too slow.'],
          ['Wait for the day team as a first step', -40, 'He deteriorates.']]],
        ['He has pink frothy sputum and SpO₂ 82% after the fluids.', [
          ['Sit him up, call the doctor', 6, 'Breathing eases.'],
          ['Give more fluids to push the BP up', -40, 'Pulmonary edema worsens.'],
          ['Lay him flat to help circulation', -35, 'He drowns in secretions.'],
          ['Wait and see', -30, 'SpO₂ keeps falling.']]]],
      end: ['Antibiotics within the hour and pressors on time. He moved to the ICU and went home after two weeks.', 'He survived after a long ICU stay and rehabilitation.', 'He survived with kidney injury.', 'Lolo Ben died of septic shock.'],
      deb: ['Sepsis (Surviving Sepsis / PH adult sepsis guidance): lactate and cultures, 30 mL/kg fluid for hypotension or lactate ≥ 4, IV antibiotics within one hour.', 'Elderly patients present with confusion rather than a high fever.', 'If BP stays low after fluids, call for vasopressors; do not keep flooding the lungs.'] },

    { id: 'scald', bed: 5, name: 'Janna Faye Ramos (2 yrs)', age: 2, sex: 'F', tri: 'Scald burns, chest and arm, 30 min ago · ESI 3',
      look: 'Crying, red blistered skin on her chest and left arm. Her aunt says she pulled a pot of boiling water off the stove.',
      v: 'HR 150 · RR 34 · SpO₂ 98% · T 36.8° · 12 kg', v2: 'HR 184 · RR 48 · SpO₂ 94% · T 35.4° · 12 kg', late: 'Pale, cold and quiet. The burns look wetter.',
      sk: '#e0a982', hr: '#3a2a1a', st: 'baby', gw: '#ffd6a5', pr: 'tears', rank: 5,
      why: 'Stable now, but a scald over chest and arm may be 10%+ of her body. Cool the burn, give pain relief, and watch her fluids and temperature.',
      S: [
        ['Janna has scald burns on her chest and arm. First action?', [
          ['Cool the burn with running tap water for 20 minutes', 5, 'Pain eases. The burn depth is limited.'],
          ['Apply ice directly to the burns', -30, 'Ice deepens the injury and drops her temperature.'],
          ['Apply toothpaste or egg white to soothe it to start with', -35, 'Folk remedies trap heat and invite infection.'],
          ['Peel off the blisters and clean them', -25, 'Pain and infection risk.']]],
        ['Burn is about 12% of her body. What do you ask for?', [
          ['Pain relief, admission to the burns unit', 5, 'Dr. Aquino orders them.'],
          ['Paracetamol by mouth and go home', -40, 'She needs fluids and monitoring.'],
          ['Oral rehydration and a burn cream only while waiting', -30, 'Under-treated.'],
          ['Wait to see if the blisters burst', -22, 'Time lost.']]],
        ['Burn fluid ordered for a 12 kg child. How do you run it?', [
          ['Run it per order, hourly urine output and vitals', 8, 'Urine output 14 mL/hr. Steady.'],
          ['Run it all in one hour to catch up for the moment', -35, 'Overload; swelling in her airway.'],
          ['Hold the fluids until she urinates', -30, 'She will not urinate without fluids.'],
          ['Run at half the rate to be careful', -22, 'Under-resuscitated.']]],
        ['The aunt looks nervous and the story changes. What do you do?', [
          ['Document it neutrally and tell the doctor; child protection screening', 5, 'The doctor consults social services; Janna is safe.'],
          ['Say nothing; it is not your business', -25, 'A possible abuse case is missed.'],
          ['Confront the aunt in front of the child', -30, 'The aunt shuts down.'],
          ['Accuse the aunt and call the police yourself', -22, 'Without a process, it backfires.']]]],
      R: [
        ['She is shivering, cold, and her skin is blue-gray.', [
          ['Stop cooling, dry her, check temperature', 6, 'Temperature recovers.'],
          ['Keep cooling the burn for an hour', -35, 'Hypothermia deepens.'],
          ['Cover only the burn with a wet cloth', -30, 'She stays cold.'],
          ['Leave her undressed so the burn can breathe', -40, 'She becomes hypothermic.']]],
        ['She is pale with a fast pulse. No fluids started.', [
          ['Start IV fluid per burn formula', 6, 'HR falls; urine output returns.'],
          ['Give oral sips only', -30, 'She is already shocky.'],
          ['Wait for the burn team to arrive', -25, 'The fluid deficit grows.'],
          ['Give a large single bolus of D5', -35, 'Wrong fluid.']]],
        ['Her breathing is noisy and her voice is hoarse.', [
          ['Call the doctor now; airway watch, prepare to intubate', 6, 'The airway is secured early.'],
          ['Give fluids and observe for now', -40, 'Airway swelling progresses.'],
          ['Offer her a drink to soothe her throat in the meantime', -45, 'She aspirates.'],
          ['Wait; hoarseness will pass at the bedside', -35, 'The airway closes further.']]]],
      end: ['Cooled early, resuscitated well and admitted to the burns unit. She healed with minimal scarring.', 'She healed with some scarring after a longer stay.', 'She survived with deep burns needing skin grafts.', 'Janna died of burn shock.'],
      deb: ['Burns first aid: cool running water for 20 minutes, remove wet clothing, cover with a clean dry dressing. No ice, toothpaste or egg.', 'Pediatric burns above 10% need IV fluids by formula, hourly urine output and a burns unit.', 'Always screen inconsistent burn stories for non-accidental injury using hospital child protection policy (RA 7610, WCPU).'] },

    { id: 'labor', bed: 6, name: 'Jessa Mae Manalo', age: 22, sex: 'F', tri: 'ARRIVAL: in labor, the baby is crowning · ESI 1',
      look: 'Carried in by her husband. She is screaming that she needs to push. The baby\'s head is visible.',
      v: 'HR 112 · BP 128/80 · RR 28 · SpO₂ 98%', v2: 'HR 140 · BP 80/50 · RR 34 · SpO₂ 94%', late: 'She is pale and bleeding heavily; the baby is not crying.',
      sk: '#cf9f7b', hr: '#241a14', st: 'long', gw: '#ffb3c1', pr: 'cramp', rank: 0, arr: { t: 35, r: 1.8 },
      why: 'A surprise arrival: precipitous delivery in the ER. Two lives, no time. She leaps to the top of the list the moment she arrives.',
      S: [
        ['Jessa is crowning and pushing. First action?', [
          ['Call for help, glove up and guide a controlled delivery', 5, 'The head delivers slowly; no tears. Cord not around the neck.'],
          ['Tell her to hold it in and run for the OB', -45, 'Holding back causes injury to mother and baby.'],
          ['Pull on the baby\'s head to speed it up', -50, 'Brachial plexus injury risk.'],
          ['Take her to the delivery room across the hospital as a first step', -35, 'The baby is born on the stretcher in the hallway.']]],
        ['The baby is out, limp and not crying. What do you do?', [
          ['Dry, warm and start bag-mask ventilation', 5, 'First inflations: the baby grunts and pinks up.'],
          ['Slap the baby hard on the back', -45, 'Harm and no benefit.'],
          ['Wrap the baby and hand to the mother', -35, 'No breathing support. HR falling.'],
          ['Cut the cord first and take time to think', -25, 'Valuable seconds wasted.']]],
        ['Baby is breathing; the placenta is delivered. Mother is bleeding.', [
          ['Fundal massage, record the blood loss', 8, 'The uterus firms; bleeding slows.'],
          ['Wait for the bleeding to stop by itself', -45, 'Postpartum hemorrhage worsens.'],
          ['Pack the vagina with gauze and leave', -35, 'Hidden bleeding continues.'],
          ['Give an oral oxytocic tablet and wait', -25, 'Too slow.']]],
        ['Both are stable. What is the handover?', [
          ['SBAR to OB and pedia: delivery time', 5, 'Both are admitted safely.'],
          ['Tell them quickly that both are fine', -25, 'The APGAR and blood loss are not documented.'],
          ['Skip the newborn ID tag until later', -35, 'Risk of baby mix-up.'],
          ['Move the mother to the ward without a monitor', -30, 'Her bleeding is not watched.']]]],
      R: [
        ['The baby is stuck at the shoulders and the head is pulling back.', [
          ['Call for help, call OB', 6, 'The shoulders release.'],
          ['Pull harder on the head', -50, 'Nerve injury.'],
          ['Tell her to stop pushing and wait', -35, 'The baby is in distress.'],
          ['Push on the top of the uterus', -40, 'Worsens the impaction.']]],
        ['The baby has been limp for a minute, HR 60.', [
          ['Start bag-mask ventilation now', 6, 'HR rises above 100.'],
          ['Rub the baby with a towel and wait', -30, 'Not enough.'],
          ['Give oxygen at the nose only', -35, 'Not effective.'],
          ['Wait for the doctor', -40, 'The baby deteriorates.']]],
        ['The uterus is soft and she is bleeding heavily.', [
          ['Fundal massage, start IV', 6, 'Bleeding slows.'],
          ['Give oral fluids to keep up', -35, 'No effect.'],
          ['Ice pack on her abdomen', -30, 'Not enough.'],
          ['Wait for the OB to finish clinic', -40, 'She keeps bleeding.']]]],
      end: ['Mother and baby were both pink and safe. A clean delivery in the middle of the ER.', 'Both survived; the baby needed a short stay in NICU.', 'The mother needed a transfusion; the baby needed NICU.', 'Jessa and her baby did not survive the delivery.'],
      deb: ['Precipitous delivery: support the head, guide a controlled delivery, dry and warm the baby, and bag-mask if not breathing (NRP).', 'Shoulder dystocia: McRoberts position and suprapubic pressure, never pull the head.', 'Postpartum hemorrhage: uterine massage, oxytocin, IV access, record blood loss, and call OB.'] }
  ]
});
