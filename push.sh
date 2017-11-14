ng build --dev --output-path docs --base-href experiencers
cp docs/index.html docs/404.html
git add docs/*
git commit -m "Added newer version"
git push origin master --no-verify
