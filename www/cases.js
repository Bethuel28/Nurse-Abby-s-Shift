/* Day 1 — De La Cruz Memorial Hospital ER.
   Each case = 4 decisions. Option = [text, stability change, result]. Best +5/+8, partial −12..−25, poor −30..−45, deadly −45..−60.
   Stability starts at the patient's current level (they drain while you work on others). Reach 0 and the patient dies. */
(function () {
  var C = [
    { id: 'stemi', bed: 1, name: 'Ernesto "Mang Erning" Macaraeg', age: 58, sex: 'M', tri: 'Chest pain x1 hr · ESI 2',
      look: 'Gray, sweaty, rubbing his chest. "Parang may nakadagan, nurse."', v: 'HR 96 · BP 148/92 · RR 20 · SpO₂ 96%',
      lateLook: 'He has gone quiet and gray — the monitor shows runs of VT.',
      stages: [
        { q: 'Mang Erning is gray, sweating and clutching his chest. What do you do first?', o: [
          ['Get a 12-lead ECG and put him on the monitor', 5, 'Inferior STEMI: ST elevation in II, III, aVF. Minutes saved.'],
          ['Start an IV line and draw cardiac enzymes first', -18, 'Ten minutes pass. The troponin is not back — and you still have no ECG.'],
          ['Give nitroglycerin under the tongue for the pain', -35, 'BP falls to 88/50 and the pain barely changes. You have treated a number, not a diagnosis.'],
          ['Give oxygen by mask and reassure him until rounds', -22, 'His SpO₂ was fine. Twenty minutes of nothing useful.']] },
        { q: 'The ECG shows an inferior STEMI. How do you escalate?', o: [
          ['Call the attending with an SBAR and request the cath lab', 5, 'Dr. Villanueva activates the cath lab and orders aspirin, ticagrelor, heparin and nitro.'],
          ['Ask the resident to come see him once the other rounds are done', -20, 'He arrives in 15 minutes. The delay is on the clock.'],
          ['Hold off on calling until the troponin result is back', -30, 'Forty minutes of heart muscle gone while you waited for a lab you did not need.'],
          ['Text the ECG photo to a cardiologist and await a reply', -35, 'No order, no cath lab, no reply for 25 minutes.']] },
        { q: 'The doctor\'s orders include sublingual nitroglycerin. What do you do before giving it?', o: [
          ['Ask the daughter about his meds, hold nitro, tell the MD', 8, '"Uminom po siya ng Viagra kagabi." Nitro cancelled — you just avoided a crash.'],
          ['Give every ordered drug now since the order was read back', -45, 'BP drops to 60/30. Sildenafil plus nitrate in an inferior MI. You rescue him, barely.'],
          ['Give aspirin and heparin and quietly skip the nitro', -18, 'Right instinct, wrong communication: the doctor re-orders it twenty minutes later.'],
          ['Give the aspirin only and wait for the troponin result', -25, 'He is under-loaded when the cath lab arrives.']] },
        { q: 'The cath team is 45 minutes out. How do you prepare him?', o: [
          ['Get consent, prep the access site, keep him on pads', 5, 'Everything is ready when the team arrives.'],
          ['Get consent and leave him with Brett to watch the monitor', -15, 'No prep, and no one watching the monitor when his rhythm changes.'],
          ['Wheel him to the cath lab alone to save some time', -40, 'He goes into VF in the elevator.'],
          ['Wait for the cath team to ask for the consent form', -20, 'The paperwork costs ten minutes at the door.']] }
      ],
      end: { great: 'The cath lab opened his artery well within 90 minutes. He went home on day 4 with a strong heart.', ok: 'He made it to the cath lab and survived, but with a weakened heart.', poor: 'He survived, barely, with a large infarct and heart failure.', dead: 'Mang Erning went into VF and did not come back.' },
      debrief: ['STEMI (PHA CAD guideline): ECG within 10 minutes, door-to-balloon ≤ 90 min (≤ 120 if transferred); if PCI is delayed, fibrinolysis within 30 min.', 'Nitrates are contraindicated within 24 h of sildenafil (48 h of tadalafil) and in inferior MI. Ask privately first.', 'Emergency drugs need a physician order; verbal orders need read-back and countersignature (DOH AO 2015-0020).'] },

    { id: 'ectopic', bed: 2, name: 'Maricel Santos', age: 24, sex: 'F', tri: 'Lower abdominal pain, spotting · ESI 3',
      look: 'Pale, knees drawn up, holding her lower belly. Her boyfriend hovers, scared.', v: 'HR 104 · BP 104/68 · RR 20 · SpO₂ 98%',
      lateLook: 'She has slumped in the chair — gray, clammy, drifting.',
      stages: [
        { q: 'Maricel, 24, has lower abdominal pain and spotting. HR 104, BP 104/68. First action?', o: [
          ['Run a urine pregnancy test and take full vitals', 5, 'Pregnancy test: POSITIVE. LMP 7 weeks ago.'],
          ['Give hyoscine for the cramps and let her rest in the chair', -25, 'The pain eases a little. The bleeding inside does not.'],
          ['Send her for a pelvic ultrasound in the queue', -20, 'Twenty minutes in the queue, unmonitored.'],
          ['Have her wait her turn since triage said ESI 3', -30, 'She has been sitting for half an hour. Her lips are paler.']] },
        { q: 'Test positive, pain on the left, LMP 7 weeks. What next?', o: [
          ['Two large-bore IVs, crossmatch, SBAR: possible ectopic', 5, 'Dr. Aquino is on his way with the ultrasound.'],
          ['Place one IV and send a routine OB consult page', -15, 'The OB resident is in the clinic. Nobody knows this is urgent.'],
          ['Start NSS and wait for the doctor to make rounds for now', -20, 'Nobody is looking for the cause yet.'],
          ['Repeat the hCG in 48 hours and send her home', -45, 'She will not make it to 48 hours.']] },
        { q: 'BP 92/58, HR 118, shoulder pain. Ultrasound: empty uterus, free fluid. What now?', o: [
          ['Keep her NPO, get consent, and page OB for the OR', 8, 'OB-GYN is scrubbing in. Blood is ready.'],
          ['Give paracetamol for the shoulder pain she reports', -30, 'The pain is referred from bleeding. Nothing has been fixed.'],
          ['Allow oral sips while she waits for the OB review', -40, 'She vomits and her pressure falls to 82/50.'],
          ['Prep for the OR but skip the crossmatch to save time', -22, 'The OR waits ten minutes for blood anyway.']] },
        { q: 'She is going to the OR. Last checks?', o: [
          ['Witnessed consent, blood and two IVs, then SBAR handover', 5, 'A clean handover. The team takes over.'],
          ['Skip the consent form since this is an emergency to start', -20, 'She is awake and can consent. The OR holds her until it is signed.'],
          ['Send her up with one IV line and no blood ready', -35, 'She crashes on induction.'],
          ['Hold her until the Rh type result is back', -25, 'Ten minutes lost; O-negative was available.']] }
      ],
      end: { great: 'Laparoscopic salpingectomy with blood ready. Hgb 8, home on day 3.', ok: 'She survived the surgery after a massive transfusion.', poor: 'She survived the OR, barely, after an arrest on induction.', dead: 'Maricel bled out from a ruptured ectopic pregnancy.' },
      debrief: ['Every woman of childbearing age with abdominal pain or bleeding gets a pregnancy test. Positive hCG + pain + spotting = ectopic until proven otherwise.', 'Ruptured ectopic: two large-bore IVs, crossmatch, resuscitation, OR. Never wait for results while she crashes.', 'Triage said ESI 3. Triage can under-call; re-prioritize on your own assessment.'] },

    { id: 'trauma', bed: 3, name: 'Jericho "Jun" Mendoza', age: 22, sex: 'M', tri: 'Motorcycle vs jeepney, bleeding thigh · ESI 2',
      look: 'Moaning, confused. A bloody towel is soaked through on the right thigh. No collar, no helmet.', v: 'HR 118 · BP 98/60 · RR 24 · SpO₂ 94% · GCS 13',
      lateLook: 'Pale and quiet, a puddle of blood under the stretcher.',
      stages: [
        { q: 'Jun is bleeding from the right thigh, GCS 13, no collar. First action?', o: [
          ['Apply direct pressure to the thigh and fit a collar', 5, 'The bleeding slows to an ooze. Collar is on.'],
          ['Cut off his clothes and inspect the wound first first', -25, 'You are cleaning while he bleeds.'],
          ['Give IV morphine to settle his pain and moaning', -35, 'BP falls to 82/50. Opioids in shock are not kind.'],
          ['Send him straight to CT to look at his head', -30, 'He goes gray on the way.']] },
        { q: 'Bleeding controlled, HR 112. Next?', o: [
          ['Two large-bore IVs, warm bolus per order, crossmatch', 5, 'Pressure steadies at 108/70.'],
          ['Place one IV and run the fluids at a slow KVO rate meanwhile', -20, 'He is still volume-down.'],
          ['Splint the leg first and place the IV afterward', -18, 'The splint is good, but he has no access when he needs it.'],
          ['Offer him oral fluids to keep up with losses', -35, 'He is confused, vomits and aspirates.']] },
        { q: 'You page the attending. What does your SBAR ask for?', o: [
          ['SBAR the full picture and request CT head and C-spine', 5, 'CT, labs and the specialists are ordered in one call.'],
          ['Report the femur fracture and ask for ortho only for now', -25, 'Nobody is looking at his head.'],
          ['Say he is probably drunk and ask to observe him', -40, 'A bleed on the brain is being treated as intoxication. His GCS slips to 10.'],
          ['Ask the doctor to see him after other patients', -30, 'Another twenty minutes pass.']] },
        { q: 'Off to CT. How does he travel?', o: [
          ['Keep monitor and collar on, log-roll, escort him', 5, 'CT: small left subdural, C-spine clear, femur fracture.'],
          ['Let him walk to CT to save the transport time to start', -45, 'He tries, falls, and wakes with weak legs.'],
          ['Send him with a transporter and no monitor', -30, 'He desaturates in the scanner and nobody notices.'],
          ['Scan the head only and skip the neck imaging', -22, 'The C-spine remains a question mark for hours.']] }
      ],
      end: { great: 'Jun went up to the ICU with a splinted leg, tetanus covered and blood crossmatched. Neurosurgery is observing a small bleed.', ok: 'Jun was admitted, but some of the work had to be redone upstairs.', poor: 'Jun survived with a significant new deficit.', dead: 'Jun died in the ED from his injuries.' },
      debrief: ['Trauma: <C>ABCDE — control massive bleeding first, protect the C-spine, then airway, breathing, circulation, disability.', 'Never move a trauma patient to CT without spinal precautions. Opioids in hypovolemic shock can kill.', 'An alcohol smell is not an explanation for confusion in a head-injured patient.'] },

    { id: 'stroke', bed: 4, name: 'Aurora "Lola Auring" Villareal', age: 71, sex: 'F', tri: 'BP 208/118, slurred speech, weak right arm · ESI 2',
      look: 'Slurred speech, right face droop, right arm limp. Her daughter: "Taasan niyo ang BP, nurse!"', v: 'HR 92 · BP 208/118 · RR 20 · SpO₂ 95%',
      lateLook: 'She no longer answers. Her right leg won\'t lift.',
      stages: [
        { q: 'Lola Auring: slurred speech, right arm weak, BP 208/118. First action?', o: [
          ['Do a stroke screen, check glucose, ask last known well', 5, 'Right droop, arm drift, glucose 142, last known well 06:30.'],
          ['Give nifedipine under the tongue to bring BP down', -45, 'Her BP plunges to 92/50 and she goes limp.'],
          ['Give an aspirin tablet before anything else', -25, 'No scan yet — if this is a bleed, aspirin just made it worse.'],
          ['Wait for the doctor to come around on rounds', -30, 'An hour of window gone.']] },
        { q: 'Last known well 06:30, glucose normal. How do you escalate?', o: [
          ['SBAR for a stroke code: STAT CT, no BP lowering yet', 5, 'Dr. Villanueva calls the stroke code and orders a STAT CT.'],
          ['Page for CT but ask to bring the BP down first', -20, 'The doctor agrees and orders labetalol before the scan.'],
          ['Wheel her to CT without paging and explain later', -15, 'The scanner has no idea who she is or why she\'s there.'],
          ['Admit her to the ward and book a CT in the morning', -45, 'The thrombolysis window will close in the meantime.']] },
        { q: 'CT: ischemic stroke, no bleed. BP 198/110. Orders: labetalol, then alteplase. What now?', o: [
          ['Give labetalol, recheck BP, get consent, send for drug', 8, 'BP 174/98. Consent signed. Brett is on his way.'],
          ['Start the alteplase right now and lower the BP later', -45, 'Alteplase at 198/110 — she bleeds into the infarct.'],
          ['Wait for the daughter to arrange the deposit first', -30, 'RA 10932: no deposit before emergency care. You lose thirty minutes.'],
          ['Give labetalol but skip the consent paperwork', -18, 'The infusion is held until the paperwork is complete.']] },
        { q: 'Alteplase is running. What do you do for the next hour?', o: [
          ['Neuro checks and BP q15, call for headache, book ICU', 5, 'Everything stable at the hour mark.'],
          ['Give aspirin now to help prevent a second clot', -35, 'Antiplatelets in the first 24 hours after lysis are contraindicated.'],
          ['Place an NGT and start feeds to keep her nourished', -18, 'She vomits. The checks are missed.'],
          ['Let her sleep and recheck her again in 2 hours', -30, 'You miss the first neurological change.']] }
      ],
      end: { great: 'Alteplase went in within the window with BP controlled. She was already moving her fingers.', ok: 'She was admitted to the stroke unit with a moderate deficit.', poor: 'She survived with a dense right hemiparesis.', dead: 'Lola Auring died of a large stroke.' },
      debrief: ['Hypertensive emergency = BP ≥ 180/120 with acute organ damage (here, stroke): IV titratable drugs, a gradual 20–25% reduction. Never short-acting SL nifedipine (Philippine hypertension CPG).', 'In ischemic stroke, permissive hypertension until the lysis decision; for alteplase BP must be < 185/110. Door-to-CT ≤ 25 min, door-to-needle ≤ 60 min.', 'Check glucose in every suspected stroke and pin down the last known well time.'] },

    { id: 'peds', bed: 5, name: 'Zian Dizon (18 months)', age: 1, sex: 'M', tri: 'Fever x3 days, fast breathing · ESI 2',
      look: 'Fussy, nostrils flaring, chest indrawing, grunting. Mother: "Ayaw dumede, tatlong araw na ang lagnat."', v: 'HR 168 · RR 58 · SpO₂ 89% · T 39.2° · 10.5 kg',
      lateLook: 'Dusky lips and head-bobbing. He is barely crying.',
      stages: [
        { q: 'Zian: RR 58, chest indrawing, SpO₂ 89%. First action?', o: [
          ['Start oxygen, weigh him, and take full vitals', 5, 'SpO₂ rises to 96%. Weight 10.5 kg.'],
          ['Give paracetamol and let mom feed him a bottle', -30, 'He chokes on the bottle and desaturates.'],
          ['Start an IV line first, before anything else', -22, 'Two failed attempts. SpO₂ 85%.'],
          ['Give a salbutamol neb and watch his response', -28, 'The wheeze was never the problem. SpO₂ 86%.']] },
        { q: 'On oxygen, SpO₂ 96%. What do you tell the resident?', o: [
          ['SBAR severe pneumonia, give weight, ask for admission', 5, 'Dr. Aquino orders ampicillin IV, paracetamol and admission to Pedia.'],
          ['Tell the resident the baby has cough and fever', -22, 'The resident says "okay, give paracetamol" and moves on.'],
          ['Ask for a chest X-ray before any other step', -20, 'Ten minutes lost; the X-ray would not change the next step.'],
          ['Suggest oral amoxicillin and discharge on oxygen', -40, 'He drops to 88% as soon as the oxygen comes off.']] },
        { q: 'Fever 39.2 °C. Paracetamol 15 mg/kg ordered. Which dose?', o: [
          ['Give 160 mg, which is 15 mg/kg of his 10.5 kg', 5, 'Fever comes down to 38.2 over the hour.'],
          ['Give 500 mg, the adult tablet dose from the ward', -60, 'That is ~48 mg/kg: an overdose. Brett catches it at the last second — a serious near-miss.'],
          ['Give 60 mg, a smaller dose to be on the safe side', -12, 'He is under-dosed; the fever barely moves.'],
          ['Give ibuprofen 400 mg for the fever instead', -40, 'That is an adult dose and he is dehydrated. Kidneys will pay.']] },
        { q: 'Mother wants to go home: "Wala po kaming pambayad."', o: [
          ['Explain RA 10932, call Social Service and PhilHealth', 5, 'She stays. Social Service covers the first night.'],
          ['Let her sign out against advice with a prescription', -45, 'He deteriorates at home that night.'],
          ['Tell her that insurance is not the nurse\'s job', -30, 'She leaves in tears and comes back two days later, sicker.'],
          ['Ask her to put down a deposit before treatment', -35, 'That is illegal under RA 10932 and she is gone.']] }
      ],
      end: { great: 'Admitted to Pedia on oxygen and IV ampicillin. Two days later he was feeding and smiling.', ok: 'He recovered after a longer, rougher stay.', poor: 'He survived after a PICU admission.', dead: 'Zian died of respiratory failure.' },
      debrief: ['PH pediatric CAP guideline: fast breathing is RR ≥ 50 at 2–12 months and ≥ 40 at 1–5 years. Chest indrawing or hypoxia = severe pneumonia → admit, oxygen, IV antibiotics.', 'Every pediatric dose is mg/kg: weigh the child. An adult tablet is never a pediatric dose.', 'RA 10932 (Anti-Hospital Deposit Law): no deposit before emergency care.'] },

    { id: 'dengue', bed: 6, name: 'Kristine Mae Ramos', age: 19, sex: 'F', tri: 'Fever x4 days, abdominal pain, vomiting · ESI 3',
      look: 'Lethargic, cold clammy hands, hugging her stomach. Mother: "Day 4 na po ng lagnat niya, ngayon lang humina."', v: 'HR 112 · BP 100/70 · RR 22 · SpO₂ 98% · T 37.8°',
      lateLook: 'Cold, mottled hands, thready pulse, restless and confused.',
      stages: [
        { q: 'Kristine: day 4 fever, abdominal pain, vomiting, cold hands. First action?', o: [
          ['Ask about warning signs and send a CBC before fluids', 5, 'Abdominal pain, vomiting x3, a nosebleed, no urine for 8 hours.'],
          ['Give mefenamic acid for the abdominal pain she has', -40, 'NSAIDs in dengue: her gums start bleeding.'],
          ['Run a 1 L NSS bolus to correct dehydration fast', -35, 'Her breathing gets noisy; crackles at the bases.'],
          ['Give paracetamol and send her home with advice', -30, 'She is back at 3 am, worse.']] },
        { q: 'Hct 46% (baseline 38%), platelets 62,000, nosebleed. Plan?', o: [
          ['SBAR: warning signs; request admission and isotonic fluids', 5, 'Dr. Villanueva admits her and orders Ringer\'s lactate 5–7 mL/kg/hr.'],
          ['Repeat the CBC in 6 hours and keep her under ER observation', -20, 'Nobody has made an admission decision.'],
          ['Start D5 water to restore fluids and electrolytes', -25, 'Hypotonic fluid is the wrong fluid.'],
          ['Discharge her with oral fluids and written advice', -45, 'She goes home into the critical phase.']] },
        { q: 'Fluids are ordered. How do you run them?', o: [
          ['Run RL at 300 mL/hr with strict I&O, hourly vitals', 5, 'She is pinking up and the urine output is being counted.'],
          ['Run it wide open to catch up on her deficit', -35, 'Edema, crackles, SpO₂ falls to 90%.'],
          ['Run RL at 300 mL/hr but skip the intake-output chart', -15, 'Nobody can tell if she is making urine.'],
          ['Add aspirin for the headache she complains of', -45, 'Aspirin in dengue. Her gums bleed again.']] },
        { q: 'Urine output is falling, BP 90/70, extremities cold. What do you do?', o: [
          ['Flag impending shock: STAT page, RL bolus, recheck Hct', 8, 'The bolus works. BP returns to 108/74.'],
          ['Encourage more oral fluids and keep waiting a bit', -30, 'Shock progresses.'],
          ['Slow the IV rate since she has had plenty already', -35, 'She is in shock, not overloaded.'],
          ['Give paracetamol and recheck her in an hour', -25, 'An hour is a long time in shock.']] }
      ],
      end: { great: 'She turned the corner on day 6 with a clean I&O chart and a documented baseline Hct.', ok: 'She recovered after a stay in the high-dependency unit.', poor: 'She survived dengue shock after an ICU admission.', dead: 'Kristine died of dengue shock.' },
      debrief: ['DOH dengue guideline: group A (home), B (admit: warning signs, comorbidity, pregnancy, infants/elderly) and C (shock). Warning signs: abdominal pain, persistent vomiting, mucosal bleeding, lethargy, rising Hct with falling platelets.', 'CBC with Hct and platelets BEFORE IV fluids. Isotonic crystalloid (Ringer\'s lactate/NSS), titrated down. Paracetamol only — never NSAIDs or aspirin.', 'The danger window is when the fever breaks (days 3–6).'] }
  ];
  /* Rescue decisions: inserted after a poor/dangerous choice in decisions 1-3 */
  var RESCUE = {"stemi":[
{"q":"He is worse, and you still have no diagnosis. What now?","o":[["Stop everything and get a 12-lead ECG now",6,"Inferior STEMI on the ECG. You lost time, but not the patient."],["Repeat the vitals and see if the pain settles",-22,"Ten more minutes. His rhythm is getting irritable."],["Give a second dose of nitroglycerin for the pain",-40,"BP 70/40. He is grey and barely talking."],["Give a sedative to calm him and slow his heart rate",-35,"He drifts off while his heart keeps failing."]]},
{"q":"The doctor still has not seen the ECG. He is slipping.","o":[["Call the attending, read out the ECG, ask for the cath lab",6,"The cath lab is activated. Late, but it is moving."],["Page the resident again and keep monitoring him closely",-20,"The resident is in the OR. Nobody comes."],["Give more pain medicine and hope it settles",-35,"The pain eases; the infarct does not."],["Wait for the troponin so the doctor has numbers",-30,"Another half hour of muscle lost."]]},
{"q":"His pressure has crashed after that drug. Act now.","o":[["Lay him flat, raise his legs, ask for fluids",6,"BP creeps back to 90/60. A close call."],["Give more oxygen and watch the monitor closely",-22,"The pressure keeps sliding while you watch."],["Give another nitro dose, it may take time to work",-45,"BP 55/30. He stops responding."],["Sit him upright to help with his breathing",-30,"Standing blood pressure drops further."]]}],
"ectopic":[
{"q":"She is paler and her pulse is climbing. What now?","o":[["Run the pregnancy test now and place two IV lines",6,"Positive. Ectopic until proven otherwise."],["Give another dose of hyoscine and keep her resting",-25,"She is quieter, and bleeding inside."],["Send her to ultrasound without an IV in place, quickly",-35,"She goes grey in the scanner."],["Tell her family she will be seen very soon",-30,"Another twenty minutes pass."]]},
{"q":"Her BP is dropping and the doctor does not know the risk.","o":[["Page the OB resident directly: unstable, ruptured ectopic",6,"The OB resident is on the way with blood."],["Run NSS wide open and wait for the doctor's next round",-22,"She is diluted, not resuscitated."],["Send her for repeat labs before calling anyone",-35,"The labs come back too late to matter."],["Let her lie flat and monitor her for another hour",-30,"She is clammy and barely answering."]]},
{"q":"She vomited and her pressure fell further. Recover.","o":[["Stop oral intake, bolus, call for blood",6,"Blood is on the way. The pressure holds."],["Give an antiemetic and let her try sips again",-25,"She vomits again and sinks."],["Prop her up and keep observing the vitals",-30,"Her pressure falls to 78/40."],["Wait for the OR slot before starting any blood",-40,"The OR is delayed by ten more minutes."]]}],
"trauma":[
{"q":"He is crashing. Something was missed at the start.","o":[["Stop and recheck: control bleeding, fit the collar",6,"Pressure holds the bleeding. He steadies a little."],["Give more pain medicine so he can lie still for scans",-40,"BP 74/40. He stops responding."],["Clean the wound properly while he settles down",-25,"The wound is clean; the blood loss is not fixed."],["Move him to CT to find out what is going on",-35,"He goes grey on the way."]]},
{"q":"His pressure is falling again. Access is poor.","o":[["Place two large-bore IVs and start the warm bolus",6,"Access is secure. Pressure steadies."],["Slow the fluids so pressure doesn't overshoot",-22,"The pressure falls again within minutes."],["Give oral fluids once he is awake enough to drink",-35,"He vomits and aspirates a little."],["Re-splint the leg and recheck in 15 minutes",-25,"The leg looks better; the shock is worse."]]},
{"q":"His GCS is falling and nobody is looking at his head.","o":[["Call the attending: GCS drop, request a STAT CT head",6,"The CT is booked and neurosurgery is paged."],["Reposition him and recheck the GCS in an hour",-30,"An hour is a long time with a bleed."],["Give more fluids and treat the drop as shock",-22,"The fluids do nothing for a head bleed."],["Document the change and keep him under observation",-35,"Nobody acts on the note until too late."]]}],
"stroke":[
{"q":"Her speech is worse and the window is closing.","o":[["Do the stroke screen, check glucose, note onset",6,"Right droop, arm drift. Window still open, just."],["Lower her BP with a second nifedipine dose",-45,"BP 80/40. She stops responding."],["Give aspirin for a possible clot while waiting",-30,"No scan yet, and this may be a bleed."],["Let her rest and wait for the doctor to arrive soon",-25,"More brain is lost with every minute."]]},
{"q":"Her right leg is weak now. No scan has been done.","o":[["Call the stroke code yourself and escort her to CT",6,"CT is under way. The code is on."],["Raise the head of the bed and wait for morning rounds",-22,"The weakness spreads."],["Lower the BP first, then ask for a scan later",-35,"Her pressure falls and so does her speech."],["Move her to a ward bed and review in the morning",-45,"The window is gone by morning."]]},
{"q":"Her BP is still above the cutoff and consent is missing.","o":[["Give labetalol, recheck the BP, and take consent now",6,"BP 176/96. Consent signed."],["Start the alteplase anyway and watch the pressure closely",-45,"She bleeds into the infarct."],["Wait for the daughter to find the deposit money",-35,"RA 10932: no deposit before emergency care. Time is lost."],["Hold all treatment until a doctor re-explains it all",-25,"Twenty more minutes pass."]]}],
"peds":[
{"q":"He is more distressed and his lips look dusky.","o":[["Put on oxygen at once, weigh him, take full vitals",6,"SpO₂ climbs to 94%. Weight 10.5 kg."],["Give a feed to settle him and keep him calm and quiet",-30,"He chokes and desaturates."],["Give another salbutamol neb and watch his chest",-25,"Nothing changes. SpO₂ falls to 84%."],["Try the IV again and give oxygen once it is in",-22,"Two more failed attempts."]]},
{"q":"The resident has not understood how sick he is.","o":[["Call the attending: severe pneumonia, hypoxic",6,"The attending orders IV ampicillin and admission."],["Repeat the cough and fever history to the resident again",-22,"The resident nods and moves on."],["Wait for the chest X-ray before asking again",-25,"Ten more minutes of hypoxia."],["Ask whether oral antibiotics would be enough",-40,"He desaturates as soon as the oxygen comes off."]]},
{"q":"He is drowsy after the wrong dose. Check what happened.","o":[["Stop, tell the doctor, check the dose and send levels",6,"Poison control is called. He is monitored closely."],["Give a second dose to be sure it is covered",-50,"That doubles the overdose."],["Cool him with a wet sponge and observe him for an hour",-25,"The fever dips; the liver is not protected."],["Let him sleep it off and recheck in an hour",-40,"An hour of liver injury goes untreated."]]}],
"dengue":[
{"q":"She is bleeding from the gums and her pressure is lower.","o":[["Stop NSAIDs, send CBC with Hct, and call the doctor",6,"Platelets 58,000, Hct up. Admission is ordered."],["Add paracetamol and a gentle fluid bolus at once",-25,"The bolus is wrong without a baseline Hct."],["Give more mefenamic acid for the pain she has",-45,"She starts bleeding from the nose too."],["Keep her under ER observation and repeat vitals",-22,"Nobody has made a decision about her."]]},
{"q":"She is worse and still has no admission plan.","o":[["Call the doctor: warning signs, ask to admit",6,"She is admitted with isotonic fluids ordered."],["Repeat the CBC later and keep her in the ER for now",-22,"Another four hours with no plan."],["Switch to D5 water to see if she perks up",-30,"Hypotonic fluid. She gets worse."],["Send her home with a warning leaflet",-45,"She is back at 3 am in shock."]]},
{"q":"Fluid overload is showing. What do you do?","o":[["Slow the fluids, check the lungs and I&O",6,"Crackles ease. The urine output picks up."],["Run the fluid wide open to correct her fluid deficit",-40,"Her lungs fill. SpO₂ falls to 88%."],["Add aspirin to cover her headache and fever",-45,"Aspirin in dengue. The gums bleed again."],["Stop all fluids and let her rest for an hour",-30,"Her pressure falls without fluids."]]}]};
  C.forEach(function (c) { c.stages.forEach(function (s, i) { if (RESCUE[c.id] && RESCUE[c.id][i]) s.rescue = RESCUE[c.id][i]; }); });
  window.CASES = { id: 'day1', title: 'Day 1 — The First Shift', hospital: 'De La Cruz Memorial Hospital', cases: C, mins: 20 };
  if (typeof module !== 'undefined') module.exports = window.CASES;
})();
