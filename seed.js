const fs = require("fs");
var csvWriter = require("csv-write-stream");

// var writer = csvWriter();

// const propertyUrl = [
//   "https://images.unsplash.com/photo-1533443144047-ea8a81e83e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
// ];

// const description = ["Beach house with vintage vibes"];

const propertyUrls = [
  "https://images.unsplash.com/photo-1533443144047-ea8a81e83e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
  "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
  "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
  "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
  "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
];

const descriptions = [
  "Beach house with vintage vibes",
  "Steps from the ocean",
  "Bright and Airy",
  "Toes in the sand",
  "Modern interior",
];

// const jsonData = () => {
//   data = [];
//   for (let i = 0; i < 10; i++) {
//     const res = writer.write({
//       listingId: i,
//       urls: propertyUrls,
//       descriptions: descriptions,
//     });
//   }
// };

// // parse json
// var jsonObj = JSON.parse(jsonData);
// console.log(jsonObj);

// // stringify JSON Object
// var jsonContent = JSON.stringify(jsonObj);
// console.log(jsonContent);

// fs.writeFile("output.json", jsonContent, "utf8", function (err) {
//   if (err) {
//     console.log("An error occured while writing JSON Object to File.");
//     return console.log(err);
//   }

//   console.log("JSON file has been saved.");
// });

// const propertyAssets = [
//   [
//     {
//       url:
//         "https://images.unsplash.com/photo-1559767949-0faa5c7e9992?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Lovely four bedroom, farmhouse home",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1484301548518-d0e0a5db0fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Outdoor patio",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1524360526339-9ad59a9f7f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "House Cat",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=50&auto=compress",
//       description: "Four, cozy bedrooms",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1542853647-47ad77242390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Views of the lake",
//     },
//   ],
//   [
//     {
//       url:
//         "https://images.unsplash.com/photo-1533443144047-ea8a81e83e68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Steps from the ocean",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1511840636560-acee95b3a83f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Oasis on the beach",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1582289545106-efecf907f21e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Bright and airy interior",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//   ],
//   [
//     {
//       url:
//         "https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Modern gem",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Space for the whole family",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Fully-stocked kitchen",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//   ],
//   [
//     {
//       url:
//         "https://images.unsplash.com/photo-1534512900-8ef06ef6cce7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "California gem",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Bright and Airy",
//     },
//     {
//       url:
//         "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Fully-stocked kitchen",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//     {
//       url:
//         "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=50&auto=compress",
//       description: "Three bedrooms",
//     },
//   ],
// ];

// const randomPropertyAssets = function () {
//   return propertyAssets[Math.floor(Math.random() * Math.floor(4))];
// };

class Writer {
  constructor(file) {
    this.writer = csvWriter();
    this.writer.pipe(fs.createWriteStream(file, { flags: "a" }));
  }

  write(obj) {
    if (!this.writer.write(obj))
      return new Promise((resolve) => this.writer.once("drain", resolve));

    return true;
  }

  end() {
    this.writer.end();
  }
}

(async () => {
  console.log("start time is: ", new Date().toUTCString()); // start time

  const writer = new Writer("seedData.csv");

  for (let i = 0; i < 10000000; i++) {
    const res = writer.write({
      _id: i,
      url: propertyUrls,
      description: descriptions,
    });

    if (res instanceof Promise) {
      await res;
    }
  }

  writer.end(console.log("end time is: ", new Date().toUTCString()));
})();
