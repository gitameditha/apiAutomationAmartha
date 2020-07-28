# Automation Test API using Mocha & CHai

Automation testing API using Mocha & Chai Framework


## Requirement
```
```

## Installation

- Set up node

```
npm install
```

## env
```
cp env.sample .env
```
```
BASE_URL = https://jsonplaceholder.typicode.com
```
    
## How To Run
```
npm run test-api
npm run reports
```

## Structure
```bash
api                     # Test directory 
├── data                # data files directory
├── step_definitions    # Step definition files
├── helper              # files for response code etc
|── activity            # Activity list "BARU SAMPE SINI"
│   ├── data            # Data test
│   ├── objects         # Page object files
│   └── hook            # Hook files (before - after test)
└── sample.feature      # Test files using feature format (cucumber)
node_modules            # for desired capabilites
reports                 # app
|__mochawesome          # report assets
```



## Helpers
- helpers/capabilities.js

## Reporter

- Cucumber html report
- helpers/cucumber_reports.js

```
npm run cucumber-reports
```

## Notes
- this project use Windows set up, so need to simple set up if wanna use unix
