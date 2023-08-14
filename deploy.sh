echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
scp -r src/* root@173.230.129.95:/root/jobyfoster/src/
scp -r public/* root@173.230.129.95:/root/jobyfoster/public/

echo "Done!"