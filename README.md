# Weka Squad Portal

[![](https://github.com/storypark/squad-portal/actions/workflows/main.yml/badge.svg)](https://github.com/storypark/squad-portal/actions/workflows/)

Production site is at [https://weka.digital](https://weka.digital).

There's a CYCLE_START_DATE in `_data/constants.js` that needs updating as we change cycles.

Dev setup:

```
yarn
echo "SPGITHUB_TOKEN=x" > .env
yarn start
```

## Debugging

```
DEBUG=Eleventy* yarn start
```

## Deployment
Github actions is used to deploy the site on a schedule (which is in UTC) and on merge to master.

