# contentful-export

You can use this project to export Contentful data to a JSON file. Contentful Export from [https://github.com/contentful/contentful-export](https://github.com/contentful/contentful-export)

## Quick start

1. Installation with command line:

   ```bash
   git clone https://github.com/jasonrundell/contentful-export
   cd contentful-export
   yarn
   ```

2. Make a copy of `contentfulConfig.example.js` and rename it to `contentfulConfig.js`.

3. Edit `contentfulConfig.js` and add in your `spaceId` and `managementToken`. Changing the `environmentId` is optional if you need to export an environment other than `master` or perhaps you've renamed `master` to something else. Save file changes.

4. Run the following in command line:

   ```bash
   yarn start
   ```

5. If the export runs successfully, you should see output in yourcommand window like the following:

   ```bash
   ✔ Initialize client (1s)
   ✔ Fetching data from space
   ✔ Connecting to space (1s)
   ✔ Fetching content types data (1s)
   ✔ Fetching editor interfaces data (1s)
   ✔ Fetching content entries data (1s)
   ✔ Fetching assets data (1s)
   ✔ Fetching locales data (1s)
   ✔ Fetching webhooks data (1s)
   ✔ Fetching roles data (1s)
   ↓ Download assets [skipped]
   ✔ Write export log file
   ✔ Lookup directory to store the logs
   ✔ Create log directory
   ✔ Writing data to file
   ┌───────────────────────┐
   │ Exported entities     │
   ├───────────────────┬───┤
   │ Content Types     │ 1 │
   ├───────────────────┼───┤
   │ Editor Interfaces │ 1 │
   ├───────────────────┼───┤
   │ Entries           │ 3 │
   ├───────────────────┼───┤
   │ Assets            │ 7 │
   ├───────────────────┼───┤
   │ Locales           │ 2 │
   ├───────────────────┼───┤
   │ Webhooks          │ 0 │
   ├───────────────────┼───┤
   │ Roles             │ 0 │
   └───────────────────┴───┘
   The export took a few seconds (1s)

   Stored space data to json file at: /Users/jrundell/Documents/Github/jasonrundell/contentful-export/contentful-export-qom3enaifvoq-master-2019-09-25T10-57-72.json
   No errors or warnings occurred
   The export was successful.
   Your space data:
   ```
