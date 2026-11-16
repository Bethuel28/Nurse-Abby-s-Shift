/* Day 7 — Sunday: The Storm. Typhoon landfall; a VIP arrives and demands to jump the queue. */
window.DAYDATA.push({
  id: 'day7', title: 'Day 7 — Sunday: Typhoon Night', aide: 'Brett',
  intro: 'Signal Number 4, Nurse Abby. The roof is leaking and the generator is on a prayer. Last shift of the week. You can do this.',
  events: [{ t: 75, drain: 6, text: '🌀 LANDFALL! Floodwater is in the parking lot and ambulances are stuck. Everyone waiting loses ground.' }],
  cases: [
    { id: 'shock', bed: 1, name: 'Rico Dalisay', age: 34, sex: 'M', tri: 'Touched a live wire in the flood, chest pain · ESI 1',
      look: 'Burn marks on his right hand and left foot. Dazed, with palpitations and chest pain. His clothes are soaked.',
      v: 'HR 138 · BP 100/64 · RR 26 · SpO₂ 94%', v2: 'HR 36 · BP 60/30 · RR 10 · SpO₂ 70%', late: 'Pulseless and gray, with a rhythm that is not a rhythm.',
      sk: '#b9835c', hr: '#1c1c1c', st: 'short', gw: '#cfd8dc', pr: 'sweat', rank: 1,
      why: 'Electrical injury with palpitations and chest pain can switch into ventricular fibrillation at any moment. The burn on his skin is the smallest part of the injury.',
      S: [
        ['Rico touched a live wire and has palpitations. First action?', [
          ['Cardiac monitor, check burns and exit wounds', 5, 'Frequent ventricular ectopics. Entry and exit burns found.'],
          ['Send him home because the burns are small', -45, 'He arrests in the waiting room.'],
          ['Give IV fluids wide open for the burns', -22, 'Over-hydrating, with no monitoring.'],
          ['Treat the burns first and do the ECG later for now', -35, 'Ectopics become VT unwatched.']]],
        ['ECG shows ventricular ectopics; CK high; urine dark. What do you ask for?', [
          ['Continuous monitoring for 24 hours, burn care', 5, 'Urine output is kept high; his heart is watched.'],
          ['Discharge him after a normal repeat ECG', -45, 'Delayed arrhythmias occur after electrical injury.'],
          ['Give an NSAID for pain and observe for an hour', -35, 'The NSAID harms his kidneys.'],
          ['Observe him for one hour and discharge', -30, 'Too short an observation.']]],
        ['His rhythm turns into pulseless VT. What do you do?', [
          ['Start CPR, epinephrine per order', 8, 'A shock converts him to sinus rhythm.'],
          ['Check his pulse for a full minute first', -35, 'Wasted time.'],
          ['Give an oral antiarrhythmic tablet', -45, 'He cannot swallow and needs a shock.'],
          ['Wait for the doctor before doing anything', -40, 'Every second counts.']]],
        ['He is stable. What else do you attend to before the ICU?', [
          ['Tetanus booster, burn dressing, wound care, and monitored transfer', 5, 'The ICU receives a stable patient.'],
          ['Burn dressing only; he can walk to the ward', -35, 'He decompensates on the way.'],
          ['Skip tetanus because the wounds are dry', -30, 'A tetanus risk.'],
          ['Send him without a monitor since he is better', -40, 'Unsafe.']]]],
      R: [
        ['He was sent to the waiting room after a normal ECG; now palpitations.', [
          ['Back to resus, call the doctor', 6, 'Ectopics are caught on the monitor.'],
          ['Reassure him and ask him to sit and wait', -40, 'He arrests.'],
          ['Give him paracetamol and send him home', -45, 'Danger.'],
          ['Wait for the doctor to round', -30, 'Time lost.']]],
        ['His urine is dark red and creatinine is climbing.', [
          ['IV fluids to keep urine output high', 6, 'Urine output recovers.'],
          ['Restrict fluids to protect his kidneys', -40, 'Worse.'],
          ['Give NSAIDs for the pain', -45, 'The kidneys fail.'],
          ['Wait and recheck tomorrow', -30, 'Too long.']]],
        ['He is pulseless and nobody has started compressions.', [
          ['Start compressions now, call the code', 6, 'ROSC after the first shock.'],
          ['Check the pulse again right away', -40, 'Time lost.'],
          ['Wait for the doctor to start with', -45, 'Time lost.'],
          ['Give oxygen and wait as a first step', -35, 'Not enough.']]]],
      end: ['A 24-hour monitored admission and fluids for his kidneys. He went home on day 4 with a healed hand.', 'He survived an ICU stay with kidney injury.', 'He survived with nerve damage and a long recovery.', 'Rico died of ventricular fibrillation after the shock.'],
      deb: ['Electrical injury: ECG and continuous monitoring, search for entry and exit burns, watch for rhabdomyolysis and arrhythmias. Low-voltage injuries with a normal ECG can often be observed briefly.', 'Always make sure the scene is safe before touching a victim of a live wire.', 'High CK and dark urine mean aggressive fluids and renal protection.'] },

    { id: 'hyperk', bed: 2, name: 'Ruben Soriano', age: 62, sex: 'M', tri: 'Missed dialysis, weak, slow heart rate · ESI 2',
      look: 'Weak, nauseated, muscles heavy. The storm closed his dialysis center and he has not had dialysis in six days.',
      v: 'HR 46 · BP 168/96 · RR 24 · SpO₂ 92% · K 7.2', v2: 'HR 28 · BP 78/46 · RR 34 · SpO₂ 82% · K 8.6', late: 'Limp and gray, a very slow wide-complex rhythm.',
      sk: '#d2a07c', hr: '#d9d9d9', st: 'short', gw: '#c3b1e1', pr: 'droop', rank: 2,
      why: 'A dialysis patient with a slow pulse and weakness has hyperkalemia until proven otherwise. A potassium of 7+ can stop his heart without warning.',
      S: [
        ['Ruben missed dialysis for six days; weak, HR 46. First action?', [
          ['12-lead ECG now, cardiac monitor, check potassium, IV access', 5, 'Peaked T waves and a widening QRS.'],
          ['Give bananas and coconut water for his weakness', -50, 'More potassium onto a dangerous level.'],
          ['Give IV potassium to correct the low heart rate', -50, 'A deadly mistake.'],
          ['Give oral furosemide and send him home', -35, 'No urine to respond; he arrests at home.']]],
        ['ECG shows peaked T waves and a wide QRS; K 7.4. What do you ask for?', [
          ['IV calcium gluconate, urgent dialysis', 5, 'Dr. Villanueva orders them.'],
          ['Wait for a repeat potassium before treating', -40, 'Every minute counts.'],
          ['Run IV saline wide open to flush the potassium', -30, 'He is anuric; he overloads.'],
          ['Give a laxative to remove potassium', -35, 'Too slow.']]],
        ['Calcium and insulin are ordered. What do you remember?', [
          ['Give calcium slowly on the monitor; insulin with dextrose; recheck glucose and K⁺', 8, 'The QRS narrows. Glucose is watched.'],
          ['Push the calcium fast in the same line as bicarbonate while waiting', -35, 'It precipitates in the line.'],
          ['Give the insulin without dextrose to save time in the meantime', -45, 'Severe hypoglycemia.'],
          ['Give insulin with dextrose and skip glucose checks for the moment', -22, 'He crashes an hour later.']]],
        ['Dialysis at your hospital is down because of the storm. What do you do?', [
          ['Arrange emergency dialysis at another hospital by monitored ambulance with escort', 5, 'The partner hospital accepts him.'],
          ['Send him home on a low-potassium diet right away', -45, 'The potassium rises again.'],
          ['Repeat the potassium tomorrow and decide for now', -40, 'He may not make it to tomorrow.'],
          ['Hold all treatment until the storm passes at the bedside', -35, 'The storm will not wait for him.']]]],
      R: [
        ['He ate bananas; the ECG shows a wider QRS.', [
          ['Stop potassium sources, IV calcium per order, monitor, call the doctor', 6, 'The QRS narrows.'],
          ['Let him rest and recheck later while waiting', -40, 'The QRS widens further.'],
          ['Give more fluids to flush him through', -30, 'No urine, no flushing.'],
          ['Give him a sedative', -35, 'Not helpful.']]],
        ['HR 30 and BP 80/50 on the monitor.', [
          ['Call the doctor, atropine if ordered', 6, 'The rate improves.'],
          ['Wait to see if the rate recovers', -45, 'Asystole is near.'],
          ['Give oral medicines for the pressure as a first step', -35, 'Useless.'],
          ['Give fluids wide open', -30, 'He is anuric.']]],
        ['His glucose is 40 after the insulin.', [
          ['IV dextrose per order, recheck hourly', 6, 'Glucose recovers.'],
          ['Give more insulin for the moment', -50, 'Worse.'],
          ['Give water and wait to start with', -30, 'Not enough.'],
          ['Wait until morning while waiting', -40, 'Seizure risk.']]]],
      end: ['Calcium bought him time and the ambulance bought him dialysis. He was home in three days.', 'He recovered after emergency dialysis and a stay in the ICU.', 'He survived with a cardiac complication.', 'Ruben died of a hyperkalemic cardiac arrest.'],
      deb: ['Hyperkalemia emergency: ECG changes (peaked T, wide QRS) get IV calcium gluconate first, then insulin with dextrose, nebulised salbutamol, and urgent dialysis.', 'Calcium stabilises the heart; it does not lower potassium.', 'In disasters, plan continuity of dialysis for patients with kidney failure.'] },

    { id: 'cord', bed: 3, name: 'Princess Joy Laurente', age: 26, sex: 'F', tri: 'In labor, cord visible at the vagina · ESI 1',
      look: 'Thirty-eight weeks. Her water broke at home and something is hanging out. She is terrified. Her husband stands frozen.',
      v: 'HR 118 · BP 120/76 · RR 24 · SpO₂ 98%', v2: 'HR 150 · BP 86/50 · RR 34 · SpO₂ 92%', late: 'Pale, panicking, and no fetal heartbeat can be found.',
      sk: '#cf9f7b', hr: '#241a14', st: 'long', gw: '#ffb3c1', pr: 'tears', rank: 3,
      why: 'A visible cord at the vagina is cord prolapse. The baby\'s oxygen supply is being squeezed shut by every contraction. Minutes matter.',
      S: [
        ['Princess Joy has a loop of cord visible at her vagina. First action?', [
          ['Do not push it back; knee-chest position, call OB', 5, 'Fetal heart 90. The head is being held off the cord.'],
          ['Push the cord back inside with your hand', -40, 'You compress the cord and the heart rate falls.'],
          ['Let her walk to the delivery room next door', -45, 'Walking compresses the cord against the pelvis.'],
          ['Wrap the cord in a dry cloth and wait for the OB in the meantime', -30, 'A dry cloth dries the cord and spasm worsens.']]],
        ['Fetal heart rate 80. OB calls for an emergency cesarean. What do you do?', [
          ['Keep the head elevated, moist warm cloth over the cord, oxygen, rush to the OR', 5, 'The baby reaches the OR with a heartbeat.'],
          ['Stop elevating to move her faster', -45, 'The cord is crushed again.'],
          ['Lay her flat on her back for the trip', -35, 'The cord is compressed.'],
          ['Wait for the full consent form before moving her', -30, 'Minutes are lost.']]],
        ['The baby is delivered pale and floppy. What do you do?', [
          ['Warm, dry, stimulate, clear the airway, call NICU', 8, 'A few good breaths and a loud cry.'],
          ['Hand the baby to the mother to calm her down', -35, 'No breathing support.'],
          ['Slap the baby hard on the back', -45, 'Harmful.'],
          ['Wait for the pedia to arrive before touching the baby', -40, 'Time lost.']]],
        ['The parents ask if their baby will be okay. What do you say?', [
          ['Explain honestly, offer skin-to-skin if stable, offer support', 5, 'They hold the baby and begin to breathe again.'],
          ['Say everything is perfect and walk away', -22, 'They leave frightened.'],
          ['Say it is nobody\'s fault and refuse to explain more at the bedside', -22, 'No information.'],
          ['Ask them to wait outside without any update', -30, 'They fear the worst.']]]],
      R: [
        ['You pushed the cord back and the fetal heart is dropping.', [
          ['Stop; knee-chest position, call OB', 6, 'The rate recovers.'],
          ['Push harder to get it fully in', -45, 'The cord is crushed.'],
          ['Wait for a contraction to settle for now', -35, 'The baby deteriorates.'],
          ['Tell her to bear down', -40, 'Dangerous.']]],
        ['She is flat on her back and the fetal heart is 70.', [
          ['Reposition to knee-chest, elevate the presenting part, call OB', 6, 'The heart rate improves.'],
          ['Keep her flat; it is safer for transport', -45, 'The cord is compressed.'],
          ['Put her sitting up', -35, 'Worse.'],
          ['Give her oxygen and wait', -30, 'Not enough.']]],
        ['The baby is not breathing and no one else is helping.', [
          ['Dry, stimulate, call for help', 6, 'The baby breathes.'],
          ['Hand the baby to the father right away', -40, 'No breathing support.'],
          ['Wait for the pedia', -45, 'Too late.'],
          ['Wrap the baby and wait', -35, 'Not enough.']]]],
      end: ['A cesarean delivered a crying baby in minutes. Mother and baby were home within a week.', 'The baby needed NICU care but did well.', 'The baby survived with a brain injury.', 'The baby and mother were lost despite everything.'],
      deb: ['Cord prolapse: do not replace the cord; relieve pressure by elevating the presenting part, knee-chest or left lateral position, and prepare for an immediate cesarean.', 'Keep the cord moist and warm, and minimise handling.', 'Newborn resuscitation: warm, dry, stimulate, then positive-pressure ventilation if apneic.'] },

    { id: 'crush', bed: 4, name: 'Ronnie Magsino', age: 41, sex: 'M', tri: 'Trapped under a fallen wall for 6 hours · ESI 2',
      look: 'Gray, very thirsty, with a swollen, cold left leg. Rescued from a collapsed house. His hands tremble.',
      v: 'HR 124 · BP 92/58 · RR 26 · SpO₂ 95% · T 35.6°', v2: 'HR 150 · BP 64/34 · RR 36 · SpO₂ 86% · T 34.6°', late: 'Cold, pulseless leg and a weak, rapid pulse.',
      sk: '#b9835c', hr: '#2a2a2a', st: 'short', gw: '#cfd8dc', pr: 'bruise', rank: 4,
      why: 'Six hours under a wall: the real danger is not the leg but the toxins and potassium flooding his blood once it reperfuses. Fluids first.',
      S: [
        ['Ronnie was trapped for six hours with a crushed left leg. First action?', [
          ['IV fluids, ECG monitor, check potassium and CK, keep him warm', 5, 'K 6.4, CK very high. Fluids started.'],
          ['Give a bolus of potassium-rich fluid for his dehydration as a first step', -50, 'K climbs. Dangerous rhythm.'],
          ['Massage the leg to restore the circulation', -35, 'It releases toxins faster.'],
          ['Give an NSAID for the pain and observe him', -30, 'The kidneys are already at risk.']]],
        ['K 6.8, CK very high, dark urine. What do you ask for?', [
          ['IV calcium, insulin with dextrose, ICU', 5, 'Dr. Aquino orders them.'],
          ['Restrict fluids to protect his kidneys', -40, 'The kidneys die faster.'],
          ['Give oral rehydration and go for an X-ray', -30, 'Too slow.'],
          ['Observe him overnight on the ward', -35, 'He deteriorates unwatched.']]],
        ['The leg is tight, pale and extremely painful on passive stretch. What do you do?', [
          ['Call orthopedics STAT for fasciotomy, remove tight dressings, keep the limb level', 8, 'Pressure is released in the OR.'],
          ['Elevate the leg high and apply ice', -35, 'It reduces perfusion further.'],
          ['Wrap it tighter to control the swelling', -45, 'Compartment pressure rises.'],
          ['Wait until the pulses vanish before calling anyone', -40, 'The muscle is already dying.']]],
        ['Tetanus and wound care: what is given?', [
          ['Tetanus toxoid plus TIG and a clean dressing', 5, 'All given and documented.'],
          ['Tetanus toxoid only', -22, 'A dirty wound needs immune globulin.'],
          ['Clean and close the wound immediately', -35, 'Infection risk.'],
          ['No tetanus is needed in a disaster injury to start with', -40, 'Wrong.']]]],
      R: [
        ['He was given a potassium-rich fluid and has weak, wide beats.', [
          ['Stop the fluid, call the doctor', 6, 'The rhythm stabilises.'],
          ['Give more of it to flush him', -50, 'Cardiac arrest risk.'],
          ['Let him rest and recheck later', -40, 'Danger.'],
          ['Give a sedative', -35, 'Not helpful.']]],
        ['His urine output has stopped and K is climbing.', [
          ['IV calcium and insulin-dextrose', 6, 'Potassium falls. Dialysis is planned.'],
          ['Wait for the morning labs for the moment', -40, 'Too long.'],
          ['Give oral fluids', -30, 'Not enough.'],
          ['Restrict all fluids', -35, 'Worse.']]],
        ['The leg is cold and no pulse can be felt now.', [
          ['Call orthopedics STAT and vascular for an emergency decision', 6, 'The surgeons take him to the OR.'],
          ['Warm the leg with blankets and wait', -40, 'The limb is lost.'],
          ['Elevate the leg and wait until morning', -45, 'The limb is lost.'],
          ['Massage the leg', -35, 'Worse.']]]],
      end: ['Fluids, potassium control and a timely fasciotomy saved the leg and his life. He went home in three weeks.', 'He survived with a long rehabilitation and a partial amputation.', 'He survived after an above-knee amputation and dialysis.', 'Ronnie died of cardiac arrest from crush syndrome.'],
      deb: ['Crush syndrome: aggressive IV fluids (ideally started before extrication), potassium and ECG monitoring, calcium for hyperkalemia, and early recognition of compartment syndrome.', 'Do not massage or rewarm a crushed limb; do not give NSAIDs.', 'In disasters, give tetanus toxoid plus immune globulin for dirty wounds.'] },

    { id: 'drown', bed: 5, name: 'Nico Alonzo (7 yrs)', age: 7, sex: 'M', tri: 'Pulled from floodwater, now coughing · ESI 3',
      look: 'Wrapped in a blanket, shivering and coughing. His father pulled him out of the water. Nico says he is fine and wants to go home.',
      v: 'HR 118 · RR 28 · SpO₂ 95% · T 35.4° · 22 kg', v2: 'HR 152 · RR 46 · SpO₂ 80% · T 34.4° · 22 kg', late: 'Gasping, pink froth at the mouth, drowsy.',
      sk: '#d9a98a', hr: '#2b2118', st: 'short', gw: '#b5ead7', pr: 'cough', rank: 5,
      why: 'He looks fine, but a child who inhaled floodwater can deteriorate hours later as the lungs fill. Observation is not optional.',
      S: [
        ['Nico was pulled from floodwater and is awake and coughing. First action?', [
          ['Oxygen, remove wet clothes, observe at least six hours', 5, 'SpO₂ 98% on oxygen. He warms up.'],
          ['Send him home since he is awake and talking', -45, 'He deteriorates at home overnight.'],
          ['Give him warm water to drink and let him sleep in the meantime', -30, 'He may vomit and aspirate.'],
          ['Hold him upside down to drain the water', -50, 'Harmful and ineffective.']]],
        ['SpO₂ 90% on room air and crackles are heard. What do you ask for?', [
          ['Chest X-ray, oxygen, call the doctor, admit', 5, 'The X-ray shows patchy infiltrates.'],
          ['Discharge him with a cough syrup', -45, 'His lungs are filling.'],
          ['Observe for another hour in the waiting area', -30, 'He worsens unwatched.'],
          ['Give antibiotics by mouth and send him home', -35, 'Wrong priority.']]],
        ['He is drowsy and working hard to breathe. What next?', [
          ['Prepare for airway support or NIV', 8, 'NIV helps. PICU accepts him.'],
          ['Let him sleep since he looks tired', -45, 'He is in respiratory failure.'],
          ['Give oral fluids and sugar', -35, 'He may aspirate.'],
          ['Give a sedative to calm his breathing', -40, 'His drive to breathe falls.']]],
        ['His parents want to leave: "He seems fine now."', [
          ['Explain the risk of delayed lung injury, admit for 24 hours', 5, 'They understand and stay.'],
          ['Let them sign out against advice', -40, 'He deteriorates overnight.'],
          ['Tell them to come back if he coughs again', -30, 'Too late by then.'],
          ['Give them antibiotics and send them home', -35, 'Not the right plan.']]]],
      R: [
        ['He was sent home and returns, breathing fast with SpO₂ 86%.', [
          ['Oxygen, sit him up, admit', 6, 'He responds to oxygen.'],
          ['Give cough syrup and send him home again', -45, 'Worse.'],
          ['Wait to see if it improves', -35, 'It does not.'],
          ['Give oral fluids', -30, 'Not enough.']]],
        ['Crackles are louder and he is coughing pink froth.', [
          ['Sit him up, prepare NIV', 6, 'NIV settles him.'],
          ['Lay him flat to rest', -45, 'He drowns in secretions.'],
          ['Give oral antibiotics at the bedside', -35, 'Not the priority.'],
          ['Wait for the day team', -40, 'Too late.']]],
        ['He is exhausted, SpO₂ falling to 82% after the sedative.', [
          ['Airway support, call PICU and the doctor', 6, 'He is supported.'],
          ['Give another sedative to settle him for now', -50, 'He stops breathing.'],
          ['Let him sleep', -45, 'Danger.'],
          ['Sternal rub and observe', -30, 'No change.']]]],
      end: ['A night of oxygen and observation, and he was sent home breathing easily with a stern talk about floodwater.', 'He recovered after a PICU stay.', 'He survived after intubation and ventilation.', 'Nico died of secondary drowning.'],
      deb: ['Drowning: every child who needed rescue or has symptoms needs observation (at least 6 hours), oxygen, and a chest X-ray if symptoms persist.', 'Delayed pulmonary edema can appear hours later.', 'Do not induce vomiting or hold the child upside down.'] },

    { id: 'vip', bed: 6, name: 'Mrs. Consuelo Ventura', age: 59, sex: 'F', tri: 'ARRIVAL: the Mayor\'s wife, "gas pain", demands to be seen first',
      look: 'A fine dress and a stern aide. She insists it is hyperacidity and wants a private room. She is pale, with a sweat on her upper lip and a pain along her jaw.',
      v: 'HR 52 · BP 96/58 · RR 22 · SpO₂ 95%', v2: 'HR 32 · BP 58/30 · RR 30 · SpO₂ 84%', late: 'Gray and slumped. Her aide has gone silent.',
      sk: '#d9a98a', hr: '#d9d9d9', st: 'bun', gw: '#ffd6a5', pr: 'sweat', rank: 0, arr: { t: 50, r: 1.0 },
      why: 'A surprise arrival who wants the VIP treatment is actually having an inferior heart attack. Rank, status and noise do not change the ECG.',
      S: [
        ['Mrs. Ventura says it is just gas and demands a private room. First action?', [
          ['Treat her like any other patient: 12-lead ECG within ten minutes, monitor', 5, 'ST elevation in II, III, aVF. She is having a heart attack.'],
          ['Give her an antacid and a private room, no ECG', -40, 'Her heart attack continues unseen.'],
          ['Give her the next bed ahead of someone more critical', -25, 'A sicker patient waits longer.'],
          ['Ask her aide for insurance details first', -30, 'RA 10932: no deposits or paperwork before emergency care.']]],
        ['ECG: inferior STEMI with a slow pulse. What do you ask for?', [
          ['Activate the cath lab, atropine if ordered', 5, 'The cath lab is on alert.'],
          ['Give nitroglycerin for the pain', -45, 'BP crashes in an inferior MI with bradycardia.'],
          ['Wait for her cardiologist to come from the golf course', -35, 'Valuable heart muscle is lost.'],
          ['Discharge her to her private doctor in the morning', -50, 'She will not survive until morning.']]],
        ['Her aide demands no monitors in view and a VIP escort. What do you do?', [
          ['Politely refuse; she stays on the monitor, and explain the risk to the family', 8, 'The aide steps back and accepts.'],
          ['Remove the monitor to protect her privacy as a first step', -45, 'Her rhythm turns without anyone seeing.'],
          ['Send her up with the aide and no nurse to start with', -40, 'No one is there when she arrests.'],
          ['Call the hospital director to override your decision right away', -25, 'It delays the cath lab.']]],
        ['She is going to the cath lab. What is the handoff?', [
          ['SBAR with ECG, escort with a defibrillator', 5, 'The team is ready.'],
          ['Hand off verbally without the ECG', -22, 'The team repeats the work.'],
          ['Send her without a defibrillator since she is stable', -40, 'VF in the elevator.'],
          ['Wait for her family to approve the transfer', -35, 'Minutes lost.']]]],
      R: [
        ['She was given an antacid and her pain is worse.', [
          ['Stop; 12-lead ECG now, monitor, call the doctor', 6, 'ECG shows inferior STEMI. The code is called.'],
          ['Give a second antacid', -40, 'Worse.'],
          ['Let her rest in the private room', -45, 'She goes into shock.'],
          ['Wait for her cardiologist', -35, 'Time lost.']]],
        ['BP 60/30 after the nitroglycerin.', [
          ['Stop nitro, call the doctor', 6, 'BP recovers a little.'],
          ['Give more nitro; it works slowly', -50, 'BP crashes.'],
          ['Give oral medicines', -35, 'Useless.'],
          ['Wait', -40, 'She is dying.']]],
        ['The monitor is off and she has been moved to a private room.', [
          ['Put the monitor back on at once', 6, 'Her rhythm is caught.'],
          ['Leave her private for her comfort', -45, 'She arrests.'],
          ['Check her every two hours', -35, 'Too long.'],
          ['Ask the aide to watch her', -40, 'Unsafe.']]]],
      end: ['She was in the cath lab within the hour and walked out five days later. Nobody remembered the fuss.', 'She survived after a complicated recovery.', 'She survived with heart failure.', 'Mrs. Ventura died of a massive heart attack while everyone was watching her status.'],
      deb: ['Triage is by clinical need, never by status. Every chest-pain patient gets an ECG within 10 minutes.', 'Inferior MI with bradycardia: avoid nitrates; give atropine if ordered and watch for hypotension.', 'RA 10932 forbids demanding deposits or documents before emergency care.'] }
  ]
});
