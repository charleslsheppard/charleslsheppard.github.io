#!
npm run build
cd ..
ls | grep -v charles| xargs rm -rf
mv charles/build/* .

git add *
echo \"`date`\" | xargs git commit -m
git push origin