'use strict';

function main() {

    // Requires the following environment variables
    // GOOGLE_APPLICATION_CREDENTIALS=/Users/lobo/key.json
    // GLIFIC_BQ_NAME=tides-saas-309509.917302307943 (TODO)

    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');


    async function queryGlificBQ() {
        // Queries the glific DB and gets the most recent contacts

        // Create a client
        const bigqueryClient = new BigQuery();

        // The SQL query to run
        const sqlQuery = `
          SELECT A.id, A.name, A.phone, A.updated_at FROM (
            SELECT id, name, phone, updated_at, ROW_NUMBER() OVER (
              PARTITION BY id ORDER BY updated_at DESC
            ) AS rn
            FROM \`tides-saas-309509.917302307943.contacts\`) A
          WHERE A.rn = 1
          ORDER BY A.updated_at DESC
          LIMIT 10`;

        const options = {
            query: sqlQuery,
            // Location must match that of the dataset(s) referenced in the query.
            location: 'US',
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => {
            console.log(`${row.id}: ${row.name}, ${row.phone}`);
            console.log(row.updated_at);
        })
    }

    queryGlificBQ();
}

main();
