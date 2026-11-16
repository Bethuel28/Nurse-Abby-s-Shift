# Abby's Shift — nursing clinical simulator

Offline game for student nurses. All game code lives in `www/` (plain HTML/JS, no build step).

## Get the APK (easiest: GitHub builds it for you)
1. Create a new GitHub repo and push this folder to the `main` branch.
2. Open the repo's **Actions** tab, then **Build APK**, then **Run workflow** (it also runs on every push).
3. When it finishes, open the run and download the **AbbysShift-APK** artifact (a zip containing `app-debug.apk`).
4. Copy the APK to your phone and install it (allow "Install unknown apps" for your file manager or browser).

## Build locally instead
Needs Node 20+, JDK 21 and the Android SDK (Android Studio installs it).
```
npm install
npm run apk
# result: android/app/build/outputs/apk/debug/app-debug.apk
```

## Content
All cases are in `www/cases.js` (+ `www/meta.js` for visuals/priority): 4 first choices (A–D), 3 follow-ups each, then an outcome. UI/logic is `www/game.js`.

## Preview in a browser
`cd www && python3 -m http.server 8080` then open http://localhost:8080

Educational use only. Verify clinical content against your textbooks and school protocols.

## Writing cases
Run `node tools/check-option-lengths.js` after adding cases. Options in a decision must be similar in length, and the best option must not be the longest too often (players learn to pick the longest).
