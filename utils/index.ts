async function getAllCountries(limit: number, offset: number) {
  let data = fetch(
    `https://api.first.org/data/v1/countries?limit=${limit}&offset=${offset}`
  );
  let response = await (await data).json();
  return response;
}

function convertArrayOfObjectsToCSV(ObjectOfObjects: any) {
  let data = Object.keys(ObjectOfObjects).map((key) => {
    let ar = ObjectOfObjects[key];

    // Apppend key if one exists (optional)
    ar.key = key;

    return ar;
  });
  return data;
}

export { getAllCountries, convertArrayOfObjectsToCSV };
