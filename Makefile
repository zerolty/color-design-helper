test: 
	npm run test
	
install: 
	rm -rf ./node_modules && rm -rf ./package-lock.json && npm i

dev: 
	npm run start