import fs from 'fs';

export function exportArrayToCSV(arr, outputPath) {
    if (!arr || arr.length === 0) { throw new Error('No data provided'); }

    // Get column names as union of all keys across objects
    const headers = [...new Set(
        arr.reduce((keys, entry) => 
            keys.concat(Object.keys(entry)),
            [])
    )];
    const rows = arr.map(row => 
        headers.map(header => 
            // Wrap in quotes and escape existing quotes by doubling
            // Any undefined entries are mapped to empty string
            `"${String(row[header] ?? '').replace(/"/g, '""')}"`
        ).join(',')
    );

    const csvContent = headers.join(',') + '\n' + rows.join('\n');
    fs.writeFileSync(outputPath, csvContent);
}