//API:  "https://restcountries.com/v3.1/all";
const loadCountries = async () => {
  // Fetch Option
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((res) => res.json)
  //   .then((data) => console.log(data));
  // Async Option
  const url = "https://restcountries.com/v3.1/all";
  const res = await fetch(url);
  const data = await res.json();
  displayCountries(data);
};

const displayCountries = (countries) => {
  const countryHTML = countries.map((country) => countryHTMLElement(country));
  const countryContainer = document.getElementById("country__container");

  // countryBody.innerHTML = countryHTML;
  countryContainer.innerHTML = countryHTML.join(" ");
};

// const countryHTMLElement = (country) => {
//   return `
//   <div class="card shadow-xl my-10 border px-5 py-10">
//   <figure>
//     <img class="rounded-lg h-36 w-72"
//       src="${country.flags.png}"
//       alt="Album"
//     />
//   </figure>
//   <div class="card-body items-center text-center">
//     <p><b>Name:</b> ${country.name.common}</p>
//     <p><b>Official Name:</b> ${country.name.official} </p>
//     <div class="card-actions justify-start mt-5">
//       <button class="px-10 font-semibold bg-blue-600 py-3 rounded-md text-white">
//         Details
//       </button>
//     </div>
//   </div>
//   </div>
//   `;
// };

// Destructuring Option 1:
/* const countryHTMLElement = (country) => {
  const { name, flags } = country;
  return `
  <div class="card shadow-xl my-10 border px-5 py-10">
  <figure>
    <img class="rounded-lg h-36 w-72"
      src="${flags.png}"
      alt="Album"
    />
  </figure>  
  <div class="card-body items-center text-center">
    <p><b>Name:</b> ${name.common}</p>
    <p><b>Official Name:</b> ${name.official} </p>
    <div class="card-actions justify-start mt-5">
      <button class="px-10 font-semibold bg-blue-600 py-3 rounded-md text-white">
        Details
      </button>
    </div>  
  </div>
  </div>
  `;
}; */

// Destructuring Option 2:
// Destructure in parameter. we are getting object property directly from object in parameter
const countryHTMLElement = ({ name, flags }) => {
  // const { name, flags } = country;
  return `
  <div class="card shadow-xl my-10 border px-5 py-10">
  <figure>
    <img class="rounded-lg h-36 w-72"
      src="${flags.png}"
      alt="Album"
    />
  </figure>  
  <div class="card-body items-center text-center">
    <p><b>Name:</b> ${name.common}</p>
    <p><b>Official Name:</b> ${name.official} </p>
    <div class="card-actions justify-start mt-5">
      <button class="px-10 font-semibold bg-blue-600 py-3 rounded-md text-white">
        Details
      </button>
    </div>  
  </div>
  </div>
  `;
};

loadCountries();
