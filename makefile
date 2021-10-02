
FORCE:

tests: FORCE
		npm run test -- --watchAll=false

deploy: tests
		git commit -a
		git push origin main
