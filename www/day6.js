/* Day 6 — Saturday: Surge. A bus crash pulls every hand away mid-shift. */
window.DAYDATA.push({
  id: 'day6', title: 'Day 6 — Saturday: The Surge', aide: 'Brett',
  intro: 'Saturday morning and the waiting area is spilling into the hallway. Everyone says it is urgent. Not everyone is right.',
  events: [{ t: 60, drain: 10, text: '🚌 BUS CRASH! The disaster team pulls every nurse to the ambulance bay for ten minutes. Everyone waiting loses ground.' }],
  cases: [
    { id: 'dissect', bed: 1, name: 'Teodoro Villafuerte', age: 58, sex: 'M', tri: 'Tearing chest pain through to the back · ESI 1',
      look: 'Gray and sweaty, gripping his back. The pain tears from his chest to between his shoulder blades. It looks like a heart attack.',
      v: 'HR 110 · BP 188/104 · RR 24 · SpO₂ 96%', v2: 'HR 142 · BP 68/40 · RR 34 · SpO₂ 86%', late: 'Collapsing, a bulge in his chest, pale and silent.',
      sk: '#c8966f', hr: '#d9d9d9', st: 'short', gw: '#6aa9ff', pr: 'sweat', rank: 1,
      why: 'Tearing pain to the back with a very high BP looks like an MI but is an aortic dissection. Aspirin and heparin could kill him.',
      S: [
        ['Teodoro has tearing chest pain through to his back, BP 188/104. First action?', [
          ['Check BP in both arms, ECG, call the doctor', 5, 'Right arm 188/104, left 150/80. A 38 mmHg gap.'],
          ['Give aspirin and heparin for a presumed heart attack', -45, 'If this is a dissection, anticoagulants are fatal.'],
          ['Give nitro and walk him to the ECG room', -30, 'Walking spikes his pressure and the tear spreads.'],
          ['Send him for a treadmill stress test to find the cause', -50, 'A stress test on a torn aorta.']]],
        ['ECG shows no ST elevation, and the arm pressures differ. What do you ask for?', [
          ['Suspect aortic dissection: STAT CT angiogram, surgeon', 5, 'CT confirms a Stanford A dissection.'],
          ['Start the MI protocol with thrombolysis right now', -50, 'Thrombolysis in dissection is often fatal.'],
          ['Give an oral antihypertensive tablet and observe him', -30, 'Too slow and too weak.'],
          ['Wait for the troponin result before deciding anything for now', -25, 'Troponin can be normal in dissection.']]],
        ['A beta blocker is ordered. Target: HR under 60 and SBP 100–120. What do you do?', [
          ['Titrate to HR and BP with continuous monitoring', 8, 'HR 58, SBP 112. The aorta is protected.'],
          ['Give a large bolus to drop the BP quickly to 90 systolic', -30, 'Hypoperfusion; his brain and kidneys suffer.'],
          ['Give a vasodilator first, before any beta blocker', -40, 'Reflex tachycardia raises shear stress on the tear.'],
          ['Give only pain medicine and watch the monitor', -22, 'Pressure and rate stay high.']]],
        ['He goes to cardiac surgery. How do you transfer him?', [
          ['Monitor, two IVs, SBAR, stable BP target, escort with a doctor', 5, 'He reaches the OR stable.'],
          ['Send him with a transporter and no monitor', -35, 'His pressure spikes in the elevator.'],
          ['Let him walk since he feels better', -40, 'He collapses in the corridor.'],
          ['Pause the beta blocker for the trip to save time', -30, 'His pressure rises again.']]]],
      R: [
        ['He got aspirin and heparin; the pain is worse and BP is falling.', [
          ['Stop heparin, call the doctor, urgent CT', 6, 'The bleeding risk is addressed. CT is rushed.'],
          ['Give more heparin to be sure it works', -50, 'He bleeds into the tear.'],
          ['Give nitro under the tongue for the pain right away', -35, 'BP drops further.'],
          ['Wait to see how the pain evolves', -40, 'Time is running out.']]],
        ['BP 70/40, sudden severe pain and a bulge in the chest wall.', [
          ['Resuscitate with blood per order', 6, 'The surgeon is on the way.'],
          ['Give an oral antihypertensive for the pain', -45, 'Useless in shock.'],
          ['Observe him in the ER for a while', -40, 'He is dying.'],
          ['Give a big saline bolus to lift the BP', -30, 'Diluting him without stopping the bleed.']]],
        ['BP rose to 220/130 after the vasodilator alone.', [
          ['Add an IV beta blocker per order', 6, 'HR and BP come down together.'],
          ['Increase the vasodilator to bring it down', -45, 'Tachycardia and shear rise.'],
          ['Observe and recheck in 15 minutes', -35, 'The pressure is dangerous.'],
          ['Give extra IV fluids', -40, 'Wrong direction.']]]],
      end: ['A successful emergency repair. He woke up in the ICU and went home in two weeks.', 'He survived a stormy operation with kidney injury.', 'He survived with a stroke.', 'Teodoro died when his aorta ruptured.'],
      deb: ['Aortic dissection: tearing pain to the back, BP difference between arms, mediastinal widening. Treat with HR and BP control (beta blocker first) and urgent CT angiography and surgery.', 'Never give anticoagulants or thrombolytics until dissection is excluded.', 'Always check BP in both arms in chest pain with hypertension.'] },

    { id: 'gastro', bed: 2, name: 'Aiden Cruz (10 months)', age: 1, sex: 'M', tri: 'Diarrhea and vomiting for 2 days, floppy · ESI 2',
      look: 'Sunken eyes, a sunken soft spot, a dry mouth. Mom says, "Hindi na po umiihi simula kagabi." He is drowsy.',
      v: 'HR 170 · RR 40 · SpO₂ 98% · T 37.8° · 8 kg', v2: 'HR 200 · RR 56 · SpO₂ 92% · T 38.2° · 8 kg', late: 'Limp, gray and cold, barely breathing.',
      sk: '#e0a982', hr: '#3a2a1a', st: 'baby', gw: '#ffd6a5', pr: 'tears', rank: 2,
      why: 'Sunken eyes, drowsy, no urine for 12 hours: severe dehydration in an infant. Treatable fast, but it goes to shock quickly.',
      S: [
        ['Aiden has diarrhea, sunken eyes and no urine for 12 hours. First action?', [
          ['Weigh him, check vitals and capillary refill, and grade the dehydration', 5, 'Cap refill 4 seconds. Severe dehydration.'],
          ['Give plain water from a bottle to rehydrate him', -35, 'Water lacks salts; he vomits and weakens.'],
          ['Stop all fluids until the diarrhea stops completely', -45, 'He dries out further.'],
          ['Give an anti-diarrheal drop and send him home', -40, 'Dangerous in infants and does nothing for fluid loss.']]],
        ['Severe dehydration with drowsiness. What do you ask for?', [
          ['IV Ringer\'s lactate bolus 20 mL/kg, then recheck', 5, 'Dr. Aquino orders RL and an admission.'],
          ['Oral rehydration at home and review in three days', -45, 'He could be in shock by tomorrow.'],
          ['IV D5 water as a gentle drip', -40, 'It does not replace salt or volume.'],
          ['NSS 5 mL/kg slowly over several hours', -22, 'Too little, too slow.']]],
        ['He weighs 8 kg. The bolus is 20 mL/kg. What do you run?', [
          ['160 mL over 15–30 minutes, then recheck him', 8, 'Pulse slows and his color returns.'],
          ['1,600 mL, which is the adult amount as a first step', -50, 'Massive overload.'],
          ['16 mL to be on the safe side', -30, 'A tiny volume that does nothing.'],
          ['160 mL slowly over six hours', -35, 'Too slow to correct shock.']]],
        ['He is alert and drinking. Mom asks what to do at home.', [
          ['ORS after each loose stool, warning signs', 5, 'Mom leaves with a plan and ORS sachets.'],
          ['Stop breastfeeding while he has diarrhea', -40, 'He loses nutrition and immunity.'],
          ['Give soft drinks and juice instead of ORS to start with', -35, 'Sugar draws more water into the gut.'],
          ['Give antibiotics for every diarrhea', -30, 'Not recommended without blood in the stool.']]]],
      R: [
        ['He is limper after the water and still not peeing.', [
          ['Stop water, start an IV bolus per order, call the doctor', 6, 'The IV bolus brings the color back.'],
          ['Give more water to flush him through', -40, 'Worse.'],
          ['Wait for a stool test before treating him', -35, 'Time lost.'],
          ['Give an antidiarrheal', -45, 'Dangerous.']]],
        ['He is drowsy with cold hands after the D5 water.', [
          ['Switch to a Ringer\'s lactate bolus', 6, 'He starts to respond.'],
          ['Continue the D5 drip slowly while waiting', -40, 'Wrong fluid.'],
          ['Give oral fluids only', -35, 'He is already in shock.'],
          ['Wait for the labs', -30, 'He is deteriorating.']]],
        ['He got 1,600 mL by mistake; puffy eyelids and fast breathing.', [
          ['Stop the infusion, monitor for overload', 6, 'Caught in time; he is monitored closely.'],
          ['Slow it down and continue for the moment', -45, 'Still overloading.'],
          ['Give furosemide yourself', -35, 'No order, no diagnosis.'],
          ['Sit him up and wait', -30, 'Not enough.']]]],
      end: ['Rehydrated on schedule with a clear home plan. He went home smiling the next day.', 'He recovered after two days in the ward.', 'He survived after a PICU stay.', 'Aiden died of dehydration shock.'],
      deb: ['Severe dehydration (WHO plan C / DOH): IV Ringer\'s lactate 20 mL/kg boluses and reassess; ORS plus zinc 10–20 mg for 10–14 days afterwards.', 'Never give anti-diarrheal drugs to infants; continue breastfeeding.', 'Pediatric fluids are mL/kg: check the weight and the dose twice.'] },

    { id: 'pneumo', bed: 3, name: 'Bryan Castillo', age: 19, sex: 'M', tri: 'Sudden sharp chest pain, short of breath · ESI 3',
      look: 'Tall and thin, holding his right chest. The pain started suddenly while he was at the computer. He looks anxious.',
      v: 'HR 112 · BP 124/76 · RR 26 · SpO₂ 92%', v2: 'HR 148 · BP 68/40 · RR 40 · SpO₂ 74%', late: 'Neck veins up, windpipe deviated, collapsing.',
      sk: '#d9a98a', hr: '#2b2118', st: 'short', gw: '#b5ead7', pr: 'sweat', rank: 3,
      why: 'A tall thin teen with sudden one-sided chest pain and breathlessness: spontaneous pneumothorax. It looks like anxiety until it tensions.',
      S: [
        ['Bryan has sudden right chest pain and SpO₂ 92%. First action?', [
          ['Sit him up, give oxygen and listen to both lungs', 5, 'The right side is silent and hyper-resonant.'],
          ['Give pain medicine and send him home to rest', -40, 'He collapses at home.'],
          ['Have him lie flat and do a treadmill test', -45, 'He deteriorates quickly.'],
          ['Send him to the waiting room; it is probably anxiety', -35, 'He is worse an hour later.']]],
        ['Silent right side, SpO₂ 92%. What do you ask for?', [
          ['A chest X-ray, call the doctor, prepare a chest drain if large', 5, 'The X-ray shows a large right pneumothorax.'],
          ['Reassure him and discharge; he is young and healthy', -40, 'The pneumothorax grows.'],
          ['An anxiety tablet to calm his breathing', -35, 'It masks the problem.'],
          ['Wait a few hours to see if it improves', -25, 'It does not.']]],
        ['The doctor decides to place a chest drain. What do you prepare?', [
          ['Drain, underwater seal, consent and a monitor', 8, 'The drain goes in. The lung re-expands.'],
          ['Place the drain bottle on the bed beside him in the meantime', -35, 'Fluid flows back into his chest.'],
          ['Clamp the drain for transport to the ward', -45, 'The air has nowhere to go.'],
          ['Connect to high wall suction straight away', -22, 'Too much suction can hurt the lung.']]],
        ['The drain is out. What is his home advice?', [
          ['No flying or diving for weeks', 5, 'He leaves with a plan and a follow-up date.'],
          ['Fly home tomorrow; it is fine now', -40, 'Altitude can recollapse the lung.'],
          ['Go back to heavy lifting at once', -30, 'It can recur.'],
          ['Smoke a little less but carry on as before', -22, 'Smoking raises recurrence risk.']]]],
      R: [
        ['He is worse; SpO₂ 86% in the waiting area.', [
          ['Bring him back, urgent X-ray', 6, 'The X-ray is done and the doctor sees him.'],
          ['Reassure him and wait longer at the bedside', -35, 'He slips toward tension.'],
          ['Give a sedative to calm him', -45, 'It worsens his breathing.'],
          ['Send him home to rest', -50, 'He collapses.']]],
        ['BP falling, windpipe deviating, SpO₂ 80%.', [
          ['Call the doctor now, needle decompression per order, oxygen', 6, 'A hiss of air. He rallies.'],
          ['Wait for the X-ray', -45, 'He is dying while waiting.'],
          ['Give fluids and wait', -30, 'Only a temporary fix.'],
          ['Give pain medicine', -35, 'The cause is untouched.']]],
        ['The drain stopped bubbling and he is short of breath after clamping.', [
          ['Unclamp now, call the doctor', 6, 'Air escapes. He breathes easier.'],
          ['Keep it clamped for the transfer', -50, 'Tension returns.'],
          ['Raise the drain to the stretcher level', -35, 'Backflow.'],
          ['Remove the tube', -45, 'Air returns.']]]],
      end: ['A chest drain re-expanded the lung. He went home in three days with a lung-saving plan.', 'He recovered after a second drain.', 'He recovered after surgery for a persistent air leak.', 'Bryan died of a tension pneumothorax.'],
      deb: ['Primary spontaneous pneumothorax: tall thin young men, sudden pleuritic pain and breathlessness. Large or symptomatic ones need a chest drain.', 'Tension pneumothorax (hypotension, tracheal shift) needs immediate decompression.', 'Chest drains stay below chest level and are never clamped for transport.'] },

    { id: 'torsion', bed: 4, name: 'Marlon Esteban', age: 15, sex: 'M', tri: 'Belly pain and vomiting for 3 hours · ESI 3',
      look: 'Doubled over and pale. He says his tiyan hurts and he feels like vomiting. He avoids eye contact and will not say more with his mother in the room.',
      v: 'HR 112 · BP 118/74 · RR 22 · SpO₂ 99% · T 37.4°', v2: 'HR 132 · BP 108/66 · RR 28 · SpO₂ 98% · T 38.2°', late: 'Gray and in agony. The scrotum is dark and swollen.',
      sk: '#d2a07c', hr: '#2a2a2a', st: 'short', gw: '#cfd8dc', pr: 'cramp', rank: 4,
      why: 'A teen with sudden belly pain and vomiting might have testicular torsion. The testicle survives for about six hours. Embarrassment hides the diagnosis.',
      S: [
        ['Marlon has belly pain and vomiting and will not say more. First action?', [
          ['Ask privately and respectfully about groin or testicular pain', 5, 'Left testicle high, very tender. Suspected torsion.'],
          ['Treat it as gastritis and give an antacid as a first step', -35, 'The real problem is missed.'],
          ['Send him for an abdominal ultrasound in the queue right away', -30, 'Unrelated; the clock keeps ticking.'],
          ['Give paracetamol and observe him in the waiting area for now', -30, 'The testicle is dying while he waits.']]],
        ['Suspected torsion, 3 hours from onset. What do you ask for?', [
          ['STAT urology call; Doppler only if it does not delay surgery', 5, 'Urology agrees to explore immediately.'],
          ['A routine ultrasound next morning for the moment', -45, 'Salvage rates fall every hour.'],
          ['Antibiotics for epididymitis and discharge to start with', -40, 'Wrong diagnosis.'],
          ['An ice pack and reassessment in two hours while waiting', -30, 'Time lost.']]],
        ['He is going to the OR. What do you do?', [
          ['NPO, parent consent, IV access, and tell the OR it is time-critical', 8, 'The OR is ready in minutes.'],
          ['Let him eat before surgery since he is hungry', -30, 'The surgery is delayed or risky.'],
          ['Delay until the long consent form is finalised', -22, 'Minutes are lost.'],
          ['Send him to the ward to await surgical review', -35, 'The testicle dies.']]],
        ['After surgery: what do you teach him and his mother?', [
          ['Both testes are fixed, pain control and follow-up', 5, 'They leave informed.'],
          ['Tell him it was minor and no follow-up is needed in the meantime', -35, 'He misses his review.'],
          ['Tell him not to tell anyone', -22, 'Shame stops him seeking help next time.'],
          ['Skip teaching because he is tired', -30, 'No safety net.']]]],
      R: [
        ['The pain is worse and the scrotum is swollen; no one has examined him.', [
          ['Examine now, keep NPO', 6, 'Urology is called. He goes to the OR.'],
          ['Give a laxative for the belly pain', -35, 'It does nothing.'],
          ['Give an antacid and send him home', -45, 'The testicle dies at home.'],
          ['Give paracetamol and wait', -30, 'The window is closing.']]],
        ['Six hours since onset and the testicle is dark.', [
          ['Call urology STAT, keep NPO', 6, 'He goes straight to the OR.'],
          ['Wait until morning rounds at the bedside', -50, 'Lost.'],
          ['Apply ice and observe', -35, 'Too late.'],
          ['Give antibiotics only', -40, 'Wrong treatment.']]],
        ['He ate lunch before the OR and the anesthesiologist is worried.', [
          ['Tell the anesthesiologist the exact time of his last meal', 6, 'The plan is adjusted safely.'],
          ['Hide it to avoid delay', -50, 'Aspiration risk.'],
          ['Give an antiemetic and say nothing', -40, 'Unsafe.'],
          ['Cancel the surgery', -35, 'The testicle is lost.']]]],
      end: ['The testicle was saved in time. He went home the next day, embarrassed but fine.', 'The testicle was saved but atrophied later.', 'He lost the testicle.', 'Marlon developed overwhelming sepsis from necrotic tissue and died.'],
      deb: ['Testicular torsion: sudden pain, high-riding testicle, no cremasteric reflex. Salvage rate is high within 6 hours and falls quickly afterwards.', 'Do not delay surgery for an ultrasound.', 'Teens often hide groin pain: ask privately and without judgment.'] },

    { id: 'pyelo', bed: 5, name: 'Gloria Fabros', age: 54, sex: 'F', tri: 'Fever, flank pain, shaking chills · ESI 3',
      look: 'Shivering and holding her right flank. Her urine is cloudy and she is a little confused when you ask questions.',
      v: 'HR 118 · BP 98/58 · RR 24 · SpO₂ 96% · T 39.6°', v2: 'HR 146 · BP 70/40 · RR 34 · SpO₂ 88% · T 40.4°', late: 'Cold, clammy and unresponsive.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'bun', gw: '#c3b1e1', pr: 'sweat', rank: 5,
      why: 'Fever, flank pain and chills with a stone behind it: an obstructed infected kidney is a urologic emergency, not a simple UTI.',
      S: [
        ['Gloria has fever, flank pain, chills and cloudy urine. First action?', [
          ['Vitals, urine and blood cultures, lactate and call the doctor', 5, 'Lactate 3.4. Sepsis recognised.'],
          ['Give paracetamol and send her home with water right away', -35, 'The sepsis is not addressed.'],
          ['Give antibiotic tablets only and a follow-up as a first step', -25, 'She is septic; oral drugs are not enough.'],
          ['Wait for the urine culture before any treatment for now', -30, 'It takes two days.']]],
        ['Ultrasound shows a stone with a dilated kidney. What do you ask for?', [
          ['IV antibiotics and urgent decompression by urology', 5, 'Dr. Villanueva calls urology to place a stent.'],
          ['Oral antibiotics and pain medicine, then home to start with', -45, 'She returns in septic shock.'],
          ['Observe overnight on the ward', -35, 'No source control.'],
          ['Wait for the stone to pass by itself', -40, 'An infected obstruction will not pass in time.']]],
        ['BP 82/48 after one liter of fluid. What do you do?', [
          ['Continue fluids per order, give antibiotics on time', 8, 'BP stabilises on norepinephrine.'],
          ['Stop fluids; she must be overloaded while waiting', -30, 'She is in shock.'],
          ['Give an NSAID for the pain for the moment', -40, 'It injures her kidney.'],
          ['Give her an oral drink in the meantime', -25, 'It does nothing for shock.']]],
        ['Handoff to urology: what is the key?', [
          ['SBAR with allergies, cultures, creatinine, antibiotic times, and consent', 5, 'Urology proceeds smoothly.'],
          ['Hand off without the antibiotic times', -22, 'Dosing is confusing.'],
          ['Send her without the IV in place', -40, 'No access.'],
          ['Wait for the next shift to hand over', -35, 'Time lost.']]]],
      R: [
        ['She is hot and confused after the paracetamol-only plan.', [
          ['Sepsis bundle: cultures', 6, 'She improves with the bundle.'],
          ['Give paracetamol again', -30, 'No change.'],
          ['Send her home to rest', -45, 'She returns worse.'],
          ['Give oral antibiotics only', -35, 'Not enough.']]],
        ['She is still febrile and rigid with pain; urology has not been called.', [
          ['Call urology STAT: obstructed infected kidney', 6, 'Urology agrees to decompress.'],
          ['Wait for the culture to confirm at the bedside', -40, 'Too slow.'],
          ['Observe overnight and recheck', -35, 'Too slow.'],
          ['Give more pain relief and wait', -22, 'The infection continues.']]],
        ['BP 70/40 and urine output is nil after the NSAID.', [
          ['Hold NSAIDs, urology', 6, 'Pressure recovers.'],
          ['Give more NSAIDs for the pain', -50, 'The kidney is injured further.'],
          ['Restrict fluids to protect her kidney', -40, 'She is dry.'],
          ['Wait and watch', -35, 'The shock worsens.']]]],
      end: ['A stent drained the pus and antibiotics did the rest. She went home in five days.', 'She survived after a long ICU stay.', 'She survived with kidney damage.', 'Gloria died of septic shock from an infected kidney.'],
      deb: ['Obstructive pyelonephritis: fever, flank pain and a stone with hydronephrosis need IV antibiotics and urgent drainage (stent or nephrostomy).', 'Source control is as important as antibiotics.', 'Avoid NSAIDs in sepsis and acute kidney injury.'] },

    { id: 'fishbone', bed: 6, name: 'Cora "Aling Cora" Bacani', age: 68, sex: 'F', tri: 'Fish bone stuck in the throat · ESI 4',
      look: 'Coughing and pointing at her throat. A little blood in her saliva. She was eating sinigang na bangus. She can speak.',
      v: 'HR 88 · BP 134/82 · RR 18 · SpO₂ 98%', v2: 'HR 126 · BP 88/54 · RR 32 · SpO₂ 80%', late: 'Struggling for air, drooling, unable to speak.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'bun', gw: '#b5ead7', pr: 'cough', rank: 6,
      why: 'The smallest case on the board, but a fish bone can slip into the airway. It is stable now and can turn in a breath.',
      S: [
        ['Aling Cora has a fish bone stuck in her throat but can speak. First action?', [
          ['Keep her sitting upright and calm, check her voice and airway, NPO', 5, 'She can speak and her airway is clear.'],
          ['Tell her to swallow a ball of rice to push it down', -45, 'The bone lodges deeper and cuts her.'],
          ['Tell her to swallow bread or banana to push it down', -40, 'It lodges deeper.'],
          ['Press hard on her belly with both hands', -30, 'She is not choking. It can cause injury.']]],
        ['A neck X-ray shows a bone at the tonsil level. What do you ask for?', [
          ['ENT review for direct removal under light', 5, 'ENT removes the bone with forceps.'],
          ['Discharge her with advice to eat soft food', -40, 'It remains and can cause an abscess.'],
          ['A laxative to help the bone pass through', -45, 'It is stuck high in the throat.'],
          ['Wait until morning for review', -25, 'The airway may be threatened.']]],
        ['Suddenly she cannot speak and clutches her throat. What do you do?', [
          ['Recognise complete obstruction', 8, 'The obstruction clears. She coughs and breathes.'],
          ['Give her water to push it down', -45, 'She cannot swallow it.'],
          ['Run to find the doctor and leave her', -35, 'She collapses alone.'],
          ['Pat her back gently and wait', -25, 'It is not enough.']]],
        ['The bone is out. What do you teach her?', [
          ['Eat fish slowly, remove bones first and return for pain or fever', 5, 'She understands.'],
          ['Swallow a rice ball whenever it happens right away', -40, 'Dangerous advice.'],
          ['No teaching is needed for something so small for now', -30, 'She repeats the mistake.'],
          ['Avoid fish forever to be safe as a first step', -22, 'Unnecessary and unhelpful.']]]],
      R: [
        ['She swallowed rice and now her throat hurts more and she is coughing blood.', [
          ['NPO, call ENT, watch the airway, X-ray of the neck', 6, 'ENT removes the bone under light.'],
          ['Give her more rice', -45, 'Worse.'],
          ['Send her home', -40, 'Bleeding and infection risk.'],
          ['Give an antacid', -30, 'It does not help.']]],
        ['She has a fever and a swollen neck the next day.', [
          ['Treat as a deep neck infection: IV antibiotics', 6, 'ENT drains an early abscess.'],
          ['Oral antibiotics and home to start with', -40, 'It spreads.'],
          ['Wait another day for the moment', -35, 'It spreads.'],
          ['Give gargles only while waiting', -30, 'Not enough.']]],
        ['She is choking and no one is helping her.', [
          ['Back blows and abdominal thrusts', 6, 'The obstruction clears.'],
          ['Run for the doctor', -40, 'She collapses.'],
          ['Give water', -50, 'It cannot pass.'],
          ['Pat her back and wait in the meantime', -25, 'Not enough.']]]],
      end: ['The bone came out in minutes with no damage. She went home laughing about the sinigang.', 'She recovered after a night of observation.', 'She recovered after a neck abscess was drained.', 'Aling Cora died of airway obstruction from a fish bone.'],
      deb: ['A fish bone that is visible or on X-ray needs ENT removal; do not push it down with rice or bread.', 'Complete airway obstruction: five back blows, then abdominal thrusts, and call a code.', 'A small complaint can hide an airway emergency: keep watching.'] }
  ]
});
