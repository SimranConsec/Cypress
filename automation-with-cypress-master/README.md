# Initial setup to start with Cypress:
1. Install node 12 or 14 or above version 
2. Open Visual studio
3. Import the project or click on the open folder and just open the project.
4. Open the Terminal in the visual studio code
5. Run the command: npm init if you are doing it from scratch
6. Run the command: npm install cypress --save-dev
7. Verify that node_modules folder has been created
8. Run the command: npx cypress open or npm cypress open
9. Execute your test cases one by one
10. If you want to execute entire test cases then Run the command: npx cypress run
11. If you want to execute entire test cases with some specific browser then use the command: npx cypress run --browser chrome
12. To execute any particular specf files: npx cypress run --spec cypress/integration/examples/cypressTest1.cy.js
13. To execute particular spec files on particular browser: npx cypress run --spec cypress/integration/examples/cypressTest1.js --browser chrome
14. To execute all spec files inside any folder : npx cypress run --spec cypress/e2e/seleniumeasy/*.cy.js --browser chrome
15. To clear the cache Run the command: npm cache clear --force
16. To execute the test case with some specific environment:
npx cypress open --config-file cypress/fixtures/envconfigs/dev.config.js
17. To execute entire test cases with some specific env:
npx cypress run --config-file cypress/fixtures/envconfigs/qa.config.js --spec cypress/e2e/seleniumeasy/* --browser chrome

# Folder Structure to be followed:
1. Keep all the page class files into cypress/fixtures/helper folder
2. Keep all the test cases related files into e2e/playbooktest folder
3. keep all the test data related files into cypress/fixutres/testdata folder
4. Keep all the environmental related files into cypress/fixtures/environmentmanager

# Important key points
1. Default timeout period configured is 45 seconds, if required some extra timeout period then use cy.wait or declare some utility methods for the same.
2. Do not make unneccessary changes into these files package.json, package-lock.json, cypress.config.js, e2e.js, command.js
3. Do not push dead code or unused lines.
4. Declare Javascript doc for each and every utility methods.
5. Do not push changes related to baseurls - else it may cause some issue while selecting the correct environment.