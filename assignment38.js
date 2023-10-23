"use strict";
function describe_city(nameOfCity, nameOfcountry = "Pakistan") {
    console.log(`${nameOfCity} is in ${nameOfcountry}`);
}
describe_city("KARACHI");
describe_city("LAHORE");
describe_city("WASHINGTON", "USA");
