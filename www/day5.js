/* Day 5 — Friday Night: Intoxication, trauma, and a code. A cardiac arrest walks in at the gate. */
window.DAYDATA.push({
  id: 'day5', title: 'Day 5 — Friday Night: Payday Chaos', aide: 'Brett',
  intro: 'Friday payday night, Nurse Abby. Expect fights, bikes and a lot of surprises. Stay sharp.',
  events: [{ t: 70, drain: 6, text: '📞 The phones are ringing off the hook and a drunk visitor is shouting at triage. You lose precious minutes.' }],
  cases: [
    { id: 'gsw', bed: 1, name: 'Mark Anthony Bernardo', age: 27, sex: 'M', tri: 'Gunshot wound to the abdomen · ESI 1',
      look: 'Pale and cold, pressing a bloody shirt to his belly. A police officer stands by the stretcher.',
      v: 'HR 132 · BP 84/50 · RR 28 · SpO₂ 94%', v2: 'HR 160 · BP 56/30 · RR 38 · SpO₂ 82%', late: 'Gray, mottled and barely conscious. The shirt is soaked through.',
      sk: '#c8966f', hr: '#1c1c1c', st: 'short', gw: '#cfd8dc', pr: 'blood', rank: 1,
      why: 'A gunshot to the abdomen with BP 84/50: massive internal bleeding. He needs blood and an operating room, not an investigation.',
      S: [
        ['Mark has a gunshot wound to the abdomen and BP 84/50. First action?', [
          ['Two large IVs, pressure on the wound, and call the trauma team', 5, 'Access in. The trauma team and OR are alerted.'],
          ['Probe the wound with a gloved finger to see how deep it is for now', -40, 'You start the bleeding again and risk contamination.'],
          ['Give a big saline bolus until his pressure looks normal', -30, 'It dilutes his blood and raises the bleeding.'],
          ['Send him for a CT scan before the surgeons decide anything', -35, 'He is too unstable to leave resus.']]],
        ['He is in shock. What do you ask the doctor for?', [
          ['Blood now, limited fluids, tranexamic acid, and the OR', 5, 'The surgeon accepts him for damage-control surgery.'],
          ['Normal saline wide open until his BP reaches 120 right away', -30, 'Bleeding intensifies as his pressure rises.'],
          ['Wait for the CBC before deciding on any blood', -35, 'He loses another liter while you wait.'],
          ['Admit to the surgical ward for close observation', -45, 'He will not survive the ward.']]],
        ['The crossmatch will take 30 minutes. What do you do?', [
          ['Request emergency-release O-negative blood and start it per policy', 8, 'Two units of O-negative go in. BP climbs to 98/60.'],
          ['Wait for the full crossmatch to be completed first', -35, 'His pressure keeps falling.'],
          ['Hang whichever blood pack is at hand without checks', -50, 'It is the wrong group. He reacts.'],
          ['Give more saline in place of blood until it is ready as a first step', -25, 'More dilution and cooling.']]],
        ['Police want his clothes and a statement now. What do you do?', [
          ['Bag his clothes with chain of custody; care comes first', 5, 'Evidence is preserved and the OR is not delayed.'],
          ['Let the officer question him while the OR is waiting', -30, 'Precious minutes pass while he talks.'],
          ['Throw the bloody clothes in the bin with the waste', -35, 'Evidence lost; the case is compromised.'],
          ['Hold the OR until the police finish their paperwork', -45, 'The delay is deadly.']]]],
      R: [
        ['He is drifting and his belly is rigid.', [
          ['Pressure, IV access, keep him warm', 6, 'The surgeon comes straight down.'],
          ['Probe the wound with your finger to check it', -40, 'The bleeding restarts.'],
          ['Let him sit up and sip some water', -35, 'He vomits and aspirates.'],
          ['Wait for a CT scan to decide the next step', -30, 'He is too unstable for the scanner.']]],
        ['BP 60/30 after the saline. He is cold and mottled.', [
          ['Stop crystalloid, call surgery STAT', 6, 'Blood goes in. His color returns a little.'],
          ['Run the saline faster to lift his pressure', -45, 'More dilution and bleeding.'],
          ['Warm him with a blanket and wait for results', -30, 'The warming helps, but not the shock.'],
          ['Wait for the blood bank to call back', -35, 'Time he does not have.']]],
        ['The pack label shows group A positive; he is O-negative.', [
          ['Stop the transfusion, call doctor and blood bank', 6, 'Reaction caught early. Correct blood is sent.'],
          ['Run it slowly and watch for a reaction', -50, 'A full hemolytic reaction.'],
          ['Hang saline, then continue the blood afterwards to start with', -35, 'The wrong blood still goes in.'],
          ['Peel off the label and carry on as before', -50, 'A deliberate, deadly error.']]]],
      end: ['Damage-control surgery repaired the bowel and liver. He left the ICU in five days.', 'He survived a stormy ICU stay and a stoma.', 'He survived with a long stay and multiple operations.', 'Mark bled to death from his abdominal injuries.'],
      deb: ['Penetrating abdominal trauma with shock needs the OR, not a work-up: control bleeding, permissive hypotension, blood products early, tranexamic acid.', 'Large crystalloid boluses dilute clotting factors and raise bleeding.', 'Transfusion safety: never hang a pack without a two-person check, even in an emergency.'] },

    { id: 'anaph', bed: 2, name: 'Joanna Pascual', age: 31, sex: 'F', tri: 'Swollen lips, wheeze, hives after shrimp · ESI 1',
      look: 'Lips and tongue swelling, hives everywhere, a hoarse voice. She ate shrimp at a birthday party twenty minutes ago.',
      v: 'HR 130 · BP 82/50 · RR 30 · SpO₂ 90%', v2: 'HR 162 · BP 56/30 · RR 40 · SpO₂ 76%', late: 'Silent, blue, and no air moving.',
      sk: '#d9a98a', hr: '#241a14', st: 'long', gw: '#ffb3c1', pr: 'flush', rank: 2,
      why: 'Swollen tongue, wheeze, hives, and low BP after shrimp: anaphylaxis. Epinephrine in the thigh within minutes decides if she lives.',
      S: [
        ['Joanna has a swollen tongue, wheeze and hives, BP 82/50. First action?', [
          ['Lay her flat, legs raised, and give IM epinephrine to the thigh now', 5, 'Within minutes the wheeze eases and her pressure rises.'],
          ['Give an oral antihistamine tablet and watch her closely', -45, 'It takes an hour to work. She does not have an hour.'],
          ['Give IV steroids first and wait for them to take effect', -35, 'Steroids need hours; she needs epinephrine.'],
          ['Sit her up and give a salbutamol inhaler only', -30, 'It helps the wheeze but not the shock.']]],
        ['She improved, but the wheeze returns after ten minutes. What now?', [
          ['Repeat IM epinephrine, oxygen and call airway help', 5, 'She steadies again. An airway doctor is on the way.'],
          ['Wait; the first dose should be enough for her now', -40, 'The wheeze deepens.'],
          ['Give a second antihistamine tablet and reassure her', -30, 'Not enough, not fast enough.'],
          ['Give epinephrine as an undiluted IV push by yourself', -50, 'Dangerous arrhythmia.']]],
        ['She is stable. What else is ordered and what do you do next?', [
          ['Give antihistamine and steroid as adjuncts; observe 6 to 24 hours', 8, 'No second wave in the observation period.'],
          ['Discharge her after 30 minutes since she is better', -40, 'A second wave hits at home.'],
          ['Skip observation because she is young and healthy', -35, 'Biphasic reactions occur in anyone.'],
          ['Give an epinephrine infusion and leave her unmonitored while waiting', -25, 'Unsafe without monitoring.']]],
        ['Discharge teaching: what do you tell her?', [
          ['Auto-injector, allergy plan, wear a medical ID', 5, 'She leaves with an auto-injector and a plan.'],
          ['Take an antihistamine if it happens again', -35, 'Not enough for anaphylaxis.'],
          ['Eat a tiny amount of shrimp to build tolerance for the moment', -50, 'Dangerous advice.'],
          ['No follow-up is needed once she feels fine', -30, 'She stays at risk.']]]],
      R: [
        ['Her lips are swelling more and her voice is gone.', [
          ['IM epinephrine now, oxygen, call for airway help', 6, 'The swelling slows. Airway help arrives.'],
          ['Give another oral antihistamine and keep her calm', -45, 'The swelling continues.'],
          ['Give IV steroids and observe her', -35, 'Too slow.'],
          ['Reassure her and let her rest in a chair', -30, 'The airway closes further.']]],
        ['BP is 60/30 and she is crashing after the delay.', [
          ['Repeat IM epinephrine, fluid bolus, call for resuscitation', 6, 'Pressure responds to epinephrine and fluid.'],
          ['Give oral fluids to rehydrate her', -35, 'Useless in shock.'],
          ['Give an inhaler and wait for the response', -40, 'Not enough.'],
          ['Sit her upright to help her breathing', -45, 'Upright posture can cause cardiac arrest in anaphylaxis.']]],
        ['She is tired and wheezing again at hour three.', [
          ['Treat the second wave: epinephrine per order', 6, 'Controlled. She is admitted.'],
          ['Discharge her now since she looked fine earlier', -45, 'She returns critical.'],
          ['Give an oral antihistamine and observe at home', -30, 'Not enough.'],
          ['Recheck in six hours', -35, 'Too long a gap.']]]],
      end: ['Epinephrine within minutes, a long observation and an auto-injector in her bag. She went home the next day.', 'She recovered after a night in the ICU.', 'She survived after intubation and ICU care.', 'Joanna died of anaphylactic shock.'],
      deb: ['Anaphylaxis: IM epinephrine 0.01 mg/kg (max 0.5 mg) in the anterolateral thigh, immediately; repeat every 5–15 minutes as needed. Antihistamines and steroids are adjuncts only.', 'Lay her flat with legs raised; sitting up can cause cardiac arrest.', 'Observe for a biphasic reaction and teach auto-injector use before discharge.'] },

    { id: 'battery', bed: 3, name: 'Kyle Fernandez (2 yrs)', age: 2, sex: 'M', tri: 'Swallowed something shiny, drooling · ESI 2',
      look: 'Drooling, gagging, pointing at his throat. His mother saw a shiny coin-sized object missing from the TV remote.',
      v: 'HR 140 · RR 32 · SpO₂ 98% · T 36.8° · 12 kg', v2: 'HR 172 · RR 46 · SpO₂ 90% · T 37.8° · 12 kg', late: 'Pale and quiet, with blood in his drool and a hoarse cry.',
      sk: '#e0a982', hr: '#3a2a1a', st: 'baby', gw: '#b5ead7', pr: 'tears', rank: 3,
      why: 'Looks fine, but a button battery stuck in the throat can burn through the esophagus within two hours. This is a surgical emergency in a calm toddler.',
      S: [
        ['Kyle may have swallowed a button battery. First action?', [
          ['Keep him NPO and arrange an urgent X-ray', 5, 'The X-ray shows a round object with a double rim.'],
          ['Give milk and a banana to push it down', -45, 'It sticks and the burn deepens.'],
          ['Make him vomit it out to save time', -50, 'He aspirates and the battery lodges further.'],
          ['Wait and watch his stool for the battery to pass', -45, 'It is burning through his esophagus.']]],
        ['The X-ray shows a button battery in the esophagus. What do you ask for?', [
          ['Emergency endoscopic removal now', 5, 'Dr. Aquino calls the endoscopist STAT.'],
          ['Observe for 24 hours and let it pass', -50, 'The burn perforates.'],
          ['Repeat the X-ray tomorrow and decide', -40, 'He may not have a tomorrow.'],
          ['Give a laxative to help it pass through', -45, 'It is stuck high and burning.']]],
        ['The endoscopy team is 30 minutes away. What do you do meanwhile?', [
          ['Keep NPO, honey per order if over a year old, IV access, monitor', 8, 'The honey coats the mucosa and slows the injury.'],
          ['Let him drink milk to coat the battery', -35, 'He vomits and aspirates.'],
          ['Send him to the ward to wait for the team', -30, 'Unwatched, he deteriorates.'],
          ['Let his mother feed him to calm him', -35, 'Feeding delays surgery and risks vomiting.']]],
        ['After removal: what do you teach the family?', [
          ['Keep batteries out of reach, report ingestions', 5, 'The family secures every remote in the house.'],
          ['Throw old batteries in the open kitchen bin in the meantime', -30, 'Another child may find them.'],
          ['Store them in a low drawer in the kitchen', -25, 'Within reach again.'],
          ['No teaching is needed; it was an accident', -35, 'Missed prevention.']]]],
      R: [
        ['Mom gave him milk and now he is vomiting.', [
          ['Stop all intake, call the doctor, IV access', 6, 'The battery is located. Surgery is alerted.'],
          ['Give more milk to settle his stomach at the bedside', -40, 'He vomits again.'],
          ['Make him vomit to be sure it is out', -50, 'He aspirates.'],
          ['Send him home to observe him there', -45, 'He deteriorates at home.']]],
        ['He is hoarse and there is blood in his saliva.', [
          ['Airway watch, call the surgeon STAT', 6, 'The surgeon is on the way.'],
          ['Wait for the morning rounds to decide', -50, 'The injury progresses.'],
          ['Give oral antibiotics and send him home', -35, 'Inadequate.'],
          ['Give a laxative to move it along', -45, 'It is stuck.']]],
        ['He has a fever and cough; the X-ray shows an air leak.', [
          ['Call the surgeon, NPO, IV antibiotics, prepare for the OR', 6, 'He goes straight to the OR.'],
          ['Give oral antibiotics and send him home', -45, 'He returns with mediastinitis.'],
          ['Wait and watch him overnight', -40, 'The infection spreads.'],
          ['Give paracetamol and observe him', -35, 'The leak continues.']]]],
      end: ['The battery was removed within two hours with minimal injury. He went home in two days and the remote was locked away.', 'He had an esophageal burn that healed after weeks of care.', 'He survived with a scarred esophagus needing dilations.', 'Kyle died when the battery burned through a major vessel.'],
      deb: ['Button battery ingestion: NPO, urgent X-ray, and emergency endoscopic removal. Honey (if > 1 year) or sucralfate may reduce injury while waiting.', 'Never induce vomiting or give laxatives; the battery burns tissue within two hours.', 'Prevention: lock battery compartments and store spare batteries out of reach.'] },

    { id: 'status', bed: 4, name: 'Rolando Dizon', age: 40, sex: 'M', tri: 'Repeated seizures, ran out of medication · ESI 2',
      look: 'Drowsy between seizures; two in the last hour. His wife says he could not afford his phenytoin this month.',
      v: 'HR 112 · BP 150/90 · RR 22 · SpO₂ 94% · Glu 98', v2: 'HR 150 · BP 98/60 · RR 10 · SpO₂ 78% · Glu 62', late: 'Seizing nonstop, lips blue.',
      sk: '#b9835c', hr: '#2a2a2a', st: 'short', gw: '#c3b1e1', pr: 'sweat', rank: 4,
      why: 'Repeated seizures without recovery in between are heading toward status epilepticus. Treatable, but brain injury accumulates.',
      S: [
        ['Rolando had repeated seizures and is drowsy now. First action?', [
          ['Protect his airway, side-lying, IV access', 5, 'Glucose normal. Airway clear. IV running.'],
          ['Hold him down tightly to stop the shaking', -40, 'You risk injury to both of you.'],
          ['Put a spoon in his mouth to keep his tongue safe', -45, 'It breaks teeth and blocks his airway.'],
          ['Give oral phenytoin tablets right now', -30, 'He cannot swallow safely.']]],
        ['He starts seizing again for five minutes. What do you ask for?', [
          ['IV or IM benzodiazepine per order', 5, 'The seizure stops within minutes.'],
          ['Wait for it to stop by itself and then reassess', -45, 'Prolonged seizure damages the brain.'],
          ['Give IV phenytoin push mixed in dextrose', -35, 'Phenytoin crystallises in dextrose.'],
          ['Give oral tablets and sips of water', -40, 'He aspirates.']]],
        ['IV phenytoin loading is ordered. How do you give it?', [
          ['Give in normal saline only, with ECG and BP monitoring', 8, 'Rate controlled. Heart and BP are stable.'],
          ['Give a fast IV push mixed in D5W as a first step', -40, 'It precipitates and drops his BP.'],
          ['Mix it in dextrose together with other drugs for now', -35, 'Incompatible; the line clogs.'],
          ['Give it IM since the IV is difficult right away', -30, 'Absorption is erratic.']]],
        ['Seizures are controlled. What is the discharge plan?', [
          ['Observe, medication access plan with Social Service, safety teaching', 5, 'He leaves with a supply and a plan.'],
          ['Send him home with a one-day supply of tablets', -30, 'He runs out again.'],
          ['Tell him to stop drinking alcohol and nothing else', -25, 'Missed the real cause.'],
          ['Skip teaching since he already knows epilepsy', -35, 'The cost barrier remains.']]]],
      R: [
        ['He is blue and jerking while his arms are held down.', [
          ['Release, call the doctor', 6, 'The airway clears.'],
          ['Keep holding him tight', -45, 'Injury.'],
          ['Put a spoon in his mouth', -50, 'Airway obstruction.'],
          ['Wait for it to pass by itself', -35, 'It does not.']]],
        ['The seizure passes ten minutes and no drug has been given.', [
          ['Call the doctor now, oxygen', 6, 'The seizure stops.'],
          ['Give oral phenytoin tablets to start with', -40, 'He cannot swallow.'],
          ['Wait another five minutes', -45, 'Brain damage accumulates.'],
          ['Sponge him with cool water', -30, 'It does not help.']]],
        ['BP 70/40 and the ECG is slowing during the phenytoin.', [
          ['Stop the infusion, recheck BP and ECG', 6, 'The rhythm recovers.'],
          ['Slow it down and continue', -40, 'Still dangerous.'],
          ['Continue; the seizures matter more', -50, 'Cardiac arrest risk.'],
          ['Give a fluid bolus and continue the drip', -35, 'Not safe.']]]],
      end: ['Seizures stopped quickly, and with a plan for his medicine he went home the next day.', 'He recovered after ICU care for prolonged seizures.', 'He survived with memory problems.', 'Rolando died of status epilepticus.'],
      deb: ['Status epilepticus: protect airway, oxygen, glucose check, first-line benzodiazepine, then a second-line loading anticonvulsant.', 'Phenytoin goes in normal saline, slowly, with ECG and BP monitoring; never in dextrose.', 'Medication cost is a common cause of breakthrough seizures; arrange access before discharge.'] },

    { id: 'drunk', bed: 5, name: 'Jun-Jun Villamor', age: 33, sex: 'M', tri: 'Drunk, aggressive, cut on the head · ESI 3',
      look: 'Smells of alcohol, shouting, with a bleeding scalp cut. He keeps trying to climb off the stretcher.',
      v: 'HR 98 · BP 148/92 · RR 20 · SpO₂ 97% · Glu 70', v2: 'HR 56 · BP 174/72 · RR 8 · SpO₂ 88% · Glu 66', late: 'Vomiting, hard to wake, one pupil bigger than the other.',
      sk: '#c8966f', hr: '#1c1c1c', st: 'short', gw: '#cfd8dc', pr: 'bandage', rank: 5,
      why: 'The smell of alcohol hides a head injury. Drunk and confused is an easy label; a slow bleed on the brain looks the same until it is too late.',
      S: [
        ['Jun-Jun is drunk, aggressive and bleeding from the scalp. First action?', [
          ['Stay safe with Brett, calm him, check glucose and GCS, assume a head injury', 5, 'Glucose 70. GCS 14 and he is not following commands well.'],
          ['Tie him down tightly with cloth restraints', -40, 'He chokes on vomit while restrained.'],
          ['Let him sleep it off in the corner of the room', -45, 'Nobody notices him slipping.'],
          ['Give an IM sedative before assessing him at all', -35, 'The sedative hides his neurological signs.']]],
        ['He becomes drowsy. GCS 12 and one pupil is bigger. What do you ask for?', [
          ['STAT CT head, call neurosurgery', 5, 'The CT is booked. Neurosurgery is paged.'],
          ['Let him sleep until he is sober', -45, 'He is bleeding into his brain.'],
          ['Give more sedation to keep him calm', -40, 'It masks his deterioration.'],
          ['Close the scalp cut and send him home', -35, 'He deteriorates at home.']]],
        ['CT: subdural bleed. Neurosurgery is on the way. What do you do?', [
          ['Head up 30°, GCS and pupils every 15 minutes, NPO', 8, 'Neuro checks are tight. He is taken to the OR.'],
          ['Lay him flat and sedate him to calm him while waiting', -40, 'ICP rises.'],
          ['Check neuro status every four hours', -30, 'You miss the change.'],
          ['Give extra IV fluids to hydrate him', -35, 'Brain swelling increases.']]],
        ['His family wants to take him home "because he is just drunk".', [
          ['Explain the brain bleed, ask the doctor to talk with them', 5, 'They understand and agree to the surgery.'],
          ['Let him sign out against advice at the bedside', -45, 'He dies at home.'],
          ['Tell them to wake him every two hours for the moment', -35, 'He deteriorates unobserved.'],
          ['Agree with them; it is their decision in the meantime', -40, 'No informed refusal.']]]],
      R: [
        ['He swings at Brett and falls, hitting his head again.', [
          ['Secure the area, call security, reassess neuro and C-spine', 6, 'Reassessed. A repeat CT is ordered.'],
          ['Tie him down tightly', -40, 'Restraint injury.'],
          ['Ignore it; he was already hurt', -45, 'A second injury goes unnoticed.'],
          ['Give a big sedative dose', -35, 'It hides neuro signs.']]],
        ['One pupil is big and he is vomiting.', [
          ['Call the doctor STAT, urgent CT', 6, 'CT is done within minutes.'],
          ['Give an antiemetic and let him sleep', -40, 'The pressure rises.'],
          ['Wait for him to sober up', -45, 'He herniates.'],
          ['Give more fluids', -30, 'It does not help.']]],
        ['He is hard to wake and breathing slowly after the sedative.', [
          ['Airway support, urgent CT', 6, 'He is supported and the CT is done.'],
          ['Give another sedative to settle him', -50, 'He stops breathing.'],
          ['Let him sleep', -45, 'He worsens.'],
          ['Sternal rub and observe', -30, 'No change.']]]],
      end: ['An early CT led to a successful operation. He woke up with a splitting headache and a long talk about alcohol.', 'He survived a long stay with some memory problems.', 'He survived with lasting weakness.', 'Jun-Jun died of a brain bleed that everyone blamed on the alcohol.'],
      deb: ['Alcohol does not explain altered mental status after a head injury. Assume a brain injury until a CT proves otherwise.', 'Avoid sedatives that mask neurological checks; restraints must be safe and monitored.', 'Subdural bleed: head up 30°, frequent GCS and pupil checks, urgent neurosurgery.'] },

    { id: 'arrest', bed: 6, name: 'Alfredo Dimaculangan', age: 52, sex: 'M', tri: 'ARRIVAL: collapsed at the gate, no pulse · ESI 1',
      look: 'A security guard drags him in. He is not breathing normally and has no pulse.',
      v: 'HR 180 · BP 0/0 · RR 4 · SpO₂ 60%', v2: 'HR 0 · BP 0/0 · RR 0 · SpO₂ 0%', late: 'Gray and still. Nobody has started compressions.',
      sk: '#c8966f', hr: '#2a2a2a', st: 'bald', gw: '#cfd8dc', pr: 'sweat', rank: 0, arr: { t: 45, r: 2.2 },
      why: 'A true cardiac arrest at the gate. Every minute without compressions and a shock cuts survival by around 10%. This case jumps the queue.',
      S: [
        ['Alfredo is unresponsive, gasping, with no pulse. First action?', [
          ['Call a code and send for the defibrillator', 5, 'Compressions start within seconds. The pads are coming.'],
          ['Check his wallet for ID and a medical history', -40, 'A full minute passes without compressions.'],
          ['Wait for the doctor before starting anything', -45, 'Brain cells are dying.'],
          ['Give rescue breaths for two minutes before compressions', -30, 'Circulation matters first.']]],
        ['The monitor shows ventricular fibrillation. What now?', [
          ['Charge the defibrillator, clear everyone, and shock per ACLS', 5, 'The shock is delivered. Compressions resume at once.'],
          ['Give epinephrine first and keep compressing for a while', -22, 'VF needs a shock first.'],
          ['Check for a pulse for a full minute first', -35, 'Wasted time.'],
          ['Place pacing pads and wait for the doctor', -40, 'Pacing does not treat VF.']]],
        ['After the shock, compressions continue. What happens in the next two minutes?', [
          ['Resume compressions, IV access, rotate compressors', 8, 'A good rhythm of care. A second shock is planned.'],
          ['Stop compressions every ten seconds to check the pulse', -35, 'Interruptions kill.'],
          ['Give a fluid bolus and wait for results', -30, 'Not the priority.'],
          ['Give bicarbonate before anything else', -35, 'It is not first-line.']]],
        ['Return of circulation: a pulse is back. What do you do?', [
          ['12-lead ECG, call ICU and cath lab', 5, 'The ECG shows a STEMI. The cath lab is alerted.'],
          ['Take him off the monitor to move faster', -40, 'You miss his next arrhythmia.'],
          ['Give a large fluid bolus and watch him', -25, 'Not the right plan.'],
          ['Stop oxygen because he is breathing now', -22, 'He needs oxygen titrated, not stopped.']]]],
      R: [
        ['He has had no compressions for two minutes. Pale and blue.', [
          ['Start compressions now, bring the defibrillator', 6, 'Compressions are going. He is still shockable.'],
          ['Check his pulse again to be sure for now', -40, 'More time lost.'],
          ['Wait for the doctor to arrive right away', -45, 'No one can wait.'],
          ['Give oxygen only for now', -35, 'Compressions are needed.']]],
        ['VF persists after the first shock and nobody is sure what to do.', [
          ['Resume compressions, second shock, epinephrine and amiodarone per order', 6, 'The algorithm gets back on track.'],
          ['Stop and discuss what to do next', -45, 'Every second counts.'],
          ['Give only fluids', -35, 'Not for VF.'],
          ['Give atropine', -30, 'Not for VF.']]],
        ['His rhythm is unstable again after the pulse returned.', [
          ['Keep him on pads and monitor', 6, 'The pads catch the next VF. Shock delivered.'],
          ['Remove the pads now that he has a pulse', -45, 'You cannot shock the next VF.'],
          ['Observe without pads or a defibrillator', -35, 'Unsafe.'],
          ['Send him to the ward', -40, 'Unsafe.']]]],
      end: ['He walked out of the ICU on day 7 after a stent and a very long talk with his family.', 'He survived with a mild brain injury.', 'He survived with significant brain injury.', 'Alfredo died despite resuscitation.'],
      deb: ['Cardiac arrest: immediate high-quality compressions (100–120/min, 5–6 cm), early defibrillation for VF/pVT, and epinephrine every 3–5 minutes.', 'Minimise interruptions; rotate compressors every two minutes.', 'Post-arrest care: ECG, avoid hyperoxia and hyperventilation, and early cath lab if STEMI.'] }
  ]
});
