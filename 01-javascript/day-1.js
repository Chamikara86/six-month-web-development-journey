// Day 1: My Developer Profile

const developer = {
  name: "Chamikara Liyanage",
  role: "Web Developer",
  experience: 15,
  skills: ["HTML", "CSS", "JavaScript", "WordPress", "WooCommerce", "Shopify", "Bootstrap", "wix", "Duda"]
};

// Create a function to display the developer profile
function introduceDeveloper(person) {
  console.log(`Hello! My name is ${person.name}.`);
  console.log(`I work as a ${person.role}.`);
  console.log(`I have ${person.experience} years of experience.`);
  console.log("My main skills are:");

  person.skills.forEach((skill) => {
    console.log(`- ${skill}`);
  });
}

// Run the function
introduceDeveloper(developer);