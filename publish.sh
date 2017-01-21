npm install
npm run build
git checkout -B master
cp CNAME build
cp README.md build
git add -f build
git commit -am "Rebuild website"
git push origin :master
git subtree push --prefix build origin master
git checkout -
