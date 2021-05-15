'use strict';

function main() {

    // Import the Google Cloud client library
    const {BigQuery} = require('@google-cloud/bigquery');


    async function queryGitHub() {
        // Queries a public GitHub dataset.

        // Create a client
        const bigqueryClient = new BigQuery();

        // The SQL query to run
        const sqlQuery = `SELECT subject AS subject, COUNT(*) AS num_duplicates
        FROM \`bigquery-public-data.github_repos.commits\`
        GROUP BY subject
        ORDER BY num_duplicates
        DESC LIMIT 10`;

        const options = {
            query: sqlQuery,
            // Location must match that of the dataset(s) referenced in the query.
            location: 'US',
        };

        // Run the query
        const [rows] = await bigqueryClient.query(options);

        console.log('Rows:');
        rows.forEach(row => console.log(`${row.subject}: ${row.num_duplicates}`));
    }

    queryGitHub();
}

main();
