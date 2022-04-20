# Weka Squad Portal

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6d2e6f9-1dd6-435a-8d4b-3a51fed24896/deploy-status)](https://app.netlify.com/sites/weka-squad/deploys)

Production site is at [https://weka.digital](https://weka.digital).

There's a CYCLE_START_DATE in `_data/constants.js` that needs updating as we change cycles.

Dev setup:

```
yarn
echo "GITHUB_TOKEN=x" > .env
yarn start
```

## DEBUGGING

```
DEBUG=Eleventy* yarn start
```

