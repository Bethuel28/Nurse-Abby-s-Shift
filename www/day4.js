/* Day 4 — Thursday: Brownout. One hospital-wide surprise. */
window.DAYDATA.push({
  id: 'day4', title: 'Day 4 — Thursday: Lights Out', aide: 'Brett',
  intro: 'Heat\'s been brutal all week and the ER is packed. Six beds. Please let nothing go wrong with the power.',
  events: [{ t: 50, drain: 10, text: '⚡ BROWNOUT! The generator takes eight minutes to kick in. Monitors on battery, everyone waiting loses ground.' }],
  cases: [
    { id: 'stab', bed: 1, name: 'Rodel Mercado', age: 24, sex: 'M', tri: 'Stab wound to the left chest, 20 min ago · ESI 2',
      look: 'Chatty and calm, with a small neat hole under his left nipple. He says he feels fine, just a little short of breath.',
      v: 'HR 104 · BP 118/76 · RR 24 · SpO₂ 94%', v2: 'HR 148 · BP 62/38 · RR 40 · SpO₂ 78%', late: 'Neck veins bulging, gasping, his windpipe pushed to one side.',
      sk: '#c8966f', hr: '#1c1c1c', st: 'short', gw: '#cfd8dc', pr: 'sweat', rank: 1,
      why: 'He looks fine, but a stab wound to the chest can become a tension pneumothorax in minutes. Calm today, dead in an hour.',
      S: [
        ['Rodel has a small stab wound in his left chest and is a bit breathless. First action?', [
          ['Expose the chest, check air entry, place a large IV', 5, 'Reduced breath sounds on the left; air under the skin.'],
          ['Seal the hole with a tight dressing taped on all four sides', -35, 'Air is trapped. He begins to deteriorate.'],
          ['Clean and suture the wound to stop air entering', -30, 'You close the door while the air is inside.'],
          ['Send him for an X-ray before examining him further', -25, 'The trip delays the exam while his lung collapses.']]],
        ['Absent breath sounds on the left, neck veins up, BP 84/50. What now?', [
          ['Call the doctor: tension pneumothorax', 5, 'Decompression is done in time. A hiss of air, then relief.'],
          ['Wait for the chest X-ray to confirm', -45, 'He deteriorates as the film is awaited.'],
          ['Give more oxygen and observe him closely', -30, 'Oxygen does not release trapped air.'],
          ['Give IV fluids wide open to lift the BP', -25, 'It helps briefly, but the air remains.']]],
        ['Needle decompression done. Chest tube ordered. What do you prepare?', [
          ['Chest tube tray, underwater seal drain, monitor', 8, 'The tube goes in smoothly. Air bubbles; he pinks up.'],
          ['Hook the tube straight to high-pressure wall suction', -22, 'Too much suction hurts the lung.'],
          ['Place the drain on the bed beside him', -35, 'Fluid flows back into his chest.'],
          ['Clamp the tube before moving him', -45, 'Air collects again. Tension returns.']]],
        ['Chest tube in. He goes to surgery. What is the handoff?', [
          ['Drain below chest level, SBAR to surgery', 5, 'The surgeons find a small lung laceration and repair it.'],
          ['Clamp it for the trip and unclamp it later', -45, 'Tension again in the elevator.'],
          ['Lift the drain onto the stretcher by his legs', -30, 'Backflow into the chest.'],
          ['Send him with a transporter and no monitor', -35, 'His SpO₂ falls unseen.']]]],
      R: [
        ['His breathing is much worse after you sealed the wound.', [
          ['Lift one corner of the dressing to let air out', 6, 'A hiss of air. Breathing improves.'],
          ['Tape the dressing tighter right away', -45, 'Pressure builds.'],
          ['Give a sedative to calm his breathing for now', -50, 'He tires and stops breathing.'],
          ['Wait and watch as a first step', -35, 'He gets worse.']]],
        ['BP 70/40, trachea shifted. The X-ray is still pending.', [
          ['Stop waiting: call the doctor to decompress now', 6, 'Decompression done. BP recovers.'],
          ['Wait for the X-ray result while waiting', -45, 'He is dying while the film loads.'],
          ['Give more IV fluids and wait to start with', -30, 'Fluids are a temporary fix.'],
          ['Lay him flat for comfort for the moment', -35, 'He deteriorates.']]],
        ['The drain stopped bubbling and he is short of breath after the clamp.', [
          ['Unclamp now, call the doctor', 6, 'Air escapes. He breathes easier.'],
          ['Keep it clamped for the transfer', -50, 'Tension again.'],
          ['Raise the drain to the stretcher level', -35, 'Backflow.'],
          ['Remove the tube', -45, 'Air returns.']]]],
      end: ['The tube went in, the lung re-expanded and surgery repaired the laceration. He went home in five days.', 'He survived after a long stay and a second chest tube.', 'He survived with a collapsed lung and an infection.', 'Rodel died of a tension pneumothorax.'],
      deb: ['Penetrating chest trauma: expect pneumothorax or hemothorax. Tension pneumothorax (absent breath sounds, tracheal deviation, hypotension) is a clinical diagnosis: decompress without waiting for X-ray.', 'Open chest wounds need a dressing taped on three sides, never four.', 'Chest drains stay below chest level and are never clamped for transport.'] },

    { id: 'heat', bed: 2, name: 'Ernesto "Ernie" Dumlao', age: 36, sex: 'M', tri: 'Collapsed at work in the heat, confused · ESI 2',
      look: 'Hot, flushed and dry. Confused, slurring. His co-workers carried him from a construction site.',
      v: 'HR 138 · BP 96/60 · RR 30 · SpO₂ 94% · T 41.2°', v2: 'HR 166 · BP 70/40 · RR 40 · SpO₂ 88% · T 42.4°', late: 'He is unresponsive and starting to seize.',
      sk: '#b9835c', hr: '#1c1c1c', st: 'short', gw: '#ffb3c1', pr: 'flush', rank: 2,
      why: 'Confused, hot and dry at 41°C: classic heatstroke. Brain and organs cook; every minute of cooling saves tissue.',
      S: [
        ['Ernie is confused, flushed, and T 41.2° after working in the heat. First action?', [
          ['Strip him, start cooling now: wet skin, fan, cold packs on neck and groin', 5, 'Temperature starts to fall within minutes.'],
          ['Give paracetamol and wait for the fever to come down', -35, 'Antipyretics do nothing for heatstroke.'],
          ['Cover him with a blanket to help him sweat', -50, 'He cooks faster.'],
          ['Give him a cold drink by mouth right away', -30, 'He is confused and aspirates.']]],
        ['T 40.5° after 10 minutes of cooling. What do you ask the doctor for?', [
          ['Continue aggressive cooling', 5, 'Glucose 62, CK high. Orders placed.'],
          ['An antipyretic and observation', -30, 'The temperature rebounds.'],
          ['Stop cooling now since he is a little better', -40, 'His temperature climbs again.'],
          ['Admit with oral fluids only', -25, 'Not enough; he is still confused.']]],
        ['Temperature is 38.5°. He starts to shiver hard. What do you do?', [
          ['Stop active cooling near 38.5°', 8, 'Temperature stabilises at 38. Shivering controlled.'],
          ['Keep cooling until he is 35°', -30, 'Overcooling causes hypothermia.'],
          ['Wrap him in blankets right away', -22, 'The temperature rises again.'],
          ['Give him a fever drug', -25, 'Not the right tool.']]],
        ['Dark urine, very high CK. What next?', [
          ['IV fluids to keep urine flowing', 5, 'Urine clears over the hours.'],
          ['Restrict fluids to protect the kidneys', -40, 'The kidneys get worse.'],
          ['Give NSAIDs for the muscle pain', -45, 'Kidneys under attack.'],
          ['Discharge when the temperature is normal', -35, 'Rhabdomyolysis is brewing.']]]],
      R: [
        ['He is hotter and more confused now.', [
          ['Aggressive cooling now: strip', 6, 'Temperature drops by a degree.'],
          ['Give paracetamol', -35, 'Useless in heatstroke.'],
          ['Cover him to stop shivering for now', -50, 'He cooks.'],
          ['Give oral water', -30, 'He aspirates.']]],
        ['T 41.5° and he starts to seize.', [
          ['Protect his airway, benzodiazepine', 6, 'The seizure stops; cooling goes on.'],
          ['Hold his limbs to stop the shaking in the meantime', -40, 'Injury.'],
          ['Give paracetamol and wait', -35, 'The seizure continues.'],
          ['Put a spoon in his mouth at the bedside', -45, 'Teeth and airway injury.']]],
        ['He is shivering hard and his temperature drops to 36°.', [
          ['Stop cooling, call the doctor', 6, 'Temperature recovers.'],
          ['Keep cooling to be safe', -40, 'Hypothermia.'],
          ['Leave him wet and fanned at the bedside', -35, 'He gets colder.'],
          ['Give a fever drug', -25, 'Not helpful.']]]],
      end: ['Cooled fast and watched closely, Ernie recovered completely and went home in three days.', 'He recovered after a stay in the ICU for kidney injury.', 'He survived with lasting kidney and brain effects.', 'Ernie died of heatstroke.'],
      deb: ['Heatstroke: core temp ≥ 40°C with altered mental status. Cool first, transport second: immersion or wet skin with fans and ice packs, IV fluids.', 'Antipyretics do not work. Stop active cooling near 38–38.5°C to avoid overshoot.', 'Watch for rhabdomyolysis and kidney injury: CK, dark urine, K⁺.'] },

    { id: 'chf', bed: 3, name: 'Elena "Aling Nena" Salvador', age: 66, sex: 'F', tri: 'Short of breath, cannot lie flat, swollen legs · ESI 2',
      look: 'Sitting bolt upright, pink frothy cough, ankles puffy. She ran out of her heart pills last week.',
      v: 'HR 118 · BP 180/104 · RR 34 · SpO₂ 86%', v2: 'HR 148 · BP 88/54 · RR 44 · SpO₂ 74%', late: 'She is drowning: frothy sputum, lips blue.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'bun', gw: '#c3b1e1', pr: 'cough', rank: 3,
      why: 'Orthopnea, pink frothy sputum and SpO₂ 86%: acute pulmonary edema. Treatable fast, but she cannot lie flat or wait.',
      S: [
        ['Aling Nena is gasping, sitting up, SpO₂ 86%, frothy sputum. First action?', [
          ['Keep her sitting up, give oxygen, place an IV', 5, 'SpO₂ rises to 91%. Monitor shows sinus tachycardia.'],
          ['Lay her flat for the ECG', -45, 'She cannot breathe lying flat.'],
          ['Give a big IV fluid bolus because she looks dry', -50, 'Her lungs fill faster.'],
          ['Give sedation to ease her breathing', -35, 'Her drive to breathe falls.']]],
        ['Crackles in both lungs, BP 180/104. What do you ask for?', [
          ['IV furosemide, ECG and her medication history', 5, 'Dr. Villanueva orders them.'],
          ['IV fluids and oral antibiotics', -35, 'It is not an infection.'],
          ['Oral furosemide tomorrow with a follow-up right away', -30, 'Too slow.'],
          ['IV beta blocker push', -40, 'Beta blockers can worsen acute failure.']]],
        ['Orders: IV furosemide and a nitro infusion. What do you check first?', [
          ['Check BP and whether she used sildenafil', 8, 'BP 168/98; no sildenafil. Nitro started low.'],
          ['Start nitro at the highest rate right away', -35, 'BP plummets.'],
          ['Give both as quick IV pushes', -40, 'Sudden hypotension.'],
          ['Skip the BP check; she is hypertensive', -25, 'Unnecessary risk.']]],
        ['SpO₂ 94%. She is much better. What about her missed meds?', [
          ['Admit, medicine refill plan with Social Service', 5, 'She goes to the ward with a plan to keep her pills.'],
          ['Discharge with advice to take her pills', -30, 'She cannot buy them. She is back in a week.'],
          ['Tell her to take extra pills next time to catch up', -35, 'Dangerous.'],
          ['Discharge now; she looks fine', -25, 'The fluid is still in her lungs.']]]],
      R: [
        ['She is gasping after lying flat for the ECG.', [
          ['Sit her up at once, call the doctor', 6, 'Breathing eases.'],
          ['Keep her flat to finish the ECG for now', -50, 'She worsens.'],
          ['Give a sedative', -40, 'Breathing slows.'],
          ['Wait for her to settle', -30, 'She does not.']]],
        ['After the fluid bolus, her lungs sound wet and SpO₂ is 79%.', [
          ['Stop the fluid, call for IV furosemide', 6, 'Furosemide begins. Urine flows.'],
          ['Slow the fluid but continue it as a first step', -30, 'Still adding to her lungs.'],
          ['Give a second bolus to be sure', -50, 'Pulmonary edema worsens.'],
          ['Give a sedative', -35, 'She slows.']]],
        ['BP dropped to 70/40 after the nitro.', [
          ['Stop the nitro, recheck BP and ECG', 6, 'BP recovers to 100/60.'],
          ['Increase the nitro; it works slowly', -50, 'BP crashes further.'],
          ['Give furosemide fast and continue the nitro', -40, 'Hypotension persists.'],
          ['Do nothing; BP will recover', -35, 'It does not.']]]],
      end: ['Diuresed, oxygenated and admitted with a refill plan. She went home on day 5 with her pills.', 'She recovered after a CCU stay.', 'She survived after non-invasive ventilation and a long stay.', 'Aling Nena died of acute pulmonary edema.'],
      deb: ['Acute pulmonary edema: sit upright, oxygen or NIV, IV loop diuretic, and nitrates if BP allows. Never lay her flat or give a fluid bolus.', 'Check BP before nitrates; avoid with sildenafil use.', 'Medication access is a safety issue: discharge planning should include how she will get her pills.'] },

    { id: 'hypo', bed: 4, name: 'Aurelio Tan', age: 70, sex: 'M', tri: 'Found confused, diabetic · ESI 2',
      look: 'Cold, sweaty, slurring and shaking. His son says he took his diabetes pills but did not eat all day.',
      v: 'HR 108 · BP 142/86 · RR 20 · SpO₂ 97% · Glu 38', v2: 'HR 62 · BP 100/60 · RR 10 · SpO₂ 92% · Glu 18', late: 'Unresponsive, jerking.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'short', gw: '#b5ead7', pr: 'sweat', rank: 4,
      why: 'A diabetic who is confused and sweaty has low sugar until proven otherwise. Treatment takes minutes, and the brain does not forgive delay.',
      S: [
        ['Aurelio is confused, sweaty and shaky. First action?', [
          ['Check his glucose; give IV dextrose per order if he cannot swallow', 5, 'Glucose 38. IV dextrose goes in.'],
          ['Give insulin to correct his diabetes as a first step', -50, 'His sugar falls even lower.'],
          ['Give nothing until the lab results are back right away', -35, 'He is seizing in half an hour.'],
          ['Give a big meal while he is confused to start with', -30, 'He chokes.']]],
        ['Glucose is 38 and he is drowsy. How do you give sugar?', [
          ['IV dextrose by slow push per order', 5, 'Glucose 110. He opens his eyes.'],
          ['Give honey by mouth while he is drowsy', -40, 'He aspirates.'],
          ['Tell him to chew sugar candies', -30, 'He cannot comply safely.'],
          ['Run D5 at a slow drip only', -22, 'Too slow to correct the emergency.']]],
        ['Glucose 90 after dextrose; he is alert. His son says he takes glibenclamide. What now?', [
          ['Keep him: the long-acting drug can drop sugar again', 8, 'Glucose dips to 62 at hour two and is corrected.'],
          ['Discharge now; the sugar is normal to start with', -45, 'He crashes again at home.'],
          ['Give his next dose of pills for the moment', -50, 'Another overdose.'],
          ['Recheck the sugar in six hours while waiting', -30, 'Too long a gap.']]],
        ['Discharge teaching: what do you tell him and his son?', [
          ['Meal timing with tablets, dose review', 5, 'They leave with a clear plan.'],
          ['Skip meals when the sugar is high', -40, 'Dangerous advice.'],
          ['Double the dose if the sugar is high while waiting', -45, 'Dangerous advice.'],
          ['Stop all medication', -30, 'His sugar will be uncontrolled.']]]],
      R: [
        ['He is drowsier and starting to jerk.', [
          ['IV dextrose now per order, recheck glucose', 6, 'The jerking stops.'],
          ['Give insulin to calm the metabolism for the moment', -50, 'Worse.'],
          ['Wait for lab confirmation', -35, 'He keeps seizing.'],
          ['Give honey by mouth', -40, 'He aspirates.']]],
        ['His glucose is falling again to 42, an hour later.', [
          ['Give dextrose per order, recheck hourly', 6, 'Glucose holds at 120.'],
          ['Give a snack and leave', -25, 'Not enough for a long-acting drug.'],
          ['Wait until morning', -40, 'He crashes overnight.'],
          ['Send him home with sweet drinks in the meantime', -40, 'Relapse at home.']]],
        ['He is sweaty and drowsy again; sugar 40 after his next tablets.', [
          ['Stop the tablets, admit for 24-hour monitoring', 6, 'Glucose recovers and holds.'],
          ['Give more tablets to raise his sugar in the meantime', -45, 'Tablets lower sugar.'],
          ['Give extra insulin', -50, 'Worse.'],
          ['Recheck in the morning', -40, 'Danger overnight.']]]],
      end: ['Sugar corrected, long-acting drug respected, and a clear plan taught. Home the next day, sharp as ever.', 'He recovered after a day in the high-dependency unit.', 'He survived with some memory problems.', 'Aurelio died of prolonged hypoglycemia.'],
      deb: ['Hypoglycemia: glucose < 70 mg/dL with symptoms. Oral sugar if alert and able to swallow; IV dextrose if not.', 'Long-acting sulfonylureas (glibenclamide) can cause repeated, prolonged hypoglycemia; observe and recheck.', 'Never give insulin or more tablets in hypoglycemia.'] },

    { id: 'miscar', bed: 5, name: 'Maribel Dizon', age: 29, sex: 'F', tri: 'Vaginal bleeding at 10 weeks · ESI 3',
      look: 'Pale, cramping, soaked through two pads in an hour. She is frightened and tearful.',
      v: 'HR 110 · BP 106/66 · RR 20 · SpO₂ 98%', v2: 'HR 138 · BP 80/46 · RR 30 · SpO₂ 95%', late: 'Gray, faint, a pool of blood beneath her.',
      sk: '#cf9f7b', hr: '#241a14', st: 'long', gw: '#ffd6a5', pr: 'tears', rank: 5,
      why: 'Heavy bleeding at 10 weeks with a fast pulse: incomplete miscarriage with ongoing hemorrhage. Stable now, but the bleeding does not stop by itself.',
      S: [
        ['Maribel has bleeding at 10 weeks, two pads soaked in an hour. First action?', [
          ['Count the pads, blood type; note any tissue passed', 5, 'HR 110, Rh negative, tissue noted. IV running.'],
          ['Tell her spotting is normal and discharge her', -45, 'She bleeds heavily at home.'],
          ['Do a deep vaginal exam yourself', -35, 'Unsafe and unnecessary.'],
          ['Ask her to sit in the waiting area; bleeding is common', -30, 'She bleeds more, unwatched.']]],
        ['Heavy ongoing bleeding with tissue at the cervix. What do you ask for?', [
          ['OB review and evacuation for incomplete abortion', 5, 'OB takes her for evacuation.'],
          ['Discharge with pain tablets right away', -40, 'She keeps bleeding.'],
          ['An antibiotic and review tomorrow at the bedside', -30, 'The bleeding continues.'],
          ['A transvaginal scan next week for now', -35, 'She may not make it a week.']]],
        ['Her blood type is Rh negative. What do you remember?', [
          ['Ask for anti-D immunoglobulin within 72 hours', 8, 'Anti-D is given. Future pregnancies protected.'],
          ['No need; this is only a miscarriage as a first step', -35, 'Sensitisation risk.'],
          ['Give anti-D only if she asks', -35, 'She does not know to ask.'],
          ['Skip Rh checks in early pregnancy', -30, 'Missed protection.']]],
        ['Support and discharge teaching: what do you say?', [
          ['Acknowledge her loss, explain warning signs, follow-up, and family planning', 5, 'She leaves with support and a plan.'],
          ['Tell her it was probably her fault', -40, 'Harmful and untrue.'],
          ['Say she can try again soon and move on', -22, 'Dismissive.'],
          ['Skip teaching; she needs rest', -30, 'She does not know when to return.']]]],
      R: [
        ['She is soaking pads, HR 128 and getting faint.', [
          ['Lay her flat, call OB STAT', 6, 'Blood arrives. She stabilises.'],
          ['Let her walk to the toilet', -40, 'She faints.'],
          ['Reassure her and send her home', -50, 'She collapses at home.'],
          ['Give oral fluids', -25, 'Not enough.']]],
        ['She is febrile at 39° with foul discharge after the delay.', [
          ['Sepsis steps: cultures', 6, 'She improves quickly.'],
          ['Give paracetamol', -30, 'The infection persists.'],
          ['Wait until morning', -40, 'She worsens.'],
          ['Discharge on oral antibiotics', -35, 'She returns in shock.']]],
        ['She is Rh negative and no anti-D was given.', [
          ['Tell OB now: anti-D within 72 hours', 6, 'Anti-D is given.'],
          ['Wait until her next visit', -30, 'She misses the window.'],
          ['Skip it', -35, 'Future risk.'],
          ['Give a vitamin shot instead to start with', -25, 'It does nothing.']]]],
      end: ['Evacuated safely with anti-D given and a kind goodbye. She recovered physically within days.', 'She recovered after a transfusion.', 'She survived with a severe infection.', 'Maribel bled to death.'],
      deb: ['Incomplete abortion: heavy bleeding, tissue at the os. Resuscitate, crossmatch, OB review for evacuation.', 'Give anti-D immunoglobulin within 72 hours to Rh-negative women with bleeding in pregnancy.', 'Compassionate communication matters: never blame the patient.'] },

    { id: 'febseiz', bed: 6, name: 'Ezekiel "Zeke" Lim (18 months)', age: 1, sex: 'M', tri: 'Seizure at home 10 min ago, high fever · ESI 3',
      look: 'Drowsy and fussy, hot. The shaking stopped before arrival. His mother is hysterical. His neck seems stiff when you lift his head.',
      v: 'HR 162 · RR 38 · SpO₂ 97% · T 39.8° · 11 kg', v2: 'HR 186 · RR 50 · SpO₂ 90% · T 40.6° · 11 kg', late: 'Lethargic with a bulging fontanelle and a rash.',
      sk: '#e0a982', hr: '#3a2a1a', st: 'baby', gw: '#b5ead7', pr: 'flush', rank: 6,
      why: 'Looks like a simple febrile seizure, but a stiff neck and drowsiness in a toddler mean meningitis until proven otherwise.',
      S: [
        ['Zeke had a seizure and has a high fever. First action?', [
          ['Side-lying, temperature; watch for another seizure', 5, 'Glucose normal. Airway clear. Observed closely.'],
          ['Put something in his mouth to prevent tongue biting', -35, 'It risks choking and injury.'],
          ['Give a bottle feed to calm him', -30, 'He chokes on the feed.'],
          ['Wake him repeatedly to check he is OK', -22, 'Stress and fever rise.']]],
        ['Stiff neck, bulging fontanelle, drowsy. What do you ask for?', [
          ['Suspect meningitis: blood culture', 5, 'Dr. Aquino orders cultures and IV ceftriaxone.'],
          ['Call it a simple febrile seizure and discharge', -50, 'He deteriorates at home.'],
          ['Wait for the LP result before giving antibiotics', -35, 'Delay worsens outcome.'],
          ['Oral paracetamol and observe', -25, 'Underestimated.']]],
        ['Ceftriaxone is ordered. He weighs 11 kg. What do you do?', [
          ['Verify the mg/kg dose with the doctor', 8, 'The dose is confirmed and given on time.'],
          ['Give the adult dose from the ward stock', -45, 'Ten times the safe dose.'],
          ['Give half and complete it later', -25, 'Under-dosed.'],
          ['Skip the antibiotic until the LP is done', -35, 'Treatment delayed.']]],
        ['Mom wants to go home "because he is better".', [
          ['Explain the meningitis risk', 5, 'She stays. Social Service helps with the stay.'],
          ['Let her sign out against advice', -40, 'He worsens at home.'],
          ['Tell her to come back tomorrow', -35, 'He deteriorates overnight.'],
          ['Give oral antibiotics and send him home', -45, 'Inadequate.']]]],
      R: [
        ['He seizes again, lips blue, three minutes now.', [
          ['Airway, side-lying, call doctor', 6, 'The seizure stops.'],
          ['Put a spoon in his mouth', -45, 'Injury.'],
          ['Hold him down', -35, 'Injury.'],
          ['Wait for it to pass', -30, 'It does not.']]],
        ['He is drowsy, the rash is spreading, and his hands are cold.', [
          ['Treat as meningococcal sepsis: IV antibiotics', 6, 'He responds to treatment.'],
          ['Give paracetamol and observe while waiting', -35, 'Sepsis progresses.'],
          ['Wait for the CT in the meantime', -40, 'Delay is dangerous.'],
          ['Send him to the ward for the moment', -30, 'He crashes unmonitored.']]],
        ['The pharmacist says the ordered dose is ten times too high.', [
          ['Hold the drug, correct it and report the near-miss', 6, 'The dose is corrected before reaching him.'],
          ['Give half of it right away', -45, 'Still an overdose.'],
          ['Give it; the doctor knows best at the bedside', -50, 'Overdose.'],
          ['Throw it away and say nothing for now', -30, 'The error goes unreported.']]]],
      end: ['Meningitis was caught early; antibiotics were on time. He went home in ten days, playing again.', 'He survived after a long stay with some hearing concern.', 'He survived with neurological deficits.', 'Zeke died of bacterial meningitis.'],
      deb: ['Fever with a seizure plus a stiff neck, bulging fontanelle or lethargy is meningitis until proven otherwise: cultures, IV antibiotics, LP when safe.', 'Never delay antibiotics for an LP or imaging.', 'Pediatric doses are mg/kg: always verify with the doctor and pharmacist.'] }
  ]
});
