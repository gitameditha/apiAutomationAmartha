# Automation Test API using Mocha & CHai

Automation testing API using Mocha & Chai Framework


## Requirement


## Installation

- Set up node

```bash
npm install
```

## env
```
cp env.sample .env
```
```

```

## Checking device already connected on laptop

```
adb devices
```

## Run Appium Server

 Go to Appium desktop
 Start Server
    
## Checking enviroment ($JAVA_HOME, $ANDROID_HOME) on laptop

appium-doctor

## Inspect element tools
1. Appium inspector
- Go to Appium desktop
- Start Server
- Start Inspector Session
- Create Desired capabilities and Start Session

Desired capabilities

```
{
  "deviceName": "Nexus_9_API_28",
  "platformName": "Android",
  "app": "C:\\Users\\gitam\\Downloads\\TenjiApp\\TenjiApp.apk"
}
```

## How To Run
```
npm run cucumberjs
```

## Structure
```
features                # Test directory (alternatively `features` or `test`)
├── reports             # Report files
├── step_definitions    # Step definition files
├── support             # Support files
│   ├── activity        # Activity list
│   ├── data            # Data test
│   ├── objects         # Page object files
│   └── hook            # Hook files (before - after test)
└── sample.feature      # Test files using feature format (cucumber)
helpers                 # for desired capabilites
apps                    # app
```

## Apps

- apps/sample_android.apk


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
