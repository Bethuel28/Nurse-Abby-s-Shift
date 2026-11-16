/* Day 2 — Tuesday: Two at Once. Compact case format; days.js builds it. */
window.DAYDATA.push({
  id: 'day2', title: 'Day 2 — Tuesday: Two Ambulances at Once', aide: 'Brett',
  intro: 'Two ambulances just pulled in together, and the trolley bay is full. Let\'s go!',
  events: [{ t: 40, drain: 8, text: '🚨 CODE BLUE in resus! You are pulled away for ten minutes. Everyone waiting gets worse.' }],
  cases: [
    { id: 'pe', bed: 1, name: 'Rowena Dela Peña', age: 28, sex: 'F', tri: '28 weeks pregnant, headache · ESI 2',
      look: 'Smiling. She says it is only a headache and blurry vision. Her hands and face are puffy; her mother looks worried.',
      v: 'HR 96 · BP 168/112 · RR 20 · SpO₂ 97%', v2: 'HR 124 · BP 210/130 · RR 30 · SpO₂ 90%', late: 'She is seizing on the stretcher, eyes rolled back.',
      sk: '#d9a98a', hr: '#241a14', st: 'long', gw: '#ffb3c1', pr: 'tears', rank: 1,
      why: 'She looks fine, but BP 168/112 with headache and blurry vision at 28 weeks is severe preeclampsia. One seizure away from eclampsia.',
      S: [
        ['Rowena, 28 weeks pregnant, headache, blurry vision, BP 168/112. First action?', [
          ['Repeat BP, check reflexes, urine protein, fetal heart', 5, 'Severe-range BP, 3+ protein, brisk reflexes. Severe preeclampsia.'],
          ['Give paracetamol for the headache and observe her', -25, 'The headache eases a little. The pressure does not.'],
          ['Tell her swelling is normal in pregnancy and discharge', -50, 'She goes home with a BP of 168/112.'],
          ['Send her to the OB clinic across the hospital to wait', -30, 'Fifteen minutes unmonitored; she nearly seizes in the corridor.']]],
        ['Severe-range BP with symptoms. How do you escalate?', [
          ['Call OB now: severe preeclampsia, ask for MgSO4 and BP control', 5, 'Dr. Aquino orders a MgSO4 load and IV labetalol.'],
          ['Page OB for a routine review when they are free right away', -20, 'The OB resident is in a delivery. Nobody comes.'],
          ['Give nifedipine under her tongue to drop the BP fast for now', -35, 'BP plunges, and the baby\'s heart rate falls with it.'],
          ['Wait for the lab results before calling anyone as a first step', -30, 'Half an hour passes while her pressure climbs.']]],
        ['MgSO4 4 g IV over 20 min, then 1 g/hr. What do you check?', [
          ['Reflexes and urine output before and during', 8, 'Reflexes present, RR 18, urine 40 mL/hr. Safe to run.'],
          ['Run it as a fast IV push to get it in quickly', -50, 'Magnesium toxicity: RR falls to 8 and reflexes vanish.'],
          ['Check reflexes only; skip the urine output chart', -18, 'No urine record; her magnesium level creeps up.'],
          ['Skip checks; the doctor is nearby anyway', -35, 'RR slows unnoticed until she is drowsy.']]],
        ['BP 150/100, MgSO4 running. Labor is starting. What next?', [
          ['Seizure precautions, calcium gluconate ready, move to labor room', 5, 'Safely handed to the labor team with an antidote at the bedside.'],
          ['Stop the MgSO4 once her BP looks better on the monitor to start with', -40, 'Seizure risk rises again within the hour.'],
          ['Move her to the ward with checks every four hours', -25, 'Nobody is watching when her pressure rebounds.'],
          ['Let her walk to the labor room with her mother', -30, 'She gets a headache and nearly collapses in the hall.']]]],
      R: [
        ['Her headache is worse and her hands are twitching. What now?', [
          ['Call for help, start MgSO4 per OB', 6, 'MgSO4 is in. The twitching settles.'],
          ['Give paracetamol and a cold compress', -30, 'The twitching turns into a seizure.'],
          ['Hold her arms down to stop the twitching', -40, 'She is hurt and seizes anyway.'],
          ['Give nifedipine under the tongue to calm it', -35, 'BP crashes; the baby\'s heart rate drops.']]],
        ['BP 190/120 and she is vomiting. Act now.', [
          ['Page OB STAT, IV labetalol per order, left side-lying', 6, 'BP falls to 170/105, gradually. The baby is stable.'],
          ['Give more IV fluids to protect her kidneys while waiting', -35, 'Fluid in the lungs; SpO₂ drops to 91%.'],
          ['Wait for the OB resident to finish clinic', -25, 'Another twenty minutes of dangerous pressure.'],
          ['Give oral nifedipine with a glass of water', -25, 'She vomits it back up. No effect.']]],
        ['She is drowsy, RR 9, and has no knee reflexes. Act now.', [
          ['Stop MgSO4, give calcium gluconate, support breathing', 6, 'RR climbs back to 14. A close call.'],
          ['Slow the drip and recheck in 30 minutes', -35, 'Her breathing keeps slowing.'],
          ['Give naloxone for the slow breathing', -30, 'It does nothing: this is magnesium, not an opioid.'],
          ['Wake her with a sternal rub and continue the drip for the moment', -45, 'She stops breathing on the next hour\'s dose.']]]],
      end: ['A healthy baby was delivered by cesarean with no seizure. Magnesium and BP control did their job.', 'She had one seizure but both mother and baby survived the ICU stay.', 'The mother survived an eclamptic seizure; the baby needed NICU.', 'Rowena had a seizure and an intracranial bleed. She did not survive.'],
      deb: ['Severe preeclampsia: BP ≥ 160/110 with symptoms or proteinuria. MgSO4 prevents and treats eclamptic seizures; control severe-range BP with IV labetalol, hydralazine or oral nifedipine (POGS/DOH maternal care guidance).', 'MgSO4 safety: knee reflexes present, RR ≥ 12, urine ≥ 30 mL/hr, and calcium gluconate at the bedside.', 'Hypertensive disorders of pregnancy are among the leading causes of maternal death in the Philippines. Never send home severe-range BP.'] },

    { id: 'asthma', bed: 2, name: 'Migo Reyes', age: 9, sex: 'M', tri: 'Wheezing, cannot finish sentences · ESI 2',
      look: 'Tripoding, sucking in at the ribs, one-word answers. His inhaler is empty: his mother could not afford a refill.',
      v: 'HR 148 · RR 42 · SpO₂ 88% · T 37.1°', v2: 'HR 172 · RR 58 · SpO₂ 78% · T 37.1°', late: 'He has gone quiet. The wheeze has stopped, which is worse.',
      sk: '#d9a98a', hr: '#2b2118', st: 'short', gw: '#ffd6a5', pr: 'cough', rank: 2,
      why: 'One-word answers, SpO₂ 88% and tripoding. A child who tires out stops wheezing and then stops breathing.',
      S: [
        ['Migo: tripoding, one-word answers, SpO₂ 88%. First action?', [
          ['Sit him upright, give oxygen, start salbutamol nebs', 5, 'SpO₂ rises to 92%. The wheeze opens up.'],
          ['Give a calming sedative so he can rest', -50, 'He drifts off and his breathing slows.'],
          ['Lay him flat and start an IV before anything else', -25, 'Lying flat makes his breathing worse.'],
          ['Ask Mom for the full history and consent forms first', -22, 'Ten minutes pass; he tires.']]],
        ['SpO₂ 93% after three nebs, still wheezy. What does your SBAR ask for?', [
          ['Severe asthma: request systemic steroid and ipratropium', 5, 'Dr. Aquino orders prednisolone and ipratropium.'],
          ['Report the wheeze and ask to discharge on an inhaler in the meantime', -40, 'He relapses in the waiting area.'],
          ['Ask for IV antibiotics for the chest infection', -25, 'It is asthma, not pneumonia. Time is wasted.'],
          ['Ask for a chest X-ray before any more treatment', -20, 'An X-ray will not change what he needs now.']]],
        ['Prednisolone 1 mg/kg ordered; he weighs 28 kg. Which dose?', [
          ['28 mg orally (1 mg/kg)', 8, 'The steroid starts working within hours.'],
          ['280 mg, the adult dose from the cabinet', -30, 'Ten times the dose. He is monitored for a day.'],
          ['5 mg, a small dose to be safe', -18, 'Under-dosed; wheeze comes back.'],
          ['Hold the steroid until his breathing settles', -25, 'Steroids need time to work; the delay hurts.']]],
        ['SpO₂ 96%. Mom wants to leave: "Wala po kaming pambili ng inhaler."', [
          ['Observe 4–6 hours, ask Social Service for meds', 5, 'He goes home with a spacer and a three-day supply.'],
          ['Discharge now with a prescription she cannot fill', -30, 'He is back the next night, worse.'],
          ['Tell her to buy it at the pharmacy tomorrow', -35, 'No inhaler tonight. He relapses by midnight.'],
          ['Give her an old expired inhaler from the drawer', -45, 'It is empty. He relapses at home.']]]],
      R: [
        ['He is exhausted, with a silent chest and SpO₂ 82%. Act now.', [
          ['Call the doctor, high-flow O₂, IV access', 6, 'The chest opens. SpO₂ climbs to 90%.'],
          ['Let him sleep to recover his strength at the bedside', -45, 'His breathing slows further.'],
          ['Give oral prednisolone and wait', -30, 'Oral steroids take hours. He does not have hours.'],
          ['Lay him flat to rest his breathing', -35, 'SpO₂ falls to 78%.']]],
        ['The doctor wants to discharge, but he is still wheezing.', [
          ['Recheck SpO₂ and effort; tell the doctor he is not ready', 6, 'The doctor keeps him for observation.'],
          ['Print the discharge papers as ordered as a first step', -35, 'He is back within hours.'],
          ['Discharge but tell Mom to return if worse for now', -30, 'She cannot afford the trip back.'],
          ['Ask the doctor to see him again tomorrow right away', -25, 'He does not have until tomorrow.']]],
        ['He looks drowsy and shaky after the wrong dose.', [
          ['Tell the doctor, put him on the ECG', 6, 'Glucose is high but safe. He is monitored.'],
          ['Give extra water and let him sleep', -30, 'The overdose goes unmonitored.'],
          ['Repeat the dose later to be safe', -45, 'A second overdose.'],
          ['Skip charting it so Mom is not scared', -40, 'The error goes unreported; the next shift misses it.']]]],
      end: ['He went home on day 2 with a spacer, a steroid course and a follow-up. Mom cried with relief.', 'He recovered after a longer observation stay.', 'He survived after a PICU admission.', 'Migo\'s breathing stopped and could not be restored.'],
      deb: ['Acute severe asthma (PH asthma guideline): oxygen to keep SpO₂ ≥ 94%, repeated short-acting β₂-agonist nebs, early systemic steroid, ipratropium in severe cases.', 'A silent chest in a child with severe distress is pre-arrest, not improvement.', 'Cost is a safety issue: discharge planning must include how the child will actually get the inhaler.'] },

    { id: 'dka', bed: 3, name: 'Carlo Bautista', age: 19, sex: 'M', tri: 'Vomiting, deep fast breathing, very thirsty · ESI 2',
      look: 'Fruity breath, deep sighing breaths, dry lips. Three days of thirst and weight loss. Nobody knew he had diabetes.',
      v: 'HR 126 · BP 98/60 · RR 32 · SpO₂ 98% · Glu 480', v2: 'HR 152 · BP 76/42 · RR 40 · SpO₂ 98% · Glu 560', late: 'He is drowsy and barely answering. His breathing is slow and deep.',
      sk: '#c8966f', hr: '#1c1c1c', st: 'short', gw: '#cfd8dc', pr: 'sweat', rank: 3,
      why: 'Kussmaul breathing and a sugar of 480: new-onset DKA. Dehydrated and acidotic, but he has hours, not minutes.',
      S: [
        ['Carlo: deep sighing breaths, fruity breath, sugar 480. First action?', [
          ['ABCs, IV access, ketones and electrolytes', 5, 'pH 7.1, ketones high, K 3.0. Moderate-to-severe DKA.'],
          ['Give insulin SC right away for the high sugar', -30, 'Without fluids and potassium, he gets worse.'],
          ['Give juice and oral fluids to rehydrate', -45, 'Sugar jumps and he vomits.'],
          ['Start D5 water to rehydrate him gently', -35, 'More sugar and no help for the acidosis.']]],
        ['pH 7.1, K 3.0, glucose 520. Orders: NSS bolus then insulin. What do you check?', [
          ['Confirm potassium is replaced before insulin starts', 5, 'K 3.0: insulin held until potassium is on the way.'],
          ['Start the insulin infusion first, it is the priority', -45, 'Potassium crashes; his heart goes into ectopics.'],
          ['Skip the K check; fluids first, then insulin', -30, 'His potassium is a hidden hazard.'],
          ['Give insulin as an IV bolus to drop sugar fast', -35, 'Sugar drops too fast; brain swelling risk.']]],
        ['Insulin is running. Glucose 240 after three hours. What now?', [
          ['Add dextrose to the fluids; keep insulin until ketones clear', 8, 'Sugar steadies, ketones clearing. Gap closing.'],
          ['Stop insulin since the sugar is nearly normal to start with', -40, 'Ketones come back; the acidosis returns.'],
          ['Keep NSS only and halve the insulin for the moment', -22, 'Slow progress, with a risk of relapse.'],
          ['Give bicarbonate to fix the pH quickly while waiting', -30, 'Bicarbonate can worsen potassium and brain risk.']]],
        ['DKA is resolving. What do you watch for in the next hours?', [
          ['Hourly glucose and neuro checks', 5, 'Stable overnight, moved to the ward.'],
          ['Glucose every eight hours is enough now', -25, 'A low sugar goes unnoticed.'],
          ['Discharge once the sugar is normal', -40, 'Ketones return and he rebounds into DKA.'],
          ['Switch to oral meds and send him home', -30, 'Type 1 needs insulin, not tablets.']]]],
      R: [
        ['He is vomiting more, BP 80/40, breathing slower. Act now.', [
          ['Isotonic bolus per order, call doctor', 6, 'BP responds. He is more alert.'],
          ['Give insulin SC and juice', -45, 'Sugar spikes; shock deepens.'],
          ['Offer crackers to settle his stomach in the meantime', -30, 'He vomits and aspirates a little.'],
          ['Wait and recheck in an hour', -35, 'He drifts toward coma.']]],
        ['The ECG shows flat T waves and ectopics after insulin.', [
          ['Stop insulin, replace potassium', 6, 'Potassium on the way. The ectopics settle.'],
          ['Halve the insulin and recheck later', -30, 'The ectopics continue.'],
          ['Continue insulin and give him a banana', -40, 'Not enough potassium, not fast enough.'],
          ['Give more fluids with no ECG monitoring', -25, 'Nobody sees the next arrhythmia.']]],
        ['Glucose has crashed to 54; he is shaky and sweaty.', [
          ['Give IV dextrose per order, recheck glucose in 15 minutes', 6, 'Glucose 110. He steadies.'],
          ['Give a sugary drink and stop checking', -30, 'He vomits it. Sugar drops again.'],
          ['Hold all fluids until the doctor arrives', -35, 'Sugar falls to 38.'],
          ['Increase the insulin since sugar was high before at the bedside', -50, 'A seizure from hypoglycemia.']]]],
      end: ['He was moved to the ward with a clean slate, learned to inject, and went home on day 3 with a plan.', 'He recovered after a stay in the high-dependency unit.', 'He survived DKA with brain swelling that needed ICU care.', 'Carlo died of cardiac arrhythmia from low potassium and acidosis.'],
      deb: ['DKA (PH diabetes guidance): fluids first, check potassium before insulin, insulin infusion, then dextrose when glucose falls to ~250.', 'Never start insulin with K < 3.3 mmol/L; replace potassium first.', 'Watch for cerebral edema in young patients: new headache, confusion, slow pulse.'] },

    { id: 'appy', bed: 4, name: 'Paolo Navarro', age: 16, sex: 'M', tri: 'Right-sided belly pain, fever · ESI 3',
      look: 'Walking bent over, guarding his right lower belly. He says he vomited twice and does not want to eat.',
      v: 'HR 108 · BP 112/70 · RR 20 · SpO₂ 99% · T 38.4°', v2: 'HR 134 · BP 88/50 · RR 28 · SpO₂ 96% · T 39.8°', late: 'He is lying still and gray. His belly is board-hard.',
      sk: '#d2a07c', hr: '#2a2a2a', st: 'short', gw: '#b5ead7', pr: 'cramp', rank: 4,
      why: 'Right lower belly pain with fever in a teen is appendicitis until proven otherwise. A rupture can turn a surgical case into sepsis.',
      S: [
        ['Paolo: right lower belly pain, fever 38.4°. First action?', [
          ['Full vitals, examine the abdomen', 5, 'Tender at McBurney\'s point, rebound present.'],
          ['Give a laxative to help him pass stool', -45, 'Pain worsens badly; the appendix is straining.'],
          ['Give him a meal; he looks hungry', -35, 'He vomits and the pain spikes.'],
          ['Give mefenamic acid and send him home', -30, 'The pain is masked. He deteriorates at home.']]],
        ['The pain suddenly stopped, but he looks worse. HR 126. What now?', [
          ['Treat as a possible rupture: call surgery now, IV fluids', 5, 'Surgery takes him straight to the OR queue.'],
          ['Cancel the surgery call; the pain is gone so he is better', -45, 'The sudden relief was a perforation.'],
          ['Give more painkillers and observe him', -25, 'He quietly slides into sepsis.'],
          ['Wait until morning for the ultrasound', -35, 'Peritonitis spreads overnight.']]],
        ['Surgery wants IV ceftriaxone and metronidazole. What do you confirm?', [
          ['Check allergies, then give antibiotics on time as ordered', 5, 'No allergy history. The first dose goes in on time.'],
          ['Give the antibiotic without asking about allergies for now', -35, 'He breaks out in hives mid-infusion.'],
          ['Wait until he reaches the ward to start', -22, 'Another hour without antibiotics.'],
          ['Give oral antibiotics instead', -25, 'Absorption is poor and the dose is too low.']]],
        ['He is 16 and alone. How do you handle consent for surgery?', [
          ['Call his parents; if unreachable, follow emergency consent policy', 5, 'Mom answers: consent is given by phone with a witness.'],
          ['Let him sign himself since he is nearly an adult', -30, 'The surgeon refuses; time is lost.'],
          ['Skip consent entirely because it is an emergency', -25, 'The OR holds him for paperwork anyway.'],
          ['Hold the OR until a parent arrives, however long', -35, 'Two more hours. The abscess grows.']]]],
      R: [
        ['He is writhing, belly rigid, HR 130. Act now.', [
          ['Keep him NPO, call surgery STAT', 6, 'Surgery is on the way.'],
          ['Give an enema to relieve the pain', -50, 'The appendix perforates fully.'],
          ['Allow sips of water to soothe him', -25, 'He vomits, adding to the problem.'],
          ['Apply a hot pack to his belly', -35, 'Heat can worsen inflammation.']]],
        ['He is 39.8° and hypotensive after the delay.', [
          ['Start sepsis steps: fluids, call doctor', 6, 'BP steadies after the bolus.'],
          ['Give paracetamol and recheck in an hour right away', -30, 'The fever drops but not the infection.'],
          ['Put him in a warm bed and let him sleep', -35, 'He worsens quietly.'],
          ['Start oral fluids at the bedside', -22, 'He vomits; no help for the shock.']]],
        ['He says his throat is tight and he is itchy all over.', [
          ['Stop the drug, IM epinephrine per order', 6, 'Hives fade and breathing eases.'],
          ['Slow the drip and watch him', -40, 'His airway swells further.'],
          ['Give an oral antihistamine and continue the infusion', -35, 'Not enough, and the drug keeps going in.'],
          ['Reassure him that it is just nerves', -45, 'Throat swelling progresses.']]]],
      end: ['A laparoscopic appendectomy went smoothly. Antibiotics were on time and he went home on day 2.', 'He had an open surgery with a longer stay.', 'He survived with a pelvic abscess and a long course of antibiotics.', 'Paolo died of overwhelming sepsis after a ruptured appendix.'],
      deb: ['Appendicitis: RLQ pain, fever, vomiting. Sudden relief of pain can signal perforation, not recovery. Keep NPO, give antibiotics on time, and call surgery early.', 'Laxatives and enemas are contraindicated in suspected appendicitis.', 'Minors need parent/guardian consent; emergency policy applies when life is at risk and guardians cannot be reached.'] },

    { id: 'lepto', bed: 5, name: 'Ramil Sison', age: 44, sex: 'M', tri: 'Fever, calf pain, red eyes after floods · ESI 3',
      look: 'Yellowed eyes, tender calves, peeing very little since yesterday. He waded through floodwater last week.',
      v: 'HR 104 · BP 108/68 · RR 22 · SpO₂ 96% · T 38.9°', v2: 'HR 130 · BP 80/48 · RR 34 · SpO₂ 89% · T 39.6°', late: 'He is shaking, jaundiced, and coughing pink froth.',
      sk: '#c8966f', hr: '#2a2a2a', st: 'short', gw: '#c3b1e1', pr: 'sweat', rank: 5,
      why: 'Fever, calf pain and red eyes after floodwater: severe leptospirosis with kidney failure. Dangerous, but slower than the others.',
      S: [
        ['Ramil waded through floodwater last week: fever, calf pain, red eyes. First action?', [
          ['Ask about the flood exposure; vitals, creatinine', 5, 'Creatinine is 3.2 and he is passing very little urine.'],
          ['Give mefenamic acid for the calf pain', -35, 'NSAIDs on a failing kidney. Creatinine climbs.'],
          ['Send him home with paracetamol and fluids', -30, 'He returns twelve hours later, sicker.'],
          ['Treat it as dengue with wide-open IV fluids for now', -30, 'Fluid builds up; his lungs get wet.']]],
        ['Creatinine 3.2, jaundice, very low urine. What do you ask the doctor for?', [
          ['Severe leptospirosis: IV ceftriaxone or penicillin', 5, 'Dr. Villanueva admits him and starts IV antibiotics.'],
          ['Oral doxycycline and discharge with follow-up', -35, 'Oral antibiotics are for mild disease only.'],
          ['Wait for the lab confirmation before any antibiotic', -30, 'Confirmation takes days. He does not have days.'],
          ['IV ciprofloxacin only', -22, 'Not the recommended regimen for severe disease.']]],
        ['Urine 80 mL in 8 hours, K 6.1, crackles. What now?', [
          ['Call the doctor: hyperkalemia ECG', 8, 'Nephrology arranges urgent dialysis.'],
          ['Run more fluids to flush the kidneys', -45, 'Pulmonary edema develops.'],
          ['Give potassium-rich juice for his cramps', -50, 'K climbs to 7.2. Dangerous rhythm.'],
          ['Give furosemide yourself', -35, 'Without an order or a diagnosis, it is risky.']]],
        ['Dialysis arranged; ICU transfer. What is the key handoff?', [
          ['SBAR: lepto, AKI, last K, urine chart, allergies', 5, 'The ICU team knows exactly where to start.'],
          ['Tell them only that he is stable', -25, 'Crucial details are missing.'],
          ['Send him up without a monitor; it is a short trip', -35, 'His rhythm changes in the elevator.'],
          ['Delay the transfer until your charting is done', -20, 'Fifteen minutes lost.']]]],
      R: [
        ['He is shaking, 39.6°, with falling pressure. Act now.', [
          ['Sepsis steps: fluids per order', 6, 'BP stabilises with the first bolus.'],
          ['Give mefenamic acid for the fever', -40, 'The NSAID adds to the kidney injury.'],
          ['Cover him with blankets for the chills', -35, 'The fever rises and sepsis goes unaddressed.'],
          ['Send him home for rest', -45, 'He collapses at home.']]],
        ['No urine for six hours and he is swelling up.', [
          ['Strict I&O, call nephrology urgently', 6, 'Dialysis is scheduled within the hour.'],
          ['Increase IV fluids to flush him out right away', -40, 'Pulmonary edema.'],
          ['Give ibuprofen for the leg pain', -45, 'The kidneys get worse.'],
          ['Wait for morning labs to decide', -30, 'Another twelve hours without a plan.']]],
        ['The ECG shows peaked T waves; K is 6.8.', [
          ['Call the doctor now; IV calcium and insulin-dextrose per order', 6, 'The T waves flatten. Dialysis is arranged.'],
          ['Give a banana for the cramps while waiting', -50, 'More potassium. His rhythm worsens.'],
          ['Repeat the potassium in the morning to start with', -40, 'He may not make it to morning.'],
          ['Give IV fluids with potassium in them as a first step', -50, 'Potassium climbs further.']]]],
      end: ['Dialysis came just in time. He went home in nine days with recovering kidneys and a lesson about floodwater.', 'He survived after a long ICU stay and temporary dialysis.', 'He survived with permanent kidney damage.', 'Ramil died of kidney failure and a dangerous potassium level.'],
      deb: ['Leptospirosis (DOH guidelines): mild disease gets oral doxycycline; severe disease (jaundice, AKI, bleeding) gets IV penicillin or ceftriaxone and admission.', 'Avoid NSAIDs in AKI. Watch for hyperkalemia: peaked T waves, K ≥ 6.', 'After floods, any fever with calf pain and red eyes is leptospirosis until proven otherwise.'] },

    { id: 'dog', bed: 6, name: 'Lorna Ocampo', age: 35, sex: 'F', tri: 'Dog bite on the right hand, 1 hour ago · ESI 4',
      look: 'Calm, holding a bloody towel on her right hand. A neighbor\'s stray dog bit her and ran off.',
      v: 'HR 82 · BP 118/76 · RR 16 · SpO₂ 99%', v2: 'HR 98 · BP 112/72 · RR 20 · SpO₂ 98%', late: 'The hand is red and swollen. She looks feverish and frightened.',
      sk: '#d9a98a', hr: '#2b2118', st: 'bun', gw: '#ffd6a5', pr: 'bruise', rank: 6,
      why: 'Calm and stable, but a Category III bite is a rabies emergency in slow motion: wound care, vaccine and RIG within hours.',
      S: [
        ['Lorna: dog bite on the hand, bleeding. First action?', [
          ['Wash the wound with soap and running water for 15 minutes', 5, 'Bleeding settles; the wound is thoroughly rinsed.'],
          ['Apply alcohol and cover it tightly', -25, 'It stings, but the wound was never really cleaned.'],
          ['Put on betadine and close it with sutures at once for the moment', -30, 'Closing a dirty bite traps the infection.'],
          ['Apply garlic paste and cover it', -35, 'Folk remedies do nothing for rabies and invite infection.']]],
        ['The bite broke the skin and bled: Category III. What do you ask for?', [
          ['Anti-rabies vaccine, RIG and wound care', 5, 'Dr. Aquino orders all four.'],
          ['Anti-rabies vaccine alone, no RIG', -22, 'The vaccine takes time; the virus is already in the wound.'],
          ['Tetanus shot only; the dog looked healthy', -40, 'Stray dog: no way to verify. Rabies not covered.'],
          ['Antibiotics only; observe the dog', -45, 'The dog is gone. No rabies cover at all.']]],
        ['RIG is ordered. How do you give it?', [
          ['Infiltrate it into and around the wound; give the rest IM elsewhere', 8, 'Maximum local protection. Vaccine given at a separate site.'],
          ['Give all the RIG at the same site as the vaccine', -25, 'The RIG blunts the vaccine response.'],
          ['Give all the RIG in the buttock', -30, 'The wound gets no local RIG.'],
          ['Skip RIG; give an extra vaccine dose instead', -35, 'The vaccine alone cannot protect in time.']]],
        ['Follow-up before she leaves: what do you tell her?', [
          ['Return on days 3 and 7; keep the dog under watch if possible', 5, 'She gets her schedule card and the clinic number.'],
          ['No need to return after the first shot in the meantime', -35, 'She misses the series.'],
          ['Come back only if she gets a fever at the bedside', -30, 'By fever, rabies is untreatable.'],
          ['Skip day 3 if she feels fine for now', -25, 'The schedule matters.']]]],
      R: [
        ['The wound is dirty and starting to swell.', [
          ['Wash again thoroughly, call the doctor', 6, 'Cleaner wound. The swelling settles.'],
          ['Cover it tightly and wait until tomorrow', -30, 'Infection takes hold.'],
          ['Pour more alcohol and tie a tight bandage', -35, 'Tissue damage and swelling.'],
          ['Close the wound with sutures right now', -25, 'Infection is trapped.']]],
        ['No RIG was ordered; she has been told to go home.', [
          ['Tell the doctor: Category III needs RIG', 6, 'RIG is ordered and given.'],
          ['Give her the vaccine card and let her go', -40, 'The window for RIG is closing.'],
          ['Tell her to come back if the dog dies', -45, 'The dog is gone; she is unprotected.'],
          ['Give an antibiotic and say she is covered', -30, 'Antibiotics do not cover rabies.']]],
        ['The RIG went in one place, and the wound is swollen and painful.', [
          ['Tell the doctor, give the remainder correctly', 6, 'The remainder goes in correctly.'],
          ['Leave it; it is already in', -30, 'The wound is under-protected.'],
          ['Massage the area to spread it', -25, 'Painful, with little benefit.'],
          ['Give a painkiller and say nothing as a first step', -35, 'The error goes undocumented.']]]],
      end: ['Full cover on day zero: wound washed, vaccine, RIG and tetanus. Her follow-up visits went smoothly.', 'She finished the series late but is expected to be safe.', 'She received partial cover and is being closely followed.', 'Weeks later Lorna was admitted with fear of water and spasms. Rabies is almost always fatal once symptoms start.'],
      deb: ['Category III exposure (DOH Rabies Program): wash 15 minutes, anti-rabies vaccine plus RIG, tetanus, and a follow-up schedule.', 'Infiltrate RIG around the wound; the rest goes IM away from the vaccine site.', 'Rabies is preventable but almost always fatal once symptoms begin.'] }
  ]
});
