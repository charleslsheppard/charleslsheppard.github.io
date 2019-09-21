#!
npm run build
cd ..
ls | grep -v charles| xargs rm -rf
mv charles/build/* .

git add *
git commit -m "$date"
git push origin